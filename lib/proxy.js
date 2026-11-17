/**
 * GCP Cloud Function proxy for the WebSelfStorage (U-Haul) Affiliate API v4.
 *
 * Deployed as the `location` Cloud Run function in GCP project
 * `hbs-uhaul-proxy` (see README "U-Haul API proxy"). Requires the
 * `WSS_API_TOKEN` env var, bound from Secret Manager; never commit it.
 *
 * v4 returns camelCase keys; v2 returned PascalCase. We convert keys back to
 * PascalCase so the frontend (src/types/api.ts) keeps its existing contract.
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

const LOCATION_ID = 1035094;
const WSS_API = "https://api.webselfstorage.com";
const API_URL = `${WSS_API}/v4/location/${LOCATION_ID}`;

const toPascal = (key) => key.charAt(0).toUpperCase() + key.slice(1);

function pascalizeKeys(value) {
  if (Array.isArray(value)) return value.map(pascalizeKeys);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [toPascal(k), pascalizeKeys(v)])
    );
  }
  return value;
}

exports.pascalizeKeys = pascalizeKeys;

exports.location = async (req, res) => {
  return cors(req, res, async () => {
    const token = process.env.WSS_API_TOKEN;
    if (!token) {
      res.status(500).send("WSS_API_TOKEN is not configured");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.json(pascalizeKeys(data));
    } catch (error) {
      res.status(502);
      res.send(error.message || String(error));
    }
  });
};
