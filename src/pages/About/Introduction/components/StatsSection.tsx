import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Building2 } from "lucide-react";

const stats = [
    { icon: <Award className="w-6 h-6" />, label: "Legacy", value: "105+", detail: "Years of Excellence" },
    { icon: <Building2 className="w-6 h-6" />, label: "Reach", value: "15+", detail: "Institutions" },
    { icon: <Users className="w-6 h-6" />, label: "Community", value: "6,000+", detail: "Active Students" },
    { icon: <GraduationCap className="w-6 h-6" />, label: "Impact", value: "45,000+", detail: "Global Alumni" }
];

const StatsSection = () => {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 text-center hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-900">
                            {stat.icon}
                        </div>
                        <div className="text-3xl font-black text-blue-900 mb-1">{stat.value}</div>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-xs text-gray-500 font-medium">{stat.detail}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
