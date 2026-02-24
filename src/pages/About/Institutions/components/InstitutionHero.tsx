const InstitutionHero = () => {
    return (
        <section className="relative bg-blue-900 py-12 sm:py-20 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <img
                    src="/images/institutions/aitm.avif"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                    Our Institutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
                    A diverse network of educational centers committed to excellence, from primary schooling to advanced professional degrees.
                </p>
            </div>
        </section>
    );
};

export default InstitutionHero;
