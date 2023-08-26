import { Container, Typography } from "@mui/material";
import Link from "next/link";

export function ScheRemHeader() {

  return (
    <Container sx={{backgroundColor: "Black", py: "10px"}} maxWidth={false}>
      <Link href="/create">
        <Typography children="ScheRem" color="white" variant="h4" sx={{textDecoration: "none"}}/>
      </Link>
    </Container>
  )
}