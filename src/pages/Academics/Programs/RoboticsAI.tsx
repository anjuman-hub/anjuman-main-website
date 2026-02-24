import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Users, Award, DollarSign, CheckCircle, ArrowRight, Target, BarChart3, Briefcase } from 'lucide-react';

const RoboticsAIProgramDetail = () => {
    const navigate = useNavigate();

    const program = {
        id: 'robotics-ai',
        name: 'B.Tech Robotics & Artificial Intelligence',
        abbreviation: 'Robotics & AI',
        duration: '4 Years',
        seats: '60',
        fees: '₹4,00,000 per annum',
        placements: '98% placement rate with top robotics & AI firms',
        tagline: 'Empowering Machines with Intelligence',
        overview: 'The B.Tech in Robotics & Artificial Intelligence is a cutting-edge interdisciplinary program that combines mechanical engineering, electronics, and advanced computer science to create intelligent autonomous systems.',
        description: 'Our Robotics & AI program focuses on the design, build, and programming of advanced robotic systems. Students explore deep learning for vision, sensor fusion, robotic kinematics, and natural language processing. With specialized labs for humanoid robots, autonomous vehicles, and industrial automation, students gain the skills to innovate at the forefront of the robotics revolution.',
        semesters: [
            { semester: 'Semester I & II', subjects: ['Mathematics for AI', 'Physics of Machines', 'Basics of Electrical & Electronics', 'Programming for Robotics', 'Design Thinking', 'Engineering Graphics'] },
            { semester: 'Semester III & IV', subjects: ['Robotic Kinematics', 'Linear Algebra & Optimization', 'Data Structures & Algorithms', 'Microcontrollers & Sensors', 'Computer Architecture', 'Signal Processing'] },
            { semester: 'Semester V & VI', subjects: ['Artificial Intelligence', 'Control Systems for Robotics', 'Machine Learning', 'Computer Vision', 'Embedded Systems for AI', 'Actuators & Drive Systems'] },
            { semester: 'Semester VII & VIII', subjects: ['Deep Learning', 'Autonomous Navigation', 'Human-Robot Interaction', 'Ethics & Policy in AI', 'Project Phase I & II', 'Advanced Robotics Seminar'] }
        ],
        highlights: [
            'Advanced Robotics and Cognitive Systems Lab',
            'Hands-on experience with industrial and humanoid robots',
            'Curriculum designed with global AI research institutes',
            'Focus on autonomous systems and generative AI',
            'Support for startups in robotics and automation',
            'Regular participation in international robotics competitions'
        ],
        specializations: ['Cognitive Robotics', 'Autonomous Vehicles', 'Industrial Automation', 'Surgical Robotics', 'AI for IoT'],
        skills: ['Robot Programming (ROS/C++)', 'Deep Learning Frameworks', 'Control System Design', 'Sensor Fusion Techniques', '3D Design & Simulation', 'Natural Language Interface'],
        career_paths: [
            { role: 'Robotics Engineer', company: 'Automotive & Space Agencies', salary: '12-25 LPA' },
            { role: 'AI Research Scientist', company: 'Global Tech Labs', salary: '15-35 LPA' },
            { role: 'Automation Specialist', company: 'Large Scale Manufacturing', salary: '10-20 LPA' },
            { role: 'Autonomous Systems Architect', company: 'Tech Innovation Firms', salary: '14-30 LPA' }
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
                            <div className="text-lg font-bold">98%</div>
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
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Interdisciplinary Focus</h2>
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
                            Core Technical Skills
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

export default RoboticsAIProgramDetail;
