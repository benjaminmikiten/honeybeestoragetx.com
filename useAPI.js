import { useState, useEffect, useRef } from "react";

export const useAPI = (url) => {
    const [data, setData] = useState(null);
    const API_URL = "https://us-central1-hbs-uhaul-proxy.cloudfunctions.net/location";
    const TIMEOUT_DURATION = 5 * 1000; // 5s
    const requestTimeout = useRef(null);

    useEffect(() => {
        requestTimeout.current = setTimeout(() => {
            setData({ error: true, message: "Request timed out" });
            console.error("Request timed out.");
        }, TIMEOUT_DURATION);

        const fetchData = async () => {
            fetch(`${API_URL}`)
                .then((response) => {
                    clearTimeout(requestTimeout.current);
                    return response.json();
                })
                .then((result) => {
                    // Log full API response for debugging
                    console.log("Full API Response:", JSON.stringify(result, null, 2));
                    setData(result);
                })
                .catch((err) => {
                    console.error("Fetch encountered an error.", err);
                    setData({ error: true, message: err });
                });
        };

        fetchData();
    }, [url, requestTimeout]);

    return { data };
};