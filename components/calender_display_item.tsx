'use client'

import { useState } from "react"
import { Box, Dialog, Typography } from "@mui/material";
import "./calender_style.css"

export function CalenderDisplayItem(props: {users: string[]}) {
  const [showDialog, setShowDialog] = useState(false);

  const usersList = props.users.map(elm => {
    return <Typography>・{elm}</Typography>
  })

  return (
    <>
      <div
        onClick={(e) => {
          setShowDialog(!showDialog)
        }}
        className={props.users.length != 0 ? "selected selectable" : "selectable"}
      >
      </div>
      <Dialog open={showDialog} onClose={() => {setShowDialog(!showDialog)}}>
        <Box minWidth="200px" sx={{m: "20px"}}>
          {usersList}
        </Box>
      </Dialog>
    </>
  )
}