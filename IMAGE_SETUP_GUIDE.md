# Image Setup Guide for Sam Fancy Website

## Images to Add

Please save the following images from your uploads to the `public/images/` folder:

### 1. Happy Hour Images
- **happy-hour-1.jpg** - The interior shot with "HAPPY HOUR $30 | $40 | $50 6-7PM 7-8PM 8-9PM" text
- **happy-hour-2.jpg** - The cocktail shot with "HAPPY HOUR $30 | $40 | $50" text

### 2. Bar Interior
- **bar-interior.jpg** - The stunning bar shot with three circular backlit shelves and bar stools

### 3. Staff/Event Photo
- **staff-event.jpg** - Photo of Billy Lau and Shawn Hui at Sam Fancy

### 4. Menu Photos (IMPORTANT - For "THE SPREAD" Section)
- **menu-cocktails.jpg** - The cocktails menu card (white/pink card with signature cocktails)
- **menu-food.jpg** - The food menu card (red/pink card with food items)

These menu images will be displayed in the new "THE SPREAD" section with:
- Polaroid-style white borders
- Vintage film grain overlay
- Tap-to-zoom lightbox functionality
- Hover effects with red glow

## Folder Structure

Create this folder structure:
```
public/
  images/
    happy-hour-1.jpg
    happy-hour-2.jpg
    bar-interior.jpg
    staff-event.jpg
    menu-cocktails.jpg  (REQUIRED for THE SPREAD section)
    menu-food.jpg       (REQUIRED for THE SPREAD section)
  menu-samfancy.pdf     (Optional - for download link)
```

## How to Add Images

1. Create the folder: `public/images/`
2. Save your 5 uploaded images to this folder with the names above
3. The website will automatically use these images

## Images Currently Used

The website components are now configured to use:
- **HeroSection**: Will use bar-interior.jpg as background
- **HappyHourSection**: Will use happy-hour images
- **MenuSection**: Uses the extracted menu data (no image needed)
- **DrinksSection**: Uses Unsplash placeholders (can be replaced with actual cocktail photos)
- **MenuShowcaseSection**: ⭐ **NEW** - Uses menu-cocktails.jpg and menu-food.jpg with polaroid frames
- **GallerySection**: Uses all bar photos in a grid layout
- **PeopleSection**: Uses Unsplash placeholders (can be replaced with actual staff photos)

## Optional: Replace All Placeholder Images

If you have more photos of:
- Individual cocktails (6 photos needed)
- Staff members (4 photos needed)
- Bar atmosphere shots

You can replace the Unsplash URLs in the component files with your local images.
