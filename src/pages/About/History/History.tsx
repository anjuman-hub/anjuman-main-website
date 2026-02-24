import VisionariesCarousel from './components/VisionariesCarousel';
import { EarlySteps, Inception, Milestones, TodaySection, JoinLegacy } from './components/HistorySections';
import { visionaries } from './constants/historyData';

const History = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Space */}
            <div className="pt-24 relative">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/50 rounded-br-full -z-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-full -z-10"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Main Title Section */}
                <div className="text-center mt-8 md:mt-12 mb-16 px-4">
                    <h1 className="text-3xl font-bold text-blue-900 mb-8">
                        Our History: A Journey of Purpose
                    </h1>

                    <div className="mx-auto px-6 py-10 bg-blue-50/30 rounded-3xl relative overflow-hidden group shadow-sm border border-blue-100">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-900 overflow-hidden">
                            <div className="w-full h-full animate-pulse bg-blue-700"></div>
                        </div>
                        <blockquote className="text-gray-700 text-lg md:text-xl italic leading-relaxed px-4">
                            "The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night."
                            <footer className="mt-6 text-blue-900 font-bold hidden sm:block not-italic">
                                — H. W. Longfellow
                            </footer>
                        </blockquote>
                    </div>
                </div>

                {/* Intro Para Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-24 relative px-4">
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px border-r-2 border-dashed border-blue-200 transform -translate-x-1/2"></div>
                    <div className="px-6 lg:pr-16 lg:pl-0 text-gray-700 leading-relaxed text-lg text-justify lg:text-left flex flex-col gap-6">
                        <p className="mb-0">
                            There are many who read such words and admire them, but only a few who truly live by them. The vision to uplift society through the transformative power of education was conceived by such individuals—quietly, humbly, and with unwavering resolve.
                        </p>
                        <div className="block lg:hidden w-3/4 mx-auto border-t-2 border-dashed border-blue-200 my-4"></div>
                    </div>
                    <div className="px-6 lg:pl-16 lg:pr-0 text-gray-700 leading-relaxed text-lg text-justify lg:text-left flex flex-col gap-6">
                        <p className="mb-0">
                            Long before private education became widespread, this dream took shape with a deep sense of purpose, service, and responsibility toward the community. It was a commitment born out of a desire for social progress.
                        </p>
                    </div>
                </div>

                {/* The Visionaries */}
                <div className="mb-24 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">The Visionaries</h2>
                        <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Founding Minds Behind the Mission</p>
                    </div>

                    <VisionariesCarousel visionaries={visionaries} />

                    <div className="mx-auto bg-gray-50 p-8 md:p-10 rounded-[2rem] text-center border-l-8 border-yellow-500 shadow-sm">
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic text-justify sm:text-center">
                            "These visionaries believed that education was the strongest instrument for social progress. With foresight and courage, they laid the foundation for an institution that would grow far beyond their time, guided by values of sincerity, inclusiveness, and excellence."
                        </p>
                    </div>
                </div>

                {/* Early Steps */}
                <EarlySteps />

                {/* Inception of Anjuman */}
                <Inception />
            </div>

            {/* Celebrating Milestones */}
            <Milestones />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* What We Are Today */}
                <TodaySection />

                {/* Join the Legacy CTA */}
                <JoinLegacy />
            </div>
        </div >
    );
};

export default History;
