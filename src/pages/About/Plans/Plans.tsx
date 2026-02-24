import { Download } from "lucide-react";
import PlansList from "./components/PlansList";

const Plans = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-blue-900 mb-4">
                        Short- & Long-Term Plans
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        With the active role of IQAC, the following highlights of implementation of short- and long-term plans were achieved during the last five years.
                    </p>
                </div>

                {/* PDF Button */}
                <div className="flex justify-center mb-12">
                    <a
                        href="/pdf/plans.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
                    >
                        <Download className="w-5 h-5 mr-2" /> View PDF
                    </a>
                </div>

                {/* Plans Sections */}
                <PlansList />
            </div>
        </div>
    );
};

export default Plans;
