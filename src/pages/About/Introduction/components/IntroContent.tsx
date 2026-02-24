const IntroContent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px border-r-2 border-dashed border-blue-200 transform -translate-x-1/2"></div>

            {/* Left Column */}
            <div className="px-4 md:px-6 lg:pr-12 lg:pl-6 text-gray-700 leading-relaxed text-lg text-justify lg:text-left flex flex-col gap-6">
                <p className="mb-0">
                    Anjuman Hami-e-Muslimeen, Bhatkal, stands as a beacon of educational excellence and
                    social reform, rooted in a vision to uplift communities through knowledge,
                    values, and service. Established with the noble aim of
                    empowering society through inclusive education,
                    Anjuman has played a pivotal role in shaping generations of responsible citizens.
                </p>
                <div className="block lg:hidden w-3/4 mx-auto border-t-2 border-dashed border-blue-200 my-2"></div>

                <p className="mb-0">
                    Over the decades, Anjuman expanded its educational mission by establishing
                    institutions across multiple disciplines—ranging from
                    primary and secondary education to higher education, professional studies,
                    and research—responding to the evolving needs of the nation.
                </p>
                <div className="block lg:hidden w-3/4 mx-auto border-t-2 border-dashed border-blue-200 my-2"></div>
            </div>

            {/* Right Column */}
            <div className="px-4 md:px-6 lg:pl-12 lg:pr-6 text-gray-700 leading-relaxed text-lg text-justify lg:text-left flex flex-col gap-6 mt-0 lg:mt-0">
                <p className="mb-0">
                    With a strong foundation in ethics, cultural harmony, and academic rigor,
                    Anjuman embraced modernization by integrating contemporary
                    curricula, digital learning, and global best practices
                    while preserving its core values..
                </p>
                <div className="block lg:hidden w-3/4 mx-auto border-t-2 border-dashed border-blue-200 my-2"></div>

                <p className="mb-0">
                    Today, Anjuman Hami-e-Muslimeen, Bhatkal, is more than an educational trust—it
                    is a movement committed to nation-building, community development,
                    and lifelong learning. Within its vibrant campuses, education is not
                    just about careers, but about character, contribution,
                    and creating lasting impact on society.
                </p>
            </div>
        </div>
    );
};

export default IntroContent;
