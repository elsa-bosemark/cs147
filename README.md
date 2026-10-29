# Etch

A responsive CS 147 starter website based on the supplied wireframe and garden photograph. Plain HTML, CSS, and JavaScript; no installation or build step required.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Customize

- Project title, idea, concept, and milestone text: `index.html`.
- Four team names, degrees, and photo paths: `teamMembers` in `script.js`.
- Assignment cards and their download links: the `assignments` section of `index.html`. Files live in `assignment_downloads/`; keep each under 50 MB, and host anything over 100 MB, such as raw videos, on Google Drive or Box and link to it.
- Colors, typography, spacing, and responsive layouts: `styles.css`.
- Header photo: `assets/garden.jpg`, converted from the supplied IMG_9062.HEIC.

The concept describes the proposed Etch experience supplied by the team; it does not claim a finished product exists. Team profiles and milestone resources are explicitly marked as placeholders. Add real content before presenting the site as a finalized project.

Google Fonts is used when available, with local font fallbacks. The Pinterest reference screenshots are visual inspiration and are not included as site assets.

## Publishing

GitHub Pages publishes `main` to https://elsa-bosemark.github.io/cs147/ on every push (**Settings → Pages**: deploy from the `main` branch, root folder). `.nojekyll` makes GitHub serve the files as they are. The site works under the `/cs147/` path because asset URLs are relative.

The Stanford URL (https://web.stanford.edu/class/cs147/projects/DesignforMeaningfulWork/etch/) shows the GitHub Pages site through `stanford/index.html`. Upload that file once; later pushes don't need it again:

```
scp stanford/index.html SUNETID@rice.stanford.edu:/afs/ir/class/cs147/WWW/projects/DesignforMeaningfulWork/etch/index.html
```

## Header artwork

`assets/drawing-silhouette.png` was generated with the built-in image tool using the supplied seated-person photograph as a pose reference. The prompt requested a transparent paper-cut silhouette of a seated person drawing in a sketchbook, filled with muted garden greenery and pale-yellow wildflowers, without facial or clothing detail, outlines, text, or background scenery. The reference photograph is not bundled in the repository.

The header uses only the artwork’s alpha channel as a subtractive CSS mask on the paper. The garden visible through the opening is the actual underlying header background, with responsive alignment maintained by ResizeObserver.
