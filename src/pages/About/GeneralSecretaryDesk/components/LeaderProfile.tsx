import { Quote } from 'lucide-react';

interface LeaderProfileProps {
    name: string;
    role: string;
    image: string;
    experience: string;
    phone: string;
    email: string;
    quote: string;
}

const LeaderProfile = ({ name, role, image, experience, phone, email, quote }: LeaderProfileProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Photo & Basic Info */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={image}
                        alt={`${name} - ${role}`}
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">{name}</h2>
                        <p className="text-yellow-600 font-semibold mb-4">{role}</p>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><span className="font-semibold">Experience:</span> {experience}</p>
                            <p><span className="font-semibold">Phone:</span> {phone}</p>
                            <p><span className="font-semibold">Email:</span> {email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote/Message Box */}
            <div className="lg:col-span-2">
                <div className="bg-blue-900 text-white rounded-lg p-8 h-full flex flex-col justify-center">
                    <Quote className="h-12 w-12 text-yellow-500 mb-6" />
                    <blockquote className="text-lg leading-relaxed mb-6 italic">
                        "{quote}"
                    </blockquote>
                    <p className="text-yellow-400 font-semibold">- {name}</p>
                </div>
            </div>
        </div>
    );
};

export default LeaderProfile;
