const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync('public/favicon.svg');

async function generate() {
  const sizes = [16, 32, 48, 64, 128, 192, 512];
  for (const size of sizes) {
    await sharp(svg).resize(size, size).png().toFile(path.join('public', `favicon-${size}.png`));
    console.log('Generated favicon-' + size + '.png');
  }

  // Apple touch icons
  const appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180];
  for (const size of appleSizes) {
    await sharp(svg).resize(size, size).png().toFile(path.join('public', `apple-touch-icon-${size}.png`));
    console.log('Generated apple-touch-icon-' + size + '.png');
  }

  console.log('All done!');
}

generate().catch(console.error);