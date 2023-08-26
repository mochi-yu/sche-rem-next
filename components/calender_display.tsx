import { ReactNode } from "react";
import { Container, Typography, Stack, Box } from "@mui/material";
import "./calender_style.css"
import { CalenderDisplayItem } from "./calender_display_item";

interface Props {
  info: GroupInfo
}

export function CalenderDisplay(props: Props) {
  console.log(props.info.schedules)
  // 行数と列数
  const targetHourCount = props.info.endHour - props.info.startHour;
  const targetDayCount = ((new Date(parseInt(props.info.endDate) * 1000)).getTime() - (new Date(parseInt(props.info.startDate) * 1000)).getTime()) / 86400000;

  // 日付けのラベル
  var dateLabels: ReactNode[] = [];
  var calenderDate = new Date(parseInt(props.info.startDate) * 1000);
  for(var i = 0; i < targetDayCount; i++) {
    dateLabels.push(
      <Container sx={{width: "1fr", textAlign: "center"}} disableGutters>
        <Typography fontSize="0.5rem">
          {calenderDate.getMonth()+1}月{calenderDate.getDate()}日
        </Typography>
      </Container>
    )
    calenderDate.setDate(calenderDate.getDate() + 1);
  }

  // 時間のラベル
  var hourLabels: ReactNode[] = [];
  var hour = props.info.startHour;
  for(var i = 0; i < targetHourCount * 4; i++) {
    if(i % 4 == 0) {
      hourLabels.push(
        <Stack sx={{height: "5px", textAlign: "right", pr: "10px"}} >
          <Typography fontSize="0.5rem">{hour}:00</Typography>
        </Stack>
      )
      hour++;
    } else {
      hourLabels.push(<Container><Box height="5px" /></Container>)
    }
  }

  // 行を日付とする二次元の配列
  var schedule2D: string[][][] = new Array(targetDayCount);
  for(var i = 0; i < targetDayCount; i++) {
    schedule2D[i] = new Array(targetHourCount * 4);
    for(var j = 0; j < targetHourCount * 4; j++) {
      schedule2D[i][j] = new Array();
    }
  }

  props.info.schedules.map((elm, k) => {
    elm.scheduleInfo.map((elm2, i) => {
      elm2.map((elm3, j) => {
        if(elm3) schedule2D[i][j].push(props.info.schedules[k].userMailAdress);
      })
    })
  })
  
  // 上の行から順番に持つ１次元の配列に変換
  var scheduleArray: string[][] = new Array(targetDayCount * targetHourCount * 4);
  schedule2D.map((elm, i) => {
    elm.map((elm2, j) => {
      scheduleArray[i + j * targetDayCount] = [...elm2];
    })
  })

  // カレンダーの各セル
  const scheduleCells: ReactNode[] = scheduleArray.map<ReactNode>(elm => {
    return <CalenderDisplayItem users={elm} />
  })

  return (
    <>
      <style>
        .container {"{"}
          grid-template-columns: repeat({targetDayCount}, 1fr);
        {"}"}
      </style>
    
      <Stack sx={{ background: "#fffac6", p: "30px" }} alignItems="center">
        {/* 日付けのラベル */}
        <Stack direction="row" sx={{width: "80%"}}>
          {dateLabels}
        </Stack>

        <Stack direction="row" sx={{width: "100%"}}>
          {/* 時間のラベル */}
          <Stack sx={{width: "10%", mt: "-5px"}} spacing="1px">
            {hourLabels}
          </Stack>

          {/* 結果表示部 */}
          <Container className="container">
            {scheduleCells}
          </Container>
        </Stack>

        <Box height="20px" />

      </Stack>
    </>
  )

}