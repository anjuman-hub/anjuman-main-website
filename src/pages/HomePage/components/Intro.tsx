import React from 'react';
const Intro: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1700px] mx-auto">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-display font-bold text-primary">
          Who Needs Magic Carpets
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 mt-0 sm:mt-2">
          When You Can Fly with Education
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 sm:gap-10">

        <div className="hidden sm:block w-full xl:w-[35%] flex-col justify-start space-y-4 sm:space-y-6 pt-2 text-center xl:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary dark:text-white">
            Why ANJUMAN?
          </h3>
          <div className="font-display">
            <p className="text-base sm:text-lg font-bold text-BLUE dark:text-gray-100 tracking-wide">ONE GROUP</p>
            <p className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none my-1">
              UNLIMITED
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark dark:text-gray-100">
              OPPORTUNITIES
            </p>

          </div>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed md:text-lg">
            <p>
              Welcome to Anjuman Group of Institutions, a destination for comprehensive education across multiple disciplines. With a student-centric and progressive approach, we create opportunities that empower learners to achieve academic and professional success.
            </p>
            <p>
              Here's why Anjuman stands out:
            </p>

          </div>
        </div>
        <div className="w-full xl:w-[65%] flex flex-col gap-4 sm:gap-5">
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="group relative h-40 sm:h-48 md:h-56 lg:h-44 xl:h-52 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800">
              <img
                alt="University main building facade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/AHM.avif"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">105+ Years of Excellence</h4>
              </div>
            </div>
            <div className="group relative h-40 sm:h-48 md:h-56 lg:h-44 xl:h-52 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800">
              <img
                alt="Group of faculty members"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/AMT_5543.avif"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">800+ Expert Faculties & Staff</h4>
              </div>
            </div>
            {/* These show on md (iPad) and up */}
            <div className="group relative h-40 sm:h-48 md:h-56 lg:h-44 xl:h-52 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800 hidden md:block">
              <img
                alt="Students"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/students.png"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">6000+ Students</h4>
              </div>
            </div>
            <div className="group relative h-40 sm:h-48 md:h-56 lg:h-44 xl:h-52 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800 hidden md:block">
              <img
                alt="Alumni"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/alumnus.jpg"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">45,000+ Alumni Worldwide</h4>
              </div>
            </div>
          </div>

          {/* iPad (md) and Desktop Grid for remaining cards */}
          <div className="hidden md:grid grid-cols-3 gap-4 sm:gap-5">
            <div className="group relative h-52 xl:h-60 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800">
              <img
                alt="Vibrant Campus Life"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/vibrant-campus.jpg"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">Vibrant Campus Life</h4>
              </div>
            </div>
            <div className="group relative h-52 xl:h-60 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800">
              <img
                alt="Championship Victories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/co-curricular.jpg"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">Championship Victories</h4>
              </div>
            </div>
            <div className="group relative h-52 xl:h-60 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800">
              <img
                alt="Global Exposure"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/visit.jpg"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                <h4 className="text-white font-display font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">Global Exposure & Industry Partnerships</h4>
              </div>
            </div>
          </div>

          {/* Mobile Only Section (< md) */}
          <div className="md:hidden flex flex-col gap-4">
            <div className="group relative h-40 sm:h-48 rounded-xl overflow-hidden cursor-pointer shadow-md bg-gray-200">
              <img
                alt="Vibrant Campus"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/vibrant-campus.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-3 w-full">
                <h4 className="text-white font-display font-bold text-sm">Vibrant Campus Life</h4>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md">
                <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/students.png" className="w-full h-full object-cover" alt="Students" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-3 w-full">
                    <h4 className="text-white font-bold text-xs">6000+ Students</h4>
                  </div>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/alumnus.jpg" className="w-full h-full object-cover" alt="Alumni" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-3 w-full">
                    <h4 className="text-white font-bold text-xs">45,000+ Alumni</h4>
                  </div>
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md">
                <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/co-curricular.jpg" className="w-full h-full object-cover" alt="Victories" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-3 w-full">
                    <h4 className="text-white font-bold text-xs">Championship Victories</h4>
                  </div>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/visit.jpg" className="w-full h-full object-cover" alt="Global" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-3 w-full">
                    <h4 className="text-white font-bold text-xs">Global Exposure & Industry Partnerships</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
