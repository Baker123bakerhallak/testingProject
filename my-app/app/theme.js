"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

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
      main: "#999",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
  },
});

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
