import { useParams, Link } from 'react-router-dom';
import { allEvents } from '../constants/eventsData';
import { Calendar, Clock, MapPin, Users, ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventDetails = () => {
    const { id } = useParams<{ id: string }>();
    const event = allEvents.find(e => e.id === parseInt(id || '0'));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Prevent scroll when lightbox is open
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLightboxOpen]);

    if (!event) {
        return (
            <div className="bg-white min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-blue-900 mb-4">Event Not Found</h1>
                    <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
                    <Link
                        to="/happenings"
                        className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    // Get all images (hero + gallery)
    const allImages = event.galleryImages
        ? [event.heroImage, ...event.galleryImages]
        : [event.heroImage];

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    // Find related events (same category, excluding current)
    const relatedEvents = allEvents
        .filter(e => e.id !== event.id && e.category === event.category)
        .slice(0, 3);

    return (
        <div className="bg-white min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Back Button */}
                <Link
                    to="/happenings"
                    className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 mb-6 transition-colors break-words"
                >
                    <ArrowLeft className="h-5 w-5 flex-shrink-0" />
                    <span className="font-semibold whitespace-nowrap">Back to Events</span>
                </Link>

                {/* Hero Section */}
                <div className="mb-8">
                    <div
                        className="relative h-64 sm:h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <img
                            src={allImages[currentImageIndex]}
                            alt={event.title}
                            className="w-full h-full object-cover relative z-10"
                        />

                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors cursor-zoom-in z-20"></div>

                        <div className="absolute top-4 right-4 z-30">
                            <button className="bg-white/90 p-2 rounded-full text-blue-900 shadow-lg hover:bg-white transition-all">
                                <Maximize2 className="h-5 w-5" />
                            </button>
                        </div>

                        {allImages.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-colors z-30 opacity-0 group-hover:opacity-100"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow-lg transition-colors z-30 opacity-0 group-hover:opacity-100"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                                    {allImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                                            className={`h-1.5 rounded-full transition-all ${index === currentImageIndex
                                                ? 'w-8 bg-white'
                                                : 'w-2 bg-white/50 hover:bg-white/75'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="absolute top-4 left-4 z-30">
                            <span
                                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${event.status === 'upcoming'
                                    ? 'bg-yellow-500 text-blue-900'
                                    : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
                                    }`}
                            >
                                {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Event Info */}
                <div className={`grid grid-cols-1 ${event.status === 'upcoming' ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 mb-12`}>
                    {/* Main Content */}
                    <div className={event.status === 'upcoming' ? 'lg:col-span-2' : 'lg:col-span-1'}>
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-px w-8 bg-yellow-500"></span>
                                <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
                                    {event.category}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-black text-blue-900 mt-2 mb-4 leading-tight">
                                {event.title}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wide mb-8">
                                <Calendar className="h-4 w-4 text-yellow-600" />
                                <span>
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        {event.description && (
                            <div className="prose prose-blue max-w-none mb-12">
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                                    {event.description}
                                </div>
                            </div>
                        )}

                        {/* Gallery Thumbnails */}
                        {allImages.length > 1 && (
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-blue-900">Event Gallery</h3>
                                    <div className="h-px flex-1 bg-gray-100"></div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {allImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentImageIndex(index);
                                                setIsLightboxOpen(true);
                                            }}
                                            className={`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex
                                                ? 'border-blue-600 ring-4 ring-blue-50'
                                                : 'border-transparent hover:border-blue-400'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${event.title} - Image ${index + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors"></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Only for Upcoming Events */}
                    {event.status === 'upcoming' && (
                        <div className="lg:col-span-1">
                            <div className="bg-blue-50/50 rounded-3xl p-8 sticky top-32 border border-blue-100">
                                <h2 className="text-xl font-bold text-blue-900 mb-8 pb-4 border-b border-blue-100">Event Details</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <Calendar className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Date</div>
                                            <div className="text-gray-900 font-semibold">
                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Time</div>
                                            <div className="text-gray-900 font-semibold">{event.time}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Venue</div>
                                            <div className="text-gray-900 font-semibold">{event.venue}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                            <Users className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Impact</div>
                                            <div className="text-gray-900 font-semibold">{event.attendees}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Related Events */}
                {relatedEvents.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-blue-900">Related Happenings</h2>
                            <Link to="/happenings" className="text-blue-600 font-bold text-sm hover:underline">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedEvents.map((relatedEvent) => (
                                <Link
                                    key={relatedEvent.id}
                                    to={`/happenings/event/${relatedEvent.id}`}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={relatedEvent.heroImage}
                                            alt={relatedEvent.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl px-3 py-2 text-center min-w-[50px]">
                                            <div className="text-blue-900 font-black text-lg leading-none">{relatedEvent.day}</div>
                                            <div className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">{relatedEvent.month}</div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.2em] mb-3">
                                            {relatedEvent.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {relatedEvent.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[1001]"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors z-[1001]"
                    >
                        <ChevronLeft className="h-10 w-10" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors z-[1001]"
                    >
                        <ChevronRight className="h-10 w-10" />
                    </button>

                    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-12">
                        <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                            <img
                                src={allImages[currentImageIndex]}
                                alt={event.title}
                                className="max-h-full max-w-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        {allImages.length > 1 && (
                            <div className="mt-6 flex gap-3 overflow-x-auto pb-4 max-w-full px-4 scrollbar-hide">
                                {allImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/20' : 'border-white/10 opacity-80 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
