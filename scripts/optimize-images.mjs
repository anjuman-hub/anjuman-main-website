// Final comprehensive script to optimize even the banners
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const galleryOutputDir = path.join(__dirname, '../public/images/gallery-optimized');
const heroOutputDir = path.join(__dirname, '../public/images/hero-optimized');
const miscOutputDir = path.join(__dirname, '../public/images/misc-optimized');

[galleryOutputDir, heroOutputDir, miscOutputDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const galleryImages = [
    'AMT_5353.jpg', 'AMT_5488.jpg', 'AMT_5518.jpg', 'AMT_5543.jpg',
    'AMT_5549.jpg', 'DSC_5624.jpg', 'DSC_5646.jpg', 'DSC_5694.jpg',
    'hashim.jpg', 'annualday.jpg', 'centenary-1.jpg'
];

const heroImages = [
    'vision-2030-II.png', 'vision-2030.png', 'AMT_5353.jpg',
    'AMT_5518.jpg', 'AMT_5878.JPG', 'AMT_5488.jpg', 'AMT_5543.jpg',
    'AMT_5549.jpg', 'bannernew.jpg', 'mobbanner.png'
];

const eventImages = [
    'winners.jpeg', 'r-day-2.jpeg', 'r-day-4.jpeg', 'weight-lifting.jpeg',
    'helmetevent-1.jpg', 'helmetevent-2.jpg', 'helmetevent-3.jpg'
];

async function processImages(images, outputDir, width, height, fit = 'cover') {
    const type = path.basename(outputDir);
    for (const imageName of [...new Set(images)]) {
        const inputPath = path.join(inputDir, imageName);
        const baseName = path.parse(imageName).name;
        const outputPath = path.join(outputDir, `${baseName}.webp`);
        if (!fs.existsSync(inputPath)) continue;
        try {
            const sharpInstance = sharp(inputPath);
            if (width && height) sharpInstance.resize(width, height, { fit, position: 'center' });
            else if (width) sharpInstance.resize(width);
            await sharpInstance.webp({ quality: 90 }).toFile(outputPath);
            console.log(`Processed ${imageName} to ${type}`);
        } catch (err) {
            console.log(`Error ${imageName}: ${err.message}`);
        }
    }
}

async function run() {
    await processImages(galleryImages, galleryOutputDir, 1000, 1000);
    await processImages(heroImages, heroOutputDir, 1920);
    await processImages(eventImages, miscOutputDir, 800);
    console.log('--- DONE ---');
}

run();
