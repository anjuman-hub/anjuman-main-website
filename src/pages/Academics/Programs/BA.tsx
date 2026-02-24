import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const BAProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'ba',
        name: 'Bachelor of Arts',
        abbreviation: 'BA',
        duration: '3 Years',
        seats: '150',
        fees: '₹1,50,000 per annum',
        placements: '80% placement rate in diverse sectors',
        tagline: 'Exploring Humanities and Social Sciences',
        overview: 'The Bachelor of Arts program offers a broad-based education in humanities, social sciences, and languages. It is designed to develop critical thinking, creative expression, and a deep understanding of human society and culture.',
        description: 'Our BA program provides students with the flexibility to choose from various subject combinations including History, Economics, Political Science, Sociology, and English. The curriculum emphasizes research, analytical writing, and communicative competence, preparing students for careers in civil services, journalism, social work, and academia.',
        semesters: [
            { semester: 'Year 1', subjects: ['Core Subject I', 'Core Subject II', 'Elective Language', 'Foundation Course', 'Social Science Basics', 'Communication Skills'] },
            { semester: 'Year 2', subjects: ['Advanced Core I', 'Advanced Core II', 'Research Methodology', 'Human Rights', 'Environmental Studies', 'Skill Enhancement'] },
            { semester: 'Year 3', subjects: ['Specialization I', 'Specialization II', 'Project Work', 'Ethics & Values', 'Field Study', 'Career Preparation'] }
        ],
        highlights: [
            'Diverse choice of subject combinations',
            'Focus on research and analytical thinking',
            'Regular seminars and literary activities',
            'Preparation for competitive exams (UPSC/KPSC)',
            'Qualified faculty with research backgrounds',
            'Strong emphasis on social and cultural values'
        ],
        specializations: ['History', 'Economics', 'Political Science', 'Sociology', 'English Literature'],
        skills: ['Critical Analysis', 'Effective Communication', 'Cultural Competence', 'Research & Documentation', 'Public Speaking', 'Social Research'],
        career_paths: [
            { role: 'Civil Services / Administrative Roles', company: 'Government Sector', salary: '6-12 LPA' },
            { role: 'Journalist / Content Writer', company: 'Media Houses', salary: '4-8 LPA' },
            { role: 'Social Worker / NGO Lead', company: 'Non-Profits', salary: '3-6 LPA' },
            { role: 'Teaching & Academia', company: 'Schools & Colleges', salary: '4-7 LPA' }
        ],
        eligibility: ['12th Pass / PUC-II from any stream', 'Minimum 45% aggregate marks', 'Personal Interview', 'Entrance Test (if applicable)'],
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
                            <div className="text-lg font-bold">80%</div>
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

                {/* Specializations */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Subject Specializations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

export default BAProgramDetail;
