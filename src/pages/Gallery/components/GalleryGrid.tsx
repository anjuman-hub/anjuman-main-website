import { GalleryImage } from '../types';

interface GalleryGridProps {
    images: GalleryImage[];
    onImageClick: (image: string) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => onImageClick(image.image)}
                >
                    <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                            <p className="text-sm">{image.category}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;
