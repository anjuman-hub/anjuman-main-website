import { Educationphilosophy as EducationphilosophyData } from '../constants/visionMissionData';

const Educationphilosophy = () => {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Educational Philosophy</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{EducationphilosophyData[0]}</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{EducationphilosophyData[1]}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{EducationphilosophyData[2]}</p>
            </div>
        </div>
    )
}
export default Educationphilosophy;