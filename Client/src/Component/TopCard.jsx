import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TopCard(props) {
  return (
    <Card sx={{ minWidth: 220, borderRadius:'20px' }}>
      <CardContent>
        <Typography variant="h6" >{props.title}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{props.value}</Typography>
      </CardContent>
    </Card>
  );
}
