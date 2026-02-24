import { useState, useMemo, useEffect } from 'react';
import { Clock, Users, Award, BookOpen, ArrowRight, Search, Filter, X, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Program {
  id: string;
  name: string;
  abbreviation: string;
  duration: string;
  seats: string;
  fees: string;
  feesNumeric: number;
  placementRate: string;
  placementNumeric: number;
  image: string;
  tagline: string;
  highlights: string[];
  route: string;
  category: 'schooling' | 'college' | 'undergraduate' | 'postgraduate' | 'engineering';
  field: 'business' | 'technology' | 'design' | 'science' | 'general' | 'engineering';
}

const ProgramsOffered = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const programs: Program[] = [
    // SCHOOLING (3)
    {
      id: 'kindergarten',
      name: 'Kindergarten',
      abbreviation: 'KG',
      duration: '2 Years',
      seats: '100',
      fees: '₹25,000',
      feesNumeric: 25000,
      placementRate: 'N/A',
      placementNumeric: 0,
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Building Strong Foundations for Young Minds',
      highlights: [
        'Play-based learning approach',
        'Experienced early childhood educators',
        'Safe and nurturing environment'
      ],
      route: '/academics/programs/kindergarten',
      category: 'schooling',
      field: 'general'
    },
    {
      id: 'primary',
      name: 'Primary Education (1-7)',
      abbreviation: 'Primary',
      duration: '7 Years',
      seats: '500',
      fees: '₹35,000',
      feesNumeric: 35000,
      placementRate: 'N/A',
      placementNumeric: 0,
      image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Nurturing Curiosity and Academic Excellence',
      highlights: [
        'Comprehensive curriculum',
        'Focus on core subjects and values',
        'Extracurricular activities'
      ],
      route: '/academics/programs/primary',
      category: 'schooling',
      field: 'general'
    },
    {
      id: 'highschool',
      name: 'High School (8-10)',
      abbreviation: 'High School',
      duration: '3 Years',
      seats: '400',
      fees: '₹45,000',
      feesNumeric: 45000,
      placementRate: 'N/A',
      placementNumeric: 0,
      image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Preparing Students for Higher Education',
      highlights: [
        'State board curriculum',
        'Career guidance and counseling',
        'Science and computer labs'
      ],
      route: '/academics/programs/highschool',
      category: 'schooling',
      field: 'general'
    },

    // COLLEGE - PU (1)
    {
      id: 'puc',
      name: 'Pre-University (I & II)',
      abbreviation: 'PUC',
      duration: '2 Years',
      seats: '600',
      fees: '₹55,000/yr',
      feesNumeric: 55000,
      placementRate: '95%',
      placementNumeric: 95,
      image: 'https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Your Gateway to Success',
      highlights: [
        'Science, Commerce, and Arts streams',
        'Board exam & competitive coaching',
        'Modern laboratories and library'
      ],
      route: '/academics/programs/puc1',
      category: 'college',
      field: 'general'
    },

    // UNDERGRADUATE (4)
    {
      id: 'bba',
      name: 'Bachelor of Business Administration',
      abbreviation: 'BBA',
      duration: '3 Years',
      seats: '120',
      fees: '₹2,50,000',
      feesNumeric: 250000,
      placementRate: '92%',
      placementNumeric: 92,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: "Empowering Tomorrow's Business Leaders",
      highlights: [
        'Industry-experienced faculty members',
        'Internship opportunities with top companies',
        'Live case studies and business simulations'
      ],
      route: '/academics/programs/bba',
      category: 'undergraduate',
      field: 'business'
    },
    {
      id: 'bca',
      name: 'Bachelor of Computer Applications',
      abbreviation: 'BCA',
      duration: '3 Years',
      seats: '100',
      fees: '₹2,75,000',
      feesNumeric: 275000,
      placementRate: '95%',
      placementNumeric: 95,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Shaping Future Tech Innovators',
      highlights: [
        'State-of-the-art computer labs',
        'Industry certifications: AWS, Google Cloud',
        'Hands-on training with real-world projects'
      ],
      route: '/academics/programs/bca',
      category: 'undergraduate',
      field: 'technology'
    },
    {
      id: 'ba',
      name: 'Bachelor of Arts',
      abbreviation: 'BA',
      duration: '3 Years',
      seats: '150',
      fees: '₹1,50,000',
      feesNumeric: 150000,
      placementRate: '80%',
      placementNumeric: 80,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Exploring Humanities and Social Sciences',
      highlights: [
        'Diverse subject combinations',
        'Research-oriented curriculum',
        'Cultural and literary activities'
      ],
      route: '/academics/programs/ba',
      category: 'undergraduate',
      field: 'general'
    },
    {
      id: 'bsc',
      name: 'Bachelor of Science',
      abbreviation: 'B.Sc',
      duration: '3 Years',
      seats: '120',
      fees: '₹1,80,000',
      feesNumeric: 180000,
      placementRate: '85%',
      placementNumeric: 85,
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Discovering the World of Science',
      highlights: [
        'Well-equipped laboratories',
        'Research opportunities',
        'Expert faculty in various disciplines'
      ],
      route: '/academics/programs/bsc',
      category: 'undergraduate',
      field: 'science'
    },
    {
      id: 'bcom',
      name: 'Bachelor of Commerce',
      abbreviation: 'B.Com',
      duration: '3 Years',
      seats: '150',
      fees: '₹1,60,000',
      feesNumeric: 160000,
      placementRate: '88%',
      placementNumeric: 88,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Building Future Commerce Professionals',
      highlights: [
        'Accounting and finance focus',
        'Industry internships',
        'Professional certification support'
      ],
      route: '/academics/programs/bcom',
      category: 'undergraduate',
      field: 'business'
    },

    // POSTGRADUATE (4)
    {
      id: 'mba',
      name: 'Master of Business Administration',
      abbreviation: 'MBA',
      duration: '2 Years',
      seats: '120',
      fees: '₹4,00,000',
      feesNumeric: 400000,
      placementRate: '95%',
      placementNumeric: 95,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Leading with Vision and Strategy',
      highlights: [
        'Global immersion and industry consulting',
        'Leadership and entrepreneurship focus',
        'Strong alumni network in Fortune 500'
      ],
      route: '/academics/programs/mba',
      category: 'postgraduate',
      field: 'business'
    },
    {
      id: 'mcom',
      name: 'Master of Commerce',
      abbreviation: 'M.Com',
      duration: '2 Years',
      seats: '60',
      fees: '₹1,80,000',
      feesNumeric: 180000,
      placementRate: '90%',
      placementNumeric: 90,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Advanced Commerce Education',
      highlights: [
        'Specialization in Accounting & Finance',
        'Research-oriented curriculum',
        'Industry collaboration projects'
      ],
      route: '/academics/programs/mcom',
      category: 'postgraduate',
      field: 'business'
    },
    {
      id: 'ma',
      name: 'Master of Arts',
      abbreviation: 'MA',
      duration: '2 Years',
      seats: '50',
      fees: '₹1,50,000',
      feesNumeric: 150000,
      placementRate: '85%',
      placementNumeric: 85,
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Deepening Knowledge in Arts and Humanities',
      highlights: [
        'Multiple specializations available',
        'Research and publication opportunities',
        'Seminars and conferences'
      ],
      route: '/academics/programs/ma',
      category: 'postgraduate',
      field: 'general'
    },
    {
      id: 'mca',
      name: 'Master of Computer Applications',
      abbreviation: 'MCA',
      duration: '2 Years',
      seats: '60',
      fees: '₹2,00,000',
      feesNumeric: 200000,
      placementRate: '95%',
      placementNumeric: 95,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Advancing Your Tech Career',
      highlights: [
        'Focus on software development',
        'Industry-aligned curriculum',
        'Strong placement support'
      ],
      route: '/academics/programs/mca',
      category: 'postgraduate',
      field: 'technology'
    },

    // ENGINEERING (8)
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      abbreviation: 'CSE',
      duration: '4 Years',
      seats: '120',
      fees: '₹3,50,000',
      feesNumeric: 350000,
      placementRate: '96%',
      placementNumeric: 96,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Engineering the Digital Future',
      highlights: [
        'Advanced programming and algorithms',
        'Software development projects',
        'Industry partnerships and internships'
      ],
      route: '/academics/programs/cse',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'mechanical',
      name: 'Mechanical Engineering',
      abbreviation: 'Mechanical',
      duration: '4 Years',
      seats: '90',
      fees: '₹3,25,000',
      feesNumeric: 325000,
      placementRate: '92%',
      placementNumeric: 92,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Designing the Machines of Tomorrow',
      highlights: [
        'CAD/CAM and manufacturing labs',
        'Robotics and automation projects',
        'Industry-standard workshops'
      ],
      route: '/academics/programs/mechanical',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      abbreviation: 'ECE',
      duration: '4 Years',
      seats: '90',
      fees: '₹3,25,000',
      feesNumeric: 325000,
      placementRate: '94%',
      placementNumeric: 94,
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Connecting the World Through Technology',
      highlights: [
        'VLSI and embedded systems labs',
        'Communication networks training',
        'IoT and wireless technology projects'
      ],
      route: '/academics/programs/ece',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'cse-ds',
      name: 'CSE - Data Science',
      abbreviation: 'CSE-DS',
      duration: '4 Years',
      seats: '60',
      fees: '₹3,75,000',
      feesNumeric: 375000,
      placementRate: '97%',
      placementNumeric: 97,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Unlock Insights from Big Data',
      highlights: [
        'Machine Learning & Big Data Labs',
        'Python & R specialized training',
        'Industry certifications in Data Analytics'
      ],
      route: '/academics/programs/cse-ds',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'robotics-ai',
      name: 'Robotics & Artificial Intelligence',
      abbreviation: 'Robotics & AI',
      duration: '4 Years',
      seats: '60',
      fees: '₹4,00,000',
      feesNumeric: 400000,
      placementRate: '98%',
      placementNumeric: 98,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Building Intelligent Machines',
      highlights: [
        'Advanced robotics laboratories',
        'AI and machine learning focus',
        'Autonomous systems projects'
      ],
      route: '/academics/programs/robotics-ai',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'aiml',
      name: 'Artificial Intelligence & Machine Learning',
      abbreviation: 'AIML',
      duration: '4 Years',
      seats: '60',
      fees: '₹3,75,000',
      feesNumeric: 375000,
      placementRate: '98%',
      placementNumeric: 98,
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Architecting the Future with AI',
      highlights: [
        'Deep Learning & Neural Networks',
        'Focus on Generative AI and LLMs',
        'Projects with leading AI research labs'
      ],
      route: '/academics/programs/aiml',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      abbreviation: 'Civil',
      duration: '4 Years',
      seats: '90',
      fees: '₹3,00,000',
      feesNumeric: 300000,
      placementRate: '90%',
      placementNumeric: 90,
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Building Infrastructure for Tomorrow',
      highlights: [
        'Structural design and analysis',
        'Surveying and construction labs',
        'Sustainable building practices'
      ],
      route: '/academics/programs/civil',
      category: 'engineering',
      field: 'engineering'
    },
    {
      id: 'eee',
      name: 'Electrical & Electronics Engineering',
      abbreviation: 'EEE',
      duration: '4 Years',
      seats: '90',
      fees: '₹3,25,000',
      feesNumeric: 325000,
      placementRate: '93%',
      placementNumeric: 93,
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tagline: 'Powering the Future with Innovation',
      highlights: [
        'Power systems and control labs',
        'Renewable energy projects',
        'Smart grid technology training'
      ],
      route: '/academics/programs/eee',
      category: 'engineering',
      field: 'engineering'
    }
  ];

  // Filter programs based on search and filters
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
      const matchesDuration = selectedDuration === 'all' || program.duration === selectedDuration;
      const matchesField = selectedField === 'all' || program.field === selectedField;

      return matchesSearch && matchesCategory && matchesDuration && matchesField;
    });
  }, [searchQuery, selectedCategory, selectedDuration, selectedField, programs]);

  // Dynamically calculate available durations based on current search and other filters
  const availableDurations = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    const relevantPrograms = programs.filter(p => {
      const matchesSearch = !searchLower ||
        p.name.toLowerCase().includes(searchLower) ||
        p.abbreviation.toLowerCase().includes(searchLower) ||
        p.tagline.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesField = selectedField === 'all' || p.field === selectedField;
      return matchesSearch && matchesCategory && matchesField;
    });

    return Array.from(new Set(relevantPrograms.map(p => p.duration))).sort((a, b) => parseInt(a) - parseInt(b));
  }, [searchQuery, selectedCategory, selectedField, programs]);

  // Dynamically calculate available fields based on current search and other filters
  const availableFields = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    const relevantPrograms = programs.filter(p => {
      const matchesSearch = !searchLower ||
        p.name.toLowerCase().includes(searchLower) ||
        p.abbreviation.toLowerCase().includes(searchLower) ||
        p.tagline.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesDuration = selectedDuration === 'all' || p.duration === selectedDuration;
      return matchesSearch && matchesCategory && matchesDuration;
    });

    return Array.from(new Set(relevantPrograms.map(p => p.field))).sort();
  }, [searchQuery, selectedCategory, selectedDuration, programs]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDuration('all');
    setSelectedField('all');
  };

  const activeFiltersCount = [selectedCategory, selectedDuration, selectedField].filter(f => f !== 'all').length;

  // Reset filters if they're no longer available for the selected category
  useEffect(() => {
    if (selectedDuration !== 'all' && !availableDurations.includes(selectedDuration)) {
      setSelectedDuration('all');
    }
    if (selectedField !== 'all' && !(availableFields as string[]).includes(selectedField)) {
      setSelectedField('all');
    }
  }, [selectedCategory, availableDurations, availableFields, selectedDuration, selectedField]);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-12 sm:py-20 pb-16 sm:pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Our Academic Programs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 mb-8 sm:mb-10">
            Discover world-class programs designed to shape future leaders and innovators
          </p>

          {/* Search Bar in Hero */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
              <input
                type="text"
                placeholder="Search programs by name, abbreviation, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-blue-300/30 bg-white/95 backdrop-blur-sm focus:border-yellow-400 focus:bg-white focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl text-gray-800 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* Filter Section */}
        <div className="mb-8 space-y-4">

          {/* Filter Toggle Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <Filter className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                Filters
              </span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Program Level</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  >
                    <option value="all">All Programs</option>
                    <option value="schooling">Schooling</option>
                    <option value="college">College (PU)</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="engineering">Engineering</option>
                  </select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  >
                    <option value="all">All Durations</option>
                    {availableDurations.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>

                {/* Field Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Field of Study</label>
                  <select
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                  >
                    <option value="all">All Fields</option>
                    {availableFields.map(field => (
                      <option key={field} value={field} className="capitalize">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <X className="h-4 w-4" />
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-blue-900">{filteredPrograms.length}</span> of{' '}
            <span className="font-bold text-blue-900">{programs.length}</span> programs
          </p>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent group-hover:from-blue-900/90 transition-all duration-500"></div>

                  {/* Abbreviation Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900 rounded-xl p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold">{program.abbreviation}</div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {program.category}
                  </div>

                  {/* Placement Rate Badge */}
                  {program.placementRate !== 'Progression' && (
                    <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <TrendingUp className="h-4 w-4" />
                      {program.placementRate}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {program.name}
                  </h2>
                  <p className="text-yellow-600 font-semibold mb-4 text-sm italic">
                    {program.tagline}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {program.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-gray-100">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="font-bold text-blue-900 text-sm">{program.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Seats</p>
                      <p className="font-bold text-blue-900 text-sm">{program.seats}</p>
                    </div>
                    <div className="text-center">
                      <Briefcase className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Fees</p>
                      <p className="font-bold text-blue-900 text-sm">{program.fees}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={program.route}
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn"
                  >
                    View Details
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Programs Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Why Choose Our Programs - Redesigned */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Information */}
            <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-block mb-3">
                  <span className="px-3 py-1.5 bg-yellow-400 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider">
                    Excellence in Education
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Why Choose Our Programs?
                </h2>

                <p className="text-blue-100 text-base mb-6 leading-relaxed">
                  Experience world-class education with industry-leading facilities, expert mentorship, and a proven track record of success.
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-all duration-300">
                      <BookOpen className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-0.5">Industry-Aligned Curriculum</h4>
                      <p className="text-blue-100 text-xs leading-relaxed">
                        Updated regularly to match industry demands and emerging technologies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-all duration-300">
                      <Users className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-0.5">Expert Faculty</h4>
                      <p className="text-blue-100 text-xs leading-relaxed">
                        Learn from experienced professionals with real-world industry expertise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-all duration-300">
                      <Award className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-0.5">Outstanding Placements</h4>
                      <p className="text-blue-100 text-xs leading-relaxed">
                        90%+ placement rate with competitive packages at top companies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-all duration-300">
                      <Briefcase className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-0.5">Hands-On Experience</h4>
                      <p className="text-blue-100 text-xs leading-relaxed">
                        Real-world projects, internships, and industry collaborations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">23+</div>
                    <div className="text-blue-200 text-xs mt-0.5">Programs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">95%</div>
                    <div className="text-blue-200 text-xs mt-0.5">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">5000+</div>
                    <div className="text-blue-200 text-xs mt-0.5">Students</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

              {/* Floating Card on Image */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-2xl p-4 max-w-xs hidden lg:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-900">98%</div>
                    <div className="text-gray-600 text-xs">Placement Rate</div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs">
                  Our students secure positions in leading companies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div >
  );
};

export default ProgramsOffered;
