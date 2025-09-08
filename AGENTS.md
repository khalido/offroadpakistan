# OffroadPakistan.com Astro.js Site Development

## Project Overview

This is the second phase of reviving the crashed `offroadpakistan.com` website. Task 1 successfully extracted all content from WordPress and HTML galleries into Astro.js-ready markdown files. Task 2 focuses on building a modern, fast static site using Astro.js with the extracted content.

The goal is to create a modern, maintainable site that **feels like a natural evolution** of the original offroadpakistan.com, not a complete redesign. Keep the `content/posts/` directory as-is, since this isn't primarily a blog.

## Tech Stack

- Astro.js v5 using Tailwind CSS v4
- Markdown content with frontmatter metadata
- GitHub Actions to deploy to GitHub Pages

## Original Site Design Analysis

Original files in `offroadpk_old/` folder: `index.html` for layout, `offroad.css` and `offroad2.css` for styling.

### Classic Early 2000s Layout
- Fixed width: 780px centered (#frame container)
- Two-column for indexes: Main (488px) + sidebar (240px)
- Single-column for posts
- Header: 187px with `header1.jpg` background
- Nav: Dark gray (#565656)
- Images: 4px padding, 1px #ccc border, #f8f8ff bg

Improve slightly for modern/responsive use (mobile/desktop).

### Original Color Scheme
```css
--background: #E4E4E4;        /* Light gray */
--frame-bg: #ffffff;          /* White content */
--header-bg: #E2E87E;         /* Yellow-green header */
--nav-bg: #565656;            /* Dark gray nav */
--nav-text: #f2f2f2;          /* Light nav text */
--sidebar-bg: #f2f2f2;        /* Light sidebar */
--content-links: #00473F;     /* Dark teal links */
--visited-links: #CC9966;     /* Brown visited */
--accent-green: #98A100;      /* Olive accents */
```

### Typography & Elements
- Fonts: Tahoma, Verdana, Arial, Helvetica, sans-serif
- Comments: Hover light bg
- Nav: Inline list with hovers

## Content Structure Overview

### 1. Posts
- Location: `content/posts/`
- Structure: `content/posts/[category]/[post-slug]/` with `index.md` and `comments.json`

### 2. Picture Galleries
- Location: `content/pictures/`
- Structure: `content/pictures/[gallery-slug]/` with index.md + picture .md files and co-located images/thumbs
- Count: 31 galleries, 1,645 pictures, 1,897 comments

Each picture defines its image in frontmatter as well as includes it in the markdown to make it easier to see the image in markdown editors while editing content.

### 3. Project Structure
```
src/
├── components/
│   ├── layout/ (BaseLayout.astro, BlogLayout.astro, GalleryLayout.astro)
│   ├── ui/ (Header.astro, Footer.astro, Sidebar.astro, CommentsList.astro, etc.)
│   └── content/ (FeaturedPosts.astro, FeaturedPicture.astro, etc.)
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── posts/ ([category]/index.astro, [...slug].astro, index.astro)
│   ├── pictures/ (index.astro, [gallery]/index.astro, [gallery]/[...slug].astro)
│   └── rss.xml.js
├── styles/ (global.css, heritage.css)
└── utils/ + content/config.ts
```

## Design & Styling Guidelines

### Theme Concept
- Heritage + Modern: Blend cultural heritage with modern design
- Adventure-focused: Emphasize exploration
- Photo-centric: Highlight landscapes/adventures

### Layout Philosophy
- Responsive: Mobile-first, honor original centered desktop layout
- Content-focused: Let photos/stories shine
- Navigation: Clean, intuitive, respecting original hierarchy

## Todo

### Phase 1: Layout Architecture Refactor (Mostly Done)
- [x] Extract Header and Footer components from current BaseLayout
- [x] Create new `BaseLayout.astro` with just HTML shell, Header, Footer, and main slot (no sidebar)
- [x] Create `PageLayout.astro` that extends BaseLayout and adds Sidebar for listing pages
- [x] Update `BlogLayout.astro` to extend BaseLayout directly (no sidebar, larger fonts for readability)
- [x] Create `FeaturedPosts.astro` component that filters and displays featured posts on homepage (using `featured: true`)
- [x] Update all pages to use appropriate layout (index/listings use PageLayout, posts use BlogLayout)

### Phase 2: Responsive Design Implementation (Mostly Done)
- [x] Add responsive breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- [x] Make sidebar responsive - stack below content on mobile
- [ ] Implement mobile navigation menu (e.g., hamburger toggle in Header)
- [x] Ensure images and content containers are responsive
- [ ] Test all layouts on different screen sizes (add to workflow)

### Phase 3: Heritage Design & Polish (Partial)
- [x] Apply original color scheme consistently using CSS variables (in global.css)
- [ ] Implement heritage image styling (borders and padding) consistently
- [x] Style navigation with original dark gray (#565656) background
- [x] Create `CommentsList.astro` component that loads and displays comments.json for both posts and pictures
- [ ] Update typography - use modern font sizes (14-16px base) while keeping heritage fonts
- [ ] Add basic SEO meta tags and Open Graph support (e.g., in layouts)

### Phase 4: Picture Display Improvements (New)
- [ ] Optimize images with Astro's Image component (lazy loading, WebP, responsive sizes) in PictureLayout and gallery views
- [ ] Add lightbox/modal for full-screen picture viewing (recommend astro-lightgallery integration: supports keyboard arrows/ESC, touch/swipe; install via `astro add astro-lightgallery`; ~17kB, minimal JS) or conider https://photoswipe.com/ or https://swiperjs.com/
- [ ] Enhance navigation: Keyboard arrows for prev/next; progress bar for gallery position; ensure touch/swipe on mobile
- [ ] Add EXIF metadata display (e.g., date, camera) if available in frontmatter

### Future Enhancements (Updated)
- [ ] Add excerpt to post listings and category indexes (use first 150-200 chars from post content)
- [ ] Implement related posts functionality (based on category/tags)
- [ ] Generate XML sitemap (Astro integration)
- [ ] Implement search functionality (client-side JS for simple site)

## Best Practices (Condensed)

### Simplicity First
- Keep layouts minimal: Single purpose per layout/component.
- Avoid over-engineering: Use Astro built-ins (getCollection, slots, props); no complex JS.
- Component size: Small, focused; descriptive names.
- This is a simple site: Don't change code too much—evolve original design naturally, prioritize readability over features.

### Layout & Responsive
- BaseLayout: HTML shell only + Header/Footer.
- Mobile-first: Breakpoints consistent (Tailwind defaults); no horizontal scroll; 44px touch targets.
- Heritage: Use original colors/fonts; add borders/padding to images; modernize typography (14-16px base).

### Code & Performance
- Organization: Group in ui/content/layout; relative imports; TS interfaces for props.
- Minimal JS: Static generation; optimize images (Astro Image); Tailwind over custom CSS.
- Content: Consistent frontmatter; co-locate images/comments; featured/draft flags.

### Workflow
- Test on real devices; keyboard/screen reader accessibility.
- Commits: Small, focused messages.

## Advice for Future AI Agents
- Stick to heritage evolution: Minimal changes to preserve 2000s feel; avoid modern overhauls like SPAs.
- Simple site mindset: Prioritize fast loads/static gen; no heavy libs (e.g., no React if not needed).
- Read all related files before edits (use read/glob); verify with lint/typecheck after changes.
- For pictures: ensure responsive/full-screen views without breaking navigation; support touch/keyboard (e.g., arrows/swipe), handle mobile and desktop.
- Plan first: Use todowrite for multi-step tasks; batch tool calls; confirm with user before implementing.
- Security/SEO: Add meta/OpenGraph; never log secrets; test responsiveness.
