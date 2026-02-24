import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { founders } from '../constants/managementData';

const ManagementCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? founders.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev === founders.length - 1 ? 0 : prev + 1));
    };

    const currentFounder = founders[activeIndex];
    const prevFounder = founders[(activeIndex - 1 + founders.length) % founders.length];
    const nextFounder = founders[(activeIndex + 1) % founders.length];

    useEffect(() => {
        founders.forEach(f => {
            const img = new Image();
            img.src = f.image;
        });
    }, []);

    return (
        <section className="flex flex-col items-center gap-8 w-full relative bg-white overflow-hidden pb-16 min-h-[800px]">
            <style>
                {`
                .bracket {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border-color: #c03;
                }
                .bracket-tl { top: -2px; left: -2px; border-top: 2px solid; border-left: 2px solid; }
                .bracket-tr { top: 0; right: 2px; border-top: 2px solid; border-right: 2px solid; }
                .bracket-bl { bottom: 0; left: -2px; border-bottom: 2px solid; border-left: 2px solid; }
                .bracket-br { bottom: 0; right: -2px; border-bottom: 2px solid; border-right: 2px solid; }
                
                .spotlight-container {
                    width: 180px;
                    height: 60px;
                    position: relative;
                }
                @media (min-width: 768px) {
                    .spotlight-container {
                        width: 257px;
                        height: 94px;
                    }
                    .bracket {
                        width: 16px;
                        height: 16px;
                    }
                }

                .name-tag-framer {
                    background-color: #ffedd2;
                    border: 1px solid #d00636;
                    border-radius: 8px;
                    z-index: 20;
                    padding: 12px 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .carousel-side-card {
                    position: relative;
                    width: 90%;
                    height: 400px;
                    flex: none;
                    opacity: 0.5;
                    transform: scale(0.95);
                    border-radius: 0.5rem;
                    overflow: hidden;
                    cursor: pointer;
                    filter: grayscale(100%);
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease;
                    background-image: url('https://img.freepik.com/free-photo/brown-paper-background-simple-diy-craft_53876-132910.jpg');
                    background-size: cover;
                    background-position: center;
                }
                @media (min-width: 768px) {
                    .carousel-side-card {
                    width: 650px;
                    height: 400px;
                    }
                }
                `}
            </style>

            <h2 className="text-blue-900 font-semibold font-['Montserrat',sans-serif] text-2xl md:text-3xl text-center px-4 max-w-2xl mt-36">
                Voices from Our Leadership
            </h2>

            <div className="flex items-center justify-center gap-4 lg:gap-10 w-full relative px-4 md:px-0 min-h-[450px]">
                {/* Side Card Prev */}
                <div className="hidden xl:block carousel-side-card relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row" onClick={handlePrev}>
                    <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                        <img
                            src={prevFounder.image}
                            alt=""
                            className="w-full h-full object-cover md:object-contain z-0"
                            style={{ objectPosition: prevFounder.objectPosition }}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full h-full p-6 md:p-8 flex flex-col justify-center gap-4">
                        <div className="spotlight-container scale-75 origin-left">
                            <span className="bracket bracket-tl"></span>
                            <span className="bracket bracket-tr"></span>
                            <span className="bracket bracket-bl"></span>
                            <span className="bracket bracket-br"></span>
                            <div className="pl-2 pt-0 md:pt-1">
                                <h3 className="text-white font-black text-xl md:text-2xl uppercase leading-none tracking-tight">
                                    LEADERS<br />
                                    <span className="text-gray-400">SPOTLIGHT</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-[280px]">
                            {prevFounder.description}
                        </p>
                    </div>

                    <div className="name-tag-framer shadow-xl absolute bottom-6 right-4 min-w-[150px] scale-75 origin-bottom-right">
                        <h4 className="text-gray-600 font-bold text-lg leading-none mb-1">{prevFounder.name}</h4>
                        <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                        <p className="text-gray-700 text-[10px] font-medium">{prevFounder.role}</p>
                    </div>
                </div>

                {/* Center Active Card */}
                <div className="relative w-[90%] md:w-[650px] h-[450px] md:h-[400px] flex-none">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-2xl shadow-2xl overflow-visible flex flex-col md:flex-row"
                            style={{ backgroundImage: `url('https://img.freepik.com/free-photo/brown-paper-background-simple-diy-craft_53876-132910.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                                <img
                                    src={currentFounder.image}
                                    alt=""
                                    className="w-full h-full object-cover md:object-contain z-0"
                                    style={{ objectPosition: currentFounder.objectPosition }}
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                            </div>

                            <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-between md:justify-center gap-4 md:gap-6">
                                <div className="spotlight-container">
                                    <span className="bracket bracket-tl"></span>
                                    <span className="bracket bracket-tr"></span>
                                    <span className="bracket bracket-bl"></span>
                                    <span className="bracket bracket-br"></span>
                                    <div className="pl-2 pt-0 md:pt-1">
                                        <h3 className="text-white font-black text-2xl md:text-4xl uppercase leading-none tracking-tight">
                                            LEADERS<br />
                                            <span className="text-[#c03]">SPOTLIGHT</span>
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 md:max-w-[360px]">
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                        {currentFounder.description}
                                    </p>
                                </div>
                            </div>

                            <div className="name-tag-framer shadow-xl absolute md:bottom-12 md:right-[-28px] top-[42%] md:top-auto left-[-10px] md:left-auto min-w-[200px] md:w-[260px] h-auto md:h-[91px]">
                                <h4 className="text-[#d00636] font-bold text-lg md:text-2xl leading-none mb-1">{currentFounder.name}</h4>
                                <div className="w-full h-[1px] bg-gray-300 my-1 md:my-2"></div>
                                <p className="text-gray-700 text-[10px] md:text-sm font-medium">{currentFounder.role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Adjacent Card Previews for Mobile */}
                <div
                    className="absolute left-[-45%] md:hidden w-[50%] h-[400px] opacity-20 filter grayscale blur-[1px] rounded-2xl overflow-hidden"
                    style={{ backgroundImage: `url('https://img.freepik.com/free-photo/brown-paper-background-simple-diy-craft_53876-132910.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <img src={prevFounder.image} className="w-full h-full object-contain" alt="" loading="lazy" />
                </div>
                <div
                    className="absolute right-[-45%] md:hidden w-[50%] h-[400px] opacity-20 filter grayscale blur-[1px] rounded-2xl overflow-hidden"
                    style={{ backgroundImage: `url('https://img.freepik.com/free-photo/brown-paper-background-simple-diy-craft_53876-132910.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <img src={nextFounder.image} className="w-full h-full object-contain" alt="" loading="lazy" />
                </div>

                {/* Side Card Next */}
                <div className="hidden xl:block carousel-side-card relative rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row" onClick={handleNext}>
                    <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                        <img
                            src={nextFounder.image}
                            alt=""
                            className="w-full h-full object-cover md:object-contain z-0"
                            style={{ objectPosition: nextFounder.objectPosition }}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full h-full p-6 md:p-8 flex flex-col justify-center gap-4">
                        <div className="spotlight-container scale-75 origin-left">
                            <span className="bracket bracket-tl"></span>
                            <span className="bracket bracket-tr"></span>
                            <span className="bracket bracket-bl"></span>
                            <span className="bracket bracket-br"></span>
                            <div className="pl-2 pt-0 md:pt-1">
                                <h3 className="text-white font-black text-xl md:text-2xl uppercase leading-none tracking-tight">
                                    LEADERS<br />
                                    <span className="text-gray-400">SPOTLIGHT</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed max-w-[280px]">
                            {nextFounder.description}
                        </p>
                    </div>

                    <div className="name-tag-framer shadow-xl absolute bottom-6 right-4 min-w-[150px] scale-75 origin-bottom-right">
                        <h4 className="text-gray-600 font-bold text-lg leading-none mb-1">{nextFounder.name}</h4>
                        <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                        <p className="text-gray-700 text-[10px] font-medium">{nextFounder.role}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-[#D2153D] flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300 shadow-md group"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#D2153D] flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300 shadow-md group"
                >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
            </div>
        </section>
    );
};

export default ManagementCarousel;
