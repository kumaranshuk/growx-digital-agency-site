# 🚀 DEPLOYMENT GUIDE - Grow X Technologies

## Complete Setup Instructions for Netlify + GoDaddy

---

## 📋 TABLE OF CONTENTS

1. [Prerequisites](#prerequisites)
2. [GitHub Repository Setup](#github-repository-setup)
3. [Netlify Deployment](#netlify-deployment)
4. [Admin Panel Setup](#admin-panel-setup)
5. [GoDaddy Domain Connection](#godaddy-domain-connection)
6. [Post-Deployment Checklist](#post-deployment-checklist)

---

## ✅ PREREQUISITES

Before starting, ensure you have:

- A **GitHub account** (free at github.com)
- A **Netlify account** (free at netlify.com)
- Access to **GoDaddy domain dashboard**
- All website files ready

---

## 📁 GITHUB REPOSITORY SETUP

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `growx-digital-agency-site`
3. Description: "Grow X Technologies Agency Website"
4. Choose **Public** (free plan)
5. Click **Create repository**

### Step 2: Push Your Files to GitHub

Open terminal/PowerShell in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Grow X agency website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/growx-digital-agency-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Verify Your Repository

Visit `https://github.com/YOUR_USERNAME/growx-digital-agency-site` and confirm all files are there.

---

## 🌐 NETLIFY DEPLOYMENT

### Option A: Deploy from GitHub (Recommended)

This is the BEST method because it enables automatic deployments when you push changes.

#### Step 1: Connect GitHub

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Click **"Authorize Netlify"**
5. Select your `growx-digital-agency-site` repository
6. Click **"Deploy site"**

Netlify will:
- Build your site (takes 1-2 minutes)
- Assign a temporary URL like `https://xyz123.netlify.app`
- Deploy automatically when you push to GitHub

#### Step 2: Auto-Deploy is Now Active

Every time you push changes to GitHub:
```bash
git add .
git commit -m "Updated portfolio"
git push
```

Your site updates automatically in 30-60 seconds! ⚡

---

### Option B: Deploy Without GitHub (Drag & Drop)

If you prefer not to use GitHub:

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Create a new site"**
3. Choose **"Deploy manually"**
4. Drag your entire project folder into the box
5. Done! Your site is live

**Note:** With this method, you must manually re-upload after making changes. GitHub is better.

---

## 🔐 ADMIN PANEL SETUP (CRITICAL)

### Step 1: Enable Netlify Identity

1. Log in to Netlify
2. Go to your site → **Site settings**
3. Left sidebar → **"Identity"**
4. Click **"Enable Identity"**

### Step 2: Enable Git Gateway

1. Still in Identity settings
2. Under **"Registration"** → set to **"Invite only"** (for security)
3. Scroll down to **"Services"** section
4. Find **"Git Gateway"**
5. Click **"Enable Git Gateway"**
6. Confirm when prompted

### Step 3: Create Admin User

1. Click **"Invite users"**
2. Enter your email address
3. Click **"Send"**
4. Check your email for invitation
5. Click the Netlify link and set your password
6. You're now an admin!

### Step 4: Access Admin Panel

Visit: `https://YOUR_SITE.netlify.app/admin`

**You should see:**
- Netlify Identity login widget
- Portfolio collection interface
- Image upload capability

---

## 📸 MANAGING PORTFOLIO THROUGH ADMIN

### Add New Portfolio Item

1. Go to `/admin`
2. Log in with your email/password
3. Click **"Portfolio"** in left sidebar
4. Click **"New Portfolio"** button
5. Fill in fields:
   - **Title:** Project name
   - **Category:** Political / Events / Branding / Shoots / Digital Marketing
   - **Description:** Short project description
   - **Image:** Click to upload from your computer
   - **Client:** Client name (optional)
   - **Date:** Project completion date (optional)
6. Click **"Publish"**

Changes appear on your site within 1-2 minutes!

### Edit Existing Item

1. Go to `/admin` → **Portfolio**
2. Click on the item you want to edit
3. Make changes
4. Click **"Publish"**

### Delete Item

1. Go to `/admin` → **Portfolio**
2. Click the item
3. Click **"Delete"** button
4. Confirm

---

## 🌍 GODADDY DOMAIN CONNECTION

### Step 1: Add Domain in Netlify

1. Log in to Netlify
2. Go to your site → **Site settings**
3. Left sidebar → **"Domain management"**
4. Click **"Add custom domain"**
5. Enter your domain (e.g., `growxtech.com`)
6. Click **"Verify"**
7. Netlify shows DNS setup instructions

### Step 2: Get Netlify Nameservers

Netlify gives you two options:

**Option A: Change Nameservers (Easiest)**
- Netlify provides 4 nameserver addresses
- Copy these addresses

**Option B: Add DNS Records (Advanced)**
- A Record: `@` → Netlify IP
- CNAME Record: `www` → Netlify URL

### Step 3: Update GoDaddy DNS

1. Log in to [GoDaddy.com](https://godaddy.com)
2. Go to **"My Products"** → **"Domains"**
3. Click your domain name
4. Click **"DNS"** button

#### If Using Nameservers (Option A):

1. Find **"Nameservers"** section
2. Click **"Change"**
3. Select **"Custom nameservers"**
4. Paste Netlify's 4 nameservers
5. Click **"Save"**

#### If Using DNS Records (Option B):

1. Find **"DNS Records"** section
2. Find or create **A Record:**
   - Name: `@`
   - Type: `A`
   - Value: (Netlify IP provided)
   - TTL: 600
3. Find or create **CNAME Record for www:**
   - Name: `www`
   - Type: `CNAME`
   - Value: `YOUR_SITE.netlify.app`
   - TTL: 600
4. **Save each record**

### Step 4: Wait for Propagation

DNS changes take **5 minutes to 48 hours** (usually 15-30 min).

**Check if propagated:**
1. In Netlify, go to Domain management
2. Look for green checkmark next to your domain
3. Your site is live when checkmark appears!

### Step 5: Verify HTTPS

Once domain is connected:
1. Netlify **automatically** provisions an SSL certificate
2. Your site is automatically HTTPS-enabled
3. Should take 5-10 minutes

---

## 🎯 POST-DEPLOYMENT CHECKLIST

### Performance Tests

- [ ] Visit your domain in browser
- [ ] Test responsive design on mobile
- [ ] Click all navigation links
- [ ] Test contact form submission
- [ ] Test portfolio filtering
- [ ] Check image loading

### Admin Panel Tests

- [ ] Access `/admin`
- [ ] Add a new portfolio item
- [ ] Upload an image
- [ ] Verify it appears on main site
- [ ] Edit the item
- [ ] Delete it

### Security Checks

- [ ] Verify HTTPS (green lock icon)
- [ ] Check Identity is "Invite only"
- [ ] Verify Git Gateway is enabled
- [ ] Test that `/admin` requires login

### SEO & Analytics

- [ ] Add Google Analytics (optional)
- [ ] Update meta descriptions
- [ ] Submit sitemap to Google Search Console

---

## 🔧 TROUBLESHOOTING

### Issue: Domain shows "default Netlify page"

**Solution:**
- Wait 30 minutes for DNS propagation
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check GoDaddy DNS settings were saved

### Issue: Admin panel `/admin` shows blank page

**Solution:**
- Ensure Netlify Identity is enabled
- Wait 5 minutes for changes to propagate
- Hard refresh: Ctrl+Shift+Delete then reload

### Issue: Image uploads not working

**Solution:**
- Verify Git Gateway is enabled
- Check you're logged in with correct credentials
- Ensure `images/uploads` folder exists

### Issue: Portfolio items not showing after upload

**Solution:**
- Ensure image file format is .jpg, .png, or .gif
- Wait 2 minutes for Netlify to rebuild
- Check browser console for errors (F12)

---

## 📞 QUICK REFERENCE

| What | Where | How |
|------|-------|-----|
| **Live Site** | Domain name | Visit your domain |
| **Admin Panel** | `/admin` on your domain | `yourdomain.com/admin` |
| **Site Settings** | Netlify dashboard | netlify.com → Your site |
| **DNS Settings** | GoDaddy account | godaddy.com → My Products |
| **Push Changes** | GitHub desktop or terminal | `git push origin main` |

---

## 💡 BEST PRACTICES

1. **Always use GitHub** for version control
2. **Invite only** for admin access (security)
3. **Use meaningful commit messages** when pushing
4. **Test before going live** in development
5. **Backup important portfolio items** locally
6. **Monitor Netlify analytics** for traffic

---

## 🎓 NEXT STEPS

1. ✅ Deploy to Netlify (you are here)
2. ✅ Connect custom domain
3. ✅ Enable admin panel
4. Add Google Analytics
5. Add SEO meta tags
6. Create sitemap.xml
7. Submit to search engines

---

**Need Help?**

- Netlify Docs: https://docs.netlify.com
- Decap CMS Docs: https://decapcms.org
- GoDaddy Support: https://godaddy.com/help

---

**Last Updated:** April 2026  
**Version:** 1.0
