# 📋 QUICK REFERENCE CARD

Print this or keep handy while deploying!

---

## 🚀 DEPLOYMENT (Do This First!)

```bash
# 1. Initialize Git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/growx-digital-agency-site.git
git push -u origin main

# 2. Go to Netlify
https://app.netlify.com

# 3. Connect GitHub repo

# 4. Deploy button (one click!)
```

---

## 🔐 ADMIN PANEL SETUP

```
1. Netlify Dashboard
2. Site Settings → Identity
3. Click "Enable Identity"
4. Scroll to "Git Gateway"
5. Click "Enable Git Gateway"
6. Invite users → Enter your email
7. Set password from email
8. Visit: yourdomain.com/admin
```

---

## 📸 ADD PORTFOLIO ITEM

```
1. Go to yourdomain.com/admin
2. Click "Portfolio" (sidebar)
3. Click "New Portfolio"
4. Fill in:
   - Title (required)
   - Category (required)
   - Description
   - Image (click upload)
   - Client (optional)
   - Date (optional)
5. Publish
6. Wait 2 minutes ✓
```

---

## 🌍 CONNECT DOMAIN

```
NETLIFY:
1. Site Settings → Domain Management
2. Add custom domain
3. Copy nameservers

GODADDY:
1. My Products → Domains
2. Domain → DNS
3. Change nameservers
4. Paste Netlify's 4 nameservers
5. Save

VERIFY:
- Wait 15-30 minutes
- Check Netlify (green ✓)
- Visit your domain
```

---

## 🆘 QUICK FIXES

| Problem | Solution |
|---------|----------|
| Site won't load | Hard refresh: Ctrl+Shift+R |
| Admin blank | Wait 5 min, refresh |
| Images won't upload | Check file size < 2MB, format JPG/PNG |
| Domain not working | Wait 30+ min, check nameservers |
| Build fails | Check Netlify logs (dashboard) |

---

## 📚 READ THESE

| Time | Guide |
|------|-------|
| 5 min | SETUP.md |
| 15 min | DEPLOYMENT_GUIDE.md |
| 10 min | ADMIN_GUIDE.md |
| 20 min | CHECKLIST.md |

---

## 🔑 KEY CREDENTIALS

```
GitHub:
- Username: YOUR_USERNAME
- Repo: growx-digital-agency-site
- Branch: main

Netlify:
- Site: yourdomain.netlify.app
- Temp URL: (assigned after deploy)
- Admin: yourdomain.com/admin

GoDaddy:
- Domain: yourdomain.com
- Nameservers: (from Netlify)
```

---

## ✅ CRITICAL CHECKS

```
BEFORE DEPLOYING:
☐ All files in GitHub
☐ Repo is PUBLIC
☐ Netlify dashboard open

AFTER DEPLOYING:
☐ Site loads on netlify.app URL
☐ All pages work
☐ Images display
☐ Mobile responsive

ADMIN SETUP:
☐ Identity enabled
☐ Git Gateway enabled
☐ Admin user invited
☐ Can login at /admin

DOMAIN SETUP:
☐ Domain added to Netlify
☐ Nameservers updated at GoDaddy
☐ Waited 30+ minutes
☐ Green checkmark on Netlify
```

---

## 🎯 COMMON COMMANDS

```bash
# Update site (always do this)
git add .
git commit -m "Updated portfolio"
git push

# Check status
git status

# View history
git log --oneline
```

---

## 🔗 IMPORTANT LINKS

- **GitHub:** https://github.com
- **Netlify:** https://app.netlify.com
- **GoDaddy:** https://godaddy.com
- **Decap CMS:** https://decapcms.org
- **Netlify Docs:** https://docs.netlify.com

---

## 💡 TIPS

✨ Always commit before pushing  
✨ Test locally before pushing  
✨ Use descriptive commit messages  
✨ Keep images under 2MB  
✨ Optimize images (800px width)  
✨ Wait 2 minutes after publishing  
✨ Hard refresh when testing  

---

## 📞 NEED HELP?

1. Check documentation (SETUP.md, DEPLOYMENT_GUIDE.md)
2. Read CHECKLIST.md for troubleshooting
3. Check Netlify build logs
4. Visit Netlify support docs

---

## ⏱️ ESTIMATED TIME

| Task | Time |
|------|------|
| GitHub setup | 5 min |
| Netlify deploy | 5 min |
| Admin setup | 10 min |
| Add first project | 5 min |
| Domain setup | 5 min (wait 30 min) |
| **TOTAL** | **30 minutes** |

---

**Print this! Keep it handy!** 📋

---

*Last Updated: April 2026*
