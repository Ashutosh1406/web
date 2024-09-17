const { getLQIP } = require('lqip');
const fs = require('fs');
const path = require('path');

// URL of the image you want to generate a placeholder for
const imageUrl = 'https://res.cloudinary.com/devwork14/image/upload/f_auto,q_auto/nj1gwhwq1pwagnh2pvca';

async function generateBase64() {
  try {
    const { base64 } = await getLQIP(imageUrl);
    console.log(base64);

    // Save Base64 string to a file (optional)
    fs.writeFileSync('base64Placeholder.txt', base64);
  } catch (error) {
    console.error('Error generating LQIP:', error);
  }
}

generateBase64();
