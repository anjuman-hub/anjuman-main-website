import { motion } from "framer-motion";

const images = [
    "/images/gallery-optimized/AMT_5353.webp",
    "/images/gallery-optimized/AMT_5488.webp",
    "/images/gallery-optimized/AMT_5518.webp",
    "/images/gallery-optimized/AMT_5543.webp",
    "/images/gallery-optimized/AMT_5549.webp",
    "/images/gallery-optimized/DSC_5624.webp",
    "/images/gallery-optimized/DSC_5646.webp",
    "/images/gallery-optimized/DSC_5694.webp",
    "/images/gallery-optimized/centenary-1.webp",
    "/images/gallery-optimized/annualday.webp"
];

const ImageSlider = () => {
    return (
        <div className="relative overflow-hidden mb-12 py-4 md:py-8">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex gap-4 md:gap-6 min-w-max px-4"
                animate={{
                    x: [0, -1500],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                }}
                style={{ x: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative group"
                    >
                        <img
                            src={src}
                            alt={`Campus Life ${index}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ImageSlider;
