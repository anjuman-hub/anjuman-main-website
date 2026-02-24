import { Eye, Target } from 'lucide-react';

const VisionBox = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                    <div className="bg-yellow-500 p-3 rounded-full mr-4">
                        <Eye className="h-8 w-8 text-blue-900" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-blue-100">
                    To be a premier educational institution that empowers students with knowledge, skills,
                    and values to become global citizens who contribute meaningfully to society and lead
                    positive change in their communities and beyond.
                </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-blue-900 rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                        <Target className="h-8 w-8 text-yellow-500" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-blue-800">
                    To provide quality education through innovative teaching methods, foster research and
                    critical thinking, promote cultural diversity and inclusivity, and develop ethical
                    leaders who are equipped to address the challenges of the 21st century.
                </p>
            </div>
        </div>
    );
};

export default VisionBox;
