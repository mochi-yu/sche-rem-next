import { Container, Typography } from "@mui/material";


export function ScheRemHeader() {
  return (
    <Container sx={{backgroundColor: "Black", py: "10px"}} maxWidth={false}>
      <Typography children="ScheRem" color="white" variant="h4" />
    </Container>
  )
}