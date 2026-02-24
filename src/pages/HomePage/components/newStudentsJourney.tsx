import React from 'react';
import {
    Users,
    FileEdit,
    Presentation,
    Monitor,
    ClipboardCheck,
    ChevronRight,
    ChevronDown
} from 'lucide-react';

const NewStudentJourneySection = () => {
    const steps = [
        {
            id: 1,
            number: '01',
            title: 'Explore & Choose',
            description: 'Browse our programs and find the perfect fit for your career goals',
            icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
        },
        {
            id: 2,
            number: '02',
            title: 'Apply for Admission',
            description: 'Submit your application and required documents online',
            icon: <FileEdit className="w-10 h-10 md:w-12 md:h-12 text-white" />
        },
        {
            id: 3,
            number: '03',
            title: 'Expert Training',
            description: 'Learn from experienced faculty with industry-relevant curriculum',
            icon: <Presentation className="w-10 h-10 md:w-12 md:h-12 text-white" />
        },
        {
            id: 4,
            number: '04',
            title: 'Placements & Guidance',
            description: 'Get career support and placement assistance from our team',
            icon: <Monitor className="w-10 h-10 md:w-12 md:h-12 text-white" />
        },
        {
            id: 5,
            number: '05',
            title: 'Graduate & Success',
            description: 'Complete your degree and launch your successful career',
            icon: <ClipboardCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-full shadow-lg mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
                    </div>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4">
                        Your journey from exploration to graduation in 5 simple steps
                    </p>
                </div>

                {/* Desktop Layout - Horizontal */}
                <div className="hidden lg:block">
                    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 shadow-2xl">

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative flex items-center justify-between gap-4">

                            {/* Start Card */}
                            <div className="flex-shrink-0 bg-white rounded-2xl p-6 w-32 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <span className="text-orange-500 font-bold text-sm mb-3">Begin</span>
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-blue-200">
                                        <img
                                            src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-118233.jpg"
                                            alt="Student"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <ChevronRight className="text-yellow-400 w-8 h-8 flex-shrink-0 animate-pulse" />

                            {/* Steps */}
                            {steps.map((step, index) => (
                                <React.Fragment key={step.id}>
                                    <div className="flex-1 group">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                            <div className="flex flex-col items-center text-center">
                                                {/* Number Badge */}
                                                <div className="bg-yellow-400 text-blue-900 font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                                    {step.number}
                                                </div>

                                                {/* Icon */}
                                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    {step.icon}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-white font-bold text-lg mb-2">
                                                    {step.title}
                                                </h3>

                                                {/* Description */}
                                                {/* <p className="text-blue-100 text-sm leading-relaxed">
                                                    {step.description}
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow between steps */}
                                    {index < steps.length - 1 && (
                                        <ChevronRight className="text-yellow-400 w-8 h-8 flex-shrink-0 animate-pulse" />
                                    )}
                                </React.Fragment>
                            ))}

                            {/* Arrow */}
                            <ChevronRight className="text-yellow-400 w-8 h-8 flex-shrink-0 animate-pulse" />

                            {/* End Card */}
                            <div className="flex-shrink-0 bg-white rounded-2xl p-6 w-32 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <div className="flex flex-col items-center text-center">
                                    <span className="text-orange-500 font-bold text-sm mb-3">Success</span>
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-blue-200">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxRdFUBTz-878ziLBTEELYsA3RR7DxT0xrw&s"
                                            alt="Graduate"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Layout - Vertical */}
                <div className="lg:hidden">
                    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-6 md:p-8 shadow-2xl">

                        {/* Start Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-blue-200 flex-shrink-0">
                                    <img
                                        src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-118233.jpg"
                                        alt="Student"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-orange-500 font-bold text-lg">Begin Your Journey</span>
                                    <p className="text-gray-600 text-sm">Start exploring your options</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="flex justify-center mb-6">
                            <ChevronDown className="text-yellow-400 w-8 h-8 animate-bounce" />
                        </div>

                        {/* Steps */}
                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <React.Fragment key={step.id}>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="flex gap-4">
                                            {/* Left Side - Number & Icon */}
                                            <div className="flex-shrink-0">
                                                <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-lg">
                                                    {step.number}
                                                </div>
                                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                                                    {step.icon}
                                                </div>
                                            </div>

                                            {/* Right Side - Content */}
                                            <div className="flex-1">
                                                <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow Down between steps */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center">
                                            <ChevronDown className="text-yellow-400 w-6 h-6 animate-bounce" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Arrow Down */}
                        <div className="flex justify-center my-6">
                            <ChevronDown className="text-yellow-400 w-8 h-8 animate-bounce" />
                        </div>

                        {/* End Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-blue-200 flex-shrink-0">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxRdFUBTz-878ziLBTEELYsA3RR7DxT0xrw&s"
                                        alt="Graduate"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-orange-500 font-bold text-lg">Graduate & Succeed</span>
                                    <p className="text-gray-600 text-sm">Launch your successful career</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewStudentJourneySection;
