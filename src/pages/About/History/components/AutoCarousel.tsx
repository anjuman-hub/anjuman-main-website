import { useEffect, useState } from "react";

interface AutoCarouselProps {
    images: string[];
}

const AutoCarousel = ({ images }: AutoCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white w-4" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AutoCarousel;
