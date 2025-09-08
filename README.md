# OffroadPakistan.com Website

Welcome to the official repository for the OffroadPakistan.com website. This project is a modern revival of a classic Pakistani adventure travel site from the early 2000s, built with [Astro.js](https://astro.build). The goal is to preserve the site's rich history and content while leveraging modern, fast, and static-first web technologies.

## Overview

This site is a digital archive of incredible off-road adventures, stories, and photographs. It is built to be lightweight, performant, and easily maintainable, with all content stored in Markdown files.

## Content Structure

The site's content is organized into two main collections located in the `src/content/` directory:

1.  **Posts (`src/content/posts/`)**: Standard articles, trip reports, and stories. Each post is a Markdown file, typically organized into category sub-folders.
2.  **Picture Galleries (`src/content/pictures/`)**: The extensive collection of photo galleries, which have a unique and specific structure to keep them self-contained.

### How Picture Galleries are Organized

Each picture gallery is a self-contained unit within its own folder, making it easy to manage and update. Here’s a breakdown of the structure for a typical gallery located at `src/content/pictures/[gallery-slug]/`:

-   **Gallery Folder**: A unique directory that holds all the files for one gallery (e.g., `content/pictures/a-journey-through-time/`).
-   **Index File (`index.md`)**: This file is the main page for the gallery. Its frontmatter contains the gallery's title, date, and an overview.
-   **Individual Picture Files (`.md`)**: Each picture in the gallery has its own corresponding Markdown file (e.g., `001.md`, `002.md`). The frontmatter of this file contains the picture's title, date, and paths to the image and thumbnail files.
-   **Co-located Images**: The actual image files (`.jpg`) and their thumbnails (`_thumb.jpg`) are stored directly within the same gallery folder. This approach keeps all content related to a single gallery in one place.

## Key Commands

All commands are run from the root of the project in your terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs all required dependencies. |
| `npm run dev` | Starts the local development server at `http://localhost:4321`. |
| `npm run build` | Builds the static website for production into the `./dist/` folder. |
| `npx serve dist` | Serves the production build locally to preview before deploying. |

## Project Structure

This Astro project follows the standard directory layout.

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

-   **`src/pages/`**: Contains the main page routes for the site. Astro uses a file-based routing system.
-   **`src/layouts/`**: Defines the UI structure for pages, such as the base HTML shell, header, and footer.
-   **`src/components/`**: Reusable Astro components used across the site.
-   **`src/content/`**: Contains content collections (posts and pictures) managed by Astro's Content Collections API.
-   **`public/`**: For static assets that don't need to be processed, like `favicon.ico` or `robots.txt`.