import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { values } from '../constants/visionMissionData';

const ValuesGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % values.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Core Values</h2>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-900 transition-colors duration-300">
                                <Icon className="h-8 w-8 text-blue-900 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
                <div className="relative h-[280px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg p-8 shadow-lg text-center w-full mx-4"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {(() => {
                                    const Icon = values[currentIndex].icon;
                                    return <Icon className="h-8 w-8 text-blue-900" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">{values[currentIndex].title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {values[currentIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {values.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-blue-900' : 'bg-blue-200'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ValuesGrid;
