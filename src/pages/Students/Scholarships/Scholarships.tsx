import { DollarSign, Award, GraduationCap } from 'lucide-react';

const Scholarships = () => {
    const scholarships = [
        {
            title: 'Anjuman Merit Scholarship',
            icon: Award,
            amount: '₹10,000 - ₹25,000',
            criteria: 'Students scoring above 90% in previous qualifying exam',
            deadline: 'August 31st'
        },
        {
            title: 'Need-Based Financial Aid',
            icon: DollarSign,
            amount: 'Up to 50% Tuition Waiver',
            criteria: 'Family income below ₹2.5 Lakhs per annum',
            deadline: 'July 15th'
        },
        {
            title: 'Sports Excellence Scholarship',
            icon: Trophy,
            amount: '₹5,000 - ₹15,000',
            criteria: 'State or National level sports representation',
            deadline: 'September 15th'
        },
        {
            title: 'Minority Scholarship (Govt)',
            icon: GraduationCap,
            amount: 'As per Govt Norms',
            criteria: 'Minority community students with 50% marks',
            deadline: 'As per Govt Notification'
        }
    ];

    const feeConcessions = [
        'Concession for siblings studying in Anjuman institutions',
        'Special fee structure for physically challenged students',
        'Fee waiver for children of Anjuman employees',
        'Merit-cum-means scholarship for deserving candidates'
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Scholarships & Financial Aid</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Supporting your education through various scholarship programs and fee concessions
                    </p>
                </div>

                {/* Scholarships Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {scholarships.map((scholarship, index) => {
                        const Icon = scholarship.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-blue-900">{scholarship.title}</h3>
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <Icon className="h-6 w-6 text-blue-900" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Amount:</span> {scholarship.amount}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Eligibility:</span> {scholarship.criteria}
                                    </p>
                                    <p className="text-red-600 text-sm font-semibold">
                                        Application Deadline: {scholarship.deadline}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline">
                                        View Details & Apply &rarr;
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Fee Concessions */}
                    <div className="bg-blue-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Fee Concessions</h2>
                        <ul className="space-y-4">
                            {feeConcessions.map((concession, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{concession}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Apply</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>1. Download the scholarship application form from the college website or collect it from the office.</p>
                            <p>2. Attach self-attested copies of previous year's marks card, income certificate, and caste certificate (if applicable).</p>
                            <p>3. Submit the completed form along with required documents to the principal's office before the deadline.</p>
                            <p>4. For government scholarships, apply online through the respective government portals (SSP/NSP).</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors w-full sm:w-auto text-center">
                                Download Application Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Trophy icon component since it was missing in lucide import in previous step or just to be safe
const Trophy = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
);

export default Scholarships;
