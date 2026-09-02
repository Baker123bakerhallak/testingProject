"use client";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { Data } from "../context/Context";

export default function SmsField({ children }) {
  const { templateGeneralMessage, detialsStudents } = useContext(Data);
  console.log(templateGeneralMessage?.data);

  console.log("students", detialsStudents?.data?.data);

  // if (detialsStudents?.data?.data) {
  //   const arraysNameStudents = Array.from((detialsStudents?.data).length);
  //   console.log(numbers, arraysNameStudents);
  // }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="p"
        sx={{
          alignSelf: "flex-start",
          marginBottom: "10px",
          fontWeight: "500",
        }}
      >
        توجيه الرسالة إلى
      </Typography>

      <ButtonGroup
        sx={{
          display: "flex",
          justifyContent: "center ",
          alignItems: "center",
        }}
      >
        <Button sx={{ border: "none" }}>الكل</Button>
        <Button sx={{ border: "none" }}>فرغ معين</Button>
        <Button sx={{ border: "none" }}>شعبة</Button>
        <Button sx={{ border: "none" }}>حالة الطالب</Button>
        <Button sx={{ border: "none" }}>طالب محدد</Button>
      </ButtonGroup>
      {children}
    </Box>
  );
}
