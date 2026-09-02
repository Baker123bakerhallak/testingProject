"use client";

import {
  CalendarMonth,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDayNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

function startOfSaturdayWeek(date) {
  const dayOfWeek = date.day();
  const daysSinceSaturday = (dayOfWeek + 1) % 7;
  return date.startOf("day").subtract(daysSinceSaturday, "day");
}

export default function Celender() {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);
  const [visibleDate, setVisibleDate] = useState(today);

  const weekStart = useMemo(
    () => startOfSaturdayWeek(visibleDate),
    [visibleDate],
  );
  const days = useMemo(
    () => Array.from({ length: 7 }, (_, index) => weekStart.add(index, "day")),
    [weekStart],
  );

  const monthValue = visibleDate.month();
  const firstDayOffset = (visibleDate.startOf("month").day() + 1) % 7;
  const weekOfMonth =
    Math.floor((weekStart.date() + firstDayOffset - 1) / 7) + 1;
  const totalWeeks = Math.ceil(
    (visibleDate.startOf("month").daysInMonth() +
      ((visibleDate.startOf("month").day() + 1) % 7)) /
      7,
  );

  const moveWeek = (amount) => {
    const nextDate = visibleDate.add(amount, "week");
    setVisibleDate(nextDate);
  };

  const changeMonth = (event) => {
    const nextMonth = visibleDate.month(Number(event.target.value));
    setVisibleDate(nextMonth);
  };

  return (
    <Box
      component="section"
      aria-label="Weekly calendar"
      sx={{
        minHeight: 220,
        p: { xs: "16px", sm: "22px" },
        border: "1px solid #eeeeee",
        borderRadius: "22px",

        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(22, 22, 22, 0.08)",
        direction: "ltr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          direction: { xs: "column-reverse", sm: "row" },
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            aria-label="Previous week"
            onClick={() => moveWeek(-1)}
            sx={{
              width: 36,
              height: 36,
              color: "#940052",
              border: "1px solid #d9aec8",
            }}
          >
            <ChevronLeft fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Next week"
            onClick={() => moveWeek(1)}
            sx={{
              width: 36,
              height: 36,
              color: "#fff",
              backgroundColor: "#940052",
              boxShadow: "0 3px 7px rgba(148, 0, 82, 0.24)",
              "&:hover": { backgroundColor: "#760040" },
            }}
          >
            <ChevronRight fontSize="small" />
          </IconButton>
          <FormControl size="small" sx={{ minWidth: { xs: 168, sm: 178 } }}>
            <Select
              value={monthValue}
              onChange={changeMonth}
              aria-label="Select month"
              IconComponent={KeyboardArrowDown}
              startAdornment={
                <CalendarMonth sx={{ color: "#940052", mr: 1 }} />
              }
              sx={{
                height: 40,
                borderRadius: "14px",
                color: "#344054",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "#e0e4eb" },
              }}
            >
              {monthNames.map((month, index) => (
                <MenuItem key={month} value={index}>
                  {month} {visibleDate.year()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ textAlign: "right", direction: "rtl", flexShrink: 0 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 16, sm: 18 },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            التقويم
            <br />
            الأسبوعي
          </Typography>
          <Typography sx={{ color: "#8d96a7", fontSize: 12, mt: 0.5 }}>
            أسبوع {weekOfMonth} من {totalWeeks}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
          alignItems: "center",
          gap: { xs: 0.25, sm: 0.75 },
        }}
      >
        {days.map((date, index) => {
          const isSelected = date.isSame(selectedDate, "day");
          const isToday = date.isSame(today, "day");

          return (
            <Box
              key={date.format("YYYY-MM-DD")}
              component="button"
              type="button"
              aria-label={`Select ${date.format("dddd, MMMM D, YYYY")}`}
              aria-pressed={isSelected}
              onClick={() => {
                setSelectedDate(date);
                setVisibleDate(date);
              }}
              sx={{
                minWidth: 0,
                height: { xs: 82, sm: 94 },
                p: 0,
                border: 0,
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: "inherit",
                backgroundColor: isSelected ? "#b90061" : "transparent",
                color: isSelected ? "#fff" : "#344054",
                boxShadow: isSelected
                  ? "0 5px 10px rgba(185, 0, 97, 0.25)"
                  : "none",
                transition: "background-color 160ms ease, transform 160ms ease",
                "&:hover": {
                  backgroundColor: isSelected ? "#a60057" : "#f9edf5",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                component="span"
                sx={{ fontSize: 12, fontWeight: 500 }}
              >
                {weekDayNames[index]}
              </Typography>
              <Typography
                component="span"
                sx={{ fontSize: 17, fontWeight: 700, mt: 0.5 }}
              >
                {date.date()}
              </Typography>
              {isToday && !isSelected && (
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "#b90061",
                    mt: 0.5,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
