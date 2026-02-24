import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const institutions = [
  { title: "Anjuman Institute of Technology and Management", image: "/images/institutions/aitm.avif", category: "Higher Education" },
  { title: "Anjuman Institute of Management and Computer Application", image: "/images/institutions/aimca.avif", category: "Higher Education" },
  { title: "Anjuman College for Education", image: "/images/institutions/ace.avif", category: "Higher Education" },
  { title: "Anjuman Arts, Science & Commerce College", image: "/images/institutions/aascc.avif", category: "Higher Education" },
  { title: "Anjuman College for Women", image: "/images/institutions/acfw.avif", category: "Higher Education" },
  { title: "Anjuman Pre University College for Men", image: "/images/institutions/apucm.avif", category: "Pre-University" },
  { title: "Anjuman Pre University for Women", image: "/images/institutions/apucw.avif", category: "Pre-University" },
  { title: "Anjuman Boys High School", image: "/images/institutions/ABHS.avif", category: "High School" },
  { title: "Islamia Anglo Urdu High School", image: "/images/institutions/iauhs.avif", category: "High School" },
  { title: "Anjuman Girls High School", image: "/images/institutions/aghs.avif", category: "High School" },
  { title: "Anjuman Girls English Medium High School", image: "/images/institutions/agemhs.avif", category: "High School" },
  { title: "Anjuman Noor Primary School", image: "/images/institutions/anps.avif", category: "Primary School" },
  { title: "Anjuman Azaad Primary School", image: "/images/institutions/aaps.avif", category: "Primary School" },
  { title: "Anjuman English Medium Primary School", image: "/images/institutions/aeps.avif", category: "Primary School" },
  { title: "Anjuman Al-Fitrah", image: "/images/institutions/alfitrah.avif", category: "Primary School" },
];

export default function Institutions() {
  const [active, setActive] = useState(2);
  const touchStartX = useRef<number | null>(null);

  const next = () =>
    setActive((i) => (i === institutions.length - 1 ? 0 : i + 1));
  const prev = () =>
    setActive((i) => (i === 0 ? institutions.length - 1 : i - 1));

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, []);

  /* Touch */
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    (touchStartX.current = e.touches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 60) next();
    if (diff < -60) prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#002855] py-12 sm:py-16 md:py-8 lg:py-8 overflow-hidden text-white">
      {/* Title */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-tight">
          Institutions Under One Vision
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light mt-3 sm:mt-4 px-4">
          Explore the diverse educational institutions run by Anjuman, shaping learners at every stage.
        </p>
      </div>



      {/* Carousel */}
      <div
        className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex items-center justify-center overflow-visible mb-6 sm:mb-8 group"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 md:left-8 lg:left-12 xl:left-16 z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 z-40 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
        </button>

        <div className="relative w-full max-w-[1400px] mx-auto h-full flex items-center justify-center px-4">
          {/* Leftmost image - visible on all screens, just smaller/tighter on mobile */}
          <div className="absolute transform -translate-x-[90px] sm:-translate-x-[160px] md:-translate-x-[240px] lg:-translate-x-[300px] xl:-translate-x-[380px] scale-[0.6] sm:scale-[0.55] md:scale-[0.6] lg:scale-[0.6] xl:scale-70 z-10 transition-all duration-500 ease-in-out opacity-60 hover:opacity-80">
            <div className="relative w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] h-[140px] sm:h-[225px] lg:h-[300px] xl:h-[360px] rounded-lg overflow-hidden shadow-card">
              <img
                alt={institutions[(active - 2 + institutions.length) % institutions.length]?.title || ""}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src={institutions[(active - 2 + institutions.length) % institutions.length]?.image || ""}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Left image */}
          <div className="absolute transform -translate-x-[60px] sm:-translate-x-[110px] md:-translate-x-[170px] lg:-translate-x-[210px] xl:-translate-x-[250px] scale-[0.7] sm:scale-[0.7] md:scale-[0.75] lg:scale-85 z-20 transition-all duration-500 ease-in-out">
            <div className="relative w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px] h-[160px] sm:h-[225px] md:h-[270px] lg:h-[330px] xl:h-[360px] rounded-xl overflow-hidden shadow-card border border-white/10">
              <img
                alt={institutions[(active - 1 + institutions.length) % institutions.length]?.title || ""}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src={institutions[(active - 1 + institutions.length) % institutions.length]?.image || ""}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Rightmost image */}
          <div className="absolute transform translate-x-[90px] sm:translate-x-[160px] md:translate-x-[240px] lg:translate-x-[300px] xl:translate-x-[380px] scale-[0.6] sm:scale-[0.55] md:scale-[0.6] lg:scale-[0.6] xl:scale-70 z-10 transition-all duration-500 ease-in-out opacity-60 hover:opacity-80">
            <div className="relative w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] h-[140px] sm:h-[225px] lg:h-[300px] xl:h-[360px] rounded-lg overflow-hidden shadow-card">
              <img
                alt={institutions[(active + 2) % institutions.length]?.title || ""}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src={institutions[(active + 2) % institutions.length]?.image || ""}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="absolute transform translate-x-[60px] sm:translate-x-[110px] md:translate-x-[170px] lg:translate-x-[210px] xl:translate-x-[250px] scale-[0.7] sm:scale-[0.7] md:scale-[0.75] lg:scale-85 z-20 transition-all duration-500 ease-in-out">
            <div className="relative w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px] h-[160px] sm:h-[225px] md:h-[270px] lg:h-[330px] xl:h-[360px] rounded-xl overflow-hidden shadow-card border border-white/10">
              <img
                alt={institutions[(active + 1) % institutions.length]?.title || ""}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src={institutions[(active + 1) % institutions.length]?.image || ""}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Center image */}
          <div
            className="absolute transform scale-100 z-30 transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => {
              const title = institutions[active]?.title?.toLowerCase().replace(/\s+/g, '-') || '';
              window.location.href = `/institutions/${title}`;
            }}
          >
            <div className="relative w-[160px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[320px] h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border-2 border-white/10">
              <img
                alt={institutions[active]?.title || ""}
                className="w-full h-full object-cover"
                src={institutions[active]?.image || ""}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-5 md:p-6 text-center">
                <h3 className="text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide drop-shadow-md">
                  {institutions[active]?.title || ""}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-4 sm:mt-6 md:mt-8 text-center px-4">
        <Link to="/about/institutions" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-200">
          View All Institutions
        </Link>
      </div>
    </section>
  );
}
