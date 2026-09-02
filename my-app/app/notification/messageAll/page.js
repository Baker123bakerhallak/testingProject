"use client";
import { Data } from "@/app/context/Context";
import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useContext } from "react";

export default function MessageAll() {
  const { templateGeneralMessage, detialsStudents } = useContext(Data);
  console.log(templateGeneralMessage?.data);

  console.log("students", detialsStudents?.data?.data);
  return (
    <Box>
      {/* <Autocomplete
    options={detialsStudents.data?.data?.full_name}
    
    >

    </Autocomplete> */}
    </Box>
  );
}
