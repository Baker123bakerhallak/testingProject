"use client";

import { createContext } from "react";
import { useGetTotal } from "../fetchData/useGetTotal";
import {
  DASHBAORD_ENDPOINT,
  DASHBAORD_VALUES_ENDPOINT,
  EMPLOYEES_ENDPOINT,
  NOTIFICATION_ENDPOIT,
  TOTAL_STUDENTS_ENDPOINT,
} from "../Api/api";

export const Data = createContext(null);

export default function DataContext({ children }) {
  const totalStudents = useGetTotal(TOTAL_STUDENTS_ENDPOINT, "student");
  const notification = useGetTotal(NOTIFICATION_ENDPOIT, "notification");
  const emplpoyesCount = useGetTotal(EMPLOYEES_ENDPOINT, "employess_count");

  return (
    <Data.Provider
      value={{
        totalStudents,
        notification,
        emplpoyesCount,
      }}
    >
      {children}
    </Data.Provider>
  );
}
