# REVN - Premium Shoe Cleaning Foam Landing Page

A modern, clean, and high-impact landing page for REVN, a premium shoe cleaning foam brand. Built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal, and product-focused design with a blue theme
- **Responsive**: Fully responsive design that works on all devices
- **Multiple Pages**: 
  - Home - Hero section, features, testimonials, and more
  - About - Brand story, values, and why REVN is better
  - Shop - Product listing with different sizes and bundle deals
  - Product Detail - Individual product pages with quantity selection
  - FAQ - Comprehensive FAQ section with accordion-style questions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Inter Font** - Modern sans-serif typography

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📸 Adding Images

The project currently uses emoji placeholders (🧴 👟 etc.) for images. To add your actual product images:

1. Add your images to `src/assets/images/` directory
2. Import them in the respective components
3. Replace the emoji placeholders with `<img>` tags

Recommended image names:
- `product-regular.png` - Regular size product
- `product-large.png` - Large size product
- `product-xl.png` - XL size product
- `hero-bg.jpg` - Hero background image
- `logo.png` - REVN logo

## 📁 Project Structure

```
revn-landing/
├── src/
│   ├── assets/images/       # Add your product images here
│   ├── components/          # Navbar, Footer
│   ├── pages/               # Home, About, Shop, ProductDetail, FAQ
│   ├── App.jsx             # Main app with routing
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## 🎨 Color Palette

- Primary Blue: `#3b82f6` to `#1e40af`
- Light Blue: `#eff6ff` to `#dbeafe`
- Accent: `#60a5fa`

## 📱 Pages

### Home
Hero section, features, how it works, testimonials, and CTA

### About
Brand story, values, comparison with regular cleaners, stats

### Shop
Product listing with 3 sizes, bundle deals, trust badges

### Product Detail
Detailed product view with quantity selector and purchase options

### FAQ
12+ frequently asked questions in accordion format

---

Built with ❤️ using React and Tailwind CSS
