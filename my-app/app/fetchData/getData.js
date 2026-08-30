"use client";

import { useQuery } from "@tanstack/react-query";
import { API_URL, TOTAL_STUDENTS_ENDPOINT } from "../Api/api";
import { useContext, useEffect } from "react";
import { Data } from "../context/Context";

export const useGetTotalStudent = () => {
  const query = useQuery({
    queryKey: ["studentData"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}${TOTAL_STUDENTS_ENDPOINT}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 2805|UiWkVS5MwsFLnmIVbb7GpZOuxS7dUDcJLxwZLjrz42085a1e",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch total student data");
      }
      return await response.json();
    },
  });

  if (query.isLoading) {
    console.log("loading");
  }

  return query;
};
