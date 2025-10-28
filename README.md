# Nusantara Spice Heritage - Premium Indonesian Spice Export

A modern, responsive landing page for an Indonesian spice export company built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design with premium aesthetics
- **Responsive Layout**: Fully responsive across all devices
- **SEO Optimized**: Built with SEO best practices
- **Performance Focused**: Optimized for fast loading times
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Full TypeScript support for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nusantara-spice-heritage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Adding Images

Place your images in the `public/images/` directory:

- `hero-plantation.jpg` - Hero background image (recommended: 1920x1080px)
- `cinnamon.jpg` - Cinnamon product image (recommended: 800x600px)
- `clove.jpg` - Clove product image (recommended: 800x600px)
- `pepper.jpg` - Pepper product image (recommended: 800x600px)

## 🎨 Design System

### Color Palette

- **Primary**: `#2A4031` (Forest Green)
- **Accent**: `#D97706` (Burnt Orange)
- **Background**: `#F8F5F2` (Off-white/Cream)
- **Text Secondary**: `#4B5563` (Dark Gray)

### Typography

- **Headings**: Montserrat (Sans-serif)
- **Body Text**: Lora (Serif)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and font imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembling all components
└── components/
    ├── Navbar.tsx           # Navigation with scroll effects
    ├── Hero.tsx             # Hero section with CTA
    ├── FeaturedProducts.tsx # Product showcase grid
    ├── WhyChooseUs.tsx      # Features and statistics
    └── ContactForm.tsx      # Contact form and information
```

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Montserrat and Lora fonts

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Customization

### Updating Company Information

1. Edit company name in `src/components/Navbar.tsx`
2. Update contact information in `src/components/ContactForm.tsx`
3. Modify product information in `src/components/FeaturedProducts.tsx`

### Styling Changes

All styling is done with Tailwind CSS classes. The color palette can be customized in `tailwind.config.js`.

## 📈 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle size
- CSS-in-JS with Tailwind for optimal loading

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@nusantaraspice.com or create an issue in this repository.
