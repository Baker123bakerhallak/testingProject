"use client";

import { createContext, useState } from "react";
import { useGetTotalStudent } from "../fetchData/getData";

export const Data = createContext(null);

export default function DataContext({ children }) {
  const totalStudents = useGetTotalStudent();

  return (
    <Data.Provider
      value={{
        totalStudents,
      }}
    >
      {children}
    </Data.Provider>
  );
}
