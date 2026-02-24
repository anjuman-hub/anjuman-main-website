import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const KindergartenProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'kindergarten',
        name: 'Kindergarten',
        abbreviation: 'KG',
        duration: '2 Years',
        seats: '100',
        fees: '₹25,000 per annum',
        placements: 'N/A',
        tagline: 'Building Strong Foundations for Young Minds',
        overview: 'Our Kindergarten program provides a nurturing and stimulating environment for young learners aged 3-5 years. We focus on holistic development through play-based learning, fostering curiosity, creativity, and social skills.',
        description: 'The Kindergarten program at Anjuman is designed to provide a strong foundation for lifelong learning. Through age-appropriate activities, children develop cognitive, physical, social, and emotional skills in a safe and caring environment.',
        semesters: [
            { semester: 'Year 1 - LKG', subjects: ['Pre-Reading Skills', 'Pre-Math Concepts', 'Art & Craft', 'Music & Movement', 'Physical Education', 'Social Skills'] },
            { semester: 'Year 2 - UKG', subjects: ['Early Reading', 'Number Concepts', 'Creative Arts', 'Environmental Awareness', 'Physical Development', 'Language Skills'] }
        ],
        highlights: [
            'Play-based learning approach',
            'Experienced early childhood educators',
            'Safe and nurturing environment',
            'Age-appropriate curriculum',
            'Focus on social-emotional development',
            'Parent-teacher collaboration'
        ],
        specializations: ['General Development'],
        skills: ['Motor Skills', 'Social Skills', 'Communication', 'Creativity', 'Problem Solving', 'Independence'],
        career_paths: [
            { role: 'Prepares for Primary Education', company: 'Foundation for future learning', salary: 'N/A' }
        ],
        eligibility: ['Age 3-5 years', 'Birth certificate required', 'Health certificate', 'Previous school records (if applicable)'],
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
                            <div className="text-sm text-blue-200">Age Group</div>
                            <div className="text-lg font-bold">3-5 Years</div>
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

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="h-6 w-6 text-yellow-500" />
                            Skills Children Develop
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

export default KindergartenProgramDetail;
