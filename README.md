# BedBees Investor Website

A modern Next.js 15 investor website for BedBees - a commission-free travel super-app.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Add Hero Image:**

Place a hero image named `hero.jpg` in the `/public` folder.
- Recommended size: 1920x1080px
- Use travel-related imagery (world map, airplane, destinations, etc.)
- Free sources: Unsplash, Pexels, Pixabay

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bedbeesinvestor/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── business-model/
│   │   └── page.tsx          # Business model page
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── faq/
│   │   └── page.tsx          # FAQ page
│   ├── investor/
│   │   └── page.tsx          # Investor information page
│   ├── solution/
│   │   └── page.tsx          # Solution page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── CTAButtons.tsx        # Call-to-action buttons
│   ├── FAQAccordion.tsx      # FAQ accordion component
│   ├── Footer.tsx            # Site footer
│   ├── InvestorBox.tsx       # Investor info display
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProblemGrid.tsx       # Problem grid display
│   ├── RoadmapTimeline.tsx   # Roadmap timeline
│   ├── SectionTitle.tsx      # Reusable section title
│   └── SolutionComparison.tsx # Comparison table
├── lib/
│   └── siteConfig.ts         # Site content & configuration
├── public/
│   └── hero.jpg              # Hero image (YOU NEED TO ADD THIS)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Features

### Pages

1. **Home (/)** - Hero section, platform overview, problems, features, advantages
2. **About (/about)** - Mission, industry problems, commission-free benefits, AI+Community
3. **Solution (/solution)** - How we fix problems, platform comparison, competitive advantages
4. **Business Model (/business-model)** - Revenue model, subscription details, growth framework
5. **Investor (/investor)** - Investment structure, roadmap, investor benefits, disclaimer
6. **FAQ (/faq)** - Common questions with accordion interface
7. **Contact (/contact)** - Contact form and direct contact methods

### Components

- **Navbar:** Sticky navigation with mobile menu
- **Footer:** Links, social media, legal pages
- **Hero Section:** Full-screen hero with image background and animated text
- **FAQ Accordion:** Interactive expandable Q&A
- **Comparison Table:** BedBees vs competitors
- **Timeline:** Visual roadmap display
- **Forms:** Contact form with validation

### Technologies

- **Next.js 15** - App Router
- **React 18**
- **TypeScript**
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions

## 🛠️ Customization

### Update Content

All site content is centralized in `/lib/siteConfig.ts`. Update this file to change:
- Platform description
- Features and benefits
- Investor information
- FAQ questions
- Comparison data
- Roadmap timeline
- Contact information

### Modify Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Use Tailwind classes directly in components

### Add New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `lib/siteConfig.ts` (nav array)

## 📧 Contact Form Integration

The contact form at `/contact` currently logs submissions to the console. To make it functional:

1. **Email Service Integration** (recommended):
   - [Resend](https://resend.com) - Modern email API
   - [SendGrid](https://sendgrid.com) - Email delivery service
   - [AWS SES](https://aws.amazon.com/ses/) - Amazon email service

2. **Update `/app/api/contact/route.ts`:**

```typescript
// Example with Resend:
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST handler:
await resend.emails.send({
  from: 'invest@bedbees.com',
  to: 'your-email@example.com',
  subject: `New Investor Inquiry from ${name}`,
  html: `<p>${message}</p>`,
});
```

3. **Add environment variables** (create `.env.local`):

```
RESEND_API_KEY=your_api_key_here
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables if needed
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Important Notes

### Before Launch:

1. ✅ Add your hero image (`public/hero.jpg`)
2. ✅ Update contact email in `lib/siteConfig.ts`
3. ✅ Configure contact form email integration
4. ✅ Add real social media links
5. ✅ Create legal pages (Privacy Policy, Terms, Disclaimer)
6. ✅ Test all forms and links
7. ✅ Optimize images for web
8. ✅ Set up analytics (Google Analytics, Plausible, etc.)

### Legal Compliance:

The investor disclaimers included are general. **Consult with a legal professional** before accepting real investments to ensure compliance with securities laws in your jurisdiction.

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Add hero image to `/public/hero.jpg`
3. Run dev server: `npm run dev`
4. Customize content in `/lib/siteConfig.ts`
5. Set up email integration for contact form
6. Deploy to Vercel or your hosting provider

## 📄 License

This is a custom-built project for BedBees. All rights reserved.

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
