import { Typography } from "@mui/material"

export default function DynamicHelloPage({params} : {params: {name: string}}) {
  return (
    <>
      <Typography children={"Hello " + params.name + "."} />
      <Typography children={"This is dynamic path page."} />
    </>
  )
}