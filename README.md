# Honey Bee Storage Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/40d42ebf-58fc-4b97-bcb7-ec291118ff07/deploy-status)](https://app.netlify.com/sites/honeybeestoragetx/deploys)

`https://honeybeestoragetx.com`

## Getting Started

### Prerequisites

- Node.js 24 (see `.nvmrc`)
- npm

### Installation

```bash
# Use the correct Node version
nvm use

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
# Type-check and build for production
npm run build

# Preview the production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run tests once (no watch)
npm test -- --run
```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router 7
- **Animation**: Framer Motion 11
- **Testing**: Vitest + React Testing Library

## Project Structure

```
src/
  components/     # React components
  hooks/          # Custom React hooks
  pages/          # Page components
  types/          # TypeScript type definitions
  config.ts       # App configuration
  main.tsx        # Entry point
tests/            # Test files
lib/              # U-Haul API proxy (deployed separately to GCP)
```

## U-Haul API proxy

The site loads unit availability from
`https://us-central1-hbs-uhaul-proxy.cloudfunctions.net/location`. That URL is a
small proxy in `lib/proxy.js` that calls the
[WebSelfStorage Affiliate API v4](https://api.webselfstorage.com/) for location
`1035094` and converts the response keys to PascalCase (the shape in
`src/types/api.ts`). It exists to keep the API token out of the browser and to
restrict CORS to the site's origins.

- **GCP project**: `hbs-uhaul-proxy` (number `1022088093987`), region `us-central1`
- **Service**: Cloud Run function `location` (Node 22, max 1 instance, public)
- **Token**: Secret Manager secret `wss-api-token`, exposed as `WSS_API_TOKEN`

Deploy changes to `lib/` (Netlify does not deploy it):

```bash
gcloud run deploy location --source lib --function location \
  --base-image nodejs22 --region us-central1 --project hbs-uhaul-proxy
```

The secret binding, scaling and public access persist across deploys. To change
the token: `printf %s "$TOKEN" | gcloud secrets versions add wss-api-token --data-file=- --project hbs-uhaul-proxy`,
then redeploy.

## General

- **DNS**: Netlify
- **Hosting**: Netlify
- **Registration**: Namecheap
