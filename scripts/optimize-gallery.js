// Script to optimize gallery images for web use
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/gallery-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Images to optimize for gallery (200x200 display size, but we'll create at 400x400 for retina)
const galleryImages = [
    'AMT_5353.jpg',
    'AMT_5488.jpg',
    'AMT_5518.jpg',
    'AMT_5543.jpg',
    'DSC_5624.jpg',
    'DSC_5646.jpg',
    'DSC_5694.jpg',
    'hashim.jpg',
    'annualday.jpg'
];

async function optimizeImages() {
    console.log('Starting image optimization...\n');

    for (const imageName of galleryImages) {
        const inputPath = path.join(inputDir, imageName);
        const baseName = path.parse(imageName).name;
        const outputPath = path.join(outputDir, `${baseName}.webp`);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️ File not found: ${imageName}`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);

            await sharp(inputPath)
                .resize(400, 400, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 85 }) // Good quality WebP
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${imageName}`);
            console.log(`   Original: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
            console.log(`   Optimized: ${(outputStats.size / 1024).toFixed(0)} KB`);
            console.log(`   Reduction: ${reduction}%\n`);
        } catch (err) {
            console.log(`❌ Error processing ${imageName}: ${err.message}`);
        }
    }

    console.log('Done! Optimized images saved to:', outputDir);
}

optimizeImages();
