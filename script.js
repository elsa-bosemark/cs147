// Degrees are listed one per line beneath each name.
const teamMembers = [
  { name: 'Ahyan', degrees: ['BS CS'], photo: 'assets/team-1.png' },
  { name: 'Elsa', degrees: ['BS Design', 'MS HCI'], photo: 'assets/team-2.png' },
  { name: 'Jia', degrees: ['BS Design', 'MS HCI'], photo: 'assets/team-3.png' },
  { name: 'Kelly', degrees: ['BS CS HCI', 'MS CS AI'], photo: 'assets/team-4.png' },
];
const plants = [
  '<path d="M90 220V80M90 155C20 155 30 100 36 92c39 0 62 21 54 63ZM90 125c0-55 43-70 61-59 0 43-22 65-61 59ZM90 190c-49 4-59-26-60-42 33-7 58 6 60 42Z"/>',
  '<path d="M87 220c-10-62 4-107 10-164M91 160c-51-3-60-41-50-59 36 8 49 30 50 59ZM92 124c46-3 59-34 53-55-32 0-55 26-53 55ZM89 198c47-6 57-35 50-51-30 2-48 22-50 51Z"/>',
  '<path d="M90 220V106M90 150l-39-37M90 180l41-46"/><circle cx="90" cy="75" r="18"/><path d="M90 57c-25-43-47-9-18 8-48-5-41 34 2 20-33 37 4 55 16 8 13 47 50 29 16-8 44 14 50-25 2-20 29-17 7-51-18-8Z"/><path d="M50 114c-33-3-34-37-25-44 24 7 30 26 25 44ZM128 136c30-2 40-32 30-44-25 7-32 22-30 44Z"/>',
  '<path d="M83 220c0-87 26-120 39-156M87 178c-48 4-64-30-61-51 39-2 58 22 61 51ZM98 141c51 6 68-23 66-43-36-5-62 15-66 43ZM111 106c-42-7-53-36-42-54 29 6 43 25 42 54Z"/>',
];
const grid = document.getElementById('team-grid');
teamMembers.forEach((member, index) => {
  const card = document.createElement('article');
  card.className = 'team-card';
  const portrait = document.createElement('div');
  portrait.className = 'portrait';
  if (member.photo) {
    const image = document.createElement('img');
    image.src = member.photo;
    image.alt = member.name;
    image.style.cssText = 'width:100%;height:100%;object-fit:cover';
    image.loading = 'lazy';
    portrait.append(image);
  } else {
    portrait.innerHTML = `<svg viewBox="0 0 180 250" aria-hidden="true">${plants[index]}</svg><span>Team member ${String(index + 1).padStart(2, '0')}</span>`;
  }
  const name = document.createElement('h3');
  name.textContent = member.name;
  const degrees = document.createElement('p');
  degrees.textContent = member.degrees.join('\n');
  card.append(portrait, name, degrees);
  grid.append(card);
});
// Our work, in the order we made it. The last five close the story as a bento: four cards beside the featured final piece.
// Files live in assignment_downloads/, covers in assignment_downloads/covers/. Leave pdf, cover, href, or video empty until that file is ready; it shows as a placeholder.
// pdf: what the cover opens. cover: an image of the PDF's first page. video: a YouTube or Vimeo embed URL.
const work = [
  { title: 'Needfinding', pdf: 'assignment_downloads/A1.pdf', cover: 'assignment_downloads/covers/A1.jpg', files: [{ label: 'PowerPoint', type: 'slides', href: 'assignment_downloads/A1.pptx' }] },
  { title: 'Experience prototypes', pdf: 'assignment_downloads/A2.pdf', cover: 'assignment_downloads/covers/A2.jpg', files: [{ label: 'PowerPoint', type: 'slides', href: 'assignment_downloads/A2.pptx' }] },
  { title: 'Concept video', pdf: 'assignment_downloads/A4.pdf', cover: 'assignment_downloads/covers/A4.jpg', files: [{ label: 'PowerPoint', type: 'slides', href: 'assignment_downloads/A4.pptx' }, { label: 'Watch', type: 'video', video: 'https://www.youtube.com/embed/fZAmPD2v1Gg?autoplay=1' }, { label: 'Download', type: 'download', href: 'assignment_downloads/A4_Concept_Video_Compressed.mp4.zip' }] },
  { title: 'Low-fi prototyping', pdf: 'assignment_downloads/A5.pdf', cover: 'assignment_downloads/covers/A5.jpg', files: [{ label: 'PowerPoint', type: 'slides', href: 'assignment_downloads/A5.pptx' }, { label: 'Sketch report', type: 'doc', href: 'assignment_downloads/A5_SketchReport.pdf' }] },
  { title: 'Medium-fi prototype', pdf: '', cover: '', files: [{ label: 'PowerPoint', type: 'slides', href: '' }, { label: 'Figma', type: 'design', href: '' }, { label: 'README', type: 'doc', href: '' }] },
  { title: 'High-fi prototype', pdf: '', cover: '', files: [{ label: 'PowerPoint', type: 'slides', href: '' }, { label: 'Prototype', type: 'link', href: '' }, { label: 'README', type: 'doc', href: '' }] },
  { title: 'Heuristic evaluation', pdf: '', cover: '', files: [{ label: 'Spreadsheet', type: 'sheet', href: '' }] },
  { title: 'Poster, pitch and demo', pdf: '', cover: '', files: [{ label: 'PowerPoint', type: 'slides', href: '' }, { label: 'Script', type: 'doc', href: '' }, { label: 'Poster', type: 'image', href: '' }, { label: 'Poster source', type: 'source', href: '' }, { label: 'Watch demo', type: 'video', video: '' }, { label: 'Download demo', type: 'download', href: '' }] },
  { title: 'Final report', pdf: '', cover: '', files: [{ label: 'Word doc', type: 'doc', href: '' }] },
];
const workGrid = document.getElementById('work-grid');
const videoDialog = document.getElementById('video-dialog');
const videoFrame = videoDialog.querySelector('iframe');
// 24px stroke icons, one per file type.
const fileIcons = {
  slides: '<path d="M3 4h18M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M12 16v4M9 20h6"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
  link: '<path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
  design: '<path d="M9 3h3v6H9a3 3 0 0 1 0-6zM12 3h3a3 3 0 0 1 0 6h-3zM9 9h3v6H9a3 3 0 0 1 0-6zM9 15h3v3a3 3 0 1 1-3-3z"/><circle cx="15" cy="12" r="3"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  source: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  video: '<path d="M7 4v16l13-8z"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  sheet: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>',
};
function workFile(file) {
  const ready = file.href || file.video;
  const link = document.createElement(!ready ? 'span' : file.video ? 'button' : 'a');
  link.className = 'work-file';
  link.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${fileIcons[file.type]}</svg>`;
  const label = document.createElement('span');
  label.textContent = file.label;
  link.append(label);
  if (!ready) {
    link.classList.add('is-pending');
    link.title = 'Coming soon';
  } else if (file.video) {
    link.type = 'button';
    link.addEventListener('click', () => {
      videoFrame.src = file.video;
      videoDialog.showModal();
    });
  } else {
    link.href = file.href;
    if (/\.(pptx|zip)$/.test(file.href)) link.download = '';
    else {
      link.target = '_blank';
      link.rel = 'noopener';
    }
  }
  return link;
}
const bento = document.createElement('div');
bento.className = 'work-bento';
const bentoSide = document.createElement('div');
bentoSide.className = 'work-side';
bento.append(bentoSide);
const bentoStart = Math.max(0, work.length - 5);
work.forEach((piece, index) => {
  const featured = index === work.length - 1;
  const card = document.createElement('article');
  card.className = featured ? 'work-card work-featured' : 'work-card';
  const cover = document.createElement(piece.pdf ? 'a' : 'div');
  cover.className = 'work-cover';
  if (piece.pdf) {
    cover.href = piece.pdf;
    cover.target = '_blank';
    cover.rel = 'noopener';
    cover.setAttribute('aria-label', `Open the ${piece.title} PDF`);
  }
  if (piece.cover) {
    const image = document.createElement('img');
    image.src = piece.cover;
    image.alt = '';
    image.loading = 'lazy';
    cover.append(image);
  }
  const body = document.createElement('div');
  body.className = 'work-body';
  const title = document.createElement('h3');
  title.textContent = piece.title;
  const files = document.createElement('div');
  files.className = 'work-files';
  files.append(...piece.files.map(workFile));
  body.append(title, files);
  card.append(cover, body);
  if (featured) bento.append(card);
  else if (index >= bentoStart) bentoSide.append(card);
  else workGrid.append(card);
});
workGrid.append(bento);
videoDialog.addEventListener('close', () => { videoFrame.src = 'about:blank'; });

if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}

// Keep the paper opening aligned with the responsive artist slot.
const heroPaper = document.querySelector('.hero-paper');
const artistSlot = document.querySelector('.drawing-cutout');
function alignArtistOpening() {
  if (!artistSlot.naturalWidth) return;
  const scale = Math.min(artistSlot.clientWidth / artistSlot.naturalWidth, artistSlot.clientHeight / artistSlot.naturalHeight);
  const width = artistSlot.naturalWidth * scale;
  const height = artistSlot.naturalHeight * scale;
  heroPaper.style.setProperty('--cutout-width', `${width}px`);
  heroPaper.style.setProperty('--cutout-height', `${height}px`);
  heroPaper.style.setProperty('--cutout-x', `${artistSlot.offsetLeft + (artistSlot.clientWidth - width) / 2}px`);
  heroPaper.style.setProperty('--cutout-y', `${artistSlot.offsetTop + (artistSlot.clientHeight - height) / 2}px`);
}
artistSlot.addEventListener('load', alignArtistOpening);
new ResizeObserver(alignArtistOpening).observe(heroPaper);
alignArtistOpening();

const headerVideo = document.querySelector('.footer-video');
if (headerVideo) {
  headerVideo.defaultPlaybackRate = 0.75;
  const slowHeaderVideo = () => { headerVideo.playbackRate = 0.75; };
  headerVideo.addEventListener('loadedmetadata', slowHeaderVideo);
  headerVideo.addEventListener('play', slowHeaderVideo);
  slowHeaderVideo();
}
