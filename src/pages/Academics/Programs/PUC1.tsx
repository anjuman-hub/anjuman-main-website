import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target } from 'lucide-react';

const PUC1ProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'puc1',
        name: 'Pre-University I',
        abbreviation: 'PUC-I',
        duration: '1 Year',
        seats: '300',
        fees: '₹55,000 per annum',
        placements: 'N/A',
        tagline: 'Gateway to Higher Education',
        overview: 'The Pre-University Course I (11th Grade) is a critical transition year where students choose their specialized streams of study. We offer Science, Commerce, and Arts streams with a focus on core concepts and foundation building.',
        description: 'Our PUC program is known for its academic rigor and excellent results. Students receive personalized attention from experienced faculty, with access to well-equipped labs and a supportive learning environment that prepares them for PUC-II and competitive exams.',
        semesters: [
            { semester: 'Science Stream', subjects: ['Physics', 'Chemistry', 'Mathematics/Biology', 'Languages', 'Computer Science/Electronics'] },
            { semester: 'Commerce Stream', subjects: ['Accountancy', 'Business Studies', 'Economics', 'Basic Maths/Statistics/CS', 'Languages'] },
            { semester: 'Arts Stream', subjects: ['History', 'Economics', 'Political Science', 'Sociology/Psychology', 'Languages'] }
        ],
        highlights: [
            'Choice of Science, Commerce, and Arts streams',
            'Foundation for competitive exams (JEE/NEET/CET/CA-Foundation)',
            'Highly experienced and dedicated faculty',
            'Spacious and well-equipped laboratories',
            'Focus on concept-based and collaborative learning',
            'Regular guest lectures and career counseling'
        ],
        specializations: ['PCMB', 'PCMC', 'CEBA', 'HEPS'],
        skills: ['Analytical Thinking', 'Scientific Reasoning', 'Economic Analysis', 'Problem Solving', 'Communication', 'Research Skills'],
        career_paths: [
            { role: 'Prepares for PUC-II', company: 'Academic progression', salary: 'N/A' }
        ],
        eligibility: ['Successful completion of Class 10/SSLC', 'Original Marks Card', 'Transfer Certificate', 'Character Certificate'],
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
                            <div className="text-sm text-blue-200">Level</div>
                            <div className="text-lg font-bold">11th Grade</div>
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

                {/* Streams */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Streams</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">PUC Combinations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {program.specializations.map((spec, i) => (
                            <div key={i} className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 text-center">
                                <Target className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                                <p className="font-bold text-blue-900">{spec}</p>
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

export default PUC1ProgramDetail;
