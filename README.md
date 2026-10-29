# BNS — Bengal News Service PR & Consultancy

**Bengal News Service PR & Consultancy Private Limited**  
*Voice Of Bengal, Vision For Bharat*

Production-ready corporate website for BNS — a digital-first media and communications company offering digital news, public relations, corporate communications, digital marketing, and consultancy services.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, JavaScript (no TypeScript) |
| Styling | Tailwind CSS v4, Custom CSS variables |
| UI Components | Ant Design 5, Lucide React |
| Animation | Framer Motion |
| Routing | React Router v7 |
| HTTP Client | Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Validation | Joi (server), custom (client) |
| Security | Helmet, CORS, rate-limit, mongo-sanitize |
| Linting | ESLint 9, Prettier |

---

## Project Structure

```
BNS/
├── public/                    # Static assets served at root
│   ├── bns-logo-icon.png      # BNS icon logo
│   ├── bns-logo-full.png      # BNS full logo with text
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js           # Company info, nav links, services
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Terms.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── api.js             # Axios API client
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── seo.js
│   │   └── validation.js
│   ├── App.jsx                # Router with lazy-loaded pages
│   └── main.jsx
├── server/                    # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── requestLogger.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── health.js
│   ├── validators/
│   │   └── contactValidator.js
│   ├── index.js
│   ├── package.json
│   └── .env.example
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/leadership` | Leadership — Ujjwal Roy |
| `/contact` | Contact Us |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/*` | 404 Not Found |

---

## Quick Start

### Prerequisites
- Node.js v18 or later
- npm v9 or later
- MongoDB (optional — server works without it for frontend-only use)

### 1. Clone the repository

```bash
git clone <repo-url>
cd BNS
```

### 2. Frontend setup

```bash
npm install
cp .env.example .env
# Edit .env if needed
npm run dev        # Development server → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### 3. Backend setup (optional)

```bash
cd server
npm install
cp .env.example .env
# Edit .env — set MONGODB_URI if using database
npm run dev        # Development → http://localhost:3001
npm start          # Production
```

---

## Environment Variables

### Frontend (`/.env`)

| Variable | Description | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL | `/api/v1` (via Vite proxy) |

> ⚠️ Never put secrets in `VITE_` variables — they are exposed to the browser.

### Backend (`/server/.env`)

| Variable | Description | Required |
|---|---|---|
| `NODE_ENV` | `development` or `production` | No (default: `development`) |
| `PORT` | Server port | No (default: `3001`) |
| `MONGODB_URI` | MongoDB connection string | No (contact form disabled without it) |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins | No (default: `http://localhost:5173`) |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/health` | Health check |
| `POST` | `/api/v1/contact` | Submit enquiry form |

### POST `/api/v1/contact`

**Request body:**
```json
{
  "name": "string (required, 2-120 chars)",
  "email": "string (required, valid email)",
  "phone": "string (optional, up to 25 chars)",
  "organization": "string (optional, up to 200 chars)",
  "service": "string (optional, from allowed list)",
  "message": "string (required, 10-2000 chars)"
}
```

**Success (201):**
```json
{ "success": true, "message": "Your enquiry has been received…" }
```

**Validation error (422):**
```json
{ "success": false, "message": "Validation failed.", "errors": { "field": "error message" } }
```

---

## Security Controls

- **Helmet** — HTTP security headers (CSP, X-Frame-Options, etc.)
- **CORS** — allowlist-only origins
- **Rate limiting** — global (200/15min) + contact-specific (5/hr per IP)
- **mongo-sanitize** — NoSQL injection prevention
- **Joi validation** — server-side schema validation with `stripUnknown`
- **Body size limits** — 16kb max request body
- **IP hashing** — IPs hashed before storage (SHA-256), not stored raw
- **No stack traces** in production responses
- **Environment variables** for all secrets — `.env` excluded from Git
- **HTTPS** recommended for production deployment

---

## Deployment

### Frontend (Vercel / Netlify)

**Vercel:**
```bash
npm run build
# Deploy dist/ folder via Vercel CLI or GitHub integration
# Build command: npm run build
# Output directory: dist
```

Add `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify:**
Create `public/_redirects`:
```
/*  /index.html  200
```

### Backend (Render / Railway)

1. Deploy `server/` directory
2. Set environment variables in hosting dashboard
3. Set start command: `node index.js`

### Database (MongoDB Atlas)

1. Create a MongoDB Atlas cluster
2. Add connection string to `MONGODB_URI`
3. Whitelist your server's IP

---

## Items Requiring Company Confirmation

> These must be confirmed by Bengal News Service PR & Consultancy Pvt. Ltd. before go-live:

- [ ] Official email address (currently a placeholder)
- [ ] Official phone number
- [ ] Complete registered office address
- [ ] GSTIN / PAN (if to be displayed)
- [ ] Social media profile URLs
- [ ] Director photograph (for Leadership page)
- [ ] Privacy Policy and Terms legal review
- [ ] Production domain name
- [ ] Any trademark registration status

---

## Company Information

- **Company:** Bengal News Service PR & Consultancy Private Limited
- **Brand:** BNS — Bengal News Service
- **Tagline:** Voice Of Bengal, Vision For Bharat
- **CIN:** U73100WB2024PTC275987
- **State:** West Bengal, India

---

*Built for BNS — Bengal News Service PR & Consultancy Private Limited.*
