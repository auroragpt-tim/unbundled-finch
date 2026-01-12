# Unbundled Finch - Legal Document Processing Service

A Swiss-style, static website with a client portal, designed for deployment on Netlify.

## Project Overview

- **Stack**: React 19, Tailwind CSS 4, Wouter (Routing)
- **Design System**: Swiss International Typographic Style (Grid-based, Minimal, Neutral)
- **Features**:
  - Public Marketing Pages (Home, Services, Process, Pricing, About, Contact)
  - Client Portal (Dashboard, New Request, Documents, Messages, Billing)
  - Demo Mode Safety (Warnings, Disabled Uploads)

## 🚀 Deployment Instructions (Netlify)

This project is configured for immediate deployment on Netlify.

### 1. Connect to GitHub
Push this repository to your GitHub account.

### 2. Create New Site on Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import from an existing project"**.
3. Select **GitHub** and choose your `unbundled-finch` repository.

### 3. Configure Build Settings
Netlify should automatically detect the settings from `netlify.toml`, but verify them:
- **Build command**: `npm run build`
- **Publish directory**: `dist/public`

Click **"Deploy site"**.

## 🔐 Authentication Setup (Netlify Identity)

To make the Portal truly secure (instead of the current demo login), enable Netlify Identity:

1. Go to **Site Settings** > **Identity** > **Enable Identity**.
2. Under **Registration preferences**, set to **Invite only** (recommended for a private client portal).
3. Under **Services** > **Git Gateway**, enable it if you plan to use Netlify CMS (optional).
4. **Protecting Routes**:
   - The current app handles routing on the client side (`wouter`).
   - To enforce server-side protection, you can add role-based redirects in `netlify.toml`:
     ```toml
     [[redirects]]
       from = "/portal/*"
       to = "/portal/login"
       status = 401
       force = true
       conditions = {Role = ["client"]}
     ```
   - *Note: This requires integrating the Netlify Identity Widget into the React app code.*

## ⚠️ Demo Mode & Safety

This project is currently in **DEMO MODE**.
- **File Uploads**: Disabled in the UI.
- **Forms**: Do not submit real data; they are for demonstration only.
- **Data Storage**: No backend database is connected. All data is local/mocked.

### To Go Live:
1. **Connect a Backend**: Integrate with a real API (e.g., Supabase, Firebase, or a custom Node.js server).
2. **Enable Real Auth**: Replace the mock login in `Login.tsx` with the Netlify Identity Widget or Auth0.
3. **Secure Uploads**: Connect the upload buttons to an S3 bucket or secure file storage service.
4. **Remove Warnings**: Delete the "DEMO MODE" banners from `PortalLayout.tsx` and other pages.

## 🎨 Design System

- **Font**: Inter (Neo-grotesque sans-serif)
- **Colors**: Stark Black & White with functional accents (Swiss Red/Blue).
- **Layout**: Strict grid alignment, high contrast, minimal decoration.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
