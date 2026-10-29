# BNS — Bengal News Service

**Bengal News Service PR & Consultancy Private Limited**  
*“Voice Of Bengal, Vision For Bharat”*

[![Frontend Build](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite%208-blue.svg)](file:///d:/projects/BNS/frontend)
[![Backend API](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green.svg)](file:///d:/projects/BNS/backend)
[![Security](https://img.shields.io/badge/Security-Helmet%20%7C%20CORS%20%7C%20Rate%20Limit-red.svg)](file:///d:/projects/BNS/backend)
[![License](https://img.shields.io/badge/License-Proprietary-yellow.svg)](#license)

---

## 1. Project Overview & Scope

**Bengal News Service PR & Consultancy Private Limited** (CIN: `U73100WB2024PTC275987`) is a modern digital media and corporate communications enterprise rooted in West Bengal, dedicated to delivering credible regional journalism, corporate public relations, brand advocacy, and strategic consultancy.

The official BNS corporate digital platform provides a fast, mobile-first, and highly accessible online presence. It showcases the company's core services, editorial leadership, corporate identity, and provides a direct, validated channel for client enquiries and commercial partnerships.

### Key Implemented Features
- **Responsive Brand Design**: Clean corporate visual identity utilizing deep navy, rich burgundy, and warm gold accents matching the official BNS crest.
- **Dedicated Service Verticals**: In-depth overviews of digital news publishing, corporate PR & reputation management, strategic advisory, and performance marketing.
- **Leadership Showcase**: Executive profile highlighting Editor-in-Chief & Managing Director Ujjwal Roy's journalistic vision and industry track record.
- **Validated Contact System**: Multi-step client-side validation with real-time feedback, backed by strict server-side schema verification.
- **RESTful Diagnostics & Health Checks**: Integrated `/api/v1/health` endpoint monitoring server uptime, memory usage, and persistent database connectivity.
- **Enterprise Security Hardening**: Defense-in-depth protection including Content Security Policy (CSP), origin allowlisting (CORS), tiered IP-based rate limiting, NoSQL injection filtering, and SHA-256 IP hashing.
- **Search Engine Optimization**: Dynamic meta tags, semantic HTML5, pre-generated `robots.txt`, and XML sitemap covering all canonical routes.

---

## 2. Architecture & Technology Stack

The project adheres to a strict two-tier architecture where the client interface and server API operate as two decoupled applications within a single mono-repository:

```text
                           ┌──────────────────────────┐
                           │    User Web Browser      │
                           └─────────────┬────────────┘
                                         │  HTTPS
                                         ▼
                      ┌────────────────────────────────────┐
                      │      Frontend Application          │
                      │  (React 19 + Vite 8 + Tailwind CSS)│
                      └──────────────────┬─────────────────┘
                                         │  REST API (JSON)
                                         ▼
                      ┌────────────────────────────────────┐
                      │       Backend Application          │
                      │   (Node.js + Express.js API)       │
                      └──────────────────┬─────────────────┘
                                         │  Mongoose ODM
                                         ▼
                      ┌────────────────────────────────────┐
                      │        MongoDB Atlas Database      │
                      └────────────────────────────────────┘
```

### Technology Matrix

| Layer | Component | Technologies |
|---|---|---|
| **Frontend** | Framework & Bundler | React 19, Vite 8, JavaScript (strictly ES modules, NO TypeScript) |
| | Styling & Icons | Tailwind CSS v4, Ant Design (AntD), Lucide React, Custom CSS Tokens |
| | Animations & UX | Framer Motion (page transitions, micro-interactions) |
| | Routing & State | React Router v7 (lazy-loaded routes, scroll restoration) |
| | HTTP Client | Centralized Axios service with unified error interceptor |
| **Backend** | Runtime & Server | Node.js (v18+ / v20+), Express.js |
| | Database & ORM | MongoDB Atlas, Mongoose v8 |
| | Validation | Joi schema validation with `stripUnknown` filtering |
| | Security | Helmet, CORS, Express-Rate-Limit, Express-Mongo-Sanitize |
| **Tooling** | Testing | Node.js native test runner (`node:test`, `node:assert/strict`) |
| | Code Quality | ESLint (flat config), Prettier |

---

## 3. Repository Directory Structure

```text
bns-website/
├── frontend/                          # Client-side React application
│   ├── public/                        # Static assets, logos, favicon, robots.txt, sitemap.xml
│   │   ├── bns-logo-full.png          # High-resolution corporate logo
│   │   ├── bns-logo-icon.png          # Crest/icon emblem
│   │   ├── favicon.svg                # Vector browser favicon
│   │   ├── robots.txt                 # Search engine crawler instructions
│   │   ├── sitemap.xml                # Canonical route index
│   │   └── _redirects                 # Static hosting SPA routing rules
│   ├── src/
│   │   ├── components/                # Reusable UI elements (Navbar, Footer, etc.)
│   │   ├── constants/                 # Navigation links, corporate data, services list
│   │   ├── layouts/                   # MainLayout shell
│   │   ├── pages/                     # Routed views (Home, About, Services, Leadership, Contact, etc.)
│   │   ├── services/                  # Centralized Axios API client (api.js)
│   │   ├── styles/                    # Global Tailwind CSS definitions and custom design tokens
│   │   ├── utils/                     # SEO metadata updater (seo.js) & form validation (validation.js)
│   │   ├── App.jsx                    # Route provider with lazy loading and fallback loaders
│   │   └── main.jsx                   # React DOM entry point
│   ├── tests/                         # Client validation & asset verification tests
│   ├── .env.example                   # Client environment variable template
│   ├── .gitignore                     # Frontend-specific ignore file
│   ├── .prettierrc                    # Code formatting configuration
│   ├── eslint.config.js               # ESLint rules and globals
│   ├── index.html                     # Single-page HTML mount point
│   ├── package.json                   # Frontend scripts and dependencies
│   ├── package-lock.json              # Frontend reproducible lockfile
│   ├── vercel.json                    # Vercel deployment rewrite rules
│   └── vite.config.js                 # Vite build settings, chunk splitting & dev proxy
├── backend/                           # Server-side REST API application
│   ├── src/
│   │   ├── config/                    # MongoDB connection lifecycle (db.js)
│   │   ├── controllers/               # Route handlers (contactController.js)
│   │   ├── middlewares/               # Error handler & request logging
│   │   ├── models/                    # Mongoose Contact schema definition
│   │   ├── routes/                    # API routes (/api/v1/health, /api/v1/contact)
│   │   ├── validators/                # Joi request schema validation
│   │   ├── app.js                     # Express pipeline & security middleware configuration
│   │   └── server.js                  # HTTP server entry point & graceful shutdown hooks
│   ├── tests/                         # Integration test suite for HTTP API endpoints
│   ├── .env.example                   # Backend environment variable template (sanitized)
│   ├── .gitignore                     # Backend-specific ignore file
│   ├── package.json                   # Backend scripts and dependencies
│   └── package-lock.json              # Backend reproducible lockfile
├── .gitignore                         # Repository-level ignore rules
└── README.md                          # Full project documentation and setup guide
```

---

## 4. Prerequisites

Before installing, ensure the host machine has:
- **Node.js**: `v18.18.0` or higher (LTS `v20.x` or `v22.x` recommended)
- **npm**: `v9.0.0` or higher
- **MongoDB**: MongoDB Atlas cluster or local MongoDB instance (optional in development; persistent storage activates automatically when `MONGODB_URI` is provided).

---

## 5. Quick Start & Local Development

Clone the repository:
```bash
git clone https://github.com/HSR-Hi-Tech-Solutions/BNS.git
cd BNS
```

### 5.1 Frontend Setup
```bash
cd frontend

# Install exact dependencies
npm ci

# Configure environment variables
cp .env.example .env

# Start Vite dev server on http://localhost:5173
npm run dev
```

### 5.2 Backend Setup
Open a separate terminal:
```bash
cd backend

# Install exact dependencies
npm ci

# Configure environment variables
cp .env.example .env

# Start Express server with auto-reload on http://localhost:3001
npm run dev
```

---

## 6. Available Scripts

### Frontend Scripts (`/frontend`)
| Command | Action |
|---|---|
| `npm run dev` | Starts Vite local development server on port 5173 with HMR |
| `npm run build` | Compiles optimized production bundle into `frontend/dist/` |
| `npm run preview` | Spins up a local web server serving the production `dist/` build |
| `npm test` | Executes native Node.js tests for client-side validation and static assets |
| `npm run lint` | Runs ESLint over all source files with zero allowed warnings |
| `npm run lint:fix` | Automatically fixes ESLint-correctable styling or syntax errors |
| `npm run format` | Runs Prettier code formatting on JSX, JS, and CSS files |

### Backend Scripts (`/backend`)
| Command | Action |
|---|---|
| `npm run dev` | Runs backend with Node `--watch` flag for continuous development |
| `npm start` | Launches production server entry point (`node src/server.js`) |
| `npm test` | Executes integration tests against server routes and security headers |

---

## 7. Environment Variables & Secret Management

### Frontend Configuration (`frontend/.env`)
Variables prefixed with `VITE_` are bundled into the client distribution. Never add secrets here.

| Variable | Description | Default | Example |
|---|---|---|---|
| `VITE_API_BASE_URL` | Backend REST API root URL | `/api/v1` (via Vite proxy) | `http://localhost:3001/api/v1` |

### Backend Configuration (`backend/.env`)
Kept strictly on the server; never exposed to version control or browsers.

| Variable | Description | Required | Default |
|---|---|---|---|
| `NODE_ENV` | Application environment (`development` / `production`) | No | `development` |
| `PORT` | Local HTTP listen port | No | `3001` |
| `ALLOWED_ORIGINS` | Comma-delimited list of permitted CORS web origins | No | `http://localhost:5173` |
| `MONGODB_URI` | MongoDB connection URI string | Optional | `""` (runs ephemeral in dev) |

---

## 8. REST API Documentation

Base URL: `/api/v1`

### 8.1 Health & Diagnostics
- **Method / Path**: `GET /api/v1/health`
- **Access**: Public
- **Description**: Verifies API availability, uptime, and database connection state.
- **Success Response (`200 OK`)**:
  ```json
  {
    "success": true,
    "service": "BNS API",
    "status": "ok",
    "timestamp": "2026-10-29T11:26:42.763Z",
    "environment": "development",
    "database": "connected"
  }
  ```

### 8.2 Contact Enquiry Submission
- **Method / Path**: `POST /api/v1/contact`
- **Rate Limit**: 5 submissions per hour per IP.
- **Allowed Services**:
  - `Digital News & Media`
  - `Public Relations & Corporate Communications`
  - `Digital Marketing & Advertising`
  - `Consultancy`
  - `General Enquiry`
  - `Partnership`
  - `Other`
- **Request Payload**:
  ```json
  {
    "name": "Corporate Partner",
    "email": "partner@bnsmedia.in",
    "phone": "+91 9876543210",
    "organization": "BNS Media Network",
    "service": "Public Relations & Corporate Communications",
    "message": "Enquiry regarding corporate PR and communications advisory retainer."
  }
  ```
- **Success Response (`201 Created`)**:
  ```json
  {
    "success": true,
    "message": "Your enquiry has been received. We will respond within 2 business days."
  }
  ```
- **Validation Error (`422 Unprocessable Entity`)**:
  ```json
  {
    "success": false,
    "message": "Validation failed. Please check the highlighted fields.",
    "errors": {
      "email": "Please provide a valid email address.",
      "service": "Please select a valid service."
    }
  }
  ```

---

## 9. Security Architecture

1. **Network Decoupling**: Frontend never initiates direct database calls. All persistent storage operations occur exclusively behind the Express API layer.
2. **Strict Origin Control (CORS)**: Requests from untrusted domains are blocked with a `403 Forbidden` response.
3. **HTTP Header Hardening**: Helmet sets Content Security Policy (CSP), prevents frame clickjacking (`X-Frame-Options`), and restricts MIME-type sniffing.
4. **NoSQL Injection Defense**: `express-mongo-sanitize` scrubs all incoming payload keys containing prohibited operators (`$` or `.`).
5. **Rate Limiting**: Dual-tier limiter protects against DOS attacks (200 requests/15 mins globally) and form spam (5 submissions/hr per IP).
6. **Privacy-Preserving Spam Protection**: IP addresses are SHA-256 hashed before storage; plain IPs are never persisted.
7. **Production Error Masking**: Internal exceptions and database stack traces are sanitized from API responses in production environments.

---

## 10. Production Deployment Guide

### Deploying the Frontend (Vercel, Netlify, Cloudflare Pages, AWS S3/CloudFront)
1. **Root Directory**: `frontend`
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Environment Variables**:
   - `VITE_API_BASE_URL`: Set to production API URL (e.g., `https://api.bengalnewsservice.com/api/v1`).
5. **Single-Page Application (SPA) Rewrites**: Pre-configured via `frontend/vercel.json` and `frontend/public/_redirects`.

### Deploying the Backend (Render, Railway, Fly.io, AWS ECS, VPS)
1. **Root Directory**: `backend`
2. **Build Command**: `npm ci`
3. **Start Command**: `npm start` (runs `node src/server.js`)
4. **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: Provided by host environment (or `3001`)
   - `ALLOWED_ORIGINS`: Set to production frontend domain (e.g., `https://bengalnewsservice.com`)
   - `MONGODB_URI`: Production MongoDB Atlas connection URI with strong credentials
5. **Health Check Endpoint**: `/api/v1/health`

---

## 11. Troubleshooting Common Setup Issues

- **CORS Error in Browser Console**: Verify that the port and protocol of your frontend URL match an entry in `ALLOWED_ORIGINS` in `backend/.env`.
- **Form Submission Returns 422**: The `service` field must match one of the allowed categories enumerated in [contactValidator.js](file:///d:/projects/BNS/backend/src/validators/contactValidator.js).
- **MongoDB Connection Timeout**: Ensure your current IP is allowlisted in the MongoDB Atlas Network Access console, and that `MONGODB_URI` includes appropriate TLS parameters.
- **Port 3001 Already in Use**: Specify another port in `backend/.env` (e.g. `PORT=5000`) and update `VITE_API_BASE_URL` in `frontend/.env`.

---

## 12. Git Workflow & Contribution

- **Main Branch**: `main` is protected and represents production-ready code.
- **Feature Branches**: Branch from `main` using descriptive naming (`feat/`, `fix/`, `chore/`).
- **Pre-Commit Verification**: Run `npm test` and `npm run lint` in both `frontend` and `backend` prior to pushing.

---

## 13. License

Copyright © 2024–2026 **Bengal News Service PR & Consultancy Private Limited**. All rights reserved.  
Unauthorized copying, modification, distribution, or commercial deployment of this software is strictly prohibited.
