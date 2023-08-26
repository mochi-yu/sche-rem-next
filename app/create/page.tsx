import { Typography, Container, Stack, TextField, Button } from "@mui/material"
import { InputNewScheduleFrom } from "./input_new_schedule_form"

export default function CreatePage() {
  return(
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Container sx={{my: "20px", bgcolor: "white", py: "20px", px: "20px"}} maxWidth={false}>
          <Typography variant="h4" sx={{mr: "50px"}}>
            新しく日程調整を追加
          </Typography>

          <Typography variant="body1" sx={{py: "30px", px: "10px"}}>
            日程調整の情報を入力してください。
          </Typography>

          <InputNewScheduleFrom />

        </Container>
      </Container>
    </>
  )
}