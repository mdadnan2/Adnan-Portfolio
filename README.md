# 🚀 Mohammad Adnan - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://mdadnan.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/mdadnan2/Adnan-Portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mohammadadnan01/)

> A modern, responsive portfolio website showcasing my journey as a Backend Developer with 2+ years of experience in Node.js, TypeScript, and REST API development.

## 🎯 Project Overview

This portfolio website is a comprehensive showcase of my professional journey, technical skills, and project accomplishments. Built with modern web technologies, it features smooth animations, responsive design, and an intuitive user experience.

### ✨ Key Features

- **🎨 Modern UI/UX**: Clean, professional design with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading with efficient code splitting
- **🌙 Dark Theme**: Elegant dark theme with gradient accents
- **📧 Contact Integration**: Direct contact form and social media links
- **🔍 SEO Optimized**: Structured for search engine visibility

## 🏗️ Architecture & Project Structure

```
Mohammad-Adnan/
├── 📁 public/                    # Static assets
│   ├── favicon.ico
│   ├── Mohammad_Adnan.pdf     # Resume/CV
│   └── robots.txt
├── 📁 src/
│   ├── 📁 components/            # React components
│   │   ├── 📁 ui/               # Reusable UI components (shadcn/ui)
│   │   ├── Hero.tsx             # Landing section with typing animation
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Technical skills showcase
│   │   ├── Experience.tsx       # Professional experience
│   │   ├── Projects.tsx         # Featured projects
│   │   ├── Education.tsx        # Educational background
│   │   ├── SoftSkills.tsx       # Soft skills and qualities
│   │   ├── Contact.tsx          # Contact form and information
│   │   └── Navigation.tsx       # Navigation component
│   ├── 📁 hooks/                # Custom React hooks
│   ├── 📁 lib/                  # Utility functions
│   ├── 📁 pages/                # Page components
│   └── App.tsx                  # Main application component
├── 📄 Configuration Files
│   ├── package.json             # Dependencies and scripts
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── vite.config.ts          # Vite build configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── vercel.json             # Deployment configuration
└── README.md                    # Project documentation
```

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### **State Management & Routing**
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Deployment & Hosting**
- **Vercel** - Serverless deployment platform
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdadnan2/Adnan-Portfolio.git
   cd Mohammad-Adnan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `npm run dev`       | Start development server  |
| `npm run build`     | Build for production      |
| `npm run build:dev` | Build in development mode |
| `npm run preview`   | Preview production build  |
| `npm run lint`      | Run ESLint                |

## 🎨 Design Philosophy

### **Visual Design**
- **Minimalist Approach**: Clean, uncluttered interface focusing on content
- **Gradient Accents**: Strategic use of gradients for visual appeal
- **Consistent Spacing**: Harmonious layout with proper spacing
- **Typography**: Clear, readable fonts with proper hierarchy

### **User Experience**
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach ensuring compatibility
- **Intuitive Navigation**: Easy-to-use navigation with smooth scrolling
- **Performance**: Optimized loading and rendering

## 📱 Responsive Breakpoints

| Device  | Breakpoint     | Layout                              |
| ------- | -------------- | ----------------------------------- |
| Mobile  | < 768px        | Single column, stacked components   |
| Tablet  | 768px - 1024px | Two-column grid where applicable    |
| Desktop | > 1024px       | Multi-column layouts, full features |

## 🔧 Customization

### **Theming**
The project uses Tailwind CSS with custom color schemes defined in `tailwind.config.ts`:

```typescript
// Custom color palette
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  // ... other colors
}
```

### **Content Updates**
- **Personal Information**: Update in respective component files
- **Projects**: Modify `src/components/Projects.tsx`
- **Skills**: Update `src/components/Skills.tsx`
- **Experience**: Modify `src/components/Experience.tsx`

## 🚀 Deployment

### **Vercel Deployment** (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configure build settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - Set up in Vercel dashboard

### **Alternative Deployment Options**
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Static website hosting

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mohammad Adnan**
- 📧 Email: [adnanmd2410@gmail.com](mailto:adnanmd2410@gmail.com)
- 💼 LinkedIn: [mohammadadnan01](https://www.linkedin.com/in/mohammadadnan01/)
- 🐙 GitHub: [DevAdnanAnsari](https://github.com/DevAdnanAnsari)
- 📱 Phone: +91 9356576610
- 📍 Location: Pune, Maharashtra, India

---

<div align="center">

**⭐ If you found this portfolio inspiring, please give it a star!**

Made with ❤️ by Mohammad Adnan

</div>
