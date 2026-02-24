import { useState } from 'react';
import { Link } from 'react-router-dom';
import { allEvents, EventType } from '../constants/eventsData';
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const EventList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedStatus, setSelectedStatus] = useState<string>('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(allEvents.map(event => event.category)))];

    // Filter events
    const filteredEvents = allEvents.filter(event => {
        const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
        const statusMatch = selectedStatus === 'All' || event.status === selectedStatus;
        return categoryMatch && statusMatch;
    });

    // Sort events: upcoming first, then by date (newest first)
    const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (a.status === 'upcoming' && b.status === 'past') return -1;
        if (a.status === 'past' && b.status === 'upcoming') return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="bg-white min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-900 mb-4">
                        Events & Happenings
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our latest programs, celebrations, and activities at Anjuman
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 space-y-4">
                    {/* Status Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setSelectedStatus('All')}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${selectedStatus === 'All'
                                ? 'bg-yellow-500 text-blue-900'
                                : 'bg-white text-blue-900 border border-blue-900 hover:bg-yellow-50'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectedStatus('upcoming')}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${selectedStatus === 'upcoming'
                                ? 'bg-yellow-500 text-blue-900'
                                : 'bg-white text-blue-900 border border-blue-900 hover:bg-yellow-50'
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setSelectedStatus('past')}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${selectedStatus === 'past'
                                ? 'bg-yellow-500 text-blue-900'
                                : 'bg-white text-blue-900 border border-blue-900 hover:bg-yellow-50'
                                }`}
                        >
                            Past Events
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${selectedCategory === category
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid */}
                {sortedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No events found matching your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Event Card Component
const EventCard = ({ event }: { event: EventType }) => {
    return (
        <Link
            to={`/happenings/event/${event.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={event.heroImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute top-4 left-4">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'upcoming'
                            ? 'bg-yellow-500 text-blue-900'
                            : 'bg-gray-700 text-white'
                            }`}
                    >
                        {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                    </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                    <div className="text-blue-900 font-bold text-lg">{event.day}</div>
                    <div className="text-blue-900 text-xs font-semibold">{event.month}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3">
                    <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                        {event.category}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-900" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-900" />
                        <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-900" />
                        <span>{event.attendees}</span>
                    </div>
                </div>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-blue-900 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                        View Details
                    </span>
                    <ArrowRight className="h-4 w-4 text-blue-900 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default EventList;
