import { Typography, Container, Stack} from "@mui/material"
import { InputEmailForm } from "./input_email_form";
import axios from "./../../../utils/axios"

export default async function EmailPage({params} : {params: {groupID: string}}) {
  const data = (await axios.get("/group/"+params.groupID)).data;

  return (
    <>
      <Container sx={{my: "30px"}} maxWidth={false}>
        <Container sx={{my: "20px", bgcolor: "white", py: "20px", px: "20px"}} maxWidth={false}>
          <Stack direction="row" alignItems="center">
            <Typography children={data.groupName} variant="h3" sx={{mr: "50px"}} />
            <Typography variant="h6">
              作成者：{data["author"]}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{py: "30px", mx: "10px"}}>
            メールアドレスを入力してください。
          </Typography>

          <InputEmailForm groupID={params.groupID} />
        </Container>
      </Container>
    </>
  )
} 