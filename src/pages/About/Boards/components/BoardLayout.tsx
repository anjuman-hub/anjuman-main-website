import React from 'react';
import { Users } from 'lucide-react';

export interface BoardMember {
    name: string;
    designation: string;
}

interface BoardLayoutProps {
    title: string;
    subtitle?: string;
    members: BoardMember[];
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ title, subtitle, members }) => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-900 py-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        {title} <span className="text-yellow-400">({subtitle || '2024–2028'})</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Dedicated board members overseeing the specialized functions and strategic direction of Anjuman Hami-e-Muslimeen.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-3 max-w-4xl">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-tight">{title}</h2>
                    </div>
                    <div className="h-1 w-24 bg-yellow-500 rounded-full mt-3"></div>
                </div>

                <div className="flex flex-col gap-2">
                    {members.map((member, index) => {
                        const isPatron = member.designation.includes('(Patron)');
                        const isAdvocate = member.designation.includes('(Advocate)');
                        const displayDesignation = member.designation
                            .replace(/\s*\(Patron\)\s*/, '')
                            .replace(/\s*\(Advocate\)\s*/, '');

                        return (
                            <div key={index} className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-[15px] sm:text-[17px] font-bold text-gray-900 group-hover:text-blue-900 transition-colors truncate tracking-tight">
                                            {member.name}
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
                                    <p className="text-gray-500 font-medium text-[12px] sm:text-[13px] mt-0.5">
                                        {displayDesignation}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardLayout;
