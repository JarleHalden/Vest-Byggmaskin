# Guide for Adding Images to Your Project

## Where to Put Images

### Recommended: `src/assets/` folder
- Images are processed and optimized by Vite
- Better for production builds (smaller file sizes)
- Use import statements in your code

### Alternative: `public/` folder
- Images are served as-is (no processing)
- Use paths like `/image.jpg` in your code
- Good for very large files or files that change dynamically

---

## Image Locations in Your Project

### 1. Hero Section Image (Home page)
**Location:** `src/assets/hero-image.jpg` (or `.png`, `.webp`)
- Used in the hero section on the homepage
- Recommended size: 1200x900px (4:3 aspect ratio)

### 2. Service Card Images (3 images)
**Location:** `src/assets/`
- `service-tomrer.jpg` - For "Tømrer" card
- `service-grunnarbeid.jpg` - For "Grunnarbeid & maskin" card  
- `service-drift.jpg` - For "Drift & Vedlikehold" card
- Recommended size: 800x600px (4:3 aspect ratio)

---

## How to Add Images

1. **Place your images in `src/assets/` folder:**
   ```
   src/assets/
     ├── hero-image.jpg
     ├── service-tomrer.jpg
     ├── service-grunnarbeid.jpg
     └── service-drift.jpg
   ```

2. **Update the code** - See examples below

---

## Code Examples

### Using images from `src/assets/` (Recommended)

```typescript
// In Home.tsx - Hero image
import heroImage from "../assets/hero-image.jpg";

<img 
  src={heroImage} 
  alt="Vest Byggmaskin" 
  className="w-full h-full object-cover"
/>

// In ServiceCard - Service image
import serviceImage from "../assets/service-tomrer.jpg";

<img 
  src={serviceImage} 
  alt={title}
  className="w-full h-full object-cover rounded-lg"
/>
```

### Using images from `public/` folder (Alternative)

```typescript
// Paths start with / (root of public folder)
<img src="/hero-image.jpg" alt="Hero" />
<img src="/service-tomrer.jpg" alt="Service" />
```

---

## Image Format Recommendations

- **Format:** Use `.jpg` for photos, `.png` for graphics with transparency, `.webp` for best compression
- **Size:** Keep images under 500KB each for faster loading
- **Aspect Ratio:**
  - Hero image: 4:3 (e.g., 1200x900px)
  - Service cards: 4:3 (e.g., 800x600px)
