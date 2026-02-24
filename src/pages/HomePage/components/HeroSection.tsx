import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSectionProps {
  slides: Slide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images and track loading state - optimized for performance
  useEffect(() => {
    const loadedIndices: boolean[] = new Array(slides.length).fill(false);
    setImagesLoaded(loadedIndices);

    // Load first image with high priority
    if (slides.length > 0) {
      const firstImg = new Image();
      firstImg.onload = () => {
        loadedIndices[0] = true;
        setImagesLoaded([...loadedIndices]);
        setIsLoading(false);
      };
      firstImg.onerror = () => {
        loadedIndices[0] = true;
        setImagesLoaded([...loadedIndices]);
        setIsLoading(false);
      };
      // Use fetchpriority for first image
      (firstImg as HTMLImageElement & { fetchPriority: string }).fetchPriority = 'high';
      firstImg.src = slides[0].image;
    }

    // Load only the second image immediately for smoother first transition
    if (slides.length > 1) {
      const secondImg = new Image();
      secondImg.onload = () => {
        loadedIndices[1] = true;
        setImagesLoaded([...loadedIndices]);
      };
      secondImg.onerror = () => {
        loadedIndices[1] = true;
        setImagesLoaded([...loadedIndices]);
      };
      secondImg.src = slides[1].image;
    }

    // Defer loading remaining images until after initial render
    const loadRemainingImages = () => {
      slides.forEach((slide, index) => {
        if (index <= 1) return; // Skip first two images

        const img = new Image();
        img.onload = () => {
          loadedIndices[index] = true;
          setImagesLoaded([...loadedIndices]);
        };
        img.onerror = () => {
          loadedIndices[index] = true;
          setImagesLoaded([...loadedIndices]);
        };
        img.src = slide.image;
      });
    };

    // Use requestIdleCallback or setTimeout to defer loading remaining images
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(loadRemainingImages, { timeout: 2000 });
    } else {
      setTimeout(loadRemainingImages, 1000);
    }
  }, [slides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-gray-200 animate-pulse">
      <div className="absolute inset-0">
        <div className="h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400"
          />
        ))}
      </div>
    </section>
  );

  // Show skeleton while loading
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: imagesLoaded[index] ? `url(${slide.image})` : 'none',
                backgroundColor: imagesLoaded[index] ? 'transparent' : '#e5e7eb'
              }}
            >
              <div className="h-full flex items-center pt-32 md:pt-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                  {/* <div className="max-w-3xl text-white">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-yellow-400 mb-4 sm:mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <Link
                        to="/academics/how-to-apply"
                        className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold text-xs sm:text-base transition-colors duration-200 flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                      <Link
                        to="/about/introduction"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold text-xs sm:text-base transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>




      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
