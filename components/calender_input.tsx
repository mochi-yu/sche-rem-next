'use client'

import SelectionArea, { SelectionEvent, Behaviour } from "@viselect/react";
import { ReactNode, useState } from "react";
import "./calender_style.css";
import { Box, Container, Stack, Typography, } from "@mui/material";

interface Props {
  info: GroupInfo,
}

export function CalenderInput(props: Props) {
  const [selected, setSelected] = useState<Set<number>>(() => new Set());

  // 行数と列数
  const targetHourCount = props.info.endHour - props.info.startHour;
  const targetDayCount = ((new Date(props.info.endDate)).getTime() - (new Date(props.info.startDay)).getTime()) / 86400000;
  console.log(targetDayCount);
  console.log(targetHourCount);

  // 日付けのラベル
  var dateLabels: ReactNode[] = [];
  var calenderDate = new Date(props.info.startDay);
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

  const extractIds = (els: Element[]): number[] =>
    els
      .map((v) => v.getAttribute("data-key"))
      .filter(Boolean)
      .map(Number);

  const onMove = ({
    store: {
      changed: { added, removed }
    }
  }: SelectionEvent) => {
    setSelected((prev) => {
      const next = new Set(prev);
      extractIds(added).forEach((id) => next.add(id));
      extractIds(removed).forEach((id) => next.delete(id));
      return next;
    });
  };

  return (
    <Stack sx={{ background: "#fffac6", p: "30px" }} alignItems="center">
      <style>
        .container {"{"}
          grid-template-columns: repeat({targetDayCount}, 1fr);
        {"}"}
      </style>

      {/* 日付けのラベル */}
      <Stack direction="row" sx={{width: "80%"}}>
        {dateLabels}
      </Stack>

      <Stack direction="row" sx={{width: "100%"}}>
        {/* 時間のラベル */}
        <Stack sx={{width: "10%", mt: "-5px"}} spacing="1px">
          {hourLabels}
        </Stack>

        {/* 入力部 */}
        <SelectionArea
          className="container"
          onMove={onMove}
          selectables=".selectable"
          behaviour={{overlap: "drop"} as Behaviour}
        >
          {new Array(targetDayCount * (targetHourCount*4)).fill(0).map((_, index) => (
            <div
              className={selected.has(index) ? "selected selectable" : "selectable"}
              data-key={index}
              key={index}
            />
          ))}
        </SelectionArea>
      </Stack>
    </Stack>
  );
}
