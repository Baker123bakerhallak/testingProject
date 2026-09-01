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
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { menuItems } from "./menuItems/menuItems";
import "./app.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { CloseOutlined, KeyboardOptionKey } from "@mui/icons-material";
export default function Sidebar() {
  const theme = useTheme();
  const [displayingSideBar, setDisplayingSideBar] = React.useState(false);
  const ismobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSideBar = () => {
    setDisplayingSideBar(true);
  };

  const hanldeCloseSideBar = () => {
    setDisplayingSideBar(false);
  };
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
      {ismobile ? (
        <>
          <Button
            onClick={() => {
              handleSideBar();
            }}
            color="white"
            sx={{
              color: "white",
              padding: "20px",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "50%",
            }}
          >
            <ListRoundedIcon />
          </Button>
          <Drawer
            anchor="right"
            open={displayingSideBar}
            onClose={handleSideBar}
            slotProps={{
              backdrop: {
                sx: {
                  backgroundColor: "transparent",
                },
              },
              paper: {
                sx: {
                  boxShadow: "none",
                  borderLeft: "2px solid #eee",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <CloseOutlined
                onClick={() => {
                  hanldeCloseSideBar();
                }}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: "10px",
                  color: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Box>
            {DrawerList}
          </Drawer>
        </>
      ) : (
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
                width={75}
                height={75}
                style={{
                  width: "75px",
                  height: "75px",
                  position: "absolute",
                  top: "-50px",
                  left: "-20px",
                  backgroundPosition: "top",
                }}
                src={"/image.png"}
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
      )}
    </div>
  );
}
