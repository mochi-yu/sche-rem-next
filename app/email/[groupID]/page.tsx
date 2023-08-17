import { Typography, Container, Stack } from "@mui/material"

export default function EmailPage({params} : {params: {groupID: string}}) {
  const sampleData = {
    "groupID": "abcde",
    "groupName": "abcdefg",
    "author": "string",
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
        <Container sx={{my: "20px", bgcolor: "white", py: "20px", px: "30px"}} maxWidth={false}>
          <Stack direction="row"  alignItems="center">
            <Typography children={sampleData["groupName"]} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">作成者：{sampleData["author"]}</Typography>
          </Stack>

          <Typography variant="body1">メールアドレスを入力してください。</Typography>

        </Container>
      </Container>
    </>
  )
} 