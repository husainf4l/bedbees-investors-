# 🚀 COMPLETE SETUP INSTRUCTIONS

## Complete Next.js 15 BedBees Investor Website

This is your complete, production-ready investor website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 📋 WHAT YOU HAVE

### ✅ 7 Complete Pages
1. **Home (/)** - Hero with background image, platform overview, problems, features, advantages
2. **About (/about)** - Mission statement, industry problems, why commission-free matters
3. **Solution (/solution)** - How we fix problems, comparison table, competitive advantages
4. **Business Model (/business-model)** - Revenue model, subscription details, financial framework
5. **Investor (/investor)** - Investment structure, roadmap, investor benefits, legal disclaimer
6. **FAQ (/faq)** - 8 common questions with accordion interface
7. **Contact (/contact)** - Full contact form with validation

### ✅ Complete Components
- Sticky Navbar with mobile menu
- Footer with social links
- Hero section with image background
- FAQ Accordion
- Comparison table (BedBees vs Booking/Airbnb/Expedia)
- Roadmap timeline (Q1-Q4)
- Investor information boxes
- Animated CTAs and sections

### ✅ Features
- Framer Motion animations throughout
- Fully responsive design
- TypeScript for type safety
- Centralized content in `siteConfig.ts`
- Working contact form API
- SEO-friendly structure

---

## 🛠️ INSTALLATION & SETUP

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- All development dependencies

### Step 2: Add Hero Image

**IMPORTANT:** The website needs a hero image to display properly.

1. **Download a travel-related image** from:
   - [Unsplash - Travel Photos](https://unsplash.com/s/photos/travel)
   - [Pexels - Travel](https://pexels.com/search/travel/)
   - [Pixabay - Travel](https://pixabay.com/images/search/travel/)

2. **Image should be:**
   - At least 1920x1080 pixels
   - Travel-related (world map, airplane, destinations, etc.)
   - High quality JPG or PNG

3. **Save it as `hero.jpg` in the `/public` folder**

Example path: `/home/aqlaan/Desktop/bedbeesinvestor/public/hero.jpg`

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 CUSTOMIZATION

### Update All Content

All text content is in **one central file**: `/lib/siteConfig.ts`

Edit this file to change:
- Platform description
- Investor information
- Features and benefits
- FAQ questions
- Contact email
- Social media links
- Comparison table data
- Roadmap timeline

### Example: Change Contact Email

Open `/lib/siteConfig.ts` and find:

```typescript
contact: {
  email: "invest@bedbees.com",  // ← Change this
  social: {
    twitter: "https://twitter.com/bedbees",
    linkedin: "https://linkedin.com/company/bedbees",
    instagram: "https://instagram.com/bedbees",
  },
},
```

---

## 📧 CONTACT FORM SETUP

The contact form currently **logs submissions to the console**. To make it send real emails:

### Option 1: Use Resend (Recommended)

1. **Sign up at [Resend.com](https://resend.com)**

2. **Install Resend:**
```bash
npm install resend
```

3. **Create `.env.local` in project root:**
```
RESEND_API_KEY=your_api_key_here
```

4. **Update `/app/api/contact/route.ts`:**

```typescript
import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, investmentAmount, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: `New Investor Inquiry from ${name}`,
      html: `
        <h2>New Investor Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Investment Amount:</strong> ${investmentAmount || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### Option 2: Use SendGrid

Similar process - install `@sendgrid/mail` and use their API.

---

## 🚀 DEPLOYMENT

### Deploy to Vercel (Easiest)

1. **Push code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Go to [Vercel.com](https://vercel.com)**

3. **Import your GitHub repository**

4. **Add environment variables** (if using email service):
   - Add `RESEND_API_KEY` or your email service key

5. **Deploy!** - Vercel auto-detects Next.js

### Build Locally

```bash
npm run build
npm run start
```

---

## 📁 COMPLETE FILE STRUCTURE

```
bedbeesinvestor/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── business-model/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── investor/
│   │   └── page.tsx
│   ├── solution/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CTAButtons.tsx
│   ├── FAQAccordion.tsx
│   ├── Footer.tsx
│   ├── InvestorBox.tsx
│   ├── Navbar.tsx
│   ├── ProblemGrid.tsx
│   ├── RoadmapTimeline.tsx
│   ├── SectionTitle.tsx
│   └── SolutionComparison.tsx
├── lib/
│   └── siteConfig.ts
├── public/
│   ├── hero.jpg (YOU NEED TO ADD THIS!)
│   └── README.md
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✅ BEFORE LAUNCHING

### Pre-Launch Checklist:

- [ ] Add hero image (`public/hero.jpg`)
- [ ] Update contact email in `lib/siteConfig.ts`
- [ ] Update social media links in `lib/siteConfig.ts`
- [ ] Set up contact form email integration
- [ ] Test all pages and links
- [ ] Test contact form submission
- [ ] Create legal pages (Privacy Policy, Terms, Disclaimer)
- [ ] Optimize images for web
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] **Consult lawyer** about investor disclaimers

---

## 🎯 QUICK START SUMMARY

```bash
# 1. Install dependencies
npm install

# 2. Add hero.jpg to /public folder

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000

# 5. Customize content in /lib/siteConfig.ts

# 6. Deploy to Vercel when ready
```

---

## 🔧 TROUBLESHOOTING

### TypeScript Errors Before Installing

If you see TypeScript errors, it's normal - they'll disappear after running `npm install`.

### Hero Image Not Showing

Make sure:
1. File is named exactly `hero.jpg`
2. File is in `/public` folder
3. Image file is valid (not corrupted)

### Contact Form Not Working

1. Check browser console for errors
2. Verify API route at `/api/contact`
3. Set up email service integration (see Contact Form Setup above)

---

## 📞 SUPPORT

All content can be edited in `/lib/siteConfig.ts`. This includes:
- Text for all pages
- Investor information
- FAQ questions
- Navigation links
- Contact information

---

## 🎉 YOU'RE READY!

Your complete investor website is ready to go. Just:
1. Install dependencies
2. Add hero image
3. Run the dev server
4. Customize content
5. Deploy!

**Good luck with your investor fundraising! 🚀**
