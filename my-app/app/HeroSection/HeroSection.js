"use client";

import CardValues from "@/component/ui/CardValues";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "../globals.css";
import { useContext, useState } from "react";
import { Data } from "../context/Context";

import { PieChart, Cell, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import TotalStudents from "../totalStudents/TotalStudents";
import Celender from "../celender/Celender";
import Notification from "../notification/Notification";

function HeroSection() {
  const { totalStudents, emplpoyesCount } = useContext(Data);
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(0);
  const male = 825;
  const female = 861;
  const total = male + female;

  const malePercent = (male / total) * 100;
  const femalePercent = (female / total) * 100;

  const maleData = [
    { name: "Male", value: totalStudents?.data?.data?.male_students },
    { name: "Remaining", value: 100 - malePercent },
  ];

  const femaleData = [
    { name: "Female", value: totalStudents?.data?.data.female_students },
    { name: "Remaining", value: 100 - femalePercent },
  ];

  const toolTipCustomized = (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "white",
        padding: "12px 18px",
        borderRadius: 3,
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        Male: {totalStudents?.data?.data?.male_students}
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        female: {totalStudents?.data?.data?.female_students}
      </Typography>
    </Box>
  );
  const cards = [
    {
      title: "عدد الطلاب الكلي ",
      description: " إجمالي عدد الطلاب",
      fetchData: totalStudents?.data?.data.total_students,
      isPending: totalStudents?.isPending,
      image: "/statistic.png",
    },
    {
      title: "الموظفون الإداريون",
      description: " عدد الموظفون الإداريون بالأكاديمية",
      fetchData: emplpoyesCount?.data?.data.total_employees,
      isPending: emplpoyesCount?.isPending,
      image: "/rate-orange.png",
    },
    {
      title: "الطلاب المستفيدون من الحسم",
      description: " عدد المستفيدين في الأكاديمية",
      fetchData: 113,
      image: "/rate-orange.png",
    },
    {
      title: "الطلاب المضافون اليوم",
      description: " إجمالي الطلاب الجدد الذين تم تسجيلهم اليوم",
      fetchData: 0,
      image: "/rate-orange.png",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(261px, 1fr))",
          gap: "40px",
          flexWrap: "wrap",
          justifyItems: "center",
          minHeight: "300px",
        }}
      >
        {cards.map((card, index) => (
          <CardValues
            key={card.title}
            title={card.title}
            description={card.description}
            fetchData={card.fetchData}
            isPending={card.isPending}
            image={card.image}
            isActive={activeCard === index}
            onMouseEnter={() => setActiveCard(index)}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            flexGrow: {
              xs: "1",
              sm: "1",
              md: "1",
              lg: "0",
            },
            maxWidth: "100%",
            minWidth: "320px",
            height: "261px",
            padding: "10px",
            backgroundColor: "#ffff",
            border: "2px solid #eee",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography>الدورة المتفوٌقة</Typography>
            <FormControl sx={{ width: "100px" }}>
              <InputLabel id="demo-simple-select-label">بكلوريا</InputLabel>
              <Select
                sx={{
                  backgroundColor: "#f0f0f0",
                  border: "none",
                  "&:hover": {
                    outline: "none",
                    border: "none",
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={"علمي"}>علمي</MenuItem>
                <MenuItem value={"أدبي"}>أدبي</MenuItem>
                <MenuItem value={"تاسع"}>تاسع</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: `${theme.palette.secondary.main}`,
              fontSize: "16px",
            }}
          >
            لا يوجد بيانات متوفرة حالياً
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: {
              xs: "1",
              sm: "1",
              md: "1",
              lg: "0",
            },
            minWidth: "350px",
            maxWidth: "100%",
            borderRadius: "10px",
            height: "520px",
            backgroundColor: "#eee",
            border: "2px solid #eee",
          }}
        >
          <TotalStudents />
        </Box>
        <Box
          sx={{
            flexGrow: {
              xs: "1",
              sm: "1",
              md: "1",
              lg: "0",
            },
            minWidth: "320px",

            borderRadius: "10px",
            border: "2px solid #eee",
          }}
        >
          <Celender />
        </Box>
        <Notification />
      </Box>
    </Box>
  );
}

export default HeroSection;
