# Copilot instructions for Phixels

This file gives concise, actionable guidance to AI coding agents working in this Next.js + TypeScript project.

Summary

- Framework: Next.js (App Router), TypeScript, TailwindCSS + DaisyUI. See `package.json` for scripts.
- Code layout: `src/app` (routes/layouts/pages), `src/components` (UI), `src/assets` (SVGS), `public/images` (static images).
- Key configs: `tsconfig.json` (path alias `@/` => `src/`), `next.config.ts` (uses `reactCompiler: true`).

When editing

- Follow existing component patterns: small functional React components, default export, PascalCase filenames (example: `src/components/Hero.tsx`).
- Use absolute imports via `@/` (example: `import Hero from '@/components/Hero'` in `src/app/page.tsx`).
- Preserve Tailwind utility classes; avoid migrating styling to CSS modules unless requested.
- SVGs and images: repository imports SVGs from `src/assets/*` and uses `next/image`. Keep that pattern when adding image assets.

Build / dev / lint

- Start dev server: `npm run dev` (also `npm run build` / `npm run start`).
- Lint: `npm run lint` (project uses `eslint` and `eslint-config-next`).

Types & conventions

- `tsconfig.json` has `strict: true` — add types and interfaces, prefer explicit props types for components.
- Files under `src/` use JSX/TSX with React 19 and `jsx: react-jsx`. Keep imports and plugin usage consistent with `next` plugin in `tsconfig`.

Architecture notes (what to know)

- The project uses the Next App Router: `src/app/layout.tsx` provides global markup and fonts (`next/font/google`).
- `src/app/page.tsx` composes `TopBar`, `Navbar`, `Hero`, and `About`. When adding routes, follow the `app/` routing conventions.
- Components are presentational and composed in pages — prefer adding small focused components in `src/components` and import them in `app` routes.

Testing and CI

- No test framework present. Do not add large test infra without approval.

When making changes PR-friendly

- Keep changes small and focused; one logical change per commit.
- Update `README.md` only for user-facing documentation or new developer scripts.

Examples to follow

- Layout & fonts: `src/app/layout.tsx`.
- Page composition: `src/app/page.tsx` imports `src/components/Hero.tsx`.
- Image usage: `src/components/Hero.tsx` imports SVGs from `src/assets/*` and uses `next/image`.

What to avoid

- Do not change `next.config.ts` features (like `reactCompiler`) without testing locally.
- Avoid introducing global CSS outside `src/app/globals.css` unless scoped to a component.

If unsure

- Ask for clarification and reference the specific file you plan to modify (path and small rationale).

End
