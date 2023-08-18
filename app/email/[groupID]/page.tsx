import { Typography, Container, Stack, TextField, Button } from "@mui/material"

export default function EmailPage({params} : {params: {groupID: string}}) {
  const sampleData = {
    "groupID": "abcde",
    "groupName": "次回ミーティング",
    "author": "諏訪 太郎",
    "groupUsers": [
      "sample@example.com",
      "sample@example.com",
    ],
    "schedules": [
      {
        "userMailAddress": "string",
        "scheduleInfo": [
          [ true, true ],
          [ true, true ],
          [ true, true ],
        ]
      }
    ],
    "startDay": "string",
    "endDat": "string",
    "startHour": "string",
    "endHour": "string"
  };

  return (
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Container sx={{my: "20px", bgcolor: "white", py: "20px", px: "20px"}} maxWidth={false}>
          <Stack direction="row" alignItems="center">
            <Typography children={sampleData["groupName"]} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">
              作成者：{sampleData["author"]}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{py: "30px", mx: "10px"}}>
            メールアドレスを入力してください。
          </Typography>

          <Stack alignItems="center">
            <TextField id="outlined-basic" label="sample@example.com" variant="outlined"/>
            <Button variant="contained" sx={{bgcolor: "#783200", mt: "20px"}}>
              次へ
            </Button>
          </Stack>
        </Container>
      </Container>
    </>
  )
} 