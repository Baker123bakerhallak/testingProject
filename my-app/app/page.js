import Link from "next/link";
import "./app.css";
import { Suspense } from "react";
import Navigation from "./navigation/Navigation";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "350px",
        flexDirection: "column",
      }}
    >
      <Navigation />
    </div>
  );
}
