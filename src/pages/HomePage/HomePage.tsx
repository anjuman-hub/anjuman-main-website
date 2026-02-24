import HeroSection from './components/HeroSection';
import WhatsAppButton from '../../components/WhatsAppButton';
import Intro from './components/Intro';
import HappeningsSection from './components/HappeningsSection';
import GallerySection from './components/GallerySection';
import BannerSection from './components/BannerSection';
import TestimonialsSection from './components/TestimonialsSection';
import Institutions from './components/Institutions';
import Courses from './components/Courses';
import { heroSlides, campusHighlights, testimonials } from './constants/homeData';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection slides={heroSlides} />
            <Intro />
            <Institutions />
            <Courses />
            <HappeningsSection />
            <BannerSection />
            <GallerySection campusHighlights={campusHighlights} />
            <TestimonialsSection testimonials={testimonials} />
            <WhatsAppButton />
        </div>
    );
};

export default HomePage;
