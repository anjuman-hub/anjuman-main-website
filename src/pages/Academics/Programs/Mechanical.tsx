import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const MechanicalProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'mechanical',
        name: 'Mechanical Engineering',
        abbreviation: 'Mechanical',
        duration: '4 Years',
        seats: '90',
        fees: '₹3,25,000 per annum',
        placements: '92% placement rate with average package of 6.5 LPA',
        tagline: 'Designing the Machines of Tomorrow',
        overview: 'The B.Tech in Mechanical Engineering offers a comprehensive education in the design, analysis, and manufacturing of mechanical systems. It is one of the broadest engineering disciplines, covering everything from micro-machines to massive industrial systems.',
        description: 'Our Mechanical program balances fundamental engineering principles with advanced technological applications. With specialized workshops and labs for thermodynamics, fluid mechanics, CAD/CAM, and robotics, students gain hands-on experience in machine design and manufacturing processes. The curriculum is updated to include sustainable energy, electric vehicles, and smart manufacturing, preparing students for leadership roles in automotive, aerospace, and energy sectors.',
        semesters: [
            { semester: 'Semester I & II', subjects: ['Mathematics I & II', 'Physics / Chemistry', 'Engineering Graphics', 'Basics of Mechanical Engineering', 'Programming for Problem Solving', 'Environmental Science'] },
            { semester: 'Semester III & IV', subjects: ['Strength of Materials', 'Thermodynamics', 'Fluid Mechanics', 'Engineering Metallurgy', 'Machine Drawing', 'Kinematics of Machines'] },
            { semester: 'Semester V & VI', subjects: ['Dynamics of Machinery', 'Heat Transfer', 'Design of Machine Elements', 'Manufacturing Process', 'Turbo Machines', 'Finite Element Analysis'] },
            { semester: 'Semester VII & VIII', subjects: ['AutoCAD & SolidWorks', 'Robotics & Automation', 'Electric Vehicle Tech', 'Energy Engineering', 'Project Work Phase I & II', 'Total Quality Management'] }
        ],
        highlights: [
            'Modern CAD/CAM and Numerical Simulation Labs',
            'Advanced Workshops for Manufacturing and Automation',
            'Focus on Sustainable Energy and EV Technology',
            'Regular industry visits to leading automotive and power plants',
            'Active student chapters of professional bodies (SAE/ASME)',
            'Opportunities for research in material science and robotics'
        ],
        specializations: ['Design Engineering', 'Thermal Power', 'Manufacturing & Automation', 'Energy Engineering', 'Robotics'],
        skills: ['CAD/CAM (SolidWorks/CATIA)', 'Structural Analysis', 'Thermal System Design', 'Product Lifecycle Management', 'Robotic Programming', 'Lean Manufacturing'],
        career_paths: [
            { role: 'Product Design Engineer', company: 'Automotive & Aerospace MNCs', salary: '8-15 LPA' },
            { role: 'Manufacturing & Process Engineer', company: 'Global Production Houses', salary: '6-12 LPA' },
            { role: 'R&D Engineer', company: 'Defense & Space Organizations', salary: '9-18 LPA' },
            { role: 'Operations Manager', company: 'Energy & Infrastructure Firms', salary: '7-13 LPA' }
        ],
        eligibility: ['12th Pass / PUC-II with Physics, Chemistry, and Mathematics', 'Minimum 50% aggregate marks', 'Valid Entrance Exam Score (CET/JEE/COMEDK)', 'Technical Counseling'],
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
                            <div className="text-lg font-bold">92%</div>
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

export default MechanicalProgramDetail;
