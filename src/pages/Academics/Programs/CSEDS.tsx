import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const CSEDetailedProgram = () => {
    const navigate = useNavigate();

    const program = {
        id: 'cse-ds',
        name: 'B.Tech CSE - Data Science',
        abbreviation: 'CSE-DS',
        duration: '4 Years',
        seats: '60',
        fees: '₹3,75,000 per annum',
        placements: '97% placement rate with average package of 9.5 LPA',
        tagline: 'Unlock Insights from Big Data',
        overview: 'The B.Tech in CSE - Data Science is a specialized program designed to create experts in data analysis, big data technologies, and predictive modeling. It combines core computer science engineering with advanced statistical and computational methods.',
        description: 'Our CSE-DS program focuses on extracting valuable insights from structured and unstructured data. Students master big data frameworks, machine learning algorithms, and data visualization tools. With a strong emphasis on real-world data projects and industry collaborations, students are prepared for high-demand roles in analytics, finance, healthcare, and global tech firms.',
        semesters: [
            { semester: 'Semester I & II', subjects: ['Mathematics I & II', 'Physics / Chemistry', 'Programming for Problem Solving', 'Digital Logic Design', 'Basics of Electrical & Electronics', 'Design Thinking'] },
            { semester: 'Semester III & IV', subjects: ['Data Structures', 'Discrete Mathematics', 'Computer Architecture', 'Operating Systems', 'Probability & Statistics', 'Analysis of Algorithms'] },
            { semester: 'Semester V & VI', subjects: ['Database Management', 'Machine Learning', 'Data Warehousing & Mining', 'Python Project for Data Science', 'Computer Networks', 'Software Engineering'] },
            { semester: 'Semester VII & VIII', subjects: ['Big Data Analytics', 'Deep Learning', 'Data Visualization', 'Generative AI Basics', 'Project Work Phase I & II', 'Professional Ethics'] }
        ],
        highlights: [
            'Dedicated Big Data and Analytics Lab',
            'Curriculum focused on industry-standard data tools',
            'Hands-on training with Python, R, and SQL',
            'Industry certifications from IBM, Google, and AWS',
            'Strong focus on project-based learning and competitions',
            'Career tracks in Data Science, Analytics, and AI Research'
        ],
        specializations: ['Data Engineering', 'Predictive Analytics', 'Big Data Technologies', 'Business Intelligence', 'Machine Learning'],
        skills: ['Data Analysis & Visualization', 'Statistical Modeling', 'Machine Learning Algorithms', 'Big Data Frameworks (Hadoop/Spark)', 'Python/R for Data Science', 'Database Management'],
        career_paths: [
            { role: 'Data Scientist', company: 'Global Tech & Finance Firms', salary: '12-28 LPA' },
            { role: 'Data Analyst / Engineer', company: 'Analytics & Product Companies', salary: '9-20 LPA' },
            { role: 'Business Intelligence Architect', company: 'Consulting Agencies', salary: '11-24 LPA' },
            { role: 'Machine Learning Specialist', company: 'AI Product Startups', salary: '13-30 LPA' }
        ],
        eligibility: ['12th Pass / PUC-II with Physics, Chemistry, and Mathematics', 'Minimum 60% aggregate marks', 'Valid Entrance Exam Score (CET/JEE/COMEDK)', 'Technical Counseling'],
    };

    return (
        <div className="pt-32">
            <div className="container mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-900 hover:text-yellow-600 font-semibold mb-8 transition-colors"
                >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    Back to Programs
                </button>

                {/* Hero */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-xl p-8 mb-8">
                    <div className="text-5xl font-bold mb-2">{program.abbreviation}</div>
                    <h1 className="text-3xl font-bold mb-4">{program.name}</h1>
                    <p className="text-xl text-blue-200 mb-6">{program.tagline}</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-blue-800/50 rounded-lg p-4">
                            <Clock className="h-6 w-6 mb-2 text-yellow-400" />
                            <div className="text-sm text-blue-200">Duration</div>
                            <div className="text-lg font-bold">{program.duration}</div>
                        </div>
                        <div className="bg-blue-800/50 rounded-lg p-4">
                            <Users className="h-6 w-6 mb-2 text-yellow-400" />
                            <div className="text-sm text-blue-200">Seats</div>
                            <div className="text-lg font-bold">{program.seats}</div>
                        </div>
                        <div className="bg-blue-800/50 rounded-lg p-4">
                            <DollarSign className="h-6 w-6 mb-2 text-yellow-400" />
                            <div className="text-sm text-blue-200">Fees</div>
                            <div className="text-lg font-bold">{program.fees}</div>
                        </div>
                        <div className="bg-blue-800/50 rounded-lg p-4">
                            <Award className="h-6 w-6 mb-2 text-yellow-400" />
                            <div className="text-sm text-blue-200">Placement</div>
                            <div className="text-lg font-bold">97%</div>
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <section className="bg-gray-50 rounded-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Program Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{program.overview}</p>
                </section>

                {/* Highlights */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose This Program?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {program.highlights.map((highlight, i) => (
                            <div key={i} className="bg-white border-l-4 border-yellow-500 rounded-lg p-4 shadow-md">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 font-semibold">{highlight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Curriculum */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Curriculum Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {program.semesters.map((sem, i) => (
                            <div key={i} className="bg-blue-900 text-white rounded-lg p-6 shadow-lg">
                                <h3 className="text-xl font-bold mb-4">{sem.semester}</h3>
                                <ul className="space-y-2">
                                    {sem.subjects.map((sub, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1 flex-shrink-0"></div>
                                            <span>{sub}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills & Career */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="h-6 w-6 text-yellow-500" />
                            Technical Skills
                        </h3>
                        <div className="space-y-3">
                            {program.skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Briefcase className="h-6 w-6 text-yellow-500" />
                            Career Opportunities
                        </h3>
                        <div className="space-y-3">
                            {program.career_paths.map((path, i) => (
                                <div key={i} className="p-3 bg-blue-50 rounded-lg">
                                    <p className="font-semibold text-blue-900">{path.role}</p>
                                    <p className="text-sm text-gray-600">{path.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Admission */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-2 border-yellow-500 mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Admission Info</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Annual Fee</p>
                            <p className="text-2xl font-bold text-blue-900">{program.fees}</p>
                        </div>
                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                            Apply Now
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSEDetailedProgram;
