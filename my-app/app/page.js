"use client";
import "./app.css";
import Navigation from "./navigation/Navigation";
import HeroSection from "./HeroSection/HeroSection";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: isMobile ? "0px" : "350px",
        flexDirection: "column",
      }}
    >
      <Navigation />
      <HeroSection />
    </div>
  );
}
