import { Typography, Container, Stack, TextField, Button } from "@mui/material"

export default function CreatePage() {
  return(
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Container sx={{my: "20px", bgcolor: "white", py: "20px", px: "20px"}} maxWidth={false}>
          <Typography children="新しく日程調整を追加" variant="h4" sx={{mr: "50px"}} />

          <Typography variant="body1" sx={{py: "30px"}}>メールアドレスを入力してください。</Typography>
          <Stack direction="row" alignItems="center">
            <Typography children="日程調整名:" variant="h5" sx={{mr: "20px"}}/>
            <TextField id="outlined-basic" label="sample@example.com" variant="outlined"/>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{my: "20px"}}>
            <Typography children="作成者:" variant="h5" sx={{mr: "20px"}}/>
            <TextField id="outlined-basic" label="sample@example.com" variant="outlined"/>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography children="期間:" variant="h5" sx={{mr: "20px"}}/>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{my: "20px"}}>
            <Typography children="時間:" variant="h5" sx={{mr: "20px"}}/>
          </Stack>
          <Stack direction="row" sx={{my: "20px"}}>
            <Typography children="入力を求める人:" variant="h5" sx={{mr: "20px"}}/>
            <Stack direction="column" alignItems="center">
              <TextField id="outlined-basic" label="sample@example.com" variant="outlined"/>
              <TextField id="outlined-basic" label="sample@example.com" variant="outlined" sx={{my: "20px"}}/>
              <TextField id="outlined-basic" label="sample@example.com" variant="outlined"/>
            </Stack>
          </Stack>
          <Button variant="contained" sx={{bgcolor: "#783200", mt: "20px", alignItems: "center"}}>作成</Button>
        </Container>
      </Container>
    </>
  )
}