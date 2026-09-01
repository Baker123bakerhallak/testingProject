"use client";

import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../Api/api";

export const useGetTotal = (endPoint, key) => {
  const query = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(`${API_URL}${endPoint}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 2805|UiWkVS5MwsFLnmIVbb7GpZOuxS7dUDcJLxwZLjrz42085a1e",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch total student data");
      }
      return (response, await response.json());
    },
  });

  if (query.isLoading) {
    console.log("loading");
  }

  return query;
};
