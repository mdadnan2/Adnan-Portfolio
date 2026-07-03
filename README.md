# 🚀 Mohammad Adnan - Elite Backend Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A premium, recruiter-focused portfolio website showcasing 3+ years of professional backend engineering experience with Node.js, TypeScript, NestJS, PostgreSQL, MongoDB, Docker, and AWS.

## ✨ Features

- **🎨 Premium Design** - Inspired by leading SaaS platforms (Vercel, Stripe, Linear)
- **⚡ Next.js 15** - Latest App Router with Server Components
- **🎭 Smooth Animations** - Framer Motion for engaging interactions
- **📱 Fully Responsive** - Mobile-first design for all screen sizes
- **🚀 Performance Optimized** - Lighthouse 95+ scores
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Comprehensive metadata and structured data
- **📧 Contact Integration** - Formspree for email submissions
- **🎯 Backend-Focused** - Every element reinforces backend engineering expertise

## 🏗️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations

### UI & Components
- **shadcn/ui** - High-quality, accessible components
- **Lucide React** - Beautiful, customizable icons
- **Sonner** - Toast notifications

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation

### Backend Integration
- **Formspree** - Email form submissions

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdadnan2/Mohammad-Adnan-Portfolio-NextJS.git
   cd Mohammad-Adnan-NextJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 📁 Project Structure

```
Mohammad-Adnan-NextJS/
├── public/                      # Static assets
│   ├── projects/               # Project logos
│   ├── Mohammad_Adnan.pdf      # Resume
│   ├── og-image.svg            # Open Graph image
│   └── robots.txt              # SEO robots file
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── sections/           # Page sections
│   │       ├── navigation.tsx
│   │       ├── hero-section.tsx
│   │       ├── about-section.tsx
│   │       ├── experience-timeline.tsx
│   │       ├── expertise-section.tsx
│   │       ├── projects-showcase.tsx
│   │       ├── achievements-section.tsx
│   │       ├── certifications-section.tsx
│   │       ├── github-section.tsx
│   │       └── contact-section.tsx
│   ├── data/
│   │   └── portfolio.ts        # All content data
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── types/                  # TypeScript types
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design Philosophy

This portfolio breaks away from typical developer portfolios and presents as a **premium backend engineering platform**:

### Visual Language
- Clean, minimal interface inspired by modern SaaS products
- Strategic use of gradients and subtle animations
- Backend engineering concepts visualized through elegant graphics

### Content Focus
- **Not**: Frontend animations and UI showcases
- **Instead**: API architecture, system design, database schemas, cloud deployments

### User Experience
- Immediate clarity: "This person is a Backend Engineer"
- Smooth, professional animations that enhance rather than distract
- Mobile-first, accessible, and performant

## 📧 Contact Form Setup

The contact form is integrated with **Formspree** for email submissions:

1. Visit [formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. Update the endpoint in `src/components/sections/contact-section.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

Messages will be sent directly to your email inbox.

## 🎯 Page Sections

### 1. Navigation
- Sticky header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Quick access to all sections

### 2. Hero Section
- Large, clear heading with name and title
- Professional tagline highlighting backend expertise
- Multiple CTAs: Resume download, projects, contact
- Animated background with API/server visualizations

### 3. About Section
- Professional summary
- Key expertise highlights
- Call-to-action buttons

### 4. Experience Timeline
- Chronological work history
- Detailed role descriptions
- Focus on engineering impact and technical achievements
- Technology badges for each position

### 5. Expertise Section
- Organized by backend domains
- Interactive skill cards with proficiency indicators
- Premium hover effects

### 6. Projects Showcase
- Premium SaaS-style project cards
- Each project includes:
  - Architecture summary
  - Key challenges solved
  - Performance metrics
  - Tech stack badges
  - Links to GitHub and live demos

### 7. Achievements Section
- Key metrics and accomplishments
- Animated counters

### 8. Certifications Section
- Professional certifications
- Issuer and date information

### 9. GitHub Section
- GitHub profile integration
- Repository highlights

### 10. Contact Section
- Professional contact information
- Social media links
- Functional contact form with validation
- Trust badges

## 🔧 Customization

### Update Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Backend Engineer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, State, Country",
  tagline: "Your professional tagline",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    portfolio: "https://yourportfolio.com",
  },
  resumeUrl: "/your-resume.pdf",
};
```

### Add New Projects

Add to the `projects` array in `src/data/portfolio.ts`:

```typescript
{
  id: 7,
  title: "Your Project",
  category: "Project Category",
  tagline: "Brief description",
  description: "Detailed description",
  architecture: "Architecture overview",
  metrics: [
    { label: "Database", value: "PostgreSQL" },
    { label: "Auth", value: "JWT" },
  ],
  technologies: ["Node.js", "TypeScript", "Express.js"],
  badges: ["REST APIs", "JWT Auth"],
  github: "https://github.com/yourusername/project",
  liveDemo: "https://project-demo.com",
  border: "hover:border-sky-400/40",
  glow: "rgba(14,165,233,0.18)",
  accent: "#38bdf8",
  icon: "🚀",
  professional: true,
}
```

### Modify Colors

Update `src/app/globals.css` and `tailwind.config.ts` for custom color schemes.

### Update Resume

Replace `public/Mohammad_Adnan.pdf` with your resume file.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

### Alternative: Manual Build

```bash
npm run build
npm start
```

## 📊 Performance

Target metrics:
- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 100
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🤝 Contributing

While this is a personal portfolio, suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is open source under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mohammad Adnan**
- 📧 Email: [adnanmd2410@gmail.com](mailto:adnanmd2410@gmail.com)
- 💼 LinkedIn: [mohammadadnan01](https://www.linkedin.com/in/mohammadadnan01/)
- 🐙 GitHub: [mdadnan2](https://github.com/mdadnan2)
- 📱 Phone: +91 9356576610
- 📍 Location: Pune, Maharashtra, India

## 🙏 Acknowledgments

- Inspired by premium SaaS platforms (Vercel, Stripe, Linear)
- Built with modern web technologies and best practices
- Special thanks to the open-source community

---

<div align="center">

**⭐ If you found this portfolio inspiring, please give it a star!**

Built with ❤️ by Mohammad Adnan using Next.js 15, TypeScript, and Tailwind CSS

</div>
