import { useState, useEffect } from 'react';

interface Visionary {
    name: string;
    img: string;
}

interface VisionariesCarouselProps {
    visionaries: Visionary[];
}

const VisionariesCarousel = ({ visionaries }: VisionariesCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % visionaries.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isPaused, visionaries.length]);

    const handleManualNav = (index: number) => {
        setActiveIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 8000);
    };

    return (
        <div className="relative mb-8 sm:mb-16">
            {/* Mobile Carousel View */}
            <div className="sm:hidden relative h-[380px] overflow-hidden">
                <div className="flex justify-center items-center h-full relative">
                    {visionaries.map((v, i) => {
                        const isActive = i === activeIndex;
                        const isPrev = i === (activeIndex - 1 + visionaries.length) % visionaries.length;
                        const isNext = i === (activeIndex + 1) % visionaries.length;

                        let positionClass = "opacity-0 invisible translate-x-0 scale-50";
                        if (isActive) positionClass = "opacity-100 visible translate-x-0 scale-100 z-20";
                        if (isPrev) positionClass = "opacity-40 visible -translate-x-[70%] scale-75 z-10";
                        if (isNext) positionClass = "opacity-40 visible translate-x-[70%] scale-75 z-10";

                        return (
                            <div
                                key={i}
                                onClick={() => handleManualNav(i)}
                                className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${positionClass}`}
                            >
                                <div className="text-center">
                                    <div className="relative inline-block">
                                        <div className={`absolute -inset-2 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-2xl blur transition-opacity duration-700 ${isActive ? "opacity-40" : "opacity-0"}`}></div>
                                        <div className="relative w-48 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                            <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                    <h4 className={`mt-8 text-xl font-bold text-blue-900 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-40"}`}>
                                        {v.name}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Swipe Handle Interface */}
                <div
                    className="absolute inset-0 z-30"
                    onTouchStart={(e) => {
                        const startX = e.touches[0].clientX;
                        const handleTouchEnd = (ee: TouchEvent) => {
                            const endX = ee.changedTouches[0].clientX;
                            if (startX - endX > 50) handleManualNav((activeIndex + 1) % visionaries.length);
                            if (startX - endX < -50) handleManualNav((activeIndex - 1 + visionaries.length) % visionaries.length);
                            window.removeEventListener('touchend', handleTouchEnd);
                        };
                        window.addEventListener('touchend', handleTouchEnd);
                    }}
                />
            </div>

            {/* Mobile Dots indicator */}
            <div className="flex justify-center gap-3 mb-8 sm:hidden">
                {visionaries.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleManualNav(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-blue-600 w-6" : "bg-blue-200"}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Desktop Grid View */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto px-4 lg:px-0">
                {visionaries.map((v, i) => (
                    <div key={i} className="group text-center">
                        <div className="relative inline-block">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                            <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                                <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                        </div>
                        <h4 className="mt-8 text-2xl font-bold text-blue-900">{v.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisionariesCarousel;
