import { useState, useEffect, useRef } from "react";

export const useAPI = (url) => {
  const [data, setData] = useState(null);
  const API_URL = "https://api.honeybeestoragetx.com";
  const TIMEOUT_DURATION = 5 * 1000; //10s
  const requestTimeout = useRef(null);

  useEffect(() => {
    requestTimeout.current = setTimeout(() => {
      setData({ error: true, message: "Request timed out" });
      console.error("Request timed out.");
    }, TIMEOUT_DURATION);

    const fetchData = async () => {
      fetch(`${API_URL}${url}`)
        .then((response) => {
          clearTimeout(requestTimeout.current);
          return response.json();
        })
        .then((result) => {
          console.log("API", result);
          setData(result);
        })
        .catch((err) => {
          console.error("Fetch encountered an error.", err);
          setData({ error: true, message: err });
        });
    };

    fetchData();
  }, [url, requestTimeout, TIMEOUT_DURATION]);
  return { data };
};
