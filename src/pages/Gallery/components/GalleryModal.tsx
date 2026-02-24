import { X } from 'lucide-react';

interface GalleryModalProps {
    selectedImage: string | null;
    onClose: () => void;
}

const GalleryModal = ({ selectedImage, onClose }: GalleryModalProps) => {
    if (!selectedImage) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
                <img
                    src={selectedImage}
                    alt="Gallery"
                    className="max-w-full max-h-full object-contain"
                />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default GalleryModal;
