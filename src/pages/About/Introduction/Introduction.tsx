import ImageSlider from './components/ImageSlider';
import IntroContent from './components/IntroContent';
import StatsSection from './components/StatsSection';

const Introduction = () => {
    return (
        <>
            <div className="pt-24">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/50 rounded-br-full -z-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-full -z-10"></div>
            </div>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Main Title Section */}
                <div className="text-center mt-8 md:mt-12 mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-3xl font-bold text-blue-900 mb-6">
                        A Legacy of Education, Faith, and Nation-Building
                    </h1>
                </div>

                {/* Images Slider */}
                <ImageSlider />

                {/* Two Column Content */}
                <IntroContent />

                {/* Stats Section */}
                <StatsSection />
            </div>
        </>
    );
};

export default Introduction;
