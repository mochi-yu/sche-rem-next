'use client'

import { ScheRemButtonPrimary } from "@/components/sche_rem_button_primary"
import { Stack, Typography, TextField, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"

export function InputNewScheduleFrom() {
  const [groupName, setGroupName] = useState("");
  const [author, setAuthor] = useState("");
  const [groupUsers, setGroupUsers] = useState<String[]>([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

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
          console.log(newUsers);
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
        </Stack>
        <Stack direction="row" alignItems="center" sx={{my: "20px"}}>
          <Typography sx={{mr: "20px", fontSize: "20px"}}>
            時間：
          </Typography>
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

      <ScheRemButtonPrimary clickHandler={() => console.log("create new event.")}>
        作成
      </ScheRemButtonPrimary>
    </Stack>
  )
}