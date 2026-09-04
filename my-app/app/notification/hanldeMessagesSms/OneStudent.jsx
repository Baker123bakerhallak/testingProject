"use client";
import { Data } from "@/app/context/Context";
import { Directions } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  TextareaAutosize,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";

export default function OneStudent() {
  const theme = useTheme();
  const [student, setStudent] = useState([]);
  const [subject, setSubject] = useState();
  const [messageBody, setMessageBody] = useState("");
  const { templateGeneralMessage, detialsStudents } = useContext(Data);

  const students = detialsStudents.data?.data ?? [];
  const studentsFamilyNumbers = detialsStudents.data?.family?.guardians ?? [];
  const messages = templateGeneralMessage.data?.data ?? [];
  console.log(messages);
  const messageSubject = Array.isArray(messages)
    ? messages.map((message) => ({
        subject: message.name,
      }))
    : [];

  const studentsOptions = Array.isArray(students)
    ? students.map((student) => ({
        id: student.id,
        name: student.full_name,
      }))
    : [];
  const studentsOptionsNumbersParents = Array.isArray(studentsFamilyNumbers)
    ? studentsFamilyNumbers.map((number) => ({
        id: number.id,
        relationship: number.phone,
      }))
    : [];
  console.log(studentsOptionsNumbersParents);

  const getBodyMessage = (selectedSubject) => {
    const clickedSubject = messages?.find((message, index) => {
      return message.name === selectedSubject?.subject;
    });
    setMessageBody(clickedSubject?.body ?? "");
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Typography
        sx={{
          marginBottom: "20px",
          marginRight: "20px",
          color: "gray",
        }}
      >
        أختر الطالب
      </Typography>
      <Autocomplete
        multiple
        options={studentsOptions}
        value={student}
        onChange={(event, newValue) => {
          setStudent(newValue);
        }}
        getOptionLabel={(option) => option?.name ?? ""}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="الطلاب" placeholder="ابحث عن طالب" />
        )}
        sx={{
          width: 490,
          marginBottom: "20px",
        }}
      />
      {student.length >= 1 && (
        <Box>
          <Typography
            sx={{
              marginRight: "20px",
              marginBottom: "20px",
              color: "gray",
            }}
          >
            نموذج الرسالة
          </Typography>
          <Autocomplete
            options={messageSubject}
            value={subject}
            onChange={(event, newValue) => {
              setSubject(newValue);
              getBodyMessage(newValue);
            }}
            getOptionLabel={(option) => option?.subject ?? ""}
            renderOption={(props, option) => (
              <li {...props}>{option.subject}</li>
            )}
            renderInput={(params) => (
              <TextField {...params} placeholder="أختر نموذجا إختياريا" />
            )}
            sx={{
              width: "490px",
            }}
          />
        </Box>
      )}
      {subject && (
        <TextareaAutosize
          aria-label="minimum height"
          value={messageBody}
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 490, height: "50px", marginTop: "20px" }}
        />
      )}
    </div>
  );
}
