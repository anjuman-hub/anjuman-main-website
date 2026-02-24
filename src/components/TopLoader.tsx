import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TopLoader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) return prev;
                return prev + 10;
            });
        }, 100);

        return () => {
            clearInterval(timer);
            setProgress(100);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 h-1 bg-blue-600 z-[110]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
        />
    );
};

export default TopLoader;
