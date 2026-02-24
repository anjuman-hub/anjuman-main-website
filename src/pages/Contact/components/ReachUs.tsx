import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { directions } from '../constants/contactData';

const ReachUs = () => {
    const [currentDirectionIndex, setCurrentDirectionIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDirectionIndex((prev) => (prev + 1) % directions.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-blue-900 text-white rounded-xl p-8 mb-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How to Reach Us</h2>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-12">
                {directions.map((dir, index) => {
                    const Icon = dir.icon;
                    return (
                        <div key={index} className="text-center group">
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                <Icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{dir.title}</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {dir.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative px-4">
                <div className="relative h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentDirectionIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="text-center w-full"
                        >
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                {(() => {
                                    const Icon = directions[currentDirectionIndex].icon;
                                    return <Icon className="h-8 w-8 text-white" />;
                                })()}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{directions[currentDirectionIndex].title}</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {directions[currentDirectionIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {directions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentDirectionIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentDirectionIndex === index ? 'w-6 bg-white' : 'bg-white/30'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReachUs;
