"use client";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Data } from "../context/Context";
import Alltargets from "./hanldeMessagesSms/Alltargets";
import Branch from "./hanldeMessagesSms/Branch";
import Class from "./hanldeMessagesSms/Class";
import OneStudent from "./hanldeMessagesSms/OneStudent";
import StudentStatus from "./hanldeMessagesSms/StudentStatus";
import {
  Padding,
  Send,
  SendAndArchiveOutlined,
  SendOutlined,
} from "@mui/icons-material";

export default function SmsField({ children }) {
  const [target, setTarget] = useState("طالب محدد");

  // if (detialsStudents?.data?.data) {
  //   const arraysNameStudents = Array.from((detialsStudents?.data).length);
  //   console.log(numbers, arraysNameStudents);
  // }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        Padding: "10px",
        width: "100%",
        flexDirection: "column",
        position: "relative",
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
        <Button
          sx={{ border: "none" }}
          onClick={(e) => {
            setTarget("الكل");
          }}
        >
          الكل
        </Button>
        <Button
          sx={{ border: "none" }}
          onClick={(e) => {
            setTarget("فرغ معين");
          }}
        >
          فرغ معين
        </Button>
        <Button
          sx={{ border: "none" }}
          onClick={(e) => {
            setTarget("شعبة");
          }}
        >
          شعبة
        </Button>
        <Button
          sx={{ border: "none" }}
          onClick={(e) => {
            setTarget("حالة الطالب");
          }}
        >
          حالة الطالب
        </Button>
        <Button
          sx={{ border: "none" }}
          onClick={(e) => {
            setTarget("طالب محدد");
          }}
        >
          طالب محدد
        </Button>
      </ButtonGroup>
      <Box sx={{ marginTop: 3 }}>
        {target === "الكل" && <Alltargets />}
        {target === "فرغ معين" && <Branch />}
        {target === "شعبة" && <Class />}
        {target === "حالة الطالب" && <StudentStatus />}
        {target === "طالب محدد" && <OneStudent />}
      </Box>
    </Box>
  );
}
