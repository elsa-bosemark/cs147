// Replace these starter profiles with the team's real names, bios, and photo paths.
const teamMembers = [
  { name: 'Your name', bio: 'A short introduction goes here.', photo: '' },
  { name: 'Your name', bio: 'A short introduction goes here.', photo: '' },
  { name: 'Your name', bio: 'A short introduction goes here.', photo: '' },
  { name: 'Your name', bio: 'A short introduction goes here.', photo: '' },
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
  portrait.className = 'portrait stamp';
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
  const bio = document.createElement('p');
  bio.textContent = member.bio;
  card.append(portrait, name, bio);
  grid.append(card);
});
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
