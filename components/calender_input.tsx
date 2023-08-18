'use client'

import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useState } from "react";
import "./calender_style.css";

interface Props {
  info: GroupInfo,
}

export function CalenderInput(props: Props) {
  const [selected, setSelected] = useState<Set<number>>(() => new Set());

  const targetHourCount = props.info.endHour - props.info.startHour;
  const targetDayCount = ((new Date(props.info.endDate)).getTime() - (new Date(props.info.startDay)).getTime()) / 86400000;
  console.log(targetDayCount);
  console.log(targetHourCount);

  const extractIds = (els: Element[]): number[] =>
    els
      .map((v) => v.getAttribute("data-key"))
      .filter(Boolean)
      .map(Number);

  const onStart = ({ event, selection }: SelectionEvent) => {
    // if (!event?.ctrlKey && !event?.metaKey) {
    //   selection.clearSelection();
    //   setSelected(() => new Set());
    // }
  };

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
    <SelectionArea
      className="container"
      onMove={onMove}
      selectables=".selectable"
    >
      {new Array(10 * targetHourCount).fill(0).map((_, index) => (
        <div
          className={selected.has(index) ? "selected selectable" : "selectable"}
          data-key={index}
          key={index}
        />
      ))}
    </SelectionArea>
  );
}
