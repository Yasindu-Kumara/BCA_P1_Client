import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ActiviyCard from "./ActivityCard";

export default function ProfileCard(props) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <div style={{ marginLeft: 50, marginBottom: 10 }}>
          <img
            src="Images/avatar1.jpg"
            style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
          />
          <Typography style={{ marginLeft: 20 }}>butahan kahan</Typography>
        </div>
        <Stack direction={"row"} spacing={4.5} style={{ marginBottom: 20 }}>
          <div>
            <CalendarMonthIcon />
            <Typography variant="body2">Calen</Typography>
          </div>
          <div>
            <FavoriteIcon />
            <Typography variant="body2">Find</Typography>
          </div>
          <div>
            <PhoneIcon />
            <Typography variant="body2">Call</Typography>
          </div>
          <div>
            <MoreHorizIcon />
            <Typography variant="body2">More</Typography>
          </div>
        </Stack>
        <div style={{ marginBottom: 20 }}>
          <Typography sx={{ fontWeight: "bold" }}>Recent Activity</Typography>
          <Typography>20 Dec 2023</Typography>
        </div>
        <ActiviyCard img="Images/avatar3.jpg" name="Alexis Tufina" job="Backend Developer"/>
        <ActiviyCard img="Images/avatar2.jpg" name="Josef Draf" job="Business Development"/>
        <ActiviyCard img="Images/avatar3.jpg" name="Camel Dilees" job="Project Manager"/>
        <ActiviyCard img="Images/avatar2.jpg" name="Bronte Aida" job="UI/UX Designer"/>       
      </CardContent>
    </Card>
  );
}
