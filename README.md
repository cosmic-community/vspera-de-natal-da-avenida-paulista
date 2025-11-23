# 🎄 Véspera de Natal da Avenida Paulista

![Véspera de Natal da Avenida Paulista](https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&h=300&fit=crop&auto=format)

A stunning web application celebrating the magic of Christmas Eve on São Paulo's iconic Avenida Paulista. Experience the festive moments, events, and traditions that make this celebration unique through beautiful photography and heartfelt stories.

## ✨ Features

- **🎅 Magical Moments Gallery** - Browse curated Christmas Eve moments with rich photography and storytelling
- **🎄 Christmas Events Calendar** - Discover all festive events happening along the Paulista
- **📸 Interactive Photo Galleries** - Explore expandable image galleries for each special moment
- **🌟 Responsive Design** - Seamlessly works across all devices and screen sizes
- **⚡ Performance Optimized** - Fast loading with imgix image optimization and lazy loading
- **🎨 Festive Design** - Beautiful Christmas-themed color palette with smooth animations

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69230cd8b183692bb397f2c5&clone_repository=69230e6cb183692bb397f2db)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Véspera de Natal da Avenida Paulista"

### Code Generation Prompt

> Based on the content model I created for "Véspera de Natal da Avenida Paulista", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router architecture
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React Markdown** - Markdown rendering for stories
- **Imgix** - Image optimization and responsive images

## 📋 Getting Started

### Prerequisites

- Bun runtime installed (or Node.js 18+)
- A Cosmic account with the "Véspera de Natal da Avenida Paulista" bucket

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd vespera-natal-paulista
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=vespera-de-natal-da-avenida-paulista-production
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Cosmic SDK Examples

### Fetching Moments

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all moments with photos
const { objects: moments } = await cosmic.objects
  .find({ type: 'momentos-paulista' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Events

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all Christmas events
const { objects: events } = await cosmic.objects
  .find({ type: 'eventos-natal' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application integrates with Cosmic CMS to manage all content dynamically:

- **Momentos da Paulista** - Special Christmas Eve moments with photos, stories, and galleries
- **Eventos de Natal** - Christmas events with schedules, locations, and details

All content can be updated through the Cosmic dashboard without code changes. Learn more at [Cosmic Docs](https://www.cosmicjs.com/docs).

## 🚀 Deployment Options

### Deploy to Vercel

The easiest way to deploy this Next.js application:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

Alternative deployment option:

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Production

Make sure to add these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=vespera-de-natal-da-avenida-paulista-production
COSMIC_READ_KEY=your-production-read-key
```

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) - The Headless CMS for modern applications

<!-- README_END -->