# Deployment Guide - GreekWave Technologies Website

This guide provides step-by-step instructions for deploying the GreekWave Technologies website to various hosting platforms.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering seamless deployment and excellent performance.

#### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)

#### Steps

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your Git provider
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   In Vercel dashboard → Project Settings → Environment Variables, add:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@greekwave.tech
   CONTACT_EMAIL=hello@greekwave.tech
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

#### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Netlify

#### Prerequisites
- GitHub/GitLab/Bitbucket account
- Netlify account (free tier available)

#### Steps

1. **Build Configuration**
   Create `netlify.toml` in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy via Git**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

3. **Environment Variables**
   In Netlify dashboard → Site Settings → Environment Variables, add the same variables as Vercel.

4. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain and configure DNS

### Option 3: Traditional Hosting (cPanel/VPS)

#### Prerequisites
- Web hosting with Node.js support
- SSH access (for VPS)

#### Steps

1. **Build the Application**
   ```bash
   npm run build
   npm run export  # For static export
   ```

2. **Upload Files**
   - Upload the `out` folder (for static export) or entire project
   - Install dependencies on server: `npm install --production`

3. **Configure Web Server**
   
   **For Apache (.htaccess):**
   ```apache
   RewriteEngine On
   RewriteRule ^$ /index.html [L]
   RewriteRule ^([^.]+)$ /$1.html [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

   **For Nginx:**
   ```nginx
   location / {
     try_files $uri $uri.html $uri/ /index.html;
   }
   ```

4. **Start Application (for VPS)**
   ```bash
   # Using PM2 (recommended)
   npm install -g pm2
   pm2 start npm --name "greekwave" -- start
   pm2 startup
   pm2 save

   # Or using screen
   screen -S greekwave
   npm start
   # Ctrl+A, D to detach
   ```

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Enable 2-factor authentication

2. **Generate App Password**
   - Go to Google Account → Security → App passwords
   - Generate password for "Mail"
   - Use this password as `SMTP_PASS`

3. **Environment Variables**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

### Other Email Providers

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

## 🔧 Performance Optimization

### Image Optimization

1. **Optimize Images**
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg

   # Optimize images
   imagemin public/images/* --out-dir=public/images/optimized --plugin=webp --plugin=mozjpeg
   ```

2. **Use Next.js Image Component**
   Already implemented in the project for automatic optimization.

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Check bundle
npx @next/bundle-analyzer .next
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use different values for development and production
- Rotate API keys and passwords regularly

### HTTPS
- Always use HTTPS in production
- Most hosting platforms provide free SSL certificates
- Update `NEXT_PUBLIC_SITE_URL` to use `https://`

### Content Security Policy
Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoring and Analytics

### Google Analytics
1. Create Google Analytics account
2. Get tracking ID
3. Add to environment variables:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior analytics

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🧪 Testing Before Deployment

### Pre-deployment Checklist

- [ ] All pages load without errors
- [ ] Contact form works and sends emails
- [ ] All links are functional
- [ ] Images load properly
- [ ] Mobile responsiveness works
- [ ] SEO metadata is correct
- [ ] Performance is acceptable (Lighthouse score > 90)

### Testing Commands
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Local production test
npm run start
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Ensure all environment variables are set

2. **Email Not Working**
   - Verify SMTP credentials
   - Check spam folder
   - Test with a simple email service first

3. **Images Not Loading**
   - Check image paths
   - Verify Next.js Image component usage
   - Ensure images are in `public` folder

4. **Slow Performance**
   - Run bundle analysis
   - Optimize images
   - Check for unnecessary re-renders

### Getting Help

- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: Create an issue in the repository

## 📞 Support

For deployment support:
- Email: hello@greekwave.tech
- Documentation: Check README.md
- Issues: Create a GitHub issue

---

Happy deploying! 🚀