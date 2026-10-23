# GreekWave Technologies Website

A modern, responsive website for GreekWave Technologies - an AI-focused startup building innovative artificial intelligence solutions for businesses and consumers.

## 🚀 Features

- **Modern Design**: Sleek, futuristic design with AI-themed animations and effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in SEO features with metadata, Open Graph tags, and sitemap
- **Performance Focused**: Fast loading times with optimized images and code splitting
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and color contrast
- **Interactive Elements**: Smooth animations, hover effects, and particle backgrounds
- **Contact Form**: Working contact form with email notifications
- **Blog Ready**: Blog structure ready for content management integration

## 🛠 Tech Stack

- **Frontend**: React 18, Next.js 15.4.6, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email**: Nodemailer for contact form handling
- **Deployment**: Vercel (recommended) or Netlify

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── careers/           # Careers page
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt generator
│   └── sitemap.ts         # Sitemap generator
└── components/            # Reusable components
    ├── About.tsx
    ├── Blog.tsx
    ├── CaseStudies.tsx
    ├── CTA.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── Navbar.tsx
    ├── ParticleBackground.tsx
    ├── Services.tsx
    └── Testimonials.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GreekWaveTech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@greekwave.tech
   CONTACT_EMAIL=greekwavetech@zohomail.in
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form requires SMTP configuration. For Gmail:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password for the application
3. Use your Gmail address as `SMTP_USER`
4. Use the App Password as `SMTP_PASS`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - Go to your project settings
   - Add all environment variables from `.env.local`

4. **Custom domain (optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your Git repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables in Netlify dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   npm run start
   ```

2. **Deploy the `.next` folder to your hosting provider**

## 🎨 Customization

### Colors and Branding

The brand colors are defined in `tailwind.config.js` and `globals.css`:

- Primary Blue: `#0A2540`
- Electric Cyan: `#00FFFF`
- Silver Gray: `#C0C0C0`

### Content Updates

- **Homepage**: Edit `src/app/page.tsx` and component files
- **About Page**: Edit `src/app/about/page.tsx`
- **Services**: Edit `src/app/services/page.tsx`
- **Contact Info**: Update contact details in `src/components/Footer.tsx` and `src/app/contact/page.tsx`

### Adding Blog Posts

The blog structure is ready for integration with a headless CMS like:
- Contentful
- Sanity
- Strapi
- Markdown files with frontmatter

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader friendly

## 🔍 SEO Features

- Metadata and Open Graph tags
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Fast loading times
- Mobile-friendly design

## 📊 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size
- Fast loading animations
- Optimized fonts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: greekwavetech@zohomail.in
- Phone: +91 8977094517
- Website: [greekwave.tech](https://greekwave.tech)

## 🙏 Acknowledgments

- Design inspiration from modern AI and tech companies
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ by the GreekWave Technologies team