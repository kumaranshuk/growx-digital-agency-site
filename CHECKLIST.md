# ✅ DEPLOYMENT CHECKLIST

Use this checklist to ensure everything is set up correctly before and after deployment.

---

## PRE-DEPLOYMENT (Before pushing to GitHub)

### Project Files
- [ ] All HTML files present (index, portfolio, about, services, contact)
- [ ] script.js file exists
- [ ] admin folder exists with index.html and config.yml
- [ ] portfolio-data.json file exists
- [ ] images/uploads folder created
- [ ] _portfolio folder created with sample files
- [ ] .gitignore file exists
- [ ] netlify.toml file exists

### Content Updates
- [ ] Company name updated throughout (search for "Grow X")
- [ ] Email address updated (hello@growxtech.com)
- [ ] Phone number updated
- [ ] Address updated
- [ ] All links working (test locally)
- [ ] Contact form Web3Forms key correct

### Files to Push to GitHub
```
✓ index.html
✓ portfolio.html
✓ about.html
✓ services.html
✓ contact.html
✓ script.js
✓ portfolio-data.json
✓ admin/index.html
✓ admin/config.yml
✓ netlify.toml
✓ .gitignore
✓ README.md
✓ DEPLOYMENT_GUIDE.md
✓ ADMIN_GUIDE.md
```

---

## GITHUB SETUP

- [ ] GitHub account created (github.com)
- [ ] Repository created: `growx-digital-agency-site`
- [ ] Repository is PUBLIC
- [ ] Files pushed to main branch
- [ ] All files visible on GitHub website

**Test:** Visit `github.com/YOUR_USERNAME/growx-digital-agency-site`

---

## NETLIFY DEPLOYMENT

### Initial Setup
- [ ] Netlify account created (netlify.com)
- [ ] Site connected to GitHub repository
- [ ] Automatic deployment working (should show green checkmark)
- [ ] Temporary Netlify URL assigned (xyz123.netlify.app)

### Test Temporary Site
- [ ] Visit temporary Netlify URL
- [ ] All pages load correctly
- [ ] Images appear
- [ ] Links work
- [ ] Forms visible
- [ ] Mobile view responsive

### Enable Identity & Git Gateway
- [ ] Identity enabled in Site Settings
- [ ] Registration set to "Invite only"
- [ ] Git Gateway enabled
- [ ] Admin user email invited
- [ ] Invitation email received
- [ ] Password set for admin account
- [ ] Can login to `/admin`

---

## ADMIN PANEL SETUP

### Access & Login
- [ ] Admin panel accessible at `/admin`
- [ ] Netlify Identity login widget visible
- [ ] Can login with email/password
- [ ] Logged in state shows email

### Test Admin Functions
- [ ] Can click "Portfolio" in sidebar
- [ ] Can see "New Portfolio" button
- [ ] Form appears with all fields:
  - [ ] Title field
  - [ ] Category dropdown
  - [ ] Description field
  - [ ] Image upload button
  - [ ] Client field (optional)
  - [ ] Date field (optional)

### Test Image Upload
- [ ] Can click "Choose Image" button
- [ ] Can select image from computer
- [ ] Image preview appears
- [ ] Upload completes without error

### Test Publishing
- [ ] Can enter project details
- [ ] Can upload image
- [ ] "Publish" button works
- [ ] No error messages
- [ ] Portfolio item appears on site (wait 2 minutes)

---

## GODADDY DOMAIN SETUP

### Domain Purchase
- [ ] Domain purchased on GoDaddy
- [ ] Domain not yet configured
- [ ] Domain access/password noted

### Netlify Configuration
- [ ] Domain added in Netlify Site Settings
- [ ] Domain shows in "Custom domains"
- [ ] Netlify provides DNS nameservers OR A/CNAME records

### GoDaddy DNS Update
- [ ] Logged into GoDaddy account
- [ ] Found domain settings
- [ ] Updated nameservers (Option A) OR DNS records (Option B)
- [ ] Changes saved

### Verification
- [ ] Waited 15-30 minutes (or up to 48 hours)
- [ ] Netlify shows green checkmark on domain
- [ ] Site loads on custom domain (not temporary URL)
- [ ] HTTPS enabled (green lock icon)

---

## POST-DEPLOYMENT TESTING

### Frontend Pages
- [ ] Home page loads
- [ ] Portfolio page loads with items
- [ ] Category filters work
- [ ] About page loads
- [ ] Services page loads
- [ ] Contact page loads
- [ ] Contact form submits

### Navigation
- [ ] All header links work
- [ ] All footer links work
- [ ] Mobile menu works
- [ ] Smooth scroll working

### Responsive Design
- [ ] Test on phone (landscape & portrait)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] All content visible
- [ ] No horizontal scroll
- [ ] Images properly sized

### Performance
- [ ] Pages load quickly (< 3 seconds)
- [ ] Images load without errors
- [ ] No console errors (F12)
- [ ] Form submits and shows confirmation

### Security
- [ ] Site is HTTPS (green lock)
- [ ] Admin panel requires login
- [ ] Can't access `/admin` without credentials
- [ ] Password-protected area secure

---

## ADMIN PANEL TESTING

### Portfolio Management
- [ ] Add new portfolio item
- [ ] Item appears on main site (after 2 min)
- [ ] Edit existing item
- [ ] Changes appear on site
- [ ] Delete portfolio item
- [ ] Item removed from site

### Image Management
- [ ] Upload JPG image
- [ ] Upload PNG image
- [ ] Image appears in portfolio grid
- [ ] Image displays correctly
- [ ] Image responsive on mobile

### Data Persistence
- [ ] Refresh browser
- [ ] Data still there
- [ ] Log out and back in
- [ ] Portfolio unchanged
- [ ] Images still visible

---

## GITHUB & DEPLOYMENT AUTO-UPDATE

### Test Auto-Deploy
- [ ] Edit local file
- [ ] Commit change: `git commit -m "Test change"`
- [ ] Push to GitHub: `git push`
- [ ] Netlify starts rebuild (check dashboard)
- [ ] Site updates within 2 minutes
- [ ] Change visible on live site

---

## FINAL CHECKLIST

- [ ] Domain points to correct site
- [ ] Site loads without errors
- [ ] Admin panel fully functional
- [ ] Portfolio items display correctly
- [ ] HTTPS working (green lock)
- [ ] Mobile responsive
- [ ] All forms working
- [ ] Performance acceptable
- [ ] Security measures in place

---

## TROUBLESHOOTING CHECKLIST

If something doesn't work:

### Site Won't Load
- [ ] Check internet connection
- [ ] Wait 5 minutes (rebuild might be happening)
- [ ] Hard refresh: Ctrl+Shift+R
- [ ] Check Netlify build status (dashboard)
- [ ] Check browser console for errors (F12)

### Admin Panel Issues
- [ ] Identity enabled in Netlify?
- [ ] Git Gateway enabled?
- [ ] User invited and password set?
- [ ] Waiting 5 minutes after enabling features?

### Domain Not Working
- [ ] GoDaddy DNS changes saved?
- [ ] Waited 30+ minutes for propagation?
- [ ] Check Netlify domain settings (green checkmark)?
- [ ] Try different DNS propagation checker

### Portfolio Items Missing
- [ ] Published the item? (clicked Publish button?)
- [ ] Waited 2+ minutes for rebuild?
- [ ] Hard refreshed page?
- [ ] Checked portfolio-data.json updated?

---

## WHEN TO GET HELP

Contact support if:
- ❌ Netlify deploy fails (check build logs)
- ❌ Admin panel won't load (check Identity settings)
- ❌ Domain won't connect (check nameservers)
- ❌ Images won't upload (check file size/format)

**Netlify Support:** https://app.netlify.com/support

---

## FINAL SIGN-OFF

Once all items checked:

```
✅ Site deployed to Netlify
✅ Domain configured
✅ Admin panel working
✅ Portfolio functional
✅ All tests passing
✅ Ready for clients!
```

---

**Date Deployed:** _______________  
**Deployed By:** _______________  
**Notes:** _______________

---

*Use this checklist for future deployments and troubleshooting!*
