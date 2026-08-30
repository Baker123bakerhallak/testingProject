"use client";
import CircularProgress from "@mui/material/CircularProgress";

import React, { useContext } from "react";
import { Data } from "../context/Context";
import { useGetTotalStudent } from "../fetchData/getData";
import { Box, Typography, useTheme } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";

function HeroSection() {
  const theme = useTheme();
  const { totalStudents } = useContext(Data);
  const { data, isLoading, isError } = totalStudents;
  console.log(data?.data?.total_students);

  const Loading = (
    <Box sx={{ display: "flex" }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          maxWidth: "261px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
          boxShadow: `0px 0px  6px  ${theme.palette.secondary.main}`,
          gap: "20px",
          backgroundColor: "#FFF8FC",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#1A1A1A",
              marginBottom: "2px",
            }}
          >
            عدد الطلاب الكلي
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "12px",
              color: `${theme.palette.secondary.main}`,
            }}
          >
            إجمالي عدد الطلاب
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <svg
            width="60"
            height="37"
            viewBox="0 0 60 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="22" width="4" height="15" rx="2" fill="#F6A36C" />
            <rect x="8" y="18" width="4" height="19" rx="2" fill="#F6A36C" />
            <rect x="16" y="22" width="4" height="15" rx="2" fill="#F6A36C" />
            <rect x="24" width="4" height="37" rx="2" fill="#F6A36C" />
            <rect x="32" y="11" width="4" height="26" rx="2" fill="#F6A36C" />
            <rect x="40" y="18" width="4" height="19" rx="2" fill="#F6A36C" />
            <rect x="48" y="24" width="4" height="13" rx="2" fill="#F6A36C" />
            <rect x="56" y="29" width="4" height="8" rx="2" fill="#F6A36C" />
          </svg>
          <Typography sx={{ fontWeight: "500", marginTop: "10px" }}>
            {isLoading ? Loading : data?.data?.total_students}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
