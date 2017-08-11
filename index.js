require('dotenv').config();
const fs = require('fs');
const sharp = require('sharp');
let tinify = require('tinify');
tinify.key = process.env.TINIFY_KEY;

const buf = fs.readFileSync('demo.png');

console.time('> sharp compression');
sharp(buf)
    .toBuffer()
    .then(data => {
        fs.writeFileSync('sharp.png', data);
        console.timeEnd('> sharp compression');
    })
    .catch(err => {
        if (err) console.log(err);
    });

console.time('> tinypng compression');
tinify
    .fromBuffer(buf)
    .toFile('tinypng.png', err => {
        if (err) console.log(err);
        else {
            console.timeEnd('> tinypng compression');
        }
    });
