import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssessmentIcon from '@mui/icons-material/Assessment';
import {useNavigate } from "react-router-dom";


export default function DrawerItem(props){
    const Navigate = useNavigate();
    return(
        <ListItem
                disablePadding
                onClick={() => {
                  Navigate(props.navigate);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={props.label} />
                </ListItemButton>
              </ListItem>
    )
}