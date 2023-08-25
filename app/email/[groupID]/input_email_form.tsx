'use client'

import { Stack, TextField } from "@mui/material";
import { ScheRemButtonPrimary } from "@/components/sche_rem_button_primary";
import { useRouter } from "next/navigation";

export function InputEmailForm(props: {groupID: string}) {
  const router = useRouter();

  return (
    <>
      <Stack alignItems="center" spacing={3}>
        <TextField
          id="outlined-basic"
          label="sample@example.com"
          variant="outlined"
          sx={{width: "80%", maxWidth: "500px"}}
        />
        <ScheRemButtonPrimary clickHandler={() => {
          router.push("/submit/"+props.groupID);
        }}>
          次へ
        </ScheRemButtonPrimary>
      </Stack>
    </>
  );
}