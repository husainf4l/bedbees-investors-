# 🚀 QUICK REFERENCE GUIDE

## Immediate Next Steps

### 1. Install Dependencies (5 minutes)
```bash
cd /home/aqlaan/Desktop/bedbeesinvestor
npm install
```

### 2. Add Hero Image (2 minutes)
- Download a travel image from [Unsplash](https://unsplash.com/s/photos/travel)
- Save as `hero.jpg` in `/public` folder
- Minimum size: 1920x1080px

### 3. Start Development Server (1 minute)
```bash
npm run dev
```
Then open http://localhost:3000

---

## 📝 Key Files to Edit

### Content Changes → `/lib/siteConfig.ts`
This ONE file controls all website content:
- Platform description
- Investor details
- FAQ questions
- Contact info
- Social links
- Everything!

### Styling → `/app/globals.css`
Global styles and Tailwind customization

### Individual Pages → `/app/[page]/page.tsx`
- `/app/page.tsx` - Home
- `/app/about/page.tsx` - About
- `/app/solution/page.tsx` - Solution
- `/app/business-model/page.tsx` - Business Model
- `/app/investor/page.tsx` - Investor Info
- `/app/faq/page.tsx` - FAQ
- `/app/contact/page.tsx` - Contact

---

## 🎨 What You Got

### Pages (7 total)
✅ Home - Hero + Overview  
✅ About - Mission + Story  
✅ Solution - How it works  
✅ Business Model - Revenue model  
✅ Investor - Investment details  
✅ FAQ - Common questions  
✅ Contact - Contact form  

### Features
✅ Framer Motion animations  
✅ Responsive design  
✅ Mobile menu  
✅ Contact form with API  
✅ Comparison table  
✅ Timeline roadmap  
✅ FAQ accordion  
✅ TypeScript  
✅ Tailwind CSS  

---

## 🔄 Common Tasks

### Change Investor Email
`/lib/siteConfig.ts` → Line ~250
```typescript
contact: {
  email: "invest@bedbees.com", // ← Change this
}
```

### Update Investment Amounts
`/lib/siteConfig.ts` → Line ~25
```typescript
ownership: [
  { amount: 1000, percentage: 0.04 },
  // Add or modify amounts here
]
```

### Change FAQ Questions
`/lib/siteConfig.ts` → Line ~150
```typescript
faqs: [
  {
    question: "Your question?",
    answer: "Your answer",
  },
  // Add more FAQs here
]
```

### Update Roadmap
`/lib/siteConfig.ts` → Line ~130
```typescript
roadmap: [
  {
    quarter: "Q1",
    title: "Your Title",
    tasks: ["Task 1", "Task 2"]
  }
]
```

---

## 📧 Enable Contact Form Emails

Currently logs to console. To send real emails:

### Quick Setup with Resend
```bash
npm install resend
```

Create `.env.local`:
```
RESEND_API_KEY=your_key_here
```

Update `/app/api/contact/route.ts` - see SETUP_INSTRUCTIONS.md

---

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Deploy!
```

---

## 📦 All Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Run production build
npm run lint       # Check for errors
```

---

## 🎯 Color Scheme

Primary Blue: `#2563eb` (primary-600)  
Light Blue: `#dbeafe` (primary-100)  
Dark Blue: `#1e3a8a` (primary-900)  

Change in `tailwind.config.ts`

---

## 📁 Important Folders

```
/app          → All pages
/components   → Reusable components
/lib          → Configuration (siteConfig.ts)
/public       → Static files (add hero.jpg here!)
```

---

## ⚠️ Before Going Live

- [ ] Add hero.jpg to /public
- [ ] Update contact email
- [ ] Test contact form
- [ ] Update social links
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Set up email service
- [ ] Test on mobile
- [ ] **Consult lawyer** about investment disclaimers

---

## 🆘 Need Help?

1. Check `SETUP_INSTRUCTIONS.md` for detailed setup
2. Check `README.md` for project overview
3. All content is in `/lib/siteConfig.ts`
4. All pages are in `/app/[page]/page.tsx`

---

## 💡 Pro Tips

1. **Only edit `/lib/siteConfig.ts`** for content changes
2. **Test locally** before deploying (`npm run dev`)
3. **Add hero image** before first run
4. **Use Vercel** for easiest deployment
5. **Keep TypeScript errors in mind** until you run `npm install`

---

## ✅ You're All Set!

Everything is built and ready. Just:
1. `npm install`
2. Add `hero.jpg` to `/public`
3. `npm run dev`
4. Customize `/lib/siteConfig.ts`
5. Deploy!

**Good luck! 🎉**
