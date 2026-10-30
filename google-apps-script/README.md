# BNS Google Sheets Integration & Apps Script Deployment Guide

This directory contains the production-ready Google Apps Script backend for Bengal News Service (BNS). It provides a completely serverless, zero-maintenance endpoint that receives contact form submissions and logs them directly to a designated Google Sheet.

---

## 1. Architecture Overview

```text
┌───────────────────────┐
│  BNS Static Frontend  │ (Vite + React 19)
└───────────┬───────────┘
            │  HTTPS POST (text/plain;charset=utf-8)
            ▼
┌───────────────────────┐
│ Google Apps Script    │ (doPost Web App with LockService concurrency handling)
└───────────┬───────────┘
            │  Direct Spreadsheet API
            ▼
┌───────────────────────┐
│     Google Sheet      │ (Enquiries tab with styled headers)
└───────────────────────┘
```

### Why This Design?
- **Zero Hosting Costs**: No server, database, or container infrastructure to manage.
- **No Database Required**: Submissions are stored directly in your Google Sheet spreadsheet.
- **No SMTP / Email Dependencies**: No email failures, deliverability issues, or spam filters.
- **Instant Client Visibility**: Your team can view, filter, assign, and reply to client enquiries directly inside Google Sheets.
- **CORS & Redirect Compatibility**: The frontend sends `text/plain;charset=utf-8` to bypass preflight CORS `OPTIONS` limitations and automatically follows Google's 302 redirect.

---

## 2. Google Sheet & Apps Script Setup (Step-by-Step)

Follow these steps to deploy your Google Apps Script endpoint in under 3 minutes:

### Step 1: Create the Google Sheet
1. Log in to [Google Sheets](https://sheets.google.com).
2. Create a new blank spreadsheet.
3. Rename the spreadsheet to: **BNS Corporate Enquiries**.
4. Rename the default sheet tab (at the bottom) to: **Enquiries** (or leave it; the script will automatically create/initialize it).

### Step 2: Open Google Apps Script Editor
1. In the Google Sheet top menu, click **Extensions** → **Apps Script**.
2. A new tab will open with the Apps Script editor.
3. Rename the project (top left) from *Untitled project* to **BNS Contact Form Web App**.

### Step 3: Paste the Code
1. In the Apps Script code editor, delete any existing code inside `Code.gs`.
2. Open [`google-apps-script/Code.gs`](./Code.gs) from this repository, copy its entire contents, and paste it into the editor.
3. Click the **Save** icon (diskette icon) or press `Ctrl + S` (`Cmd + S` on macOS).

### Step 4: Verify Initial Permissions
1. In the toolbar function dropdown, select `testSubmission`.
2. Click **Run**.
3. Google will present an **Authorization Required** dialog:
   - Click **Review permissions**.
   - Select your Google account.
   - Click **Advanced** (bottom left of modal).
   - Click **Go to BNS Contact Form Web App (unsafe)**.
   - Click **Allow**.
4. Once completed, check the Execution Log: you should see a JSON success response.
5. Switch to your Google Sheet: you will see the header row styled in BNS Navy with the test row inserted!

### Step 5: Deploy as a Public Web App
1. At the top right of the Apps Script window, click the blue **Deploy** button → **New deployment**.
2. Click the gear icon (**Select type**) next to "Select type" and choose **Web app**.
3. Fill in the deployment settings **exactly** as follows:
   - **Description**: `BNS Production Contact Form Endpoint v1`
   - **Execute as**: `Me (<your-email>@...)` *(Crucial: This gives the script permission to write to your Sheet)*
   - **Who has access**: `Anyone` *(Crucial: Allows the website's visitors to submit enquiries without logging into a Google account)*
4. Click **Deploy**.
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 3. Configure the Static Frontend

1. Open your frontend `.env` file (or create one from `.env.example`):
   ```bash
   cp frontend/.env.example frontend/.env
   ```
2. Paste your copied Web App URL:
   ```env
   VITE_GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
3. If deploying to Vercel, Netlify, or Cloudflare Pages, add `VITE_GOOGLE_SHEETS_SCRIPT_URL` to your hosting platform's Environment Variables settings.

---

## 4. Google Sheet Column Specification

The script automatically generates and formats the following columns in row 1:

| Column # | Header Name | Description | Example Value |
|:---:|---|---|---|
| A | **Submission Date** | Timestamp in IST (`Asia/Kolkata`) | `2026-10-30 17:15:00 IST` |
| B | **Full Name** | Visitor's full name (sanitized) | `Subhasish Mukherjee` |
| C | **Email** | Visitor's email address (lowercased) | `contact@bengalnewsservice.com` |
| D | **Phone Number** | Contact telephone number | `+91 9876543210` |
| E | **Organization** | Company or institution name | `Bengal News Service Corporate` |
| F | **Service / Subject**| Selected service vertical or inquiry topic | `Public Relations & Corporate Communications` |
| G | **Message** | Full message text (up to 2000 chars) | `We would like to discuss a corporate PR retainer.` |
| H | **Status** | Initial workflow status | `New` |

---

## 5. Security & Reliability Highlights

1. **Concurrency Lock (`LockService`)**:
   Under simultaneous submissions, Google Apps Script acquires a script lock for up to 10 seconds. Submissions are queued sequentially, preventing lost data and race conditions.
2. **Server-Side Validation**:
   - Re-checks all inputs before writing.
   - Enforces name length (2–120 chars), email regex format, message length (10–2000 chars), and phone formatting.
3. **Zero Secret Leakage**:
   - Frontend never contains Google API credentials, OAuth client secrets, or private keys.
   - The Web App URL is safe for public client-side consumption.
4. **Health Check Support**:
   - Making an HTTP GET request to the Web App URL returns `{ success: true, status: 'active', ... }` allowing automated uptime verification.
