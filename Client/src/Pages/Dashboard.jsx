import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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
import {
  Button,
  Card,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import Linechart from "../Component/Linechart";
import TopCard from "../Component/TopCard";
import BottomCard from "../Component/BottomCard";
import ProfileCard from "../Component/ProfileCard";
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate } from "react-router-dom";



const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const history = useNavigate();
  async function SignOut(){
    history('/Signin')
  }
  return (
    <Box sx={{ display: "flex" }}>
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Button variant="outlined" startIcon={<LogoutIcon />} sx={{mt:47, ml:1, width: 200}} onClick={SignOut}>
            SignOut
          </Button>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Grid container spacing={5}>
          <Grid item xs={9}>
            <Stack direction={"row"} spacing={2} mb={2}>
              <TopCard title="Total Income" value="$1200" />
              <TopCard title="Total Expense" value="8.50K" />
              <TopCard title="Total credit" value="$250" />
              <TopCard title="Total Bonus" value="8.10K" />
            </Stack>
            <Stack spacing={1}>
              <Linechart />
            </Stack>
            <Stack direction={"row"} spacing={2} m={2}>
              <BottomCard
                title="TOTAL PRODUCT"
                value="1,285"
                img="Images/Chart1.png"
              />
              <BottomCard
                title="TOTAL EARNING"
                value="$2,685"
                img="Images/Chart2.png"
              />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
