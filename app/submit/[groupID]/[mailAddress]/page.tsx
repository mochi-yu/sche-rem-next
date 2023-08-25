import { CalenderInput } from "../../../../components/calender_input";
import { Typography, Container, Stack } from "@mui/material"
import axios from "../../../../utils/axios";

export default async function SubmitPage({params} : {params: {groupID: string, mailAddress: string}}) {
  const data = (await axios.get("/group/"+params.groupID)).data;

  return (
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Stack sx={{my: "20px", bgcolor: "white", py: "20px", px: "30px"}} spacing={4}>
          <Stack direction="row"  alignItems="center">
            <Typography children={data["groupName"]} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">作成者：{data["author"]}</Typography>
          </Stack>

          <Typography variant="body1" children="都合の良い日程を選択してください。パソコンからの入力が簡単です。" />

          <CalenderInput info={data} pathParam={params}/>

        </Stack>
      </Container>
    </>
  )
} 