import { useState, useEffect } from "react";

export const useAPI = (url) => {
  const [data, setData] = useState(null);
  const API_URL = "https://api.honeybeestoragetx.com";
  const TIMEOUT_DURATION = 5 * 1000; //10s

  const requestTimeout = setTimeout(() => {
    setData({ error: true, message: "Request timed out" });
    console.error("Request timed out.");
  }, TIMEOUT_DURATION);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${API_URL}${url}`)
        .then((response) => {
          clearTimeout(requestTimeout);
          return response.json();
        })
        .then((result) => {
          console.log("API", result);
          setData(result);
        })
        .catch((err) => {
          setData({ error: true, message: err });
        });
    };
    fetchData();
  }, [url, requestTimeout]);
  return { data };
};
