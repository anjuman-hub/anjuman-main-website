import { Download } from "lucide-react";
import CollapsibleSection from "./components/CollapsibleSection";
import { byeLawsContent } from "./constants/byelawsData";

const CollegeByeLaws = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-blue-900 mb-4">College Bye-Laws</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Complete rules, regulations, and policies of Anjuman Arts, Science & Commerce College, Bhatkal.
                    </p>
                </div>

                {/* PDF Button */}
                <div className="flex justify-center mb-12">
                    <a
                        href="/pdf/college-bye-laws.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
                    >
                        <Download className="w-5 h-5 mr-2" /> View PDF
                    </a>
                </div>

                {/* Bye-Laws Content */}
                <div className="grid grid-cols-1 gap-6">
                    {byeLawsContent.map((section, idx) => (
                        <CollapsibleSection key={idx} section={section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegeByeLaws;
