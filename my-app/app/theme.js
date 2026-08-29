import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-tajawal), sans-serif",
  },
  palette: {
    primary: {
      main: "#7B0046",
    },
    secondary: {
      main: "#666",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
  },
});

export default theme;
