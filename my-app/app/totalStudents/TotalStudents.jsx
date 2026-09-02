"use client";

import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Data } from "../context/Context";

export default function TotalStudents() {
  const { totalStudents } = useContext(Data);

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

  return (
    <div>
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
          //   border: "2px solid #eee",
        }}
      >
        <Box
          sx={{
            height: 520,
            borderRadius: 4,
            p: 3,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              textAlign: "right",
            }}
          >
            الطلاب
          </Typography>

          <Box
            sx={{
              height: 380,
              position: "relative",
            }}
          >
            <ResponsiveContainer height="100%">
              <PieChart width={320} height={520}>
                {/* Outer ring - Male */}
                <Pie
                  data={maleData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={110}
                  outerRadius={145}
                  startAngle={0}
                  activeShape={{
                    fill: "#5ba3de",
                  }}
                  endAngle={180}
                  paddingAngle={0}
                  stroke="white"
                  strokeWidth={3}
                >
                  <Cell fill="#5BC0DE" />
                  <Cell fill="#EEEEEE" />
                </Pie>

                {/* Inner ring - Female */}
                <Pie
                  data={femaleData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={108}
                  startAngle={0}
                  activeShape={{
                    fill: "#d69a9a",
                  }}
                  endAngle={180}
                  paddingAngle={0}
                  stroke="white"
                  strokeWidth={3}
                >
                  <Cell fill="#D69AA5" />
                  <Cell fill="#EEEEEE" />
                </Pie>
                <Tooltip content={toolTipCustomized} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center text */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography fontWeight={600}>المجموع الكلي</Typography>

              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {total}
              </Typography>
            </Box>
          </Box>

          {/* Legend */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#D69AA5",
                }}
              />

              <Typography>الإناث</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#5BC0DE",
                }}
              />

              <Typography>الذكور</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
