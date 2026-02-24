import { objectives } from '../constants/objectivesData';

const ObjectivesList = () => {
    return (
        <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                        <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-900 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{objective}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ObjectivesList;
