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
import "../globals.css";
import { useContext, useState } from "react";
import { Data } from "../context/Context";

function HeroSection() {
  const { totalStudents, emplpoyesCount } = useContext(Data);
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(0);
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
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          gap: "40px",
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
            minWidth: "320px",
            maxWidth: "100%",
            height: "520px",
            backgroundColor: "#eee",
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: {
              xs: "1",
              sm: "1",
              md: "1",
              lg: "0",
            },
            minWidth: "320px",
            height: "261px",
            backgroundColor: "#eee",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
