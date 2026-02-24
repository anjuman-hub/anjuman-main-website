import { useState, useEffect } from 'react';
import { LucideIcon, Users, GraduationCap, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const valuesData = [
    {
        icon: Users,
        title: "Inclusive Growth",
        description: "Providing access to quality education for all segments of society, regardless of background.",
        color: "blue"
    },
    {
        icon: GraduationCap,
        title: "Academic Rigor",
        description: "Maintaining high standards in teaching and learning across all our institutions.",
        color: "yellow"
    },
    {
        icon: Building2,
        title: "Modern Legacy",
        description: "Blending a century-old heritage of value-based learning with contemporary educational tools.",
        color: "blue"
    }
];

const ValueCard = ({ data }: { data: { icon: LucideIcon; title: string; description: string; color: string } }) => {
    const Icon = data.icon;
    const iconBgColor = data.color === 'yellow' ? 'bg-yellow-100' : 'bg-blue-100';
    const iconColor = data.color === 'yellow' ? 'text-yellow-600' : 'text-blue-900';

    return (
        <div className="p-6 sm:p-10 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:-translate-y-1 duration-300 h-full">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${iconColor}`} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">{data.title}</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{data.description}</p>
        </div>
    );
};

const InstitutionValues = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px, treated as mobile/tablet carousel
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % valuesData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <section className="bg-white py-12 sm:py-20">
            <div className="container mx-auto px-4 text-center">
                <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs mb-3 block">Foundation of Excellence</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-10 sm:mb-16">United Under One Vision</h2>

                {isMobile ? (
                    <div className="relative max-w-md mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <ValueCard data={valuesData[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex justify-center gap-2 mt-6">
                            {valuesData.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-900 w-4" : "bg-blue-200"}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
                        {valuesData.map((data, index) => (
                            <div key={index} className={index === 2 ? "sm:col-span-2 lg:col-span-1 mx-auto sm:max-w-md lg:max-w-none w-full" : ""}>
                                <ValueCard data={data} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default InstitutionValues;
