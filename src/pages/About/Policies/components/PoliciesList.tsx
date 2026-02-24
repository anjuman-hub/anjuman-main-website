import { professionalPolicies } from '../constants/policiesData';

const PoliciesList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                <ul className="space-y-4 text-gray-700">
                    {professionalPolicies.map((policy, index) => (
                        <li key={index} className="flex items-start">
                            <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                                <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <span>{policy}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PoliciesList;
