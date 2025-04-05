const fs = require('fs');
const path = require('path');

// Create necessary directories
const directories = [
  'public/placeholder/athletes',
  'public/placeholder/covers',
  'public/placeholder/thumbnails',
  'public/placeholder/videos'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create logo SVG
const logoContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#0E76FD" />
  <path d="M30 35 L30 65 L70 50 Z" fill="white" />
</svg>`;

fs.writeFileSync('public/logo.svg', logoContent);
console.log('Created logo.svg');

// Create placeholder athlete images
const athletes = [
  'michael-jordan', 
  'serena-williams', 
  'lionel-messi', 
  'usain-bolt', 
  'simone-biles'
];

athletes.forEach(athlete => {
  const name = athlete
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const r = Math.floor(Math.random() * 200) + 55;
  const g = Math.floor(Math.random() * 200) + 55;
  const b = Math.floor(Math.random() * 200) + 55;
  
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <rect width="300" height="300" fill="rgb(${r},${g},${b})" />
  <text x="150" y="150" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${name}</text>
</svg>`;
  
  fs.writeFileSync(`public/placeholder/athletes/${athlete}.jpg`, svgContent);
  console.log(`Created athlete image: ${athlete}.jpg`);
  
  const coverContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
  <rect width="1200" height="400" fill="rgb(${r},${g},${b})" />
  <text x="600" y="200" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">${name} Cover</text>
</svg>`;
  
  fs.writeFileSync(`public/placeholder/covers/${athlete}-cover.jpg`, coverContent);
  console.log(`Created cover image: ${athlete}-cover.jpg`);
});

// Create placeholder video thumbnails
const videos = [
  'jordan-last-dance', 
  'serena-grand-slams', 
  'messi-world-cup',
  'usain-bolt-legacy', 
  'simone-biles-skills', 
  'jordan-flu-game',
  'williams-sisters', 
  'messi-barcelona', 
  'bolt-beijing', 
  'the-biles-skill'
];

videos.forEach(video => {
  const title = video
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  const r = Math.floor(Math.random() * 200) + 55;
  const g = Math.floor(Math.random() * 200) + 55;
  const b = Math.floor(Math.random() * 200) + 55;
  
  const thumbnailContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <rect width="1280" height="720" fill="rgb(${r},${g},${b})" />
  <text x="640" y="360" font-family="Arial" font-size="36" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
</svg>`;
  
  fs.writeFileSync(`public/placeholder/thumbnails/${video}.jpg`, thumbnailContent);
  console.log(`Created thumbnail: ${video}.jpg`);
  
  // Create empty MP4 files
  fs.writeFileSync(`public/placeholder/videos/${video}.mp4`, '');
  console.log(`Created empty video: ${video}.mp4`);
});

// Create a placeholder for the hero background video
fs.writeFileSync('public/placeholder/hero-background.mp4', '');
console.log('Created hero background video placeholder');

console.log('Placeholder assets created successfully!');