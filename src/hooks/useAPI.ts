import { useState, useEffect, useRef } from "react";
import { API_URL } from "../config";

interface UseAPIResult<T> {
  data: T | null;
}

export function useAPI<T = unknown>(_url: string): UseAPIResult<T> {
  const [data, setData] = useState<T | null>(null);
  const TIMEOUT_DURATION = 5 * 1000; // 5s
  const requestTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    requestTimeout.current = setTimeout(() => {
      setData({ error: true, message: "Request timed out" } as T);
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
        .then((result: T) => {
          console.log("API", result);
          setData(result);
        })
        .catch((err) => {
          console.error("Fetch encountered an error.", err);
          setData({ error: true, message: err.message } as T);
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
