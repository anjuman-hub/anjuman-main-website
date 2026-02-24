interface GalleryFiltersProps {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}

const GalleryFilters = ({ categories, selectedCategory, onCategorySelect }: GalleryFiltersProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onCategorySelect(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${selectedCategory === category
                            ? 'bg-blue-900 text-white'
                            : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-100'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default GalleryFilters;
