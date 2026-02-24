import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight} from 'lucide-react';

const PUC2ProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'puc2',
        name: 'Pre-University II',
        abbreviation: 'PUC-II',
        duration: '1 Year',
        seats: '300',
        fees: '₹55,000 per annum',
        placements: '95% success rate in university admissions',
        tagline: 'Your Launchpad to Success',
        overview: 'The Pre-University Course II (12th Grade) is the defining year for students leading to university education. We focus on intensive preparation for board exams as well as national and state level entrance examinations.',
        description: 'Our PUC-II program is designed to ensure students achieve their maximum potential. With high academic standards, expert coaching for CET, NEET, and JEE, and comprehensive career counseling, we pave the way for students to enter the best professional and degree colleges.',
        semesters: [
            { semester: 'Academic Focus', subjects: ['Physics', 'Chemistry', 'Mathematics/Biology', 'Accountancy', 'Economics', 'Business Studies', 'Computer Science'] },
            { semester: 'Competitive Prep', subjects: ['KCET Preparation', 'NEET Coaching', 'JEE Mains Support', 'CA-Foundation Prep', 'Mock Test Series', 'Speed & Accuracy Training'] }
        ],
        highlights: [
            'Top-notch result track record in State Board exams',
            'In-house coaching for CET, NEET, and JEE',
            'Regular mock tests and performance analysis',
            'Special sessions for slow and fast learners',
            'University and college admission workshops',
            'Scholarships for meritorious students'
        ],
        specializations: ['Science Stream', 'Commerce Stream', 'Arts Stream'],
        skills: ['Advanced Problem Solving', 'Critical Reasoning', 'Time Management', 'Exam Strategy', 'Subject Mastery', 'Career Planning'],
        career_paths: [
            { role: 'Engineering / Medical / Management', company: 'Professional degree path', salary: 'N/A' },
            { role: 'Arts / Science / Commerce Degrees', company: 'University admission path', salary: 'N/A' }
        ],
        eligibility: ['Successful completion of PUC-I', 'PUC-I Marks Card', 'Transfer Certificate', 'Character Certificate'],
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
                            <div className="text-sm text-blue-200">Success Rate</div>
                            <div className="text-lg font-bold">95%+</div>
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

                {/* Focus Areas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Academic & Competitive Focus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Eligibility & Admission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
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

export default PUC2ProgramDetail;
