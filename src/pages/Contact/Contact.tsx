import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import ReachUs from './components/ReachUs';

const Contact = () => {
    return (
        <div className="pt-24 pb-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with us for any inquiries, admissions, or support. We're here to help you.
                    </p>
                </div>

                {/* Contact Information Cards */}
                <ContactInfo />

                {/* Contact Form and Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <ContactForm />
                    <LocationMap />
                </div>

                {/* Directions / How to Reach Us */}
                <ReachUs />
            </div>
        </div>
    );
};

export default Contact;
