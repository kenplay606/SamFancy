# Sam Fancy - A Chinatown Bar & Speakeasy in LKF, Hong Kong

A stunning single-page website for Sam Fancy, capturing the sophisticated, hidden gem vibe of this Chinatown-inspired speakeasy in Lan Kwai Fong.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Modern UI**: Built with React, TailwindCSS, and Lucide icons
- **Optimized Performance**: Fast loading with compressed images and efficient code
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx       # Hero section with video background
│   ├── StorySection.jsx      # Brand story and narrative
│   ├── TwoFloorsSection.jsx  # Dual-floor concept showcase
│   ├── DrinksSection.jsx     # Cocktail menu showcase
│   ├── PeopleSection.jsx     # Staff profiles
│   ├── ReviewsSection.jsx    # Customer reviews carousel
│   ├── EssentialsSection.jsx # Location, hours, and info
│   └── Footer.jsx            # Footer with social links
├── hooks/
│   └── useInView.js          # Intersection Observer hook
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Color Palette

- **Primary**: Deep black (#000000) and warm dark wood tones
- **Accent Red**: Chinatown red (#DC143C) - for buttons, icons, highlights
- **Accent Gold**: Muted gold (#D4AF37) - for text accents and borders
- **Background**: Dark, moody tones with subtle film grain

## Typography

- **Headlines**: Anton - Bold, condensed serif reminiscent of classic movie posters
- **Body**: Inter - Clean, modern sans-serif for readability

## Sections

1. **Hero** - Full-screen introduction with CTAs
2. **The Story** - Brand narrative and origin story
3. **Happy Hour** - Tiered pricing showcase ($30/$40/$50)
4. **Two Floors** - 3rd floor (The Hangout) and 4th floor (The Speakeasy)
5. **Full Menu** - Tabbed menu with cocktails, drinks, and food
6. **The Drinks** - Cocktail showcase with cinematic names
7. **THE SPREAD** ⭐ - Physical menu images with polaroid frames and lightbox
8. **Gallery** - Photo showcase of the bar
9. **The People** - Staff profiles and hospitality focus
10. **Reviews** - Customer testimonials carousel
11. **The Essentials** - Hours, location, happy hour, amenities
12. **Footer** - Social links and contact info

## Customization

To customize images, update the image URLs in the component files. All images are currently using Unsplash placeholders.

To update content, edit the respective component files in `src/components/`.

## License

© 2024 Sam Fancy. All rights reserved.
