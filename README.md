# drewswanigan.dev

Personal portfolio site for Drew Swanigan — Backend engineer building SaaS platforms and infrastructure automation systems.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Card, Badge, Button, Separator)
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles, CSS variables, utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main single-page portfolio
├── components/
│   └── ui/              # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn)
└── public/              # Static assets
```

## Customization

### Update Links

- **Email**: Search for `hello@drewswanigan.dev` in `app/page.tsx`
- **LinkedIn**: Search for `linkedin.com/in/drewswanigan` (marked with TODO comments)
- **GitHub**: Search for `github.com/DrewKraken`

### Update Content

All content data is defined in `app/page.tsx`:
- `featuredSystems` array — Production systems/products
- `engineeringProjects` array — Open source projects

### Colors

CSS variables are defined in `app/globals.css`. The site uses a dark zinc palette with subtle cyan accents.

## Deployment

Optimized for deployment on Vercel:

```bash
npm run build
```

Or connect your GitHub repo to Vercel for automatic deployments.

## License

MIT
