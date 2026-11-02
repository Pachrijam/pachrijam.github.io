# Repository Guidelines

## Project Structure & Module Organization

This is a small static portfolio site deployed through GitHub Pages. The root
`index.html` is the site entry point. Put page-specific documents in `pages/`,
styles in `css/`, scripts in `src/`, and images in `src/images/`. Keep asset
paths relative to the document that uses them (for example,
`./src/images/favicon.png` from the root page). There is currently no build
output directory: edit source files directly and do not commit generated files.

## Build, Test, and Development Commands

No package manager, build step, or automated test suite is configured. Preview
the site locally with a simple static server, such as:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Before submitting changes, manually check
the affected page at desktop and narrow viewport widths, confirm navigation and
asset links resolve, and inspect the browser console for errors. GitHub Pages
serves the repository directly, so keep URLs and filenames portable.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript, matching `index.html`.
Prefer semantic HTML (`header`, `main`, `section`, `footer`) and meaningful
classes such as `home-page` or `project-card`; use lowercase, hyphen-separated
names for CSS classes and files. Keep JavaScript in focused files under `src/`
and avoid adding dependencies for simple browser behavior.

Follow the visual direction in `CONFIG_STYLE.md`: minimal black-and-white surfaces,
light-gray body text, white headings, restrained red Unix-style values, and
JetBrains Mono for code-like text. Background images should remain low-opacity
and behind content.

## Testing Guidelines

Because tests are manual, validate every changed route and linked image. For
markup changes, also verify title, description, viewport, and Open Graph tags
when applicable. Do not claim automated coverage unless a test framework is
added.

## Commit & Pull Request Guidelines

Existing commits use brief, lowercase imperative summaries (for example,
`reconfigured deployment settings` and `added background images`). Keep each
commit narrow and describe the user-visible change. Pull requests should state
what changed, link the relevant issue when available, list manual checks, and
include screenshots for visual or responsive updates. Do not commit secrets
from `.env`.
