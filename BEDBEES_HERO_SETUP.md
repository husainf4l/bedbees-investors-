# 🐝 Bedbees Hero Section - Setup Instructions

## 📸 Hero Image Placeholder

The hero section requires a travel lifestyle image. Follow these steps:

### 1. Download a Suitable Image

Find a high-quality image of a woman/person traveling with luggage, preferably walking or in a travel setting.

**Recommended Sources:**
- **Unsplash**: https://unsplash.com/s/photos/woman-traveling-luggage
- **Pexels**: https://pexels.com/search/travel-woman/
- **Pixabay**: https://pixabay.com/images/search/travel-woman/

**Image Requirements:**
- Format: PNG (with transparent background preferred) or JPG
- Resolution: At least 800x1000px
- Orientation: Portrait/vertical
- Subject: Person with luggage, suitcase, or in travel setting
- Background: Clean, ideally transparent or solid color

### 2. Save the Image

Save the downloaded image as:
```
/public/bedbees-hero.png
```

**File path**: `/home/aqlaan/Desktop/bedbeesinvestor/public/bedbees-hero.png`

### 3. Alternative: Use Placeholder

If you don't have an image yet, you can use a placeholder service temporarily:

1. Create a placeholder using: https://placehold.co/800x1000/FFB955/FFFFFF/png?text=Travel+Hero
2. Save it as `/public/bedbees-hero.png`

---

## 🎨 Color Scheme

The design uses the Bedbees brand colors:

- **Primary Orange**: `#FF8C00`
- **Secondary Orange**: `#FFB955`
- **White**: `#FFFFFF`
- **Dark Text**: `#222222`
- **Light Gray Background**: `#F7F7F7`

---

## 🧩 Components Overview

### Navbar (`components/Navbar.tsx`)
- Sticky white navbar with shadow
- Logo: "Bedbees." with orange dot
- Navigation: Destination, Packages, Blog, About Us, Contact
- Right side: Login (ghost) + Sign Up (orange rounded button)
- Mobile responsive with hamburger menu

### Hero (`components/Hero.tsx`)
- Left side: Large headline with "BEDBEES" highlighted in orange
- Search widget with Destination, Date, Category dropdowns + Search button
- Right side: Hero image with circular background gradient
- Floating cards with icons: Smart AI Planning, Hotels & Homes, Local Adventures, Verified Guides, Instant Support
- Additional floating travel icons (✈️ 🌍) with infinite animation

### Home Page (`app/page.tsx`)
- Simple wrapper importing Hero component
- Additional sections can be added below Hero

---

## 🚀 Quick Start

1. **Add hero image** to `/public/bedbees-hero.png`
2. **Refresh** the development server at `http://localhost:3001`
3. **Customize** content in `components/Hero.tsx` if needed

---

## 🎭 Animations

All animations use **Framer Motion**:

- Navbar items fade in sequentially
- Hero text slides in from left
- Hero image slides in from right
- Floating cards appear with staggered delays
- Travel icons have infinite floating animation
- Hover effects on cards and buttons

---

## 📱 Responsive Design

- **Desktop (lg+)**: Full hero with image and floating cards
- **Tablet (md)**: Stacked layout, search bar grid adjusts
- **Mobile**: Single column, simplified search bar, no floating cards (hidden)

---

## 🔧 Customization Tips

### Change Headline Text
Edit line 51-56 in `components/Hero.tsx`

### Modify Search Options
Edit the select options in lines 77-112 in `components/Hero.tsx`

### Add/Remove Floating Cards
Modify the `floatingCards` array at line 8 in `components/Hero.tsx`

### Adjust Colors
Replace color values throughout:
- `#FF8C00` → Your primary color
- `#FFB955` → Your secondary color
- `#222222` → Your text color

---

## ✅ Checklist

- [ ] Hero image added to `/public/bedbees-hero.png`
- [ ] Dev server running on `http://localhost:3001`
- [ ] Navbar displays correctly with all links
- [ ] Hero section loads with animations
- [ ] Search widget functional (UI only)
- [ ] Floating cards appear on desktop
- [ ] Mobile menu works properly
- [ ] Colors match Bedbees brand

---

**Need help?** The design is fully responsive and animated. Just add your hero image and you're ready to go! 🚀
