import { useState, useEffect, useRef } from "react";
import { API_URL } from "../config";
import type { LocationAPIResponse } from "../types";

interface UseAPIResult {
  data: LocationAPIResponse | null;
}

export function useAPI(_url: string): UseAPIResult {
  const [data, setData] = useState<LocationAPIResponse | null>(null);
  const TIMEOUT_DURATION = 5 * 1000; // 5s
  const requestTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    requestTimeout.current = setTimeout(() => {
      setData({ error: true, message: "Request timed out" });
      console.error("Request timed out.");
    }, TIMEOUT_DURATION);

    const fetchData = async () => {
      fetch(API_URL)
        .then((response) => {
          if (requestTimeout.current) {
            clearTimeout(requestTimeout.current);
          }
          return response.json();
        })
        .then((result: LocationAPIResponse) => {
          console.log("API", result);
          setData(result);
        })
        .catch((err) => {
          console.error("Fetch encountered an error.", err);
          setData({ error: true, message: err.message });
        });
    };

    fetchData();

    return () => {
      if (requestTimeout.current) {
        clearTimeout(requestTimeout.current);
      }
    };
  }, []);

  return { data };
}
