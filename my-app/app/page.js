import "./app.css";
import Navigation from "./navigation/Navigation";
import HeroSection from "./HeroSection/HeroSection";

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
      <HeroSection />
    </div>
  );
}
