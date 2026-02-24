import { officeBearers } from '../constants/managementData';

const OfficeBearersGrid = () => {
    return (
        <section className="py-24 bg-[#FBF7EF]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-[32px] font-semibold text-primary text-center mb-8 font-['Montserrat',sans-serif]">
                        Meet Our Office Bearers
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {officeBearers.map((bearer, index) => (
                        <div
                            key={index}
                            className="bearer-card relative h-[380px] rounded-[54px_8px] overflow-hidden group/card shadow-sm hover:shadow-2xl cursor-pointer border border-black/5 transition-shadow duration-300 ease-in-out"
                            style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgb(228, 213, 198) 100%)' }}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={bearer.image}
                                    alt={bearer.name}
                                    className="bearer-image w-full h-full object-cover transform group-hover/card:scale-110 z-0 will-change-transform transition-transform duration-700 ease-in-out"
                                    style={{
                                        objectPosition: bearer.objectPosition || 'center center',
                                        WebkitBackfaceVisibility: 'hidden',
                                        backfaceVisibility: 'hidden'
                                    }}
                                    draggable="false"
                                    loading="lazy"
                                />
                            </div>

                            <div
                                className="absolute inset-0 z-10"
                                style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 35%, rgb(0, 0, 0) 100%)' }}
                            ></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                <h3 className="text-white font-semibold text-xl leading-tight mb-1 font-['Montserrat',sans-serif] tracking-tight">
                                    {bearer.name}
                                </h3>
                                <p className="text-white/80 text-xs font-medium font-['Montserrat',sans-serif]">
                                    {bearer.role}
                                </p>
                            </div>

                            <div className="absolute inset-0 border border-black/5 rounded-[54px_8px] pointer-events-none z-30"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeBearersGrid;
