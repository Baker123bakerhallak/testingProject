"use client";

import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import "../../app/globals.css";
import { Data } from "@/app/context/Context";

function CardValues({
  title,
  description,
  fetchData,
  isPending,
  image,
  isActive,
  onMouseEnter,
}) {
  const theme = useTheme();
  const activeGradient = `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #cf0477 100%)`;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      sx={{
        width: "261px",
        height: "125px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "20px",
        boxShadow: isActive
          ? "0px 0px 10px rgba(123, 0, 70, 0.25)"
          : `0px 0px 6px ${theme.palette.secondary.main}`,
        gap: "20px",
        borderRadius: "10px",
        color: isActive ? "#fff" : "#1a1a1a",
        backgroundColor: isActive ? "transparent" : "#fff8fc",
        backgroundImage: isActive ? activeGradient : "none",
        backgroundSize: "cover",
        transform: isActive ? "translateY(-5px)" : "translateY(0)",
        transition:
          "background-image 0.35s ease, transform 0.35s ease, color 0.35s ease, box-shadow 0.35s ease",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            marginBottom: "2px",
            color: isActive ? "#fff" : "black",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            color: isActive ? "#fff" : theme.palette.secondary.main,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "10px",
          }}
        >
          <Image
            width={30}
            height={30}
            sx={{
              opacity: isActive ? "1" : "0",
            }}
            src={"/star.png"}
            alt="---"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Image src={image} alt="No Photo" width={50} height={50} />
        <Box
          sx={{
            fontWeight: "500",
            marginTop: "10px",
            color: isActive ? "#fff" : "#fff",
          }}
        >
          {isPending ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress aria-label="Loading…" />
            </Box>
          ) : (
            <Box sx={{ color: isActive ? "white" : "black" }}>{fetchData}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CardValues;
