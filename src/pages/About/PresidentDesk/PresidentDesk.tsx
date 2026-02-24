import LeaderProfile from './components/LeaderProfile';

const PresidentDesk = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">President's Desk</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A message from our President about the vision, values, and commitment to excellence at Anjuman Hami-e-Muslimeen.
                    </p>
                </div>

                {/* President's Profile & Quote */}
                <div className="max-w-6xl mx-auto">
                    <LeaderProfile
                        name="Janab Yunus Kazia"
                        role="President"
                        image="/images/yunus-Kazia.avif"
                        experience="Decades of leadership and institutional growth"
                        phone="+91 99169 32224 | 08385-226283"
                        email="anjuman@anjuman.edu.in"
                        quote="Education is not just about imparting knowledge; it's about igniting minds, fostering creativity, and building character. At Anjuman, we are committed to nurturing not just successful professionals, but responsible citizens who will contribute meaningfully to society."
                    />

                    {/* Detailed Message */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Message from the President</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify lg:text-left">
                            <p className="mb-6">Dear Students, Faculty, and Well-wishers,</p>
                            <p className="mb-6">
                                It gives me immense pleasure to welcome you to Anjuman, an institution that has been
                                at the forefront of quality education for over six decades. Our journey, which began in 1962,
                                has been marked by continuous growth, innovation, and unwavering commitment to academic excellence.
                            </p>
                            <p className="mb-6">
                                In today's rapidly evolving world, education must go beyond traditional boundaries. At Anjuman,
                                we believe in holistic development that encompasses not only academic prowess but also critical thinking,
                                ethical values, and social responsibility. Our curriculum is designed to meet contemporary challenges
                                while preserving the timeless values that form the foundation of good character.
                            </p>
                            <p className="mb-6">
                                Our distinguished faculty members are not just teachers but mentors, guides, and inspirers. They bring
                                years of experience, research expertise, and genuine care for student development. Together, we create
                                an environment where students can explore their potential, pursue their passions, and prepare for
                                meaningful careers.
                            </p>
                            <p className="mb-6">
                                The diversity of our student body is one of our greatest strengths. Students from various cultural,
                                economic, and geographical backgrounds come together to create a vibrant learning community. This
                                diversity enriches the educational experience and prepares our students for success in an
                                interconnected global society.
                            </p>
                            <p className="mb-6">
                                As we look toward the future, we remain committed to innovation in education. We continuously update
                                our teaching methodologies, incorporate technology meaningfully, and create opportunities for
                                experiential learning. Our goal is to ensure that every graduate leaves our institution with the
                                knowledge, skills, and confidence to make a positive impact in their chosen field.
                            </p>
                            <p className="mb-6">
                                I encourage all our students to make the most of their time at Anjuman. Engage actively in
                                classroom discussions, participate in co-curricular activities, build meaningful relationships with
                                peers and faculty, and never hesitate to seek guidance when needed. Remember, education is a
                                collaborative journey, and we are here to support you every step of the way.
                            </p>
                            <p className="mb-6">
                                To our faculty and staff, I express my gratitude for their dedication and professionalism. To our
                                alumni, thank you for being our ambassadors and for your continued support. To the parents and
                                guardians, we value your trust and partnership in shaping young minds.
                            </p>
                            <p>
                                Together, let us continue building on the legacy of excellence that defines Anjuman.
                                I wish you all success in your endeavors and look forward to celebrating your achievements.
                            </p>
                            <div className="mt-8 text-right">
                                <p className="font-semibold">Warm regards,</p>
                                <p className="text-blue-900 font-bold text-lg mt-2">Janab Yunus Kazia</p>
                                <p className="text-gray-600">President, Anjuman</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements and Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">President's Vision</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Empower the community through accessible, high-quality education across all levels from primary to professional.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Integrate modern scientific knowledge with strong ethical and moral foundations in our curriculum.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Develop Anjumanabad into a premier educational destination with state-of-the-art infrastructure for the 21st century.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Foster a culture of research, innovation, and global collaboration across all institutions.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Achievements</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Successful administration and growth of over 15+ educational institutions under the Anjuman umbrella.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Significant expansion of the Anjumanabad campus with new modern academic and residential blocks.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Establishment of robust scholarship programs supporting thousands of underprivileged students annually.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Introduction of industry-aligned digital learning tools and smart-classes across secondary schools.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresidentDesk;
