# Quick Image Setup Guide

## Step-by-Step Instructions

### 1. Create the Images Folder
Create a new folder at: `public/images/`

### 2. Save Your Menu Photos

From your uploaded images, save them with these exact names:

#### **Image 1 & 5** (White menu card with cocktails):
- Save as: `menu-cocktails.jpg`
- This shows your "Specialty Cocktails" menu

#### **Image 3** (Red/pink FOOD menu card):
- Save as: `menu-food.jpg`
- This shows your food menu

#### **Image 2** (Pink/red DRINKS menu):
- Save as: `menu-drinks.jpg` (optional - can be combined with cocktails)

#### **Image 4** (Full menu spread with glass):
- Save as: `menu-full.jpg` (optional - for gallery)

### 3. Additional Images (from previous uploads)

If you have the happy hour and bar interior photos:
- `happy-hour-1.jpg` - Interior with happy hour text
- `happy-hour-2.jpg` - Cocktail with happy hour pricing
- `bar-interior.jpg` - The stunning circular bar shelves
- `staff-event.jpg` - Billy Lau and Shawn Hui photo

### 4. Optional: Menu PDF

If you want to offer a downloadable PDF version:
- Save your menu PDF as: `public/menu-samfancy.pdf`

## What Happens Next?

Once you add these images:

✅ **THE SPREAD Section** will display your menu photos in beautiful polaroid frames
✅ Visitors can click/tap to zoom in and read the full menu
✅ Vintage film grain and sepia effects will be applied automatically
✅ Hover effects show a red glow and "ENLARGE" button
✅ Mobile users get a full-screen lightbox view

## File Structure Should Look Like:

```
SamFancy/
├── public/
│   ├── images/
│   │   ├── menu-cocktails.jpg    ← REQUIRED
│   │   ├── menu-food.jpg          ← REQUIRED
│   │   ├── menu-drinks.jpg        (optional)
│   │   ├── menu-full.jpg          (optional)
│   │   ├── happy-hour-1.jpg       (optional)
│   │   ├── happy-hour-2.jpg       (optional)
│   │   ├── bar-interior.jpg       (optional)
│   │   └── staff-event.jpg        (optional)
│   └── menu-samfancy.pdf          (optional)
├── src/
└── ...
```

## Testing

After adding the images:
1. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Scroll down to "THE SPREAD" section
3. Click on a menu image to see the lightbox
4. Try the hover effects (desktop) or tap (mobile)

## Fallback

Don't worry if you don't have all images immediately - the website uses beautiful placeholder images that will automatically be replaced when you add your real photos!
