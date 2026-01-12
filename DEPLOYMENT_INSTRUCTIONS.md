# Unbundled Finch - Netlify Deployment Instructions

## ✅ What You Have

This is now a **complete, production-ready Vite + React + TypeScript project** with:

- ✅ `package.json` (all dependencies installed)
- ✅ `vite.config.ts` (Vite configuration)
- ✅ `tsconfig.json` (TypeScript configuration)
- ✅ `netlify.toml` (Netlify build configuration)
- ✅ All source files in `src/`
- ✅ Public assets in `public/`
- ✅ Successfully builds to `dist/` folder

## 🚀 Deployment Steps

### Step 1: Upload to GitHub

1. Create a new repository on GitHub called `unbundled-finch`
2. Open a terminal in the `unbundled-finch-deploy` folder
3. Run these commands:

```bash
git init
git add .
git commit -m "Initial Vite React project with pages and portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/unbundled-finch.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify.com](https://netlify.com) and sign in
2. Click **"New site from Git"**
3. Select **GitHub** and authorize
4. Choose the `unbundled-finch` repository
5. Netlify will auto-detect the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

### Step 3: Enable Netlify Identity (for Client Portal)

1. In your Netlify Site Dashboard, go to **Site Settings** → **Identity**
2. Click **"Enable Identity"**
3. Configure authentication method (Email/Password recommended)
4. Users can now sign up and log in to the Client Portal

### Step 4: Configure Custom Domain (Optional)

1. In Netlify, go to **Site Settings** → **Domain Management**
2. Add your custom domain (e.g., `unbundledfinch.com`)
3. Update your domain registrar's DNS records to point to Netlify

## 📋 Checklist Before Deploying

- [ ] GitHub repository created and code pushed
- [ ] Netlify site connected to GitHub
- [ ] Build succeeds (check Netlify deploy logs)
- [ ] Site is live at `https://your-site.netlify.app`
- [ ] Netlify Identity is enabled
- [ ] Contact form is working (test it)
- [ ] Client portal login works

## 🔧 Local Development (Optional)

To test locally before deploying:

```bash
cd unbundled-finch-deploy
npm install  # (already done, but just in case)
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 📝 Important Notes

- **Formspree Integration**: The contact form uses Formspree ID `meeeqkyp`. Make sure this is active in your Formspree dashboard.
- **Email Address**: All contact emails go to `Vanguard@unbundledfinch.com`. Ensure this email is set up to receive messages.
- **File Uploads**: The file upload UI is ready, but you'll need to configure S3 or another storage service to actually store files.
- **Database**: The portal currently uses mock data. To persist client requests, integrate a database like Supabase or Firebase.

## 🆘 Troubleshooting

**Build fails on Netlify?**
- Check the Netlify deploy logs for errors
- Ensure `package.json` and `vite.config.ts` are present
- Verify the build command is `npm run build`

**Site won't load?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that Netlify deployment is complete (green checkmark)
- Verify DNS is pointing to Netlify (if using custom domain)

**Netlify Identity not working?**
- Ensure Identity is enabled in Site Settings
- Check that the Netlify Identity script is in `index.html`
- Test with a test email address first

---

**Questions?** Contact: Vanguard@unbundledfinch.com
