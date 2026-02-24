import AutoCarousel from './AutoCarousel';
import { earlyStepsCarousels, inceptionImagesCarousels, milestoneImages } from '../constants/historyData';

export const EarlySteps = () => (
    <div className="mb-24 px-2">
        <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            <h2 className="text-2xl font-bold text-blue-900">Early Steps (1919)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {earlyStepsCarousels.map((images, i) => (
                <div key={i} className="h-64 md:h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <AutoCarousel images={images} />
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4">
            <div className="text-gray-700 text-lg leading-relaxed flex flex-col gap-6 text-justify lg:text-left">
                <p>
                    The journey began in <strong>1919</strong> with very modest means—a single teacher, a handful of students, and an unwavering belief in the power of education. Resources were limited, infrastructure was minimal, and the path ahead was uncertain.
                </p>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed text-justify lg:text-left">
                <p>
                    In its formative years, the institution also faced resistance and opposition from sections of society. Despite challenges, the founders and early supporters remained steadfast, choosing perseverance over compromise.
                </p>
            </div>
        </div>
    </div>
);

export const Inception = () => (
    <div className="mb-24 px-2">
        <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-blue-900 rounded-full"></div>
            <h2 className="text-2xl font-bold text-blue-900">Inception of Anjuman</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {inceptionImagesCarousels.map((images, i) => (
                <div key={i} className="h-64 md:h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <AutoCarousel images={images} />
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 items-center">
            <div className="lg:col-span-2 text-gray-700 text-lg leading-relaxed flex flex-col gap-6 text-justify lg:text-left">
                <p>
                    From its humble beginnings, Anjuman gradually evolved into a structured educational movement. Each step forward was taken with care—establishing institutions that addressed real educational needs while staying true to the founding values.
                </p>
                <p>
                    From <strong>LKG to postgraduate education</strong>, Anjuman expanded step by step, responding to changing times and societal aspirations.
                </p>
            </div>
            <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
                <span className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500">16</span>
                <span className="text-lg uppercase tracking-widest font-medium opacity-90">Institutions</span>
                <div className="w-12 h-1 bg-yellow-500 mt-6 rounded-full"></div>
            </div>
        </div>
    </div>
);

export const Milestones = () => (
    <div className="mb-24 py-20 bg-blue-50/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-20 px-4">
                <h2 className="text-3xl md:text-3xl font-bold text-blue-900">Celebrating Milestones</h2>
                <div className="w-24 h-1.5 bg-blue-900 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="space-y-32 max-w-6xl mx-auto">
                {/* Silver */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 flex flex-col justify-center px-4">
                        <h3 className="text-2xl md:text-2xl font-bold text-blue-900 mb-8 flex items-center gap-4">
                            <span className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-xl font-bold shadow-sm flex-shrink-0">25</span>
                            A Legacy in the Making: The Silver Jubilee
                        </h3>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify lg:text-left">
                            <p>
                                The Silver Jubilee marked a defining moment—25 years of commitment to education. It was a celebration of survival, stability, and success against early odds. Alumni, educators, and community members gathered to honour the pioneers and reflect on the journey from humble beginnings to a respected institution.
                            </p>
                            <p>
                                This milestone was not just about the past; it was a launchpad for future growth. The foundation had been tested and proven strong.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1 h-[450px] mx-4 lg:mx-0">
                        <AutoCarousel images={milestoneImages.silver} />
                    </div>
                </div>

                {/* Golden */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl -skew-y-1 h-[450px] mx-4 lg:mx-0">
                        <AutoCarousel images={milestoneImages.golden} />
                    </div>
                    <div className="flex flex-col justify-center px-4">
                        <h3 className="text-2xl md:text-2xl font-bold text-blue-900 mb-8 flex items-center gap-4">
                            <span className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 text-xl font-bold shadow-sm flex-shrink-0">50</span>
                            50 Years of Excellence: The Golden Jubilee
                        </h3>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify lg:text-left">
                            <p>
                                Reaching the Golden Jubilee was a testament to consistency and trust built over five decades. By that time, Anjuman had firmly established itself as a cornerstone of quality education in the region.
                            </p>
                            <p>
                                The celebrations highlighted academic achievements, institutional growth, and the invaluable contribution of teachers and administrators who shaped generations of learners. It was a golden era of expansion and recognition.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Platinum */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 flex flex-col justify-center px-4">
                        <h3 className="text-2xl md:text-2xl font-bold text-blue-900 mb-8 flex items-center gap-4">
                            <span className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-900 text-xl font-bold shadow-sm flex-shrink-0">75</span>
                            75 Years of Impact: The Platinum Jubilee
                        </h3>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify lg:text-left">
                            <p>
                                The Platinum Jubilee reflected 75 years of resilience and progress. This milestone symbolized the institution's ability to evolve while remaining anchored to its founding ideals.
                            </p>
                            <p>
                                It stood as a proud reminder of sustained relevance in a rapidly changing educational landscape. The legacy was now multi-generational, with alumni serving society across the globe.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1 h-[450px] mx-4 lg:mx-0">
                        <AutoCarousel images={milestoneImages.platinum} />
                    </div>
                </div>

                {/* Centenary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl -skew-y-1 relative group h-[450px] mx-4 lg:mx-0">
                        <AutoCarousel images={milestoneImages.centenary} />
                    </div>
                    <div className="flex flex-col justify-center px-4">
                        <h3 className="text-2xl md:text-2xl font-bold text-blue-900 mb-8 flex items-center gap-4">
                            <span className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold shadow-sm flex-shrink-0">100</span>
                            A Century of Service: The Centenary Jubilee
                        </h3>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify lg:text-left">
                            <p>
                                The Centenary celebration was a historic and emotional landmark. Completing 100 years of uninterrupted service to education was not merely an achievement—it was a legacy that belonged to the entire community. It symbolized a century of resilience, transformation, and unwavering dedication to the vision of our founders.
                            </p>
                            <p>
                                Generations of students, alumni, and well-wishers came together to celebrate a journey that began in a small room and grew into a beacon of learning. The centenary honored the past while looking forward to a future where we continue to evolve, innovate, and serve with the same spirit of purpose that defined our first steps in 1919.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const TodaySection = () => (
    <div className="mb-32 px-4 mt-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-blue-900 mb-4 px-4">What We Are Today</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Evolving with time, rooted in tradition</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative group px-2 lg:px-0">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-all"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <img src="/images/AHM.avif" alt="Today" className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 hidden sm:flex border border-blue-50">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-900/20">105</div>
                    <div className="text-blue-900 font-bold uppercase tracking-widest text-[10px] leading-tight text-left">
                        Years of<br />Unmatched<br />Excellence
                    </div>
                </div>
            </div>
            <div className="space-y-8 text-gray-700 text-lg leading-relaxed px-4 lg:px-0 text-justify lg:text-left">
                <p>
                    Today, Anjuman stands as a <strong>105-year-old educational movement</strong>, nurturing thousands of students across multiple disciplines. With a strong foundation and community-centric approach, it continues to shape minds.
                </p>
                <p>
                    Rooted in tradition yet forward-looking in vision, Anjuman remains committed to excellence in education—carrying forward a legacy that began with a dream and continues with purpose.
                </p>
            </div>
        </div>
    </div>
);

export const JoinLegacy = () => (
    <div className="mb-32 text-center px-4">
        <div className="max-w-6xl mx-auto bg-blue-900 text-white p-12 md:p-20 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20"></div>
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Join the Legacy</h2>
                <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10 italic opacity-90">
                    "A journey that began with humility, strengthened through perseverance, and continues with hope for generations to come."
                </p>
                <p className="text-blue-200 text-lg max-w-4xl mx-auto mb-0 opacity-80">
                    We invite students, parents, alumni, and well-wishers to be part of this enduring journey—one that believes education is not just learning, but a lifelong service to society.
                </p>
            </div>
        </div>
    </div>
);
