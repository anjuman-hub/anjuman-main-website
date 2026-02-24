import ObjectivesList from './components/ObjectivesList';

const Objectives = () => {
    return (
        <div className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                    Strategic Objectives
                </h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    Our objectives guide every initiative and program at Anjuman Arts, Science & Commerce College, Bhatkal.
                </p>
            </div>

            {/* Objectives Grid */}
            <ObjectivesList />
        </div>
    );
};

export default Objectives;
