# Honey Bee Storage Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/40d42ebf-58fc-4b97-bcb7-ec291118ff07/deploy-status)](https://app.netlify.com/sites/honeybeestoragetx/deploys)

`https://honeybeestoragetx.com`

## Getting Started

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
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
- **Routing**: React Router 6
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
```

## General

- **DNS**: Netlify
- **Hosting**: Netlify
- **Registration**: Namecheap
