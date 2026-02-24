import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ByeLawSection } from "../constants/byelawsData";

const CollapsibleSection = ({ section }: { section: ByeLawSection }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h2 className="text-xl font-bold text-blue-900">{section.title}</h2>
                {open ? <ChevronUp /> : <ChevronDown />}
            </div>
            {open && (
                <div className="mt-4">
                    {section.points && (
                        <ul className="space-y-2 text-gray-700 list-decimal list-inside">
                            {section.points.map((p: string, idx: number) => (
                                <li key={idx}>{p}</li>
                            ))}
                        </ul>
                    )}
                    {section.subSections &&
                        section.subSections.map((sub: ByeLawSection, idx: number) => (
                            <div key={idx} className="mt-4 ml-4">
                                <CollapsibleSection section={sub} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default CollapsibleSection;
