import { plansData } from '../constants/plansData';

const PlansList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plansData.map((section, index) => (
                <div
                    key={index}
                    className={`bg-gradient-to-br ${section.color === "blue"
                        ? "from-blue-50 to-blue-100"
                        : "from-yellow-50 to-yellow-100"
                        } rounded-lg p-8`}
                >
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">{section.title}</h3>
                    <ul className="space-y-3 text-gray-700">
                        {section.plans.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <div
                                    className={`w-4 h-4 rounded-full mt-2 mr-3 flex-shrink-0 ${section.color === "blue" ? "bg-blue-900" : "bg-yellow-500"
                                        }`}
                                ></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PlansList;
