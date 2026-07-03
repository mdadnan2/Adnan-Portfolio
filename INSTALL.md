# 🚀 Quick Installation Guide

## Step 1: Install Node.js

If you don't have Node.js installed:
- Download from: https://nodejs.org/ (LTS version 18.x or higher)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

## Step 2: Navigate to Project

```bash
cd c:\Data\Portfolio\Mohammad-Adnan-NextJS
```

## Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages. It may take 2-3 minutes.

## Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready on http://localhost:3000
```

## Step 5: Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

You should see your portfolio!

---

## 🎨 Customization Quick Start

### Update Your Information

1. Open `src/data/portfolio.ts`
2. Update the `personalInfo` object:
   ```typescript
   export const personalInfo = {
     name: "Your Name",
     email: "your.email@example.com",
     // ... update other fields
   };
   ```
3. Save the file
4. The page will automatically refresh

### Add/Edit Projects

In `src/data/portfolio.ts`, find the `projects` array and add/edit:
```typescript
{
  id: 6,
  title: "Your Project Name",
  description: "Description",
  technologies: ["Node.js", "MongoDB"],
  // ... other fields
}
```

### Change Colors

1. Open `src/app/globals.css`
2. Modify CSS variables in the `:root` section
3. Colors use HSL format

---

## 🚀 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

To test the production build locally:
```bash
npm start
```

---

## 🌐 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site is live

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts.

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code quality |
| `npm run type-check` | Check TypeScript types |

---

## ❓ Troubleshooting

### Port 3000 Already in Use

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or use a different port:
```bash
npm run dev -- -p 3001
```

### Installation Errors

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again

### Build Errors

```bash
rm -rf .next
npm run build
```

---

## 📚 Documentation

- **README.md** - Project overview and features
- **SETUP_GUIDE.md** - Detailed setup and deployment
- **FEATURES.md** - Complete feature documentation
- **This file** - Quick installation guide

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ View your portfolio
4. ⏭️ Customize your information
5. ⏭️ Update projects and skills
6. ⏭️ Deploy to Vercel
7. ⏭️ Share your portfolio!

---

## 📞 Need Help?

- Email: adnanmd2410@gmail.com
- Check documentation files
- Review code comments

---

**Enjoy your new portfolio! 🎉**
