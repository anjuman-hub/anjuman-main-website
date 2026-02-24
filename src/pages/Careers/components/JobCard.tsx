import { MapPin, Briefcase, GraduationCap, Clock } from 'lucide-react';
import { generateApplyNowEmail } from '../utils/emailUtils';

interface JobCardProps {
    job: {
        id: number;
        title: string;
        department: string;
        type: string;
        location: string;
        experience: string;
        qualification: string;
        postedDate: string;
        description: string;
    }
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                                {job.department}
                            </span>
                            <span className="bg-yellow-500 text-blue-900 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                                {job.type}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
                <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 text-sm">
                        <MapPin className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-gray-500 font-medium">Location:</span>
                            <span className="text-gray-700 ml-2">{job.location}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <Briefcase className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-gray-500 font-medium">Experience:</span>
                            <span className="text-gray-700 ml-2">{job.experience}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <GraduationCap className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-gray-500 font-medium">Qualification:</span>
                            <span className="text-gray-700 ml-2">{job.qualification}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <Clock className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="text-gray-500 font-medium">Posted:</span>
                            <span className="text-gray-700 ml-2">
                                {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-5">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {job.description}
                    </p>
                </div>

                <a
                    href={generateApplyNowEmail(job.title)}
                    className="block w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                >
                    Apply Now
                </a>
            </div>
        </div>
    );
};

export default JobCard;
