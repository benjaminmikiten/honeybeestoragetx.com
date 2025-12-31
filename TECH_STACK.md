# Tech Stack Documentation

## Honey Bee Storage Website

A single-page React application for displaying storage unit availability and pricing.

---

## Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 16.13.1 | Frontend UI framework |
| React DOM | 16.13.1 | DOM rendering |
| React Router DOM | 5.2.0 | Client-side routing |
| React Scripts | 4.0.3 | Create React App build tooling |

---

## Styling & CSS

| Technology | Version | Purpose |
|------------|---------|---------|
| Styled Components | 5.1.1 | CSS-in-JS styling with theme support |
| Styled Normalize | 8.0.7 | CSS reset/normalization |
| Polished | 3.6.5 | Color manipulation utilities (lighten/darken) |

---

## Animation

| Technology | Version | Purpose |
|------------|---------|---------|
| Framer Motion | 2.4.2 | Smooth transitions and motion effects |

---

## Responsive Design

| Technology | Version | Purpose |
|------------|---------|---------|
| React Responsive | 8.1.0 | Media query hooks for responsive layouts |

### Breakpoints
- Mobile: 375px
- Tablet: 768px
- Desktop: 1200px

---

## Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| Moment.js | 2.27.0 | Date manipulation and formatting |
| dotenv | 8.2.0 | Environment variable management |

---

## Testing

| Technology | Version | Purpose |
|------------|---------|---------|
| @testing-library/react | 9.5.0 | React component testing |
| @testing-library/jest-dom | 4.2.4 | Custom Jest DOM matchers |
| @testing-library/user-event | 7.2.1 | User interaction simulation |
| Jest | (bundled) | Test runner and assertions |

---

## Analytics & Optimization

| Technology | Purpose |
|------------|---------|
| Google Tag Manager | Analytics tracking (GTM-NNQ66B7) |
| @react-hook/google-optimize | A/B testing integration |

---

## Backend & API

| Technology | Purpose |
|------------|---------|
| Google Cloud Functions | U-Haul proxy API |
| Fetch API | HTTP requests |

### API Endpoint
```
https://us-central1-hbs-uhaul-proxy.cloudfunctions.net/location
```

Fetches real-time storage unit availability data from U-Haul.

---

## Deployment & Hosting

| Service | Purpose |
|---------|---------|
| Netlify | Hosting and continuous deployment |
| Namecheap | Domain registration (honeybeestoragetx.com) |

---

## Development Tools

| Tool | Purpose |
|------|---------|
| Webpack | Bundler (via react-scripts) |
| Babel | JavaScript transpiler (via react-scripts) |
| ESLint | Code linting (extends "react-app") |
| Prettier | Code formatting |

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Hero/         # Hero section
│   ├── Body/         # Main content area
│   ├── Footer/       # Site footer
│   ├── Button/       # Button component
│   ├── Icon/         # SVG icons
│   ├── Loader/       # Loading spinner
│   ├── Page/         # Page wrapper
│   ├── Spacer/       # Spacing utility
│   └── Table/        # Data tables
├── pages/            # Page-level components
│   └── IndexPage/    # Homepage
├── hooks/            # Custom React hooks
│   ├── useAPI.js     # API fetching hook
│   ├── useDesktopBreakpoint.js
│   ├── useTabletBreakpoint.js
│   └── useMobileBreakpoint.js
└── styles/           # Global styles and theming
    ├── Theme.js      # Styled-components theme
    └── GlobalStyle.js
```

---

## Browser Support

### Production
- Browsers with >0.2% global usage
- Excludes dead browsers and Opera Mini

### Development
- Latest Chrome
- Latest Firefox
- Latest Safari

---

## PWA Support

The application includes Progressive Web App configuration:
- `manifest.json` with app metadata
- Multiple favicon sizes (16x16, 32x32, 192x192, 512x512)
- Standalone display mode
