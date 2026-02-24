import { Link } from 'react-router-dom';
import { allEvents } from '../../Happenings/constants/eventsData';
import { useEffect, useState } from 'react';

const HappeningsSection = () => {
  const events = allEvents.slice(0, 5);
  const [isLoading, setIsLoading] = useState(true);

  // Preload first 2 critical images for better performance
  useEffect(() => {

    // Load first 2 images with high priority (above the fold)
    const criticalImages = events.slice(0, 2);
    const loadPromises = criticalImages.map((event) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve(true);
        };
        img.onerror = () => {
          resolve(false);
        };
        // Use fetchpriority for critical images
        (img as HTMLImageElement & { fetchPriority: string }).fetchPriority = 'high';
        img.src = event.heroImage;
      });
    });

    Promise.all(loadPromises).then(() => {
      setIsLoading(false);
    });

    // Defer loading remaining images
    const loadRemainingImages = () => {
      events.slice(2).forEach((event) => {
        const img = new Image();
        img.onload = () => { };
        img.onerror = () => { };
        img.src = event.heroImage;
      });
    };

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(loadRemainingImages, { timeout: 2000 });
    } else {
      setTimeout(loadRemainingImages, 1000);
    }
  }, [events]);

  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1700px] mx-auto">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-4 px-4 leading-tight">
          What’s Happening @ Anjuman
        </h2>
        <p className="text-lg md:text-xl text-gray-600 px-6 font-medium">
          Explore our latest programs, celebrations, and activities.
        </p>
      </div>

      {/* ================= GRID WRAPPER ================= */}
      <div className="max-w-[1350px] mx-auto mb-8 sm:mb-10 lg:mb-12">

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-4 h-[450px]">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <Link to={`/happenings/event/${events[0]?.id}`} className="w-full rounded-lg overflow-hidden shadow-sm h-1/2 relative group cursor-pointer">
              {isLoading ? (
                <div className="w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
              ) : (
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={events[0]?.heroImage} alt={events[0]?.title} fetchPriority="high" decoding="async" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[0]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[0]?.title}</h3>
                <p className="text-[10px]">{events[0]?.day} {events[0]?.month}</p>
              </div>
            </Link>
            <Link to={`/happenings/event/${events[1]?.id}`} className="w-full rounded-lg overflow-hidden shadow-sm h-1/2 relative group cursor-pointer">
              {isLoading ? (
                <div className="w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
              ) : (
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={events[1]?.heroImage} alt={events[1]?.title} fetchPriority="high" decoding="async" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[1]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[1]?.title}</h3>
                <p className="text-[10px]">{events[1]?.day} {events[1]?.month}</p>
              </div>
            </Link>
          </div>

          {/* Center */}
          <Link to={`/happenings/event/${events[2]?.id}`} className="col-span-2 h-full rounded-lg overflow-hidden shadow-md relative group cursor-pointer">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={events[2]?.heroImage} alt={events[2]?.title} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-semibold text-yellow-400 uppercase">{events[2]?.category}</p>
              <h3 className="text-base font-bold mb-2">{events[2]?.title}</h3>
              <p className="text-xs">{events[2]?.day} {events[2]?.month}</p>
            </div>
          </Link>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <Link to={`/happenings/event/${events[3]?.id}`} className="w-full rounded-lg overflow-hidden shadow-sm h-1/2 relative group cursor-pointer">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={events[3]?.heroImage} alt={events[3]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[3]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[3]?.title}</h3>
                <p className="text-[10px]">{events[3]?.day} {events[3]?.month}</p>
              </div>
            </Link>
            <Link to={`/happenings/event/${events[4]?.id}`} className="w-full rounded-lg overflow-hidden shadow-sm h-1/2 relative group cursor-pointer">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={events[4]?.heroImage} alt={events[4]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[4]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[4]?.title}</h3>
                <p className="text-[10px]">{events[4]?.day} {events[4]?.month}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="lg:hidden flex flex-col gap-3 sm:gap-4">

          {/* 1️⃣ Full-width center image */}
          <Link to={`/happenings/event/${events[2]?.id}`} className="w-full rounded-lg overflow-hidden shadow-md relative group cursor-pointer">
            <img
              className="w-full h-[200px] sm:h-[230px] md:h-[260px] object-cover group-hover:scale-110 transition-transform duration-300"
              src={events[2]?.heroImage}
              alt={events[2]?.title}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-semibold text-yellow-400 uppercase">{events[2]?.category}</p>
              <h3 className="text-base font-bold mb-2">{events[2]?.title}</h3>
              <p className="text-xs">{events[2]?.day} {events[2]?.month}</p>
            </div>
          </Link>

          {/* 2️⃣ Grid of 2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Link to={`/happenings/event/${events[0]?.id}`} className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer">
              <img className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300" src={events[0]?.heroImage} alt={events[0]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[0]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[0]?.title}</h3>
                <p className="text-[10px]">{events[0]?.day} {events[0]?.month}</p>
              </div>
            </Link>
            <Link to={`/happenings/event/${events[1]?.id}`} className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer">
              <img className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300" src={events[1]?.heroImage} alt={events[1]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[1]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[1]?.title}</h3>
                <p className="text-[10px]">{events[1]?.day} {events[1]?.month}</p>
              </div>
            </Link>
          </div>

          {/* 3️⃣ Grid of 2×2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Link to={`/happenings/event/${events[3]?.id}`} className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer">
              <img className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300" src={events[3]?.heroImage} alt={events[3]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[3]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[3]?.title}</h3>
                <p className="text-[10px]">{events[3]?.day} {events[3]?.month}</p>
              </div>
            </Link>
            <Link to={`/happenings/event/${events[4]?.id}`} className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer">
              <img className="w-full h-[150px] object-cover group-hover:scale-110 transition-transform duration-300" src={events[4]?.heroImage} alt={events[4]?.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <p className="text-[10px] font-semibold text-yellow-400 uppercase">{events[4]?.category}</p>
                <h3 className="text-xs font-bold mb-1 line-clamp-1">{events[4]?.title}</h3>
                <p className="text-[10px]">{events[4]?.day} {events[4]?.month}</p>
              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 sm:mt-6 md:mt-8 text-center px-4">
        <Link
          to="/happenings"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200"
        >
          View All Happenings
        </Link>
      </div>

    </section>
  );
};

export default HappeningsSection;
