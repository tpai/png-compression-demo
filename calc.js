const fs = require('fs');

const demo = getFilesize('demo.png');
const sharp = getFilesize('sharp.png');
const tinify = getFilesize('tinypng.png');

console.log(`> original size: ${demo}KB`);
console.log(`> sharp size: ${sharp}KB`);
console.log(`> tinypng size: ${tinify}KB`);
console.log(`> sharp space saving: ${Math.floor((1-sharp/demo)*100)}%`);
console.log(`> tinypng space saving: ${Math.floor((1-tinify/demo)*100)}%`);

function getFilesize(filename) {
    const stats = fs.statSync(filename);
    const fileSize = stats.size / 1000.0;
    return Math.ceil(fileSize);
}
