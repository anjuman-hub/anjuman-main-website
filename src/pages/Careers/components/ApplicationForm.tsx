import { Send } from 'lucide-react';
import { openPositions } from '../constants/careersData';

const ApplicationForm = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get('firstName') as string || '';
        const lastName = formData.get('lastName') as string || '';
        const email = formData.get('email') as string || '';
        const phone = formData.get('phone') as string || '';
        const positionId = formData.get('position') as string || '';
        const qualification = formData.get('qualification') as string || '';
        const experience = formData.get('experience') as string || '';
        const coverLetter = formData.get('coverLetter') as string || '';

        const selectedPosition = openPositions.find(p => p.id.toString() === positionId);
        const positionTitle = selectedPosition ? selectedPosition.title : 'Position';

        const subject = encodeURIComponent(`Job Application: ${positionTitle}`);
        const body = encodeURIComponent(
            `Dear Hiring Manager,

I am writing to apply for the position of ${positionTitle} at Anjuman Group of Institutions.

Personal Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}

Qualifications:
- Highest Qualification: ${qualification}
- Years of Experience: ${experience}

${coverLetter ? `Cover Letter:\n${coverLetter}\n\n` : ''}
I have attached my resume/CV for your review. I would welcome the opportunity to discuss my qualifications further.

Thank you for considering my application.

Best regards,
${firstName} ${lastName}`
        );

        const mailtoLink = `mailto:anjuman@anjuman.edu.in?cc=hr@anjuman.edu.in&subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">Apply for a Position</h2>
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Position Applied For *
                    </label>
                    <select
                        id="position"
                        name="position"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select a position</option>
                        {openPositions.map((pos) => (
                            <option key={pos.id} value={pos.id}>{pos.title}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                        Highest Qualification *
                    </label>
                    <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Ph.D., M.Tech, MBA, etc."
                        required
                    />
                </div>

                <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                    </label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Resume/CV *
                    </label>
                    <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                    </label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        placeholder="Tell us why you're interested in this position..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                    Submit Application
                    <Send className="ml-2 h-5 w-5" />
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
