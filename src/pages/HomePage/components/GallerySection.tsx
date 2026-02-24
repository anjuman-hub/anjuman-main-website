import React, { useEffect } from 'react';

// Although the parent passes campusHighlights, we are using the new design's specific images 
// as requested. We keep the prop interface to avoid breaking the parent call.
interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface GallerySectionProps {
  campusHighlights?: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = () => {
  // Using HD optimized WebP images (1000px resolution - ~150-240KB each vs 8-13MB originals)
  // This provides crisp high-definition visuals without compromising on load speed.
  const images = [
    {
      src: "/images/gallery-optimized/AMT_5353.webp",
      alt: "Anjuman Campus Event"
    },
    {
      src: "/images/gallery-optimized/AMT_5488.webp",
      alt: "Campus Activities"
    },
    {
      src: "/images/gallery-optimized/AMT_5518.webp",
      alt: "Student Gathering"
    },
    {
      src: "/images/gallery-optimized/AMT_5543.webp",
      alt: "Campus Celebration"
    },
    {
      src: "/images/gallery-optimized/AMT_5549.webp",
      alt: "Campus Life"
    },
    {
      src: "/images/gallery-optimized/DSC_5624.webp",
      alt: "Anjuman Event"
    },
    {
      src: "/images/gallery-optimized/DSC_5646.webp",
      alt: "Cultural Program"
    },
    {
      src: "/images/gallery-optimized/DSC_5694.webp",
      alt: "Campus Life"
    },
    {
      src: "/images/gallery-optimized/centenary-1.webp",
      alt: "Centenary Celebration"
    },
    {
      src: "/images/gallery-optimized/annualday.webp",
      alt: "Annual Day Celebration"
    }
  ];

  // Preload images for faster first load
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  // Duplicate images for seamless infinite scroll
  const displayImages = [...images, ...images];

  return (
    <>
      {/* Preload hints for critical images */}
      {images.slice(0, 5).map((image, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={image.src}
          type="image/webp"
        />
      ))}

      <section className="w-full py-2 sm:py-8 md:py-12 bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
              Experience the Anjuman Campus
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Our campus fests celebrate culture, creativity, and community, bringing learners together in moments that become memories.
            </p>
          </div>
          <div className="relative w-full group">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

            {/* CSS Animation Wrapper */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 md:gap-5 animate-gallery-scroll"
                style={{
                  width: 'max-content',
                }}
              >
                {displayImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[280px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 group"
                  >
                    <img
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      src={image.src}
                      loading={index < 9 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index < 5 ? "high" : "auto"}
                      style={{
                        imageRendering: 'auto',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-16 bg-[#FDFBF7] dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"></div>

      {/* CSS Keyframe Animation for smooth infinite scroll */}
      <style>{`
        @keyframes galleryScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-gallery-scroll {
          animation: galleryScroll 35s linear infinite;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        .animate-gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default GallerySection;
