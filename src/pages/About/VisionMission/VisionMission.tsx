import VisionBox from './components/VisionBox';
import ValuesGrid from './components/ValuesGrid';
import StrategicObjectives from './components/StrategicObjectives';
import Educationphilosophy from './components/Educationphilosophy';

const VisionMission = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-blue-900 mt-8 mb-6">Vision & Mission</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our guiding principles that shape everything we do at Anjuman
                    </p>
                </div>

                {/* Vision & Mission Sections */}
                <VisionBox />

                {/* Core Values */}
                <ValuesGrid />

                {/* Strategic Objectives */}
                <StrategicObjectives />

                {/* Educational Philosophy */}
                <Educationphilosophy />

                {/* Call to Action */}
                <div className="bg-blue-900 rounded-lg p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                    <p className="text-xl text-blue-200 mb-6">
                        Be part of our journey to create a better tomorrow through quality education
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <a
                            href="/academics/how-to-apply"
                            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Apply Now
                        </a>
                        <a
                            href="/about/contact"
                            className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-blue-900 text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
