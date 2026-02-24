import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const MCAProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'mca',
        name: 'Master of Computer Applications',
        abbreviation: 'MCA',
        duration: '2 Years',
        seats: '60',
        fees: '₹2,00,000 per annum',
        placements: '95% placement rate with average package of 8.5 LPA',
        tagline: 'Empowering Future Software Leaders',
        overview: 'The Master of Computer Applications (MCA) is a comprehensive postgraduate program designed for students aiming for advanced excellence in software development. The curriculum focuses on modern application design, database management, and emerging cloud technologies.',
        description: 'Our MCA program provides a professional environment for deep technical learning. Students engage with full-stack development, mobile computing, and artificial intelligence, preparing for elite roles in the global IT industry.',
        semesters: [
            { semester: 'Semester I', subjects: ['Java Programming', 'Database Management Systems', 'Software Engineering', 'Discrete Mathematics'] },
            { semester: 'Semester II', subjects: ['Python Development', 'Web Technologies', 'Operating Systems', 'Computer Networks'] },
            { semester: 'Semester III', subjects: ['Mobile App Development', 'Cloud Computing', 'Data Analytics', 'Elective I'] },
            { semester: 'Semester IV', subjects: ['Industry Internship', 'Major Project', 'Advanced Web Framworks', 'Professional Ethics'] }
        ],
        highlights: [
            'Industry-aligned curriculum with internship',
            'State-of-the-art Software Labs',
            'Full-stack development focus',
            'Hackathons and peer-coding sessions',
            'Technical certifications from Google & AWS',
            'Dedicated training for top MNC placements'
        ],
        specializations: ['Web Development', 'Mobile Computing', 'Cloud Architecture', 'Artificial Intelligence', 'Data Science'],
        skills: ['Software Development', 'System Administration', 'Agile Methodology', 'Cloud Management', 'Database Optimization', 'Network Security'],
        career_paths: [
            { role: 'Senior Software Developer', company: 'F500 Tech Companies', salary: '12-22 LPA' },
            { role: 'Project Manager', company: 'IT Management Firms', salary: '15-25 LPA' },
            { role: 'Database Administrator', company: 'Data Infrastructure Units', salary: '10-18 LPA' },
            { role: 'System Analyst', company: 'Global Consultancy Firms', salary: '10-20 LPA' }
        ],
        eligibility: ['BCA/B.Sc/B.Com with Mathematics', 'Minimum 50% aggregate marks', 'PG-CET or equivalent entrance score', 'Personal Interview'],
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
                            <div className="text-lg font-bold">{program.placements.split(' ')[0]}</div>
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

                {/* Specializations */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Specializations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {program.specializations.map((spec, i) => (
                            <div key={i} className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 text-center">
                                <Target className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                                <p className="font-bold text-blue-900">{spec}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills & Career */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="h-6 w-6 text-yellow-500" />
                            Skills You'll Develop
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
                                    <p className="text-sm text-gray-600">{path.salary}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Eligibility & Admission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-900">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-3">
                            {program.eligibility.map((el, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{el}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-2 border-yellow-500">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Admission Info</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Annual Fee</p>
                                <p className="text-2xl font-bold text-blue-900">{program.fees}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Placement Rate</p>
                                <p className="text-lg font-bold text-green-700">{program.placements}</p>
                            </div>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                                Apply Now
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MCAProgramDetail;
