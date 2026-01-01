# Copilot instructions for my-portfolio

This file gives actionable, repository-specific guidance to AI coding agents so they can be immediately productive when making changes.

## Project summary

- Minimal React (v19) + Vite app for a personal portfolio. Entry points:
  - `index.html` -> `src/main.jsx` -> `src/App.jsx` (single-page layout)
  - Layout uses a two-column responsive design: **left** fixed header (bio + nav), **right** scrollable content with sections.
- Styling appears to use Tailwind-style utility classes in components (e.g. `bg-[#0f172a]`, `text-slate-400`), but there is no Tailwind config present in the repo yet.

## Key files to inspect (first look)

- `src/App.jsx` — primary layout; imports `./components/Navbar` and three page components: `./pages/About`, `./pages/Experience`, `./pages/Projects`.
- `src/main.jsx` — React entry, uses `StrictMode`.
- `src/index.css` — global CSS; currently contains base styles (not Tailwind generated CSS).
- `package.json` — important scripts:
  - `npm run dev` (vite) — start local dev server
  - `npm run build` (vite build) — production bundle
  - `npm run preview` — preview a production build
  - `npm run lint` — runs `eslint .`
- `eslint.config.js` — project linting rules and `no-unused-vars` pattern that allows uppercase vars to be unused (common in this repo).
- `vite.config.js` — standard Vite config with React plugin.

## Immediate caveats agents should know

- Several imports referenced in `App.jsx` (components and pages) are missing in the repository. Expect `Module not found` errors when running `npm run dev`. When you see these errors, either:
  - Create the missing files under `src/components` and `src/pages` (preferred), or
  - Fix imports to point to correct/updated file paths if the project intends a different structure.
- Tailwind classes are used in JSX, but Tailwind is not fully set up (no `tailwind.config.js`, `postcss.config.js`, or Tailwind directives in `src/index.css`). If adding Tailwind, include Tailwind base directives and a config file.

## Code-style & conventions

- ESLint: follow rules in `eslint.config.js` (run `npm run lint` to validate). Note the project allows unused variables that start with an uppercase letter via a special rule.
- Keep components functional and default-exported (ESM `export default`). Example pattern in project: `export default App;` in `src/App.jsx`.
- Use small, presentational page components: `About`, `Experience`, `Projects`. Each should render a section with semantic HTML (e.g., `<section aria-labelledby="about">`).

## Debugging & developer workflows

- Start dev server: `npm run dev`. If Vite fails with module errors, check missing file imports in `src/` first.
- Lint: `npm run lint`. Fix issues per `eslint.config.js` (ESM, modern JS/JSX settings).
- Build and preview production bundle: `npm run build` then `npm run preview` to test production behavior.
- Browser console + terminal logs are primary sources for runtime errors; Vite shows stack traces and fast refresh for edits.

## Integration points & dependencies

- React + Vite (dev server, HMR). The only external runtime deps are `react` and `react-dom`.
- Dev tooling includes `eslint`, `@vitejs/plugin-react`, and `tailwindcss` (dev dep present but not configured).
- No tests or CI configuration present — add tests and CI workflows if required by the task.

## Suggested tasks for an agent picking up work

- Implement missing components referenced in `src/App.jsx`:
  - `src/components/Navbar.jsx` — simple nav with links to internal sections
  - `src/pages/About.jsx`, `src/pages/Experience.jsx`, `src/pages/Projects.jsx` — each exporting a React component
- Decide whether to properly enable Tailwind or switch the layout to plain CSS. If enabling Tailwind, add `tailwind.config.js`, PostCSS config, and Tailwind directives to `src/index.css`.
- Add basic tests (Jest/React Testing Library) and a simple GitHub Actions workflow for `lint` and `build` if requested.

## When uncertain, do this first (debug checklist)

1. Run `npm run dev` locally to reproduce the error.
2. Read the terminal error — if it's `Module not found` -> check `src/App.jsx` imports and the `src/` tree.
3. If styling looks broken, check whether Tailwind is configured; search for `tailwind.config.js` and PostCSS files.
4. Run `npm run lint` to catch style issues early.

---

If any of the above sections are unclear or you'd like me to include more examples (e.g., a minimal `Navbar` or a suggested `tailwind.config.js`), tell me which area to expand and I'll iterate. ✅
