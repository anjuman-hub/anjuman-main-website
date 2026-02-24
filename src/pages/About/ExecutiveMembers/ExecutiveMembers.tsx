import { executiveMembers } from './constants/executiveMembersData';
import { Users, MapPin } from 'lucide-react';

const ExecutiveMembers = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-900 py-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight flex flex-col items-center gap-2">
                        <span>Executive Members</span>
                        <span className="text-yellow-400 text-2xl md:text-2xl font-semibold opacity-90">(2024–2028)</span>
                    </h1>
                    <p className="text-sm md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Dedicated leadership committed to excellence in education and community service at Anjuman Hami-e-Muslimeen.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-3 max-w-6xl">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-tight">Executive Members</h2>
                    </div>
                    <div className="h-1 w-24 bg-yellow-500 rounded-full mt-3"></div>
                </div>

                <div className="flex flex-col gap-2">
                    {executiveMembers.map((member, index) => {
                        const locationMatch = member.name.match(/\(([^)]+)\)/);
                        const location = locationMatch ? locationMatch[1] : null;
                        const cleanName = member.name.replace(/\s*\([^)]+\)\s*/, '');

                        const isPatron = member.designation.includes('(Patron)');
                        const isAdvocate = member.designation.includes('(Advocate)');
                        const displayDesignation = member.designation
                            .replace(/\s*\(Patron\)\s*/, '')
                            .replace(/\s*\(Advocate\)\s*/, '');

                        return (
                            <div key={index} className="bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-[14px] sm:text-[16px] font-bold text-gray-900 group-hover:text-blue-900 transition-colors truncate tracking-tight">
                                                {cleanName}
                                            </h3>
                                            {isPatron && (
                                                <span className="text-[10px] sm:text-[11px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-100 uppercase tracking-wider whitespace-nowrap">
                                                    Patron
                                                </span>
                                            )}
                                            {isAdvocate && (
                                                <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider whitespace-nowrap">
                                                    Advocate
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                                            <p className="text-gray-500 font-medium text-[12px] sm:text-[13px]">
                                                {displayDesignation}
                                            </p>
                                            {location && (
                                                <div className="flex sm:hidden items-center gap-1 text-blue-600 shrink-0">
                                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                    <MapPin className="w-3 h-3" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider">
                                                        {location}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {location && (
                                        <div className="hidden sm:flex items-center gap-1 text-blue-600 shrink-0 mt-1">
                                            <MapPin className="w-3 h-3" />
                                            <span className="text-[11px] font-bold uppercase tracking-wider">
                                                {location}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default ExecutiveMembers;
