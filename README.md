# jerrenwong.github.io

My personal site, built with [Eleventy](https://www.11ty.dev/). Every push to `main` deploys it to GitHub Pages.

## Editing

Run `npm install` once, then `npm run dev` to preview at http://localhost:8080.

The introduction and contact details are in `content/index.md`. The photo is `static/photo.jpg`. Any shape works, because it's cropped to a square from the top.

To add to Research or Projects, create a Markdown file in `content/research/` or `content/projects/`. It needs a `title` and a short description. `link: https://...` makes the whole widget a link. For a picture, put it in `static/research/` or `static/projects/` and add `image: /research/name.png` or `image: /projects/name.png`; it's cropped to twice as wide as it is tall.

Math works with `$...$` and `$$...$$` in any Markdown file.

## Layout

- `content/` holds the pages.
- `static/site.css` holds the design.
- `_includes/` holds the HTML templates. To add a section to the top bar, add a link after the name in `base.njk`.
- `_includes/icons/` holds the contact icons, which are [Octicons](https://primer.style/octicons/).
