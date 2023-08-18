'use client'

import { Stack, TextField } from "@mui/material";
import { ScheRemButtonPrimary } from "@/components/sche_rem_button_primary";

export function InputEmailForm() {
  return (
    <>
      <Stack alignItems="center" spacing={3}>
        <TextField
          id="outlined-basic"
          label="sample@example.com"
          variant="outlined"
          sx={{width: "80%", maxWidth: "500px"}}
        />
        <ScheRemButtonPrimary clickHandler={() => {console.log("clicked.");}}>
          次へ
        </ScheRemButtonPrimary>
      </Stack>
    </>
  );
}