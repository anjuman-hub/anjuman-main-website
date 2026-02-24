import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Award } from 'lucide-react';
import { openPositions, hrContacts } from './constants/careersData';
import JobCard from './components/JobCard';
import ApplicationForm from './components/ApplicationForm';

const Careers = () => {
    const [currentContactIndex, setCurrentContactIndex] = useState(0);
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

    const features = [
        {
            icon: Award,
            title: '105+ Years of Excellence',
            details: 'A legacy of educational excellence spanning over a century'
        },
        {
            icon: Users,
            title: 'Group of Institutions',
            details: 'Part of a prestigious network of educational institutions'
        },
        {
            icon: GraduationCap,
            title: 'Academic Excellence',
            details: 'Strong focus on quality education and student success'
        },
        {
            icon: Briefcase,
            title: 'Career Growth',
            details: 'Opportunities for professional development and advancement'
        }
    ];

    useEffect(() => {
        const contactTimer = setInterval(() => {
            setCurrentContactIndex((prev) => (prev + 1) % hrContacts.length);
        }, 5000);

        const featureTimer = setInterval(() => {
            setCurrentFeatureIndex((prev) => (prev + 1) % 2); // 2 pages for 4 features
        }, 5000);

        return () => {
            clearInterval(contactTimer);
            clearInterval(featureTimer);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        Careers at Anjuman
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Join our team of dedicated educators and professionals. Shape the future of education and make a difference in students' lives.
                    </p>
                </div>

                <div className="mb-16 px-4 sm:px-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-12">Why Join Us?</h2>
                    <div className="w-full">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 sm:p-10 shadow-xl text-white">

                            {/* Desktop/Tablet Grid */}
                            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={index} className="rounded-xl bg-white/10 border border-white/15 p-5 flex flex-col">
                                            <div className="flex items-start gap-3 flex-1">
                                                <div className="bg-yellow-500 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon className="h-5 w-5 text-blue-900" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-base mb-1">{feature.title}</h4>
                                                    <p className="text-blue-100 text-sm">{feature.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile Carousel (Shows 2 features at a time, stacked vertically) */}
                            <div className="sm:hidden relative">
                                <div className="relative h-[280px] flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentFeatureIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col gap-4 w-full"
                                        >
                                            {features.slice(currentFeatureIndex * 2, currentFeatureIndex * 2 + 2).map((feature, idx) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div key={idx} className="rounded-xl bg-white/10 border border-white/15 p-5 flex items-center gap-4 w-full">
                                                        <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <Icon className="h-6 w-6 text-blue-900" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                                                            <p className="text-blue-100 text-xs leading-relaxed">{feature.details}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>


                                {/* Indicators */}
                                <div className="flex justify-center items-center gap-2 mt-4">
                                    {[0, 1].map((index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentFeatureIndex(index)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${currentFeatureIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-blue-700">
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    Join Anjuman Group of Institutions and be part of a community dedicated to shaping the future through education, innovation, and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Open Positions */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-12">Open Positions</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {openPositions.map((position) => (
                            <JobCard key={position.id} job={position} />
                        ))}
                    </div>
                </div>

                {/* Application Form */}
                <div className="mb-16">
                    <ApplicationForm />
                </div>

                {/* Contact Information */}
                <div className="bg-blue-900 rounded-lg p-10 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">HR Department Contact</h2>
                    <p className="text-blue-200 mb-8">
                        For inquiries about career opportunities and application status
                    </p>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {hrContacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <div key={index} className="text-center flex flex-col items-center group">
                                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <p className="font-bold text-xl mb-3 tracking-wide">{contact.title}</p>
                                    <div className="space-y-1.5">
                                        {contact.details.map((detail, idx) => (
                                            <p key={idx} className="text-blue-100 text-sm">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative">
                        <div className="relative h-[200px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentContactIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center w-full"
                                >
                                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        {(() => {
                                            const Icon = hrContacts[currentContactIndex].icon;
                                            return <Icon className="h-8 w-8 text-white" />;
                                        })()}
                                    </div>
                                    <p className="font-bold text-xl mb-3">{hrContacts[currentContactIndex].title}</p>
                                    <div className="space-y-1.5">
                                        {hrContacts[currentContactIndex].details.map((detail, idx) => (
                                            <p key={idx} className="text-blue-100 text-sm">{detail}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center items-center gap-2 mt-8">
                            {hrContacts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentContactIndex(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${currentContactIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
