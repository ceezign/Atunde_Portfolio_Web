# Alex Morgan — Portfolio (Next.js)

A premium, animated personal portfolio built with your requested stack:
**Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all page sections
  globals.css         Design tokens (CSS variables) + Tailwind base
components/           One component per section (Hero, About, Skills, ...)
  ThemeProvider.tsx    Dark/light theme context (in-memory, class-based)
  Reveal.tsx           Scroll-reveal wrapper (Framer Motion)
  Icon.tsx             Dynamic lucide-react icon resolver
hooks/
  useTypingEffect.ts   Hero role-title typing animation
  useCountUp.ts        Animated stat counters
lib/
  data.ts              ALL editable content lives here (skills, projects, etc.)
  types.ts             Shared TypeScript types
```

## Personalizing content

Almost everything you'll want to change lives in **`lib/data.ts`**:
name/roles, social links, skills & proficiency levels, experience, education,
projects, services, certifications, stats, GitHub stats, blog posts, and
testimonials. Update that file and the whole site updates.

Your name and headline text live directly in `components/Hero.tsx` and
`app/layout.tsx` (metadata).

## Things to wire up before going live

- **Contact form** (`components/Contact.tsx`) is a static template — connect
  it to a backend route, or a service like Formspree / EmailJS / Resend.
- **GitHub section** (`components/GitHubSection.tsx`) currently shows mock
  contribution/language data. Swap in a real fetch to the GitHub REST API
  (`https://api.github.com/users/<username>`) — ideally from a server
  component or API route so your token (if used) stays server-side.
- **Resume buttons** currently link to `#`. Drop a PDF in `public/` and point
  the links at it (e.g. `/resume.pdf`).
- **Profile photo**: replace the placeholder icon in `components/About.tsx`
  and `Hero.tsx` with a real `next/image` once you have a photo in `public/`.

## Stack notes

- **Fonts are self-hosted** via `@fontsource` packages (Space Grotesk, Inter,
  JetBrains Mono) rather than fetched from Google Fonts at build time. This
  avoids the slow-start / "aborted request" issue `next/font/google` can hit
  on flaky or restricted connections — fonts ship as local files with zero
  runtime network calls.
- Theming uses a `data-theme` attribute on `<html>` driven by React context —
  no `localStorage`, so it resets to dark mode on reload by design. Swap in
  `next-themes` if you want persistence.
- Animations: Framer Motion handles scroll reveals, the hero card entrance,
  and the animated skill bars / stat counters. GSAP is included as a
  dependency if you want to add more elaborate scroll-triggered sequences
  later (e.g. a hero background animation).
- Styling is plain Tailwind utility classes reading from CSS variables
  defined in `globals.css`, so the whole palette (dark **and** light mode)
  can be restyled from one place.
