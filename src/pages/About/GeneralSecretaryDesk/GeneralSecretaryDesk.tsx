import LeaderProfile from './components/LeaderProfile';

const GeneralSecretaryDesk = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">General Secretary's Desk</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A message from our General Secretary about the mission and dedicated efforts towards educational excellence at Anjuman Hami-e-Muslimeen.
                    </p>
                </div>

                {/* General Secretary's Profile & Quote */}
                <div className="max-w-6xl mx-auto">
                    <LeaderProfile
                        name="Janab Ishaque Shabandri"
                        role="General Secretary"
                        image="/images/Ishaq_shabandri.avif"
                        experience="Dedicated leadership in administrative excellence"
                        phone="+91 99169 32224 | 08385-226283"
                        email="anjuman@anjuman.edu.in"
                        quote="Our mission is to create an environment where every student has the opportunity to excel. Administrative efficiency and academic rigor go hand in hand at Anjuman to ensure the best possible outcomes for our community."
                    />

                    {/* Detailed Message */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Message from the General Secretary</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify lg:text-left">
                            <p className="mb-6">Dear Students, Parents, and Members of the Anjuman Family,</p>
                            <p className="mb-6">
                                It is an honor to serve as the General Secretary of this prestigious institution.
                                At Anjuman, we take pride in our rich heritage and our forward-looking approach to education.
                                My office is dedicated to ensuring that the vision of our founders is realized in every
                                aspect of our operations.
                            </p>
                            <p className="mb-6">
                                We believe that a strong administrative foundation is crucial for academic success.
                                We are constantly working to improve our infrastructure, streamline processes,
                                and provide the best possible support to our faculty and students. Our goal is
                                transparency, efficiency, and excellence in all we do.
                            </p>
                            <p className="mb-6">
                                The success of our students is the true measure of our achievements. We are
                                heartened to see our graduates making significant contributions in various
                                fields across the globe. We remain committed to providing them with the tools and
                                environment they need to thrive.
                            </p>
                            <p className="mb-6">
                                I invite you to be an active part of our journey as we continue to reach new
                                milestones in education and social contribution.
                            </p>
                            <div className="mt-8 text-right">
                                <p className="font-semibold">Best regards,</p>
                                <p className="text-blue-900 font-bold text-lg mt-2">Janab Ishaque Shabandri</p>
                                <p className="text-gray-600">General Secretary, Anjuman</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements and Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Administrative Vision</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Efficient resource management for institutional growth</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Strengthening community and alumni relations</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Ensuring transparent and student-centric administration</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Recent Initiatives</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Digital transformation of administrative processes</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Upgrade of campus facilities and laboratories</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Enhanced support systems for student welfare</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralSecretaryDesk;
