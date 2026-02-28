# AGENTS.md - ICMSCI 2026 Conference Website

This document provides guidelines for agents working on this codebase.

---

## Project Overview

- **Project Name:** ICMSCI 2026 Conference Website
- **Type:** Next.js 16 Web Application (Conference Website)
- **Core Functionality:** Multi-page conference website with information about call for papers, speakers, registration, schedule, and venue
- **Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, ESLint

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Linting
```bash
npm run lint         # Run ESLint on entire project
npm run lint src/   # Run ESLint on specific directory
npm run lint src/app/page.tsx  # Lint single file
```

### Type Checking
```bash
npx tsc --noEmit    # TypeScript type checking only
```

---

## Code Style Guidelines

### General Principles
- Use functional components with hooks (React 19)
- Prefer composition over inheritance
- Keep components small and focused
- Write self-documenting code

### File Structure
```
src/app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout (nav + footer)
├── globals.css           # Global styles + Tailwind
├── committee/
│   └── page.tsx
├── call-for-paper/
│   └── page.tsx
├── speakers/
│   └── page.tsx
├── submission/
│   └── page.tsx
├── publication/
│   └── page.tsx
├── registration/
│   └── page.tsx
├── event-location/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── presentation-schedule/
    └── page.tsx
```

### Imports
- Use absolute imports with `@/` prefix (configured in tsconfig)
- Group imports: external → internal → relative
- Example:
```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
```

### Naming Conventions
- **Files:** kebab-case for pages (e.g., `call-for-paper/page.tsx`)
- **Components:** PascalCase (e.g., `ConferenceCard`)
- **Variables:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **Types/Interfaces:** PascalCase with descriptive names

### TypeScript Guidelines
- Enable strict mode (already configured)
- Always define return types for functions when obvious
- Use `interface` for object shapes, `type` for unions/intersections
- Example:
```typescript
interface CommitteeMember {
  name: string;
  role: string;
  institution: string;
}

const Section = ({ title, items }: SectionProps) => { ... }
```

### React/Next.js Guidelines
- Use `"use client"` directive only when needed (for hooks, event handlers)
- Server Components by default (recommended for pages)
- Use `Link` from `next/link` for internal navigation
- Use `<a>` for external links

### Tailwind CSS v4
- Use utility classes for styling
- Custom theme colors defined in `globals.css`:
  - Primary: `#1e40af` (blue-800)
  - Accent: `#f59e0b` (amber-500)
- Use responsive prefixes: `md:`, `lg:`, `xl:`
- Example:
```tsx
<div className="card p-6 hover:shadow-lg transition-all">
  <h1 className="text-3xl font-bold text-slate-800">Title</h1>
</div>
```

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages
- Handle edge cases gracefully

### Component Patterns

#### Page Components (Server Components by default)
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function PageName() {
  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      {/* content */}
    </div>
  );
}
```

#### Client Components (when needed)
```typescript
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [state, setState] = useState(false);
  // interactive code
}
```

---

## Testing

This project does not currently have a test framework configured. To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

---

## Git Conventions

- Use meaningful commit messages
- Branch naming: `feature/description`, `fix/description`
- Run `npm run lint` before committing

---

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.1.6 | React framework |
| react | 19.2.3 | UI library |
| tailwindcss | ^4 | Styling |
| typescript | ^5 | Type safety |
| eslint | ^9 | Code linting |

---

## Useful Commands

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Format code (install Prettier separately)
npx prettier --write src/

# Clean build
rm -rf .next && npm run build
```

---

## Adding New Pages

1. Create directory under `src/app/`
2. Add `page.tsx` with:
   - Metadata export (title, description)
   - Default exported component
3. Add route link in `layout.tsx` navigation

---

## Notes

- This is a static site with Server Components
- No API routes or database
- Images stored in `/public` (not currently used)
- Forms are static (no backend integration)
