import { Building2, Users, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Institution } from '../constants/institutionsData';

interface InstitutionGridProps {
    institutions: Institution[];
}

const InstitutionGrid = ({ institutions }: InstitutionGridProps) => {
    return (
        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {institutions.map((inst) => (
                        <div
                            key={inst.id}
                            className="bg-white rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                        >
                            {/* Image & Category Badge */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={inst.image}
                                    alt={inst.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-yellow-500 text-blue-900 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                                        {inst.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 flex-1 flex flex-col">
                                <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors leading-tight tracking-tight">
                                    {inst.name}
                                </h3>

                                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-4">
                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-600" />
                                    {inst.location}
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-1 sm:gap-2 py-4 border-y border-gray-100 mb-6">
                                    <div className="text-center">
                                        <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 mx-auto mb-1" />
                                        <p className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-tighter">Students</p>
                                        <p className="text-[10px] sm:text-xs font-bold text-blue-900">{inst.stats.students}</p>
                                    </div>
                                    <div className="text-center border-x border-gray-50">
                                        <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 mx-auto mb-1" />
                                        <p className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-tighter">Faculty</p>
                                        <p className="text-[10px] sm:text-xs font-bold text-blue-900">{inst.stats.faculty}</p>
                                    </div>
                                    <div className="text-center">
                                        <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 mx-auto mb-1" />
                                        <p className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-tighter">Est.</p>
                                        <p className="text-[10px] sm:text-xs font-bold text-blue-900">{inst.establishment}</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto">
                                    <a
                                        href={inst.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-95"
                                    >
                                        Explore Institution
                                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitutionGrid;
