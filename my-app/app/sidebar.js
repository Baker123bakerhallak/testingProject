"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../asserts/image.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { menuItems } from "./menuItems/menuItems";
import "./app.css";

export default function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: "250px " }} role="presentation" dir={"ltr"}>
      <List>
        {menuItems.map((text) => (
          <ListItem
            key={text.id}
            style={{
              marginBottom: "5px",
              width: "100%",
              color: "#4D4D4D",
            }}
            disablePadding
          >
            <ListItemButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <ListItemIcon>
                <ExpandMoreIcon />
              </ListItemIcon>
              <ListItemText
                primary={text.title}
                style={{ display: "flex", justifyContent: "flex-end" }}
              />
              <ListItemIcon>{text.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open
        variant="permanent"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              width: "280px",
            },
          },
          paper: {
            sx: {
              boxShadow: "none",
              padding: "20px",
              borderLeft: "2px solid #eee",
              width: "285px",
            },
          },
        }}
      >
        <Link
          href={"/"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "#7B0046",
            width: "210px",
            height: "39px",
          }}
        >
          <Box
            style={{
              width: "43px",
              height: "39px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "75px",
                height: "75px",
                position: "absolute",
                top: "-50px",
                left: "-20px",
                backgroundPosition: "top",
              }}
              src={profileImage}
              alt="profile"
            />
          </Box>
          <Button
            sx={{ fontWeight: "700", color: "#7B0046" }}
            className="block"
          >
            العلماء للتعليم
          </Button>
        </Link>
        {DrawerList}
        <Box>
          <Button
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              gap: "10px",
              color: "#7B0046",
            }}
          >
            <LogoutIcon />
            تسجيل الخروج
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
