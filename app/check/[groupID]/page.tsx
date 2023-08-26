import { Typography, Container, Stack } from "@mui/material"
import axios from './../../../utils/axios'
import { CalenderDisplay } from "@/components/calender_display";

export default async function HomePage({params} : {params: {groupID: string}}) {
  const data = (await axios.get("/group/"+params.groupID)).data;

  return (
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Stack sx={{my: "20px", bgcolor: "white", py: "20px", px: "30px"}} spacing={4}>
          <Stack direction="row"  alignItems="center">
            <Typography children={data["groupName"]} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">作成者：{data["author"]}</Typography>
          </Stack>

          <Typography variant="body1" children="現在の入力状況です。" />

          <CalenderDisplay info={data}/>

        </Stack>
      </Container>
    </>
  )
} 