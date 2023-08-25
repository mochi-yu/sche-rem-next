'use client'

import { ScheRemButtonPrimary } from "@/components/sche_rem_button_primary"
import { Stack, Typography, TextField, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"
import { useRouter } from "next/navigation";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";

import axios from '../../utils/axios'

import { Dayjs } from "dayjs";

export function InputNewScheduleFrom() {
  const [groupName, setGroupName] = useState("");
  const [author, setAuthor] = useState("");
  const [groupUsers, setGroupUsers] = useState<String[]>([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);

  const router = useRouter();

  const userForms = groupUsers.map((elm, index) => {
    return (
      <TextField
        key={index}
        id={index.toString()}
        label="メールアドレス"
        placeholder="abcde@example.com"
        value={elm}
        variant="outlined"
        sx={{width: "80vmin", maxWidth: "300px"}}
        onChange={(e) => {
          var newUsers = [...groupUsers];
          newUsers[Number(e.target.id)] = e.target.value;
          setGroupUsers(newUsers);
        }}
      />
    )
  });

  return (
    <Stack alignItems="center">
      <Stack alignItems="right">
        <Stack direction="row" alignItems="center">
          <Typography sx={{mr: "20px", fontSize: "20px"}}>
            日程調整名：
          </Typography>
          <TextField
            id="groupName"
            label="日程調整名"
            variant="outlined"
            placeholder="ミーティング"
            sx={{width: "80vmin", maxWidth: "300px"}}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Stack>

        <Stack direction="row" alignItems="center" sx={{my: "20px"}}>
          <Typography sx={{mr: "20px", fontSize: "20px"}}>
            作成者：
          </Typography>
          <TextField
            id="author"
            label="作成者"
            variant="outlined"
            placeholder="ハック 太郎"
            sx={{width: "80vmin", maxWidth: "300px"}}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Stack>

        <Stack direction="row" alignItems="center">
          <Typography sx={{mr: "20px", fontSize: "20px"}}>
            期間：
          </Typography>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={{ monthAndYear: 'YYYY年 MM月' }}
            localeText={{
              previousMonth: '前月を表示',
              nextMonth: '次月を表示',
            }}
          >
            <DatePicker
              label="開始日"
              format="YYYY/MM/DD"
              onChange={(value: Dayjs | null) => {
                if(value == null) return;
                setStartDate(String(value.unix()))
              }}
            />
          <Typography sx={{mx: "20px", fontSize: "20px"}}>
            ～
          </Typography>
            <DatePicker
                label="終了日"
                format="YYYY/MM/DD"
                onChange={(value: Dayjs | null) => {
                  if(value == null) return;
                  setEndDate(String(value.unix()))
                }}
                />
          </LocalizationProvider>
        </Stack>
        
        <Stack direction="row" alignItems="center" sx={{my: "20px"}}>
          <Typography sx={{mr: "20px", fontSize: "20px"}} children="時間：" />
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <TimePicker
              sx={{width: "150px"}}
              ampm={false}
              views={["hours"]}
              label="開始時間"
              onChange={(value: Dayjs | null) => {
                if(value == null) return;
                setStartHour(value.hour());
              }}
            />
            <Typography sx={{mx: "20px", fontSize: "20px"}} children="時 〜 " />
            <TimePicker
              sx={{width: "150px"}}
              ampm={false}
              views={["hours"]}
              label="終了時間"
              onChange={(value: Dayjs | null) => {
                if(value == null) return;
                setEndHour(value.hour())
              }}
            />
            <Typography sx={{mx: "20px", fontSize: "20px"}} children="時" />
          </LocalizationProvider>
        </Stack>

        <Stack direction="row" sx={{my: "20px"}}>
          <Typography sx={{mr: "20px", fontSize: "20px", mt: "13px"}}>
            入力を求める人：
          </Typography>
          <Stack direction="column" alignItems="center" spacing={1}>
            {userForms}
            <Button
              sx={{width: "100%", height: "50px"}}
              onClick={() => {
                var newUsers = [...groupUsers];
                newUsers.push("");
                setGroupUsers(newUsers);
              }}
              children={<AddIcon />}
            />
          </Stack>
        </Stack>

      </Stack>

      <ScheRemButtonPrimary
        clickHandler={
          async () => {
            const requestBody = {
              groupName: groupName,
              author: author,
              groupUsers: groupUsers,
              startDate: startDate,
              endDate: endDate,
              startHour: startHour,
              endHour: endHour,
            }

            const response = await axios.post("/group", requestBody)
            console.log(response);

            router.push("/email/" + response.data.groupID)

          }
        }
      >
        作成
      </ScheRemButtonPrimary>
    </Stack>
  )
}
