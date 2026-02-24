// Script to optimize gallery images for web use - HD version
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/gallery-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Images to optimize for gallery
const galleryImages = [
    'AMT_5353.jpg',
    'AMT_5488.jpg',
    'AMT_5518.jpg',
    'AMT_5543.jpg',
    'AMT_5549.jpg',
    'DSC_5624.jpg',
    'DSC_5646.jpg',
    'DSC_5694.jpg',
    'hashim.jpg',
    'annualday.jpg',
    'centenary-1.jpg'
];

async function optimizeImages() {
    console.log('Starting HD image optimization...\n');

    for (const imageName of galleryImages) {
        const inputPath = path.join(inputDir, imageName);
        const baseName = path.parse(imageName).name;
        const outputPath = path.join(outputDir, `${baseName}.webp`);

        if (!fs.existsSync(inputPath)) {
            console.log(`Warning: File not found: ${imageName}`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);

            // Increased resolution to 1000px and quality to 90 for "HD" look while still being fast
            await sharp(inputPath)
                .resize(1000, 1000, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 90 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`Done: ${imageName}`);
            console.log(`   Original: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
            console.log(`   Optimized (HD): ${(outputStats.size / 1024).toFixed(0)} KB`);
            console.log(`   Reduction: ${reduction}%\n`);
        } catch (err) {
            console.log(`Error processing ${imageName}: ${err.message}`);
        }
    }

    console.log('Done! HD Optimized images saved to:', outputDir);
}

optimizeImages();
