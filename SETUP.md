# 🚀 QUICK SETUP GUIDE (5 Minutes)

**Don't want to read everything? Follow this 5-minute guide instead!**

---

## STEP 1: Create GitHub Account (2 minutes)

1. Go to https://github.com/signup
2. Enter email, password, username
3. Verify email
4. Done!

---

## STEP 2: Push Your Site to GitHub (2 minutes)

### On Windows (using PowerShell):

```powershell
# Open PowerShell in your project folder

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - agency website"

# Change branch to main
git branch -M main

# Add remote (go to github.com/new first!)
git remote add origin https://github.com/YOUR_USERNAME/growx-digital-agency-site.git

# Push
git push -u origin main
```

### On Mac (using Terminal):

```bash
# Same commands as above
```

---

## STEP 3: Deploy to Netlify (1 minute)

1. Go to https://app.netlify.com/signup
2. Click **"Sign up with GitHub"**
3. Authorize GitHub
4. Click **"Add new site"** → **"Import an existing project"**
5. Select your GitHub repo
6. Click **"Deploy"**

**Your site is live!** 🎉

Netlify gives you a URL like: `https://xyz123.netlify.app`

---

## STEP 4: Set Up Admin Panel (Optional but Recommended)

Once deployed:

1. In Netlify dashboard, go to **"Site settings"**
2. Left sidebar → **"Identity"**
3. Click **"Enable Identity"**
4. Scroll down → **"Git Gateway"**
5. Click **"Enable Git Gateway"**
6. Click **"Invite users"** → enter your email
7. Check your email for invitation
8. Set your password

Now visit: `https://xyz123.netlify.app/admin`

Login and test adding a portfolio item!

---

## STEP 5: Connect Your Domain (Optional)

### On Netlify:
1. Click **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `growxtech.com`)
4. Netlify shows nameservers

### On GoDaddy:
1. Log in to GoDaddy
2. Go to **"Domains"** → your domain
3. Click **"DNS"**
4. Change nameservers to Netlify's
5. Save

**Done!** Takes 15-30 minutes to activate.

---

## WHAT NOW?

Your site is live! You can:

✅ Visit your site at the Netlify URL  
✅ Add portfolio projects via `/admin`  
✅ Push changes from your computer  
✅ Everything updates automatically  

---

## NEXT: READ THESE

| Document | Read if... |
|----------|-----------|
| **DEPLOYMENT_GUIDE.md** | You want detailed instructions |
| **ADMIN_GUIDE.md** | You want to use the admin panel |
| **CHECKLIST.md** | You want to verify everything works |

---

## TROUBLESHOOTING

**Site won't deploy?**
- Check your GitHub repo has all files
- Check Netlify build log for errors

**Admin panel blank?**
- Wait 5 minutes after enabling features
- Hard refresh: Ctrl+Shift+R

**Domain won't work?**
- Wait 30 minutes for DNS to propagate
- Check Netlify domain settings (green checkmark?)

---

## 💡 IMPORTANT NOTES

1. **Your site is public** - everyone can see it
2. **Admin panel is private** - only you can log in
3. **Changes auto-update** - when you push to GitHub
4. **Portfolio images** - upload via admin panel at `/admin`

---

**That's it! You're done.** 🚀

For detailed help, read DEPLOYMENT_GUIDE.md

---

*Questions? Check the documentation files or Netlify support.*
