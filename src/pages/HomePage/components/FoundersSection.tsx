import React from 'react';

const FoundersSection = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = React.useState(false);

    // const founders_old = [
    //     {
    //         name: 'Suresh Prabhu',
    //         role: 'Founding Chancellor',
    //         image: '/images/Ishaq_shabandri.jpg',
    //         logo: 'CA'
    //     },
    //     {
    //         name: 'Ishaq Shabandri',
    //         role: 'General Secretary',
    //         image: '/images/Ishaq_shabandri.png',
    //         objectPosition: "right center",
    //         logo: 'ISB'
    //     },
    //     {
    //         name: 'Shobhit Mathur',
    //         role: 'Co-Founder & Vice Chancellor',
    //         image: '/images/avatar.png',
    //         logo: 'ISB'
    //     },
    //     {
    //         name: 'Sahil Aggarwal',
    //         role: 'Co-Founder & CEO',
    //         image: '/images/avatar.png',
    //         logo: 'Harvard'
    //     },
    //     {
    //         name: 'Ajay Gupta',
    //         role: 'Board of Founders',
    //         image: '/images/avatar.png',
    //         logo: 'Bachpan'
    //     }
    // ];
    const founders = [
        { name: "Yunus Kazia", role: "President", image: "/images/management/yunus-Kazia.jpg", objectPosition: "center" },
        { name: "Mohammed Sadique Pilloor", role: "Vice President I", image: "/images/management/sadique.jpg", objectPosition: "center 15%" },
        { name: "Dr. Mohammed Zubair Kola", role: "Vice President II", image: "/images/management/Zubair_kola.jpg", objectPosition: "center 10%" },
        { name: "Ishaque Shabandri", role: "General Secretary", image: "/images/management/Ishaq_shabandri.jpg", objectPosition: "right 45%" },
        { name: "Ismail Jukaku", role: "Additional General Secretary", image: "/images/management/Ismail_Jukaku.jpg", objectPosition: "center top" },
        { name: "Syed Ahmed Parvez S.M", role: "Finance Secretary", image: "/images/management/parvez.jpg", objectPosition: "center 50%" },
        { name: "Syed Hashim S J", role: "Secretary, Works Committee", image: "/images/management/hashim.jpg", objectPosition: "center 10%" },
        { name: "Ansar Damda Abu", role: "Secretary, IT, AITM BOARD", image: "/images/management/ansar-damdaabu.jpg", objectPosition: "center 50%" },
        { name: "Abdul Hameed Athar Ruknuddin", role: "Secretary, Deenyath Board", image: "/images/management/Athar.jpg", objectPosition: "center 20%" },
        { name: "Mohammed Aheed Mohtesham", role: "Secretary, AIMCA, ACE", image: "/images/management/Aheed_mohtesham.jpg", objectPosition: "center top" },
        { name: "Faiyaz Ahmed Kola", role: "Secretary, Degree & PU College Board", image: "/images/management/FAIYAZ.jpg", objectPosition: "center 50" },
        { name: "Sadullah Ruknuddin", role: "Secretary, High School Board", image: "/images/management/Sadullah.jpg", objectPosition: "center 25%" },
        { name: "Afaque Mohtesham", role: "Secretary, Primary School Board", image: "/images/management/Afaque-Mohtesham.jpg", objectPosition: "center 10%" },

    ];

    // Track active slide based on scroll position
    const updateActiveIndex = React.useCallback(() => {
        if (!scrollContainerRef.current || isAutoScrolling) return;

        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.querySelector('div')?.offsetWidth || 0;
        const gap = 24; // 6 * 4px (gap-6)
        const newIndex = Math.round(scrollPosition / (cardWidth + gap));

        setActiveIndex(Math.min(Math.max(0, newIndex), founders.length - 1));
    }, [founders.length, isAutoScrolling]);

    // Scroll to specific slide
    const scrollToSlide = (index: number) => {
        if (!scrollContainerRef.current) return;

        setIsAutoScrolling(true);
        const container = scrollContainerRef.current;
        const cardWidth = container.querySelector('div')?.offsetWidth || 0;
        const gap = 24;
        const targetScroll = index * (cardWidth + gap);

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });

        setActiveIndex(index);
        setTimeout(() => setIsAutoScrolling(false), 500);
    };

    // Enhanced mouse handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (scrollContainerRef.current) {
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
            scrollContainerRef.current.style.scrollSnapType = 'none';
        }
    };

    const handleMouseLeave = () => {
        if (isDragging && scrollContainerRef.current) {
            scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
        }
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.scrollSnapType = 'x mandatory';
        }
        setIsDragging(false);
        setTimeout(updateActiveIndex, 100);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2.5;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && activeIndex > 0) {
            scrollToSlide(activeIndex - 1);
        } else if (e.key === 'ArrowRight' && activeIndex < founders.length - 1) {
            scrollToSlide(activeIndex + 1);
        }
    };

    // Auto-scroll effect (optional - uncomment to enable)
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging && !isAutoScrolling) {
                const nextIndex = (activeIndex + 1) % founders.length;
                scrollToSlide(nextIndex);
            }
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(interval);
    }, [activeIndex, isDragging, isAutoScrolling, founders.length]);

    // Add scroll listener
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (!isDragging && !isAutoScrolling) {
                updateActiveIndex();
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isDragging, isAutoScrolling, updateActiveIndex]);

    return (
        <section className="py-20 bg-[#FFF8F0] overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl md:text-3xl font-bold text-center text-blue-900 mb-16">Meet Our Office Bearers</h2>

                <div className="relative group">
                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        role="region"
                        aria-label="Office bearers carousel"
                        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-4 -mx-4 scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} focus:outline-none`}
                    >
                        {founders.map((founder, index) => (
                            <div
                                key={index}
                                className="min-w-[200px] md:min-w-[280px] flex-shrink-0 snap-center bg-white rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[1rem] rounded-tr-[5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group/card"
                            >
                                <div className="bg-[#EADED5] h-48 md:h-60 flex items-end justify-center pt-4 md:pt-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10"></div>
                                    {/* Abstract Pattern Background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>

                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="h-full md:h-[250px] w-full object-contain transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out relative z-0 pointer-events-none"
                                        draggable="false"
                                    />
                                </div>
                                <div className="p-6 md:p-8 relative">
                                    {/* <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center shadow-lg transform group-hover/card:rotate-12 transition-transform duration-500 text-white font-bold text-xs ring-4 ring-white">
                                        {founder.logo}
                                    </div> */}
                                    <h3 className="line-clamp-2 text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover/card:text-blue-900 transition-colors">{founder.name}</h3>
                                    <p className="text-sm md:text-base text-gray-600 font-medium">{founder.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Progress Indicators */}
                    <div className="flex justify-center gap-3 mt-4" role="tablist" aria-label="Slide navigation">
                        {founders.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToSlide(idx)}
                                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeIndex === idx
                                    ? 'w-8 h-2 bg-blue-900'
                                    : 'w-2 h-2 bg-blue-300 hover:bg-blue-500'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                                aria-selected={activeIndex === idx}
                                role="tab"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
