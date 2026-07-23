# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pocket Heist — starter project for the Claude Code Masterclass. A Next.js 16 (App Router) + React 19 + TypeScript app, styled with Tailwind CSS 4. Most pages are currently unimplemented placeholder markup with no backend/data layer, auth, or state management wired up yet.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
npm test        # run vitest test suite
npx vitest run tests/components/Navbar.test.tsx   # run a single test file
npx vitest       # watch mode
```

## Architecture

Route groups split the app into two shells under `app/`:

- `app/(public)/` — unauthenticated pages (splash `page.tsx`, `login`, `signup`, `preview`). Its `layout.tsx` renders bare, no nav.
- `app/(dashboard)/` — authenticated shell wrapping children with the shared `Navbar` component. Contains the `heists` feature: list view (`heists/page.tsx`), detail view (`heists/[id]/page.tsx`), and creation form (`heists/create/page.tsx`).

The intended (not-yet-implemented) routing logic, per the comment in `app/(public)/page.tsx`: the splash page should redirect logged-in users to `/heists` and logged-out users to `/login`.

`app/(public)/preview/page.tsx` is scratch space for previewing new UI components in isolation before wiring them into real routes.

Shared components live in `components/<ComponentName>/`, each with its own `.tsx`, CSS Module (`*.module.css`), and `index.ts` barrel export (see `components/Navbar/`).

## Styling

Theme tokens (colors, font) are defined once via Tailwind's `@theme` block in `app/globals.css` (e.g. `--color-primary`, `--color-body`, `--color-dark`) and consumed as utility classes (`text-primary`, `bg-dark`, etc.). Generic layout classes shared across pages are also defined there: `.page-content`, `.center-content`, `.form-title`. Prefer reusing these over introducing new ad-hoc styles. Component-specific styles use CSS Modules alongside the component.

## Testing

Vitest + Testing Library (jsdom environment, globals enabled, `@testing-library/jest-dom` matchers loaded via `vitest.setup.ts`). Path alias `@/*` (mapped to project root) works in tests via `vite-tsconfig-paths`. Test files live under `tests/`, mirroring the source structure (e.g. `tests/components/Navbar.test.tsx` tests `components/Navbar`).

## Notes

`.ruby-lsp/` in the repo root is an unrelated leftover editor-tooling artifact (Gemfile, gems) from a template and is not part of the actual application — ignore it.
