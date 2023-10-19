import { Drawer } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import DrawerItem from "./DrawaerItem";
import {
  Button,
  Card,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import {useNavigate } from "react-router-dom";

export default function DrawerArea() {
  const drawerWidth = 240;

  const history = useNavigate();
  async function SignOut(){
    history('/Signin')
  }
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "right",
              ml: 100,
              width: 300,
              borderRadius: "50px",
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <DrawerItem navigate="/Dashboard" label="Home" />
          <DrawerItem navigate="/Dashboard/User" label="User Management" />
          <DrawerItem navigate="/Dashboard/Item" label="Stock Management" />
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            sx={{ mt: 47, ml: 1, width: 200 }}
            onClick={SignOut}
          >
            SignOut
          </Button>
        </List>
      </Drawer>
    </>
  );
}
