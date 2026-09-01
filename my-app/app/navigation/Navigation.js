"use client";
import Box from "@mui/material/Box";
import "../app.css";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import { TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useRef, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function Navigation() {
  const [data, setData] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const istab = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://olamaa.iss-group.me/test-env/api/employees/1",
          {
            method: "GET",
            headers: {
              Accept: " application/json",
              Authorization:
                "Bearer 2802|diO1mbS3uBEQsDFYHukLuLl0BiDqV1chtRVmrXRQ70292d2e",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();

        if (!ignore) {
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box
      sx={{
        height: "76px",
        display: "flex",
        alignItems: "center",
        padding: "  10px",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Box
        ref={searchRef}
        component={"form"}
        onClick={() => setIsSearchOpen(true)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile || istab ? "0px" : "10px",
          width: isSearchOpen ? "300px" : "41px",
          height: "41px",
          gap: isMobile || istab ? "0px" : "10px",
          backgroundColor: "#F3F3F3",
          borderRadius: isMobile || istab ? "50%" : "10px",
          position: "relative",
          cursor: "pointer",
          transition: "width 0.25s ease",
          overflow: "hidden",
        }}
      >
        {!isMobile && !istab ? <SearchRoundedIcon /> : ""}

        {isSearchOpen && (
          <Box
          // sx={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          //   display: "flex",
          //   alignItems: "center",
          //   backgroundColor: "#F3F3F3",
          //   borderRadius: isMobile || istab ? "50%" : "10px",
          // }}
          >
            <TextField
              autoFocus
              id="filled-basic"
              label="Search"
              onBlur={() => setIsSearchOpen(false)}
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
              }}
              variant="filled"
            />
          </Box>
        )}

        {!isMobile && !istab && !isSearchOpen && (
          <Box
            className={"input-box"}
            sx={{
              flex: "1",
              position: "relative",
              width: "fit-content",
            }}
          >
            <TextField
              id="filled-basic"
              width={"100%"}
              label="Filled"
              sx={{
                width: "100%",
                backgroundColor: "#F3F3F3",
              }}
              variant="filled"
            />
          </Box>
        )}

        {(isMobile || istab) && !isSearchOpen && (
          <SearchRoundedIcon
            onClick={() => setIsSearchOpen(true)}
            sx={{
              display: "block",
              fontSize: "30px",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "41px",
              height: "41px",
              backgroundColor: "#F2F2F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              borderRadius: "50%",
            }}
          >
            <ForumOutlinedIcon />
          </Box>
          <Box
            sx={{
              width: "41px",
              height: "41px",
              backgroundColor: "#f2f2f2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <NotificationsActiveOutlinedIcon />
          </Box>
          <Box
            sx={{
              width: "41px",
              height: "41px",
              backgroundColor: "#f2f2f2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <QrCodeOutlinedIcon />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            marginRight: "30px",
          }}
        >
          <Person2OutlinedIcon fontSize="large" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h5"
              sx={{ fontWeight: "500", fontSize: "16px" }}
            >
              {data?.data?.first_name} {data?.data?.last_name}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
                color: `${theme.palette.secondary.main} `,
              }}
            >
              <ExpandMoreOutlinedIcon />
              {data ? data.data.institute_branch.name : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
