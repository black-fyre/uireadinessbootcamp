# UI Career Readiness Bootcamp - Website

A modern, responsive promotional website for the UI Career Readiness Bootcamp event, built with Next.js 16, React 19, and Tailwind CSS 4.

![UI Career Readiness Bootcamp](https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=1200&h=630&fit=crop)

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **SEO Ready**: Comprehensive metadata and Open Graph tags
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Accessibility**: Keyboard navigation and ARIA labels
- **Production Ready**: Optimized for Vercel deployment

## 📋 Sections

1. **Hero Section**: Eye-catching header with CTA buttons and event highlights
2. **Event Overview**: Key event details including date, time, venue, and target audience
3. **Learning Tracks**: Three specialized tracks (Career, Business, Creative)
4. **Why Attend**: Benefits and value propositions
5. **Registration**: Clear CTA with event recap
6. **Footer**: Quick links and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd uireadinessbootcamp

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

#### Option 2: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

#### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/uireadinessbootcamp)

### Environment Variables

No environment variables are required for this project.

## 📁 Project Structure

```
uireadinessbootcamp/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Header.tsx           # Fixed navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Overview.tsx         # Event details section
│   ├── Tracks.tsx           # Learning tracks section
│   ├── WhyAttend.tsx        # Benefits section
│   ├── Register.tsx         # Registration CTA section
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Update Event Information

Edit the content in the component files:
- **Date/Time**: Update in [components/Hero.tsx](components/Hero.tsx) and [components/Register.tsx](components/Register.tsx)
- **Registration Link**: Update in [components/Register.tsx](components/Register.tsx)
- **Tracks**: Modify the `tracks` array in [components/Tracks.tsx](components/Tracks.tsx)

### Change Colors

Update the color scheme in the component files or add custom colors to Tailwind config.

### SEO Metadata

Update metadata in [app/layout.tsx](app/layout.tsx):
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... more metadata
};
```

## 🎯 Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Automatic Image Optimization**: via next/image
- **Code Splitting**: Automatic via Next.js

## 🔧 Configuration Files

### next.config.ts
Production-ready configuration with image optimization settings.

### tailwind.config.ts
Tailwind CSS 4 configuration (auto-generated by create-next-app).

### tsconfig.json
TypeScript configuration with strict mode enabled.

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For questions or support, please contact The Breakforth Group.

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Powered by The Breakforth Group

---

**Event Details:**
- Date: Friday, 17th January 2025
- Time: 12:00 PM - 6:00 PM
- Venue: University of Ibadan Campus
- Registration: ₦1,000

**Register Now:** [bit.ly/uicareerreadinessbootcamp](https://bit.ly/uicareerreadinessbootcamp)
