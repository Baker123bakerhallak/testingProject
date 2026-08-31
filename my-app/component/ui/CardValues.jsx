"use client";

import { Data } from "@/app/context/Context";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

function CardValues() {
  const theme = useTheme();
  const { totalStudents, emplpoyesCount } = useContext(Data);
  return (
    <Box
      className={"linear"}
      sx={{
        width: "261px",
        heigt: "127px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "20px",
        boxShadow: `0px 0px  6px  ${theme.palette.secondary.main}`,
        gap: "20px",
        borderRadius: "10px",
        position: "relative",
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
            color: "white",
            marginBottom: "2px",
          }}
        >
          الموظفون الإداريون
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            color: `${theme.palette.secondary.main}`,
          }}
        >
          عدد الموظفون الإداريون بالأكاديمية
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "10px",
          }}
        >
          <Image width={30} height={30} src={"/star.png"} alt="---" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image src={"/image_copy.png"} alt="No Photo" width={50} height={50} />
        <Box sx={{ fontWeight: "500", marginTop: "10px", color: "white" }}>
          {totalStudents.isPending ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress aria-label="Loading…" color="secondary" />
            </Box>
          ) : (
            emplpoyesCount?.data?.data.total_employees
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CardValues;
