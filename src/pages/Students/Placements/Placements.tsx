import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

const Placements = () => {
    const stats = [
        {
            icon: Users,
            title: 'Students Placed',
            value: '245',
            subtitle: 'Out of 280 eligible students',
            percentage: '87.5%'
        },
        {
            icon: Briefcase,
            title: 'Companies Visited',
            value: '45',
            subtitle: 'Leading companies recruited',
            percentage: '+15%'
        },
        {
            icon: TrendingUp,
            title: 'Highest Package',
            value: '₹12 LPA',
            subtitle: 'Offered by top MNC',
            percentage: 'New Record'
        },
        {
            icon: Award,
            title: 'Average Package',
            value: '₹4.2 LPA',
            subtitle: 'Across all streams',
            percentage: '+8%'
        }
    ];

    const topRecruiters = [
        'TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM', 'Cognizant',
        'HCL Technologies', 'Tech Mahindra', 'Capgemini', 'Microsoft',
        'Amazon', 'Google', 'Deloitte', 'EY', 'KPMG', 'PwC'
    ];

    const placementProcess = [
        {
            step: '1',
            title: 'Registration',
            description: 'Students register with the placement cell and submit required documents'
        },
        {
            step: '2',
            title: 'Resume Building',
            description: 'Professional resume writing workshops and personal branding sessions'
        },
        {
            step: '3',
            title: 'Skill Development',
            description: 'Technical and soft skills training programs to enhance employability'
        },
        {
            step: '4',
            title: 'Mock Interviews',
            description: 'Practice sessions with industry experts and HR professionals'
        },
        {
            step: '5',
            title: 'Company Visits',
            description: 'On-campus recruitment drives by partner companies'
        },
        {
            step: '6',
            title: 'Final Placement',
            description: 'Final selection and offer letter distribution to successful candidates'
        }
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Placements</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Excellent placement opportunities with leading companies across various industries
                    </p>
                </div>

                {/* Placement Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="h-8 w-8 text-blue-900" />
                                </div>
                                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.title}</p>
                                <p className="text-sm text-gray-600 mb-2">{stat.subtitle}</p>
                                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                                    {stat.percentage}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Top Recruiters */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 text-center mb-12">Our Top Recruiters</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                            {topRecruiters.map((company, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-2">
                                        <span className="text-sm font-semibold text-gray-600">{company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Placement Process */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 text-center mb-12">Placement Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {placementProcess.map((process, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                                <div className="flex items-center mb-4">
                                    <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-900 font-bold">{process.step}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-blue-900">{process.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training Programs */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 text-center mb-12">Pre-Placement Training</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Technical Skills</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Programming Languages (Java, Python, C++)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Database Management Systems</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Web Development Technologies</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Data Analytics and Business Intelligence</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Digital Marketing and E-commerce</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Soft Skills</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Communication and Presentation Skills</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Interview Preparation and Group Discussions</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Professional Etiquette and Workplace Behavior</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Leadership and Team Management</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Problem Solving and Critical Thinking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-blue-900 rounded-lg p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Placement Cell Contact</h2>
                    <p className="text-blue-200 mb-6">
                        For placement opportunities and career guidance
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-center">
                            <p className="font-semibold mb-1">Placement Officer</p>
                            <p className="text-blue-200 text-sm">Dr. Ramesh Kumar</p>
                            <p className="text-blue-200 text-sm">placement@anjumancollege.edu.in</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-1">Training Coordinator</p>
                            <p className="text-blue-200 text-sm">Ms. Priya Sharma</p>
                            <p className="text-blue-200 text-sm">training@anjumancollege.edu.in</p>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold mb-1">Phone</p>
                            <p className="text-blue-200 text-sm">+91 98765 43218</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placements;
