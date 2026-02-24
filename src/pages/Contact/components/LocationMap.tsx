const LocationMap = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[450px] lg:h-full min-h-[450px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.96246024814496!2d74.55423549741043!3d13.994318164276269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc43c0412e3e9b%3A0xcb4f2ffcf3521e9e!2sAnjuman%20Hami-e-Muslimeen!5e0!3m2!1sen!2sin!4v1768466134737!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anjuman Location"
            ></iframe>
        </div>
    );
};

export default LocationMap;
