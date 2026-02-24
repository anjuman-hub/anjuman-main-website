import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  batch: string;
  course: string;
  image: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Create infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const next = prev + itemsPerPage;
      // Loop back to start when reaching the end of original array
      return next >= testimonials.length ? 0 : next;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const previous = prev - itemsPerPage;
      // Loop to end when going before start
      return previous < 0 ? Math.max(0, testimonials.length - itemsPerPage) : previous;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerPage]);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-10 lg:py-10 bg-blue-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Student Testimonials</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 px-4">Hear from our successful alumni</p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group md:flex hidden"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              </button>

              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {infiniteTestimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
                    <div key={`${currentIndex}-${index}`} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 flex flex-col min-h-[280px] sm:min-h-[300px]">
                      <div className="flex-shrink-0">
                        <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mb-3" />
                      </div>
                      <div className="flex-1 mb-4 sm:mb-6">
                        <p className="text-gray-700 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center flex-shrink-0 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-blue-900 text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{testimonial.course}</p>
                          <p className="text-xs text-gray-500">{testimonial.batch}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group md:flex hidden"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              </button>
            </div>

            <div className="flex justify-between mt-6 md:hidden px-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors duration-300" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${index === Math.floor(currentIndex / itemsPerPage) ? 'bg-yellow-500' : 'bg-white/30'
                    }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[50px] bg-gradient-to-r from-transparent via-white/40 to-transparent relative z-10 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
    </>
  );
};

export default TestimonialsSection;
