"use client";

import { createContext } from "react";
import { useGetTotal } from "../fetchData/useGetTotal";
import { NOTIFICATION_ENDPOIT, TOTAL_STUDENTS_ENDPOINT } from "../Api/api";

export const Data = createContext(null);

export default function DataContext({ children }) {
  const totalStudents = useGetTotal(TOTAL_STUDENTS_ENDPOINT, "student");
  const notification = useGetTotal(NOTIFICATION_ENDPOIT, "notification");
  console.log(totalStudents);
  return (
    <Data.Provider
      value={{
        totalStudents,
        notification,
      }}
    >
      {children}
    </Data.Provider>
  );
}
