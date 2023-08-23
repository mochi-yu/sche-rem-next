import { CalenderInput } from "../../../components/calender_input";
import { Typography, Container, Stack } from "@mui/material"

export default function HomePage({params} : {params: {groupID: string}}) {
  const sampleData: GroupInfo = {
    groupID: "abcde",
    groupName: "abcdefg",
    author: "string",
    groupUsers: [
      "sample@example.com",
      "sample@example.com",
    ],
    schedules: [
      {
        userMailAddress: "string",
        scheduleInfo: [
          [ true, true ],
          [ true, true ],
          [ true, true ],
        ]
      }
    ],
    startDay: "2023/08/01",
    endDate: "2023/08/15",
    startHour: 10,
    endHour: 22
  };

  return (
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Stack sx={{my: "20px", bgcolor: "white", py: "20px", px: "30px"}} spacing={4}>
          <Stack direction="row"  alignItems="center">
            <Typography children={sampleData["groupName"]} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">作成者：{sampleData["author"]}</Typography>
          </Stack>

          <Typography variant="body1" children="現在の入力状況です。" />

          <CalenderInput info={sampleData}/>

        </Stack>
      </Container>
    </>
  )
} 