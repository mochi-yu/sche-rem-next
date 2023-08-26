'use client'

import { Button } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  clickHandler: MouseEventHandler,
  children: ReactNode,
}

export function ScheRemButtonPrimary({children, clickHandler}: Props) {
  return (
    <>
      <Button
        variant="contained"
        sx={{bgcolor:  "#783200", maxWidth: "250px", borderRadius: "20px", width: "70%"}}
        onClick={clickHandler}
      >
        {children}
      </Button>
    </>
  )
}