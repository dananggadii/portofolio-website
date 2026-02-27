# Portfolio Website - Danang Adi Nugroho

Portfolio website profesional untuk L2 Cloud DevOps Engineer dengan desain modern dan responsif, dibangun menggunakan Next.js.

## Fitur

- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Modern UI dengan blue & white color scheme
- Server-side rendering dengan Next.js
- TypeScript untuk type safety
- CSS Modules untuk scoped styling
- React Icons untuk icon library
- Sections: Home, About, Experience, Skills, Projects, Certifications, Contact

## Teknologi

- Next.js 15
- React 19
- TypeScript
- CSS Modules
- React Icons

## Cara Menggunakan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses `http://localhost:3000`

## Build untuk Production

```bash
npm run build
npm start
```

## Deployment

Website ini bisa di-deploy ke:
- Vercel (recommended untuk Next.js)
- Netlify
- AWS Amplify
- Google Cloud Run
- Alibaba Cloud

## Struktur File

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Projects showcase
│   ├── Certifications.tsx  # Certifications list
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── public/
│   └── profile.jpg         # Profile image
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Customization

Untuk mengubah warna tema, edit CSS variables di `app/globals.css`:

```css
:root {
    --primary-blue: #2563eb;
    --dark-blue: #1e40af;
    --light-blue: #dbeafe;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

© 2026 Danang Adi Nugroho
