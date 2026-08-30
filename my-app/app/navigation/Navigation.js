"use client";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import "../app.css";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import { Typography, useTheme } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import theme from "../theme";
import { useEffect, useState } from "react";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function Navigation() {
  const [data, setData] = useState("");
  const theme = useTheme();

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

  console.log(data);
  return (
    <Box
      sx={{
        height: "125px",
        display: "flex",
        alignItems: "center",
        padding: " 0px 20px",
        justifyContent: "space-between",
      }}
    >
      <Box
        component={"form"}
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "350px",
          gap: "10px",
          height: "50px",
          backgroundColor: "#F3F3F3",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <SearchIcon />
        <Box className={"input-box"} sx={{ flex: "1", position: "relative" }}>
          <input
            id="input-search"
            className="input-search"
            type="text"
            placeholder=" "
            style={{
              flex: "1",
              height: "100%",
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <label
            htmlFor="input-search"
            className="input-label"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "0",
              color: "#666",
              pointerEvents: "none",
              transition: "all 0.2s ease",
            }}
          >
            البحث
          </label>
        </Box>
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
              sx={{ fontWeight: "500", fontSize: "16px" }}
              component="h4"
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
