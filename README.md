# 🎯 Grow X Technologies - Agency Website

A premium, fully-featured agency website with CMS admin panel for portfolio management.

**Features:**
- ✨ Premium design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖼️ Portfolio management via admin panel
- 🔐 Secure admin panel with Netlify Identity
- 🚀 One-click deployment to Netlify
- 🌍 Custom domain support
- 📸 Image upload capability
- 🔄 Git-based workflow

---

## 📁 PROJECT STRUCTURE

```
growx-digital-agency-site/
├── admin/                          # Admin panel files
│   ├── index.html                 # Admin interface
│   └── config.yml                 # CMS configuration
│
├── _portfolio/                     # Portfolio items (auto-generated)
│   └── sample-project.md          # Example portfolio item
│
├── images/
│   └── uploads/                   # Uploaded portfolio images
│
├── index.html                     # Homepage
├── portfolio.html                 # Portfolio page
├── about.html                     # About page
├── services.html                  # Services page
├── contact.html                   # Contact page
│
├── script.js                      # JavaScript functionality
├── portfolio-data.json            # Portfolio data (auto-updated)
│
├── DEPLOYMENT_GUIDE.md           # Step-by-step deployment
├── ADMIN_GUIDE.md                # Admin panel usage
└── README.md                      # This file
```

---

## 🚀 QUICK START

### 1. Local Development (Optional)

```bash
# Navigate to project folder
cd growx-digital-agency-site

# Open in browser (Windows)
start index.html

# Or use Python server (if installed)
python -m http.server 8000
# Visit http://localhost:8000
```

### 2. Deploy to Netlify (Recommended)

See **DEPLOYMENT_GUIDE.md** for complete instructions.

**Quick version:**
1. Push to GitHub
2. Connect GitHub to Netlify
3. Netlify deploys automatically
4. Connect your GoDaddy domain

### 3. Access Admin Panel

Once deployed:
- **URL:** `yourdomain.com/admin`
- **Username:** Your email
- **Password:** Set during Netlify Identity setup

---

## 📄 PAGES INCLUDED

| Page | Path | Purpose |
|------|------|---------|
| **Home** | `/` or `/index.html` | Landing page with hero, services, portfolio |
| **Portfolio** | `/portfolio.html` | Full portfolio grid with filters |
| **About** | `/about.html` | Company story and team |
| **Services** | `/services.html` | Detailed service offerings |
| **Contact** | `/contact.html` | Contact form |
| **Admin** | `/admin` | Portfolio management (requires login) |

---

## 🎨 CUSTOMIZATION

### Change Colors

Edit CSS variables in each HTML file:

```css
:root {
    --color-primary: #00FF88;      /* Green accent */
    --color-bg: #0B0B0B;           /* Dark background */
    --color-text: #FFFFFF;         /* White text */
}
```

### Update Company Info

Find and replace:
- `Grow X Technologies` → Your company name
- `hello@growxtech.com` → Your email
- `+91 98765 43210` → Your phone
- `123 Business District` → Your address

### Add Navigation Links

Update links in header across all pages:

```html
<a href="custom-page.html">Custom Link</a>
```

---

## 🔐 SECURITY

### Admin Panel Security

- ✅ Secured with Netlify Identity
- ✅ Two-factor authentication available
- ✅ Git Gateway integration
- ✅ Automatic HTTPS

### Best Practices

1. Use strong passwords (12+ characters)
2. Enable Netlify Identity "Invite only"
3. Don't share login credentials
4. Regularly update password

---

## 📊 PORTFOLIO MANAGEMENT

### Adding Projects

1. Go to `/admin`
2. Click "Portfolio" in sidebar
3. Click "New Portfolio"
4. Fill in details:
   - Title
   - Category (Political, Events, Branding, Shoots)
   - Description
   - Upload image
   - Client name (optional)
   - Date (optional)
5. Click "Publish"

**Done!** Project appears on site in 1-2 minutes.

### Categories

- **Political** - Campaign work, voter engagement
- **Events** - Conferences, launches, ceremonies
- **Branding** - Logo design, brand identity
- **Shoots** - Photography, video, commercials
- **Digital Marketing** - Social, ads, content

See **ADMIN_GUIDE.md** for detailed instructions.

---

## 🌐 DEPLOYMENT

### Netlify Deployment (Recommended)

**Best for:**
- Automatic updates on GitHub push
- Admin panel with image uploads
- Custom domain support
- Free HTTPS

**See:** DEPLOYMENT_GUIDE.md

### Alternative: GitHub Pages

**Simpler, but:**
- No admin panel
- No image uploads
- Manual updates only

---

## 🎯 FEATURES

### Frontend
- ✨ Premium dark theme design
- 📱 Mobile responsive
- ⚡ Fast loading (optimized)
- 🎨 Tailwind CSS styling
- 🎬 Smooth animations
- 🔍 SEO friendly

### Admin Panel (Decap CMS)
- 📸 Image upload
- 📝 Content management
- 🔐 Secure login
- 🔄 Git integration
- 📊 Content collections

### Deployment
- 🚀 One-click deployment
- 🔄 Auto-deploys on GitHub push
- 🌐 Custom domain ready
- 🔒 Free HTTPS
- ⚡ Global CDN

---

## 🆘 TROUBLESHOOTING

### Site won't load

1. Check internet connection
2. Wait 2 minutes
3. Hard refresh: Ctrl+Shift+R
4. Check Netlify build status

### Admin panel blank

1. Ensure Netlify Identity enabled
2. Wait 5 minutes
3. Hard refresh
4. Check browser console (F12)

### Portfolio images missing

1. Check image format (JPG/PNG)
2. Verify file size < 2MB
3. Wait 2 minutes for rebuild
4. Hard refresh page

See **DEPLOYMENT_GUIDE.md** for more solutions.

---

## 📚 DOCUMENTATION

| Document | Purpose |
|----------|---------|
| **DEPLOYMENT_GUIDE.md** | Complete deployment instructions |
| **ADMIN_GUIDE.md** | Portfolio management guide |
| **README.md** | This file - Project overview |

---

## 🔧 TECH STACK

- **HTML5** - Page structure
- **Tailwind CSS** - Styling (via CDN)
- **Vanilla JavaScript** - Interactivity
- **Decap CMS** - Admin panel
- **GitHub** - Version control
- **Netlify** - Hosting & deployment

No frameworks, no build process, no complex setup. Pure HTML/CSS/JS!

---

## 📈 WHAT'S NEXT

After deployment:

1. ✅ Test all pages
2. ✅ Add portfolio projects
3. Add Google Analytics
4. Add SEO meta tags
5. Create XML sitemap
6. Submit to search engines

---

## 💬 CONTACT & SUPPORT

### For Website Issues
- Email: hello@growxtech.com
- Phone: +91 98765 43210
- WhatsApp: Click floating button

### For Netlify Issues
- [Netlify Support Docs](https://docs.netlify.com)
- [Netlify Support Email](https://app.netlify.com/support)

### For CMS Issues
- [Decap CMS Documentation](https://decapcms.org)
- [GitHub Issues](https://github.com/decaporg/decap-cms)

---

## 📜 LICENSE

Open source - free to modify and use.

---

## 🙏 ACKNOWLEDGMENTS

Built with:
- Tailwind CSS
- Decap CMS
- Netlify
- Font Awesome Icons
- Unsplash Images

---

**Version:** 1.0  
**Last Updated:** April 2026  
**Status:** Production Ready ✅

---

**Ready to deploy? Start with DEPLOYMENT_GUIDE.md!** 🚀
