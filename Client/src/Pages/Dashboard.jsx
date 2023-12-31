import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {useNavigate } from "react-router-dom";
import DrawerArea from "../Component/DrawerArea";
import MainPage from "../InnerDashboardPage/MainPage";


export default function PermanentDrawerLeft() {

  const history = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerArea />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <MainPage />
      </Box>
    </Box>
  );
}
