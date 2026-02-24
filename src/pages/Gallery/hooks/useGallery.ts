import { useState } from 'react';
import { galleryImages } from '../constants/galleryData';
import { GalleryImage } from '../types';

export const useGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = ['All', ...Array.from(new Set(galleryImages.map((img: GalleryImage) => img.category)))];

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter((img: GalleryImage) => img.category === selectedCategory);

    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return {
        selectedCategory,
        setSelectedCategory,
        selectedImage,
        categories,
        filteredImages,
        openModal,
        closeModal
    };
};
