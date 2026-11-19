# Etch

A responsive CS 147 starter website based on the supplied wireframe and garden photograph. Plain HTML, CSS, and JavaScript; no installation or build step required.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Customize

- Project title, idea, concept, and milestone text: `index.html`.
- Four team names, degrees, and photo paths: `teamMembers` in `script.js`.
- Our process gallery: `work` in `script.js`, in the order the work was made; the last piece is featured. Put files in `assignment_downloads/` and fill in `pdf` (what the cover opens), `cover` (the PDF's first page, saved in `assignment_downloads/covers/`), and each file's `href`, or `video` for a YouTube or Vimeo embed URL. Anything left empty shows as a placeholder. Keep each file under 50 MB, and host anything over 100 MB, such as raw videos, on Google Drive or Box and link to it.

  To make a cover: `pdftoppm -f 1 -l 1 -singlefile -jpeg -scale-to-x 960 -scale-to-y -1 assignment_downloads/A6.pdf assignment_downloads/covers/A6`
- Colors, typography, spacing, and responsive layouts: `styles.css`.
- Picture inside the seed packet's silhouette: `assets/hero-blossom.jpg`, a soft-focus blossom branch taken from Pinterest (https://www.pinterest.com/pin/790733647145797671/). The pin does not name the artist. The earlier garden photo, `assets/garden.jpg`, is still in `assets/`.
- Pressed flowers, kraft texture and background glow: `assets/flowers/`, `assets/kraft.webp` and `assets/glow-*.webp`, taken from the hi-fi prototype.

The concept describes the proposed Etch experience supplied by the team; it does not claim a finished product exists. Team profiles and milestone resources are explicitly marked as placeholders. Add real content before presenting the site as a finalized project.

Google Fonts is used when available, with local font fallbacks. Apart from the hero picture, the Pinterest references are visual inspiration and are not included as site assets.

## Publishing

GitHub Pages publishes `main` to https://elsa-bosemark.github.io/cs147/ on every push (**Settings → Pages**: deploy from the `main` branch, root folder). `.nojekyll` makes GitHub serve the files as they are. The site works under the `/cs147/` path because asset URLs are relative.

The Stanford URL (https://web.stanford.edu/class/cs147/projects/DesignforMeaningfulWork/etch/) shows the GitHub Pages site through `stanford/index.html`. Upload that file once; later pushes don't need it again:

```
scp stanford/index.html SUNETID@rice.stanford.edu:/afs/ir/class/cs147/WWW/projects/DesignforMeaningfulWork/etch/index.html
```

## Header artwork

`assets/drawing-silhouette.png` was generated with the built-in image tool using the supplied seated-person photograph as a pose reference. The prompt requested a transparent paper-cut silhouette of a seated person drawing in a sketchbook, filled with muted garden greenery and pale-yellow wildflowers, without facial or clothing detail, outlines, text, or background scenery. The reference photograph is not bundled in the repository.

The seed packet uses only the artwork’s alpha channel, as a CSS mask on the blossom picture, so the blossoms show in the shape of the person sketching.

The packet tears open in `script.js`: scrolling, dragging the scissors along the seam, or tapping them sets the `--tear`, `--open` and `--cut` values that `styles.css` animates.
