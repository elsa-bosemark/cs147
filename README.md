# Etch

A responsive CS 147 starter website based on the supplied wireframe and garden photograph. Plain HTML, CSS, and JavaScript; no installation or build step required.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Customize

- Project title, idea, concept, and milestone text: `index.html`.
- Four team names, short bios, and optional photo paths: `teamMembers` in `script.js`.
- Colors, typography, spacing, and responsive layouts: `styles.css`.
- Header photo: `assets/garden.jpg`, converted from the supplied IMG_9062.HEIC.

The concept describes the proposed Etch experience supplied by the team; it does not claim a finished product exists. Team profiles and milestone resources are explicitly marked as placeholders. Add real content before presenting the site as a finalized project.

Google Fonts is used when available, with local font fallbacks. The Pinterest reference screenshots are visual inspiration and are not included as site assets.

## Publishing

This repository stores the website source. Automatic deployment is disabled; GitHub pushes do not publish the website.

## Header artwork

`assets/drawing-silhouette.png` was generated with the built-in image tool using the supplied seated-person photograph as a pose reference. The prompt requested a transparent paper-cut silhouette of a seated person drawing in a sketchbook, filled with muted garden greenery and pale-yellow wildflowers, without facial or clothing detail, outlines, text, or background scenery. The reference photograph is not bundled in the repository.

The header uses only the artwork’s alpha channel as a subtractive CSS mask on the paper. The garden visible through the opening is the actual underlying header background, with responsive alignment maintained by ResizeObserver.
