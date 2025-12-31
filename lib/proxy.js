/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const allowedOrigins = [
  "http://localhost:3000",
  "https://www.honeybeestoragetx.com",
  "https://staging.honeybeestoragetx.com",
  "https://develop.honeybeestoragetx.com",
  "https://honeybeestoragetx.com",
];

const cors = require("cors")({ origin: allowedOrigins, methods: "GET" });

exports.location = async (req, res) => {
  return cors(req, res, async () => {
    const API_KEY = "LOL GET YOUR OWN API KEY FROM UHAUL";
    const LOCATION_ID = 1035094;
    const WSS_API = "https://api.webselfstorage.com";
    const API_URL = `${WSS_API}/wssapi/v2/location/${LOCATION_ID}`;

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Basic ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500);
      res.send(error.message || error);
    }
  });
};
