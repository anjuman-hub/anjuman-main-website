import { categories } from '../constants/institutionsData';

interface InstitutionFiltersProps {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const InstitutionFilters = ({ activeFilter, setActiveFilter }: InstitutionFiltersProps) => {
    return (
        <section className="bg-gray-50/95 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex sm:justify-center items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 min-w-max ${activeFilter === cat
                                ? 'bg-blue-900 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat === 'Higher Education' ? 'Colleges' : cat === 'PU Education' ? 'PU Colleges' : cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitutionFilters;
