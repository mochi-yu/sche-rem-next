'use client'

import { Stack, TextField } from "@mui/material";
import { ScheRemButtonPrimary } from "@/components/sche_rem_button_primary";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function InputEmailForm(props: {groupID: string}) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <>
      <Stack alignItems="center" spacing={3}>
        <TextField
          id="outlined-basic"
          label="sample@example.com"
          variant="outlined"
          sx={{width: "80%", maxWidth: "500px"}}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ScheRemButtonPrimary clickHandler={() => {
          router.push("/submit/"+props.groupID+"/"+email);
        }}>
          次へ
        </ScheRemButtonPrimary>
      </Stack>
    </>
  );
}