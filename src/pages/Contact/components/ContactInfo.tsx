import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { contactInfo } from '../constants/contactData';

const ContactCard = ({ info }: { info: { icon: LucideIcon; title: string; details: string[] } }) => {
    const Icon = info.icon;
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200 flex flex-col items-center justify-start h-full w-full">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{info.title}</h3>
            <div className="space-y-2">
                {info.details.map((detail: string, detailIndex: number) => {
                    let href = '#';
                    if (info.title === 'Phone') {
                        href = `tel:${detail.split(': ')[1]?.replace(/\s/g, '') || detail}`;
                    } else if (info.title === 'Email') {
                        href = `mailto:${detail}`;
                    } else if (info.title === 'Address') {
                        href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(detail)}`;
                    }

                    if (info.title === 'Office Hours') {
                        return (
                            <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                                {detail}
                            </p>
                        );
                    }

                    return (
                        <a
                            key={detailIndex}
                            href={href}
                            target={info.title === 'Address' ? '_blank' : undefined}
                            rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                            className="block text-gray-600 text-sm leading-relaxed hover:text-blue-900 transition-colors duration-200"
                        >
                            {detail}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

const ContactInfo = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const staticItems = contactInfo.slice(0, 2); // Phone & Email
    const carouselItems = contactInfo.slice(2);  // Office Hours & Address

    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, carouselItems.length]);

    if (isMobile) {
        return (
            <div className="mb-16 px-4 md:px-0">
                {/* Static Items (Phone & Email) */}
                <div className="grid grid-cols-1 gap-6 mb-6">
                    {staticItems.map((info, index) => (
                        <ContactCard key={index} info={info} />
                    ))}
                </div>

                {/* Carousel for Office Hours & Address */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <ContactCard info={carouselItems[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-2 mt-4">
                        {carouselItems.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-900 w-4" : "bg-blue-200"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 px-4 md:px-0">
            {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} />
            ))}
        </div>
    );
};

export default ContactInfo;
