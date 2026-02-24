import React from 'react';
import {
    Users,
    FileEdit,
    Presentation,
    Monitor,
    ClipboardCheck,
    ChevronRight
} from 'lucide-react';

const StudentJourneySection = () => {
    const steps = [
        {
            id: 1,
            number: '01',
            title: 'Explore & Choose',
            icon: <Users className="w-8 h-8 text-white" />
        },
        {
            id: 2,
            number: '02',
            title: 'Apply for Admission',
            icon: <FileEdit className="w-8 h-8 text-white" />
        },
        {
            id: 3,
            number: '03',
            title: 'Expert Training',
            icon: <Presentation className="w-8 h-8 text-white" />
        },
        {
            id: 4,
            number: '04',
            title: 'Placements & Guidance',
            icon: <Monitor className="w-8 h-8 text-white" />
        },
        {
            id: 5,
            number: '05',
            title: 'Graduate & Success',
            icon: <ClipboardCheck className="w-8 h-8 text-white" />
        }
    ];

    return (
        <section className="py-20 sm:py-10 bg-white">
            <div className="container mx-auto px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

                {/* Main Blue Container */}
                <div className="relative bg-[#0047AB] rounded-[1.5rem] p-4 sm:p-6 pb-12 pt-16 shadow-2xl">

                    {/* Yellow Header Badge */}
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-white px-10 py-3 rounded-xl shadow-lg">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">How It Works</h2>
                    </div>

                    {/* Steps Container - Flex Wrap, Compact for One Line */}
                    <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-1 sm:gap-x-2 mt-4 sm:mt-8 w-full">

                        {/* Start Card */}
                        <div className="flex-shrink-0 bg-white rounded-xl p-2 w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center shadow-lg z-10 border border-gray-100">
                            <span className="text-orange-500 font-bold mb-1 text-[10px] sm:text-xs">Begin</span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-118233.jpg"
                                    alt="Student with laptop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Arrow */}
                        <ChevronRight className="text-orange-400 w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />

                        {/* Middle Steps */}
                        {steps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className="flex flex-col items-center flex-shrink-0 w-20 sm:w-24 text-center group">
                                    <span className="text-white font-bold text-xs sm:text-sm mb-1">{step.number}</span>

                                    {/* Icon Box */}
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-orange-400 rounded-lg flex items-center justify-center mb-1 transition-transform duration-300 group-hover:-translate-y-1 bg-[#0047AB]">
                                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" })}
                                    </div>

                                    <p className="text-white text-[10px] sm:text-xs font-medium leading-tight px-0.5 whitespace-nowrap">
                                        {step.title}
                                    </p>
                                </div>

                                {/* Arrow separator (not after last item) */}
                                {index < steps.length - 1 && (
                                    <ChevronRight className="text-orange-400 w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                                )}
                            </React.Fragment>
                        ))}

                        {/* Arrow */}
                        <ChevronRight className="text-orange-400 w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />

                        {/* End Card */}
                        <div className="flex-shrink-0 bg-white rounded-xl p-2 w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center shadow-lg z-10 border border-gray-100">
                            <span className="text-orange-500 font-bold mb-1 text-[10px] sm:text-xs">Graduated</span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxRdFUBTz-878ziLBTEELYsA3RR7DxT0xrw&s"
                                    alt="Graduate Man"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudentJourneySection;
