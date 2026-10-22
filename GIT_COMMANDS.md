# Git Commands for GreekWave Technologies Deployment

## 🔗 GitHub Repository Setup

### 1️⃣ Create Repository on GitHub
1. Go to https://github.com
2. Click "New repository"
3. Repository name: `greekwave-technologies`
4. Make it Public or Private
5. **Don't** initialize with README
6. Click "Create repository"

### 2️⃣ Connect Local Repository to GitHub

**Replace `YOUR-GITHUB-USERNAME` with your actual username:**

```bash
# Navigate to project directory
cd d:\GreekWaveTech

# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/greekwave-technologies.git

# Set main as default branch
git branch -M main

# Push code to GitHub
git push -u origin main
```

### 3️⃣ Example with Sample Username
If your GitHub username is `johndoe`, the commands would be:

```bash
git remote add origin https://github.com/johndoe/greekwave-technologies.git
git branch -M main
git push -u origin main
```

## ✅ Current Status
- ✅ Git repository initialized
- ✅ Files committed locally
- ⏳ Ready to push to GitHub (need your username)

## 🚀 After GitHub Push
Once pushed, you can deploy to:

### Vercel (Recommended)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select `greekwave-technologies` repository
5. Click "Deploy"
6. Get your live URL: `https://greekwave-technologies.vercel.app`

### Netlify Alternative
1. Go to https://netlify.com
2. "New site from Git"
3. Connect GitHub
4. Select your repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 📧 Environment Variables for Production
Don't forget to add these in your hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@greekwave.tech
CONTACT_EMAIL=hello@greekwave.tech
```