# BNS — Bengal News Service

**Bengal News Service PR & Consultancy Private Limited**  
*“Voice Of Bengal, Vision For Bharat”*

[![Website Build](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite%208-blue.svg)](file:///d:/projects/BNS/frontend)
[![Styling](https://img.shields.io/badge/CSS-Tailwind%20CSS%20v4-38bdf8.svg)](file:///d:/projects/BNS/frontend)
[![Integration](https://img.shields.io/badge/Form%20Backend-Google%20Sheets-34a853.svg)](file:///d:/projects/BNS/google-apps-script)
[![License](https://img.shields.io/badge/License-Proprietary-yellow.svg)](#license)

---

## 1. Project Overview & Scope

**Bengal News Service PR & Consultancy Private Limited** (CIN: `U73100WB2024PTC275987`) is a modern digital media and corporate communications enterprise rooted in West Bengal, dedicated to delivering credible regional journalism, corporate public relations, brand advocacy, and strategic consultancy.

The official BNS corporate digital platform is a **fully static, high-performance website** built with React 19, Vite 8, and Tailwind CSS v4. It features a completely serverless contact enquiry system integrated directly with **Google Sheets** via **Google Apps Script**, eliminating the need for database servers, email notification daemons, or separate Node.js/Express backends.

### Key Features
- **Fully Static Architecture**: Pre-compiled static assets deployable on modern global CDNs (Cloudflare Pages, Vercel, Netlify, AWS S3/CloudFront) with zero server maintenance.
- **Direct Google Sheets Contact Integration**: Enquiries submitted by visitors are recorded directly into a designated Google Sheet via a lightweight Google Apps Script Web App.
- **Zero Server & Database Overhead**: No MongoDB, no Mongoose, no Node.js backend, and no SMTP/Nodemailer email configurations required.
- **Responsive Brand Design**: Clean corporate visual identity utilizing deep navy (`#0B1120`), rich burgundy (`#8E252B`), and warm gold (`#D4AF55`) accents matching the official BNS crest.
- **Dedicated Service Verticals**: In-depth overviews of digital news publishing, corporate PR & reputation management, strategic advisory, and digital marketing.
- **Leadership Showcase**: Executive profile highlighting Editor-in-Chief & Managing Director Ujjwal Roy's journalistic vision and industry track record.
- **Bulletproof Client Validation**: Real-time client-side validation with instant visual feedback and server-side validation inside Apps Script.
- **Search Engine Optimization (SEO)**: Dynamic meta tags, semantic HTML5, pre-generated `robots.txt`, and XML sitemap covering all canonical routes.
- **SPA Deep Linking**: Out-of-the-box support for client-side routing on all hosting platforms via `_redirects` and `vercel.json`.

---

## 2. Updated Project Architecture

The application operates as an independently deployable static web application interacting directly with a serverless Google Apps Script endpoint:

```text
┌──────────────────────────────────────────────────────────┐
│                   Visitor Web Browser                    │
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                BNS Static Frontend (SPA)                 │
│         (React 19 + Vite 8 + Tailwind CSS v4)            │
│  - Instant page transitions & lazy-loaded routes         │
│  - Client-side form sanitization & regex validation      │
└────────────────────────────┬─────────────────────────────┘
                             │
                             │ HTTPS POST (text/plain;charset=utf-8)
                             │ [Avoids CORS preflight OPTIONS blocking]
                             ▼
┌──────────────────────────────────────────────────────────┐
│             Google Apps Script Web App                   │
│             (google-apps-script/Code.gs)                 │
│  - Concurrency control via LockService                   │
│  - Server-side input & format validation                 │
│  - Auto-initializes styled headers on blank sheets       │
│  - Returns 302 redirect with CORS-compliant JSON         │
└────────────────────────────┬─────────────────────────────┘
                             │
                             │ Internal Google Workspace API
                             ▼
┌──────────────────────────────────────────────────────────┐
│                Designated Google Sheet                   │
│            ("BNS Corporate Enquiries" Sheet)             │
│  - Instant row logging for incoming leads & enquiries    │
│  - Real-time team visibility, sorting & filtering        │
└──────────────────────────────────────────────────────────┘
```

### Technology Matrix

| Layer | Component | Technologies |
|---|---|---|
| **Frontend** | Framework & Bundler | React 19, Vite 8, JavaScript (ES modules, strictly NO TypeScript) |
| | Styling & Icons | Tailwind CSS v4, Lucide React, Custom CSS Tokens |
| | Routing & Navigation | React Router v7 (lazy routes, scroll restoration, 404 catch-all) |
| | HTTP Client | Native Fetch API with `text/plain` CORS-bypass strategy |
| **Backend** | Integration Endpoint | Google Apps Script (Serverless Web App) |
| | Storage | Google Sheets (automatic row insertion with `LockService`) |
| **Tooling** | Testing | Node.js native test runner (`node:test`, `node:assert/strict`) |
| | Code Quality | ESLint (flat config), Prettier |

---

## 3. Repository Directory Structure

```text
BNS/
├── frontend/                          # Client-side React 19 + Vite application
│   ├── public/                        # Static assets, logos, favicon, robots.txt, sitemap.xml
│   │   ├── bns-logo-full.png          # High-resolution corporate logo
│   │   ├── bns-logo-icon.png          # Crest/icon emblem
│   │   ├── favicon.svg                # Vector browser favicon
│   │   ├── robots.txt                 # Search engine crawler instructions
│   │   ├── sitemap.xml                # Canonical route index
│   │   └── _redirects                 # Static hosting SPA routing rules (Netlify/Cloudflare)
│   ├── src/
│   │   ├── components/                # Reusable UI elements (Navbar, Footer, etc.)
│   │   ├── constants/                 # Navigation links, corporate data, services list
│   │   ├── layouts/                   # MainLayout shell
│   │   ├── pages/                     # Routed views (Home, About, Services, Leadership, Contact, etc.)
│   │   ├── services/                  # Serverless Google Apps Script API client (api.js)
│   │   ├── styles/                    # Global Tailwind CSS definitions and custom design tokens
│   │   ├── utils/                     # SEO metadata updater (seo.js) & form validation (validation.js)
│   │   ├── App.jsx                    # Route provider with lazy loading and fallback loaders
│   │   └── main.jsx                   # React DOM entry point
│   ├── tests/                         # Node.js automated test suites
│   │   ├── assets.test.js             # Asset & SEO file verification
│   │   ├── contactService.test.js     # Form service & CORS redirect mock tests
│   │   ├── googleAppsScript.test.js   # Apps Script file & column contract tests
│   │   └── validation.test.js         # Input validation & sanitization tests
│   ├── .env.example                   # Client environment variable template
│   ├── .gitignore                     # Frontend-specific ignore file
│   ├── .prettierrc                    # Code formatting configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── index.html                     # HTML5 shell with brand metadata
│   ├── package.json                   # Frontend package definition
│   ├── vercel.json                    # Vercel SPA rewrite and security headers config
│   └── vite.config.js                 # Vite bundler configuration
├── google-apps-script/                # Google Sheets serverless integration
│   ├── Code.gs                        # Production-ready Google Apps Script endpoint
│   └── README.md                      # Apps Script setup & deployment guide
├── .gitignore                         # Repository-level ignore rules
├── package.json                       # Root workspace convenience scripts
└── README.md                          # Comprehensive project documentation
```

---

## 4. Frontend Installation & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Step 1: Clone the Repository
```bash
git clone https://github.com/HSR-Hi-Tech-Solutions/BNS.git
cd BNS
```

### Step 2: Install Dependencies
You can install dependencies from the root or inside the `frontend` folder:
```bash
# From root:
npm --prefix frontend install

# Or inside frontend:
cd frontend && npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to create your local `.env`:
```bash
cp frontend/.env.example frontend/.env
```
Open `frontend/.env` and configure your Google Apps Script URL:
```env
VITE_GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/your_google_apps_script_web_app_url_here/exec
```
*(For initial frontend UI development before deploying Apps Script, you can leave the placeholder in place; the UI will display a helpful configuration message if a submission is attempted).*

### Step 4: Start the Development Server
```bash
# From root:
npm run dev

# Or inside frontend:
npm run dev
```
The application will start with Hot Module Replacement (HMR) at:
```
http://localhost:5173
```

---

## 5. Production Build Instructions

To generate optimized, production-ready static assets:

```bash
# From root:
npm run build

# Or inside frontend:
npm run build
```

The output files are compiled into `frontend/dist/`.

### Previewing the Production Build Locally
```bash
# From root:
npm run preview

# Or inside frontend:
npm run preview
```
This boots a lightweight local static server previewing the exact production output.

---

## 6. Running Automated Tests & Code Quality

The repository uses Node's native test runner (`node:test`) and strict linting:

```bash
# Run all automated tests (18 tests covering assets, SEO, validation, & contact service)
npm test

# Run ESLint check
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Check Prettier code formatting
npm run format:check

# Auto-format all source code
npm run format
```

---

## 7. Google Sheets & Apps Script Setup Guide

Follow this guide to set up the serverless Google Sheets integration in less than 3 minutes.

### Step 1: Create the Destination Google Sheet
1. Navigate to [Google Sheets](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Name the spreadsheet: **BNS Corporate Enquiries**.
3. (Optional) Name the first tab: **Enquiries**. If left as "Sheet1", the script will automatically create the "Enquiries" tab on first run.

### Step 2: Open the Apps Script Editor
1. In the Google Sheets menu, click **Extensions** → **Apps Script**.
2. Rename the Apps Script project (top left) to: **BNS Contact Form Web App**.

### Step 3: Insert the Apps Script Code
1. Erase any placeholder code inside `Code.gs`.
2. Copy the entire content of [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) from this repository and paste it into the editor.
3. Save the script (`Ctrl + S` or click the floppy disk icon).

### Step 4: Authorize & Verify Initial Permissions
1. In the toolbar function dropdown, select `testSubmission`.
2. Click **Run**.
3. When prompted with **Authorization Required**, click:
   - **Review permissions**
   - Choose your Google account
   - Click **Advanced** (at the bottom-left of the dialog)
   - Click **Go to BNS Contact Form Web App (unsafe)**
   - Click **Allow**
4. The test execution will complete. Switch back to your Google Sheet tab:
   - Row 1 will now feature bold, styled headers with the BNS corporate navy palette (`#0B1120`).
   - A sample test row will be appended. You can delete this test row after verifying.

### Step 5: Deploy as a Public Web App
1. At the top right of the Apps Script window, click **Deploy** → **New deployment**.
2. Click the gear icon (**Select type**) next to "Select type" and choose **Web app**.
3. Configure the deployment settings:
   - **Description**: `BNS Production Contact Form v1`
   - **Execute as**: `Me (<your-email>@...)`  
     *(Essential: Grants the script permission to write rows into your private Google Sheet).*
   - **Who has access**: `Anyone`  
     *(Essential: Allows website visitors to submit enquiries without needing a Google sign-in).*
4. Click **Deploy**.
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 8. Environment Variable Configuration

| Variable | Description | Default / Example | Required |
|---|---|---|:---:|
| `VITE_GOOGLE_SHEETS_SCRIPT_URL` | Deployed Google Apps Script Web App endpoint URL | `https://script.google.com/macros/s/.../exec` | **Yes** (in production) |

### Setting Environment Variables in Hosting Platforms
- **Vercel**: Project Settings → Environment Variables → Add `VITE_GOOGLE_SHEETS_SCRIPT_URL`.
- **Netlify**: Site configuration → Environment variables → Add `VITE_GOOGLE_SHEETS_SCRIPT_URL`.
- **Cloudflare Pages**: Settings → Environment variables → Add `VITE_GOOGLE_SHEETS_SCRIPT_URL`.

> [!NOTE]
> Variables prefixed with `VITE_` are embedded into the client bundle at build time. Never store private API keys or service account credentials in Vite environment variables. The Google Apps Script Web App URL is safe for client-side use because all write permissions are managed on Google's server side.

---

## 9. Google Sheet Column Specification

Each valid submission is appended as a distinct new row formatted as follows:

| Column | Header | Description | Sample Data |
|:---:|---|---|---|
| **A** | `Submission Date` | Timestamp in IST (`Asia/Kolkata`) | `2026-10-30 17:15:00 IST` |
| **B** | `Full Name` | Visitor full name (2–120 chars) | `Subhasish Mukherjee` |
| **C** | `Email` | Sanitized email address | `contact@bengalnewsservice.com` |
| **D** | `Phone Number` | Contact phone (optional) | `+91 9876543210` |
| **E** | `Organization` | Organisation / Company (optional) | `Bengal News Service Corporate` |
| **F** | `Service / Subject` | Inquired service category | `Public Relations & Corporate Communications` |
| **G** | `Message` | Enquiry message (10–2000 chars) | `We would like to discuss a corporate PR retainer.` |
| **H** | `Status` | Processing workflow status | `New` |

---

## 10. Contact Form Testing Instructions

### Local Integration Test
1. Set `VITE_GOOGLE_SHEETS_SCRIPT_URL` in `frontend/.env` to your deployed Apps Script URL.
2. Start the local server: `npm run dev`.
3. Open `http://localhost:5173/contact`.
4. Test validation states:
   - Try submitting with empty fields → field errors appear and focus jumps to the first error.
   - Enter an invalid email (e.g., `invalid@`) → email format error appears.
   - Enter a message under 10 characters → minimum length error appears.
5. Test valid submission:
   - Fill all required fields and click **Send Enquiry**.
   - The button shows a spinner with text **"Sending…"** and is disabled against double-clicks.
   - On success, the form is replaced by the green **"Message Sent Successfully"** confirmation screen.
   - Check your Google Sheet: the new submission row appears immediately.

### Automated Test Verification
Run the integrated test suite anytime:
```bash
npm test
```
This tests:
- Unconfigured endpoint handling (throws informative error instead of silent failure).
- Browser-compatible `text/plain` POST submission and 302 redirect following.
- Server-side validation failure handling.
- HTTP status failure handling.
- Asset and SEO file integrity.

---

## 11. Static Hosting Deployment Guide

Because the application is 100% static, it can be deployed on any global static hosting platform.

### Option A: Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the `BNS` repository.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. In **Environment Variables**, add:
   - `VITE_GOOGLE_SHEETS_SCRIPT_URL` = your Google Apps Script URL.
6. Click **Deploy**. Vercel will build the site and provide a production URL.
*(SPA routing and cache headers are pre-configured in `frontend/vercel.json`).*

### Option B: Netlify
1. Log in to [Netlify](https://www.netlify.com) and click **Add new site** → **Import an existing project**.
2. Select the repository.
3. Configure Build Settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
4. In **Site configuration** → **Environment variables**, add `VITE_GOOGLE_SHEETS_SCRIPT_URL`.
5. Click **Deploy Site**.
*(SPA routing is handled automatically by `frontend/public/_redirects`).*

### Option C: Cloudflare Pages
1. Log in to the Cloudflare dashboard and go to **Workers & Pages** → **Create application** → **Pages**.
2. Connect your Git repository.
3. Set the build configuration:
   - **Framework preset**: `Vite`
   - **Root directory**: `frontend`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Under **Environment variables**, add `VITE_GOOGLE_SHEETS_SCRIPT_URL`.
5. Click **Save and Deploy**.

---

## 12. License & Legal

© 2024–2026 **Bengal News Service PR & Consultancy Private Limited** (CIN: `U73100WB2024PTC275987`). All Rights Reserved.  
All content, branding, trademarks, and source code are the exclusive property of Bengal News Service PR & Consultancy Pvt. Ltd.
