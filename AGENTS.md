# AGENTS.md

## Dev Commands
- `npm run dev` - Start dev server (default port 5173)
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Project Structure
```
src/
├── assets/          # Images, logos, project screenshots
├── components/     # Reusable: Header, Footer
├── pages/          # Route pages: Home
├── sections/       # Page sections: Banner, About, Projects
└── styles/        # CSS (Tailwind imports)
```

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS 4 (uses `@tailwind` directives, not `@import`)
- No TypeScript

## Tailwind Setup
Edit `tailwind.config.js` to add custom colors. Current custom colors:
- `primary`: #ffa500
- `secondary`: #0e0e0e
- `background`: #000000
- `text`: #ffffff