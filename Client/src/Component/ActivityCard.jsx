import { Stack, Typography } from "@mui/material";
import React from "react";

export default function ActiviyCard(props) {
  return (
    <div style={{margin:10}}>
      <Stack direction={"row"} spacing={2}>
        <img
          src={props.img}
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        />
        <div>
        <Typography sx={{ fontWeight: 500 }}>{props.name}</Typography>
        <Typography sx={{ typography: 'body2' }}>{props.job}</Typography>
        </div>
      </Stack>
    </div>
  );
}
