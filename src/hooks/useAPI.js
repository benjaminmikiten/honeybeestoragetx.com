import { useState, useEffect } from "react";

export const useAPI = (url) => {
  const [data, setData] = useState(null);
  const API_URL = "https://api.honeybeestoragetx.com";
  useEffect(() => {
    const fetchData = async () => {
      fetch(`${API_URL}${url}`)
        .then((response) => response.json())
        .then((result) => {
          console.log("API", result);
          setData(result);
        });
    };
    fetchData();
  }, [url]);
  return { data };
};
