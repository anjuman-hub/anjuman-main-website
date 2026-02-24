import { Download } from "lucide-react";
import PoliciesList from "./components/PoliciesList";

const Policies = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-4">
                        Rules & Regulations
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The college supports continuous professional development for faculty and students through various initiatives, training, and financial assistance.
                    </p>
                </div>

                {/* PDF Button */}
                <div className="flex justify-center mb-12">
                    <a
                        href="/pdf/professional-policies.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
                    >
                        <Download className="w-5 h-5 mr-2" /> View PDF
                    </a>
                </div>

                {/* Policies List */}
                <PoliciesList />
            </div>
        </div>
    );
};

export default Policies;
