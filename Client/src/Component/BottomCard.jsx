import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function BottomCard(props) {
  const minWidth1 = props.min;
  return (
    <Card sx={{ minWidth: 450, borderRadius:'20px'  }}>
      <CardContent>
      <Stack direction={"row"} spacing={3}>
        <div>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {props.value}
          </Typography>
        </div>
        <img
          src={props.img}
          alt="chart1"
          style={{ width: 200, height: 50 }}
        />
        </Stack>
      </CardContent>
    </Card>
  );
}
