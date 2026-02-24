import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Courses = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('Schooling');
  const [openCourseIndex, setOpenCourseIndex] = useState<number | null>(null);

  const courses = [
    // Schooling (3)
    {
      title: "Kindergarten",
      description: "Early childhood education focusing on foundational learning and development.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      format: "Full-Time",
      duration: "1-2 Years",
      eligibility: "Age 3-5",
      path: "/academics/programs/kindergarten",
      category: "Schooling"
    },
    {
      title: "Primary (1-7)",
      description: "Comprehensive primary education building strong academic foundations.",
      image: "https://images.pexels.com/photos/8466657/pexels-photo-8466657.jpeg",
      format: "Full-Time",
      duration: "7 Years",
      eligibility: "Age 6-12",
      path: "/academics/programs/primary",
      category: "Schooling"
    },
    {
      title: "High School (8-10)",
      description: "Secondary education preparing students for higher studies.",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 7 Pass",
      path: "/academics/programs/highschool",
      category: "Schooling"
    },

    // College - PU (2)
    {
      title: "PUC-I",
      description: "Pre-University Course - First Year, foundation for undergraduate studies.",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
      format: "Full-Time",
      duration: "1 Year",
      eligibility: "Grade 10 Pass",
      path: "/academics/programs/puc1",
      category: "College"
    },
    {
      title: "PUC-II",
      description: "Pre-University Course - Second Year, preparing for university entrance.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      format: "Full-Time",
      duration: "1 Year",
      eligibility: "PUC-I Pass",
      path: "/academics/programs/puc2",
      category: "College"
    },

    // Undergraduate (5)
    {
      title: "BBA",
      description: "Bachelor of Business Administration - Develop entrepreneurial skills and business acumen.",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 12",
      path: "/academics/programs/bba",
      category: "UG"
    },
    {
      title: "BCA",
      description: "Bachelor of Computer Applications - Master computer applications and programming.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 12",
      path: "/academics/programs/bca",
      category: "UG"
    },
    {
      title: "BA",
      description: "Bachelor of Arts - Explore humanities and liberal arts education.",
      image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 12",
      path: "/academics/programs/ba",
      category: "UG"
    },
    {
      title: "B.Sc",
      description: "Bachelor of Science - Comprehensive science education across various disciplines.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 12",
      path: "/academics/programs/bsc",
      category: "UG"
    },
    {
      title: "B.Com",
      description: "Bachelor of Commerce - Build expertise in commerce and business studies.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      format: "Full-Time",
      duration: "3 Years",
      eligibility: "Grade 12",
      path: "/academics/programs/bcom",
      category: "UG"
    },

    // Postgraduate (4)
    {
      title: "MBA",
      description: "Master of Business Administration - Advanced business leadership and management.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      format: "Full-Time",
      duration: "2 Years",
      eligibility: "Bachelor's Degree",
      path: "/academics/programs/mba",
      category: "PG"
    },
    {
      title: "M.Com",
      description: "Master of Commerce - Advanced studies in commerce and finance.",
      image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg",
      format: "Full-Time",
      duration: "2 Years",
      eligibility: "Bachelor's Degree",
      path: "/academics/programs/mcom",
      category: "PG"
    },
    {
      title: "MA",
      description: "Master of Arts - Advanced humanities and social sciences education.",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      format: "Full-Time",
      duration: "2 Years",
      eligibility: "Bachelor's Degree",
      path: "/academics/programs/ma",
      category: "PG"
    },
    {
      title: "M.Sc",
      description: "Master of Science - Advanced scientific research and specialization.",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
      format: "Full-Time",
      duration: "2 Years",
      eligibility: "Bachelor's Degree",
      path: "/academics/programs/msc",
      category: "PG"
    },

    // Engineering (8)
    {
      title: "CSE",
      description: "Computer Science Engineering - Core computer science and software development.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/cse",
      category: "Engineering"
    },
    {
      title: "Mechanical",
      description: "Mechanical Engineering - Design, analysis, and manufacturing systems.",
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/mechanical",
      category: "Engineering"
    },
    {
      title: "ECE",
      description: "Electronics & Communication Engineering - Electronics and communication systems.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/ece",
      category: "Engineering"
    },
    {
      title: "CSE-DS",
      description: "Computer Science Engineering - Data Science specialization.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/cse-ds",
      category: "Engineering"
    },
    {
      title: "Robotics & AI",
      description: "Robotics and Artificial Intelligence - Future of automation and intelligence.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/robotics-ai",
      category: "Engineering"
    },
    {
      title: "AIML",
      description: "Artificial Intelligence & Machine Learning - Advanced AI and ML technologies.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/aiml",
      category: "Engineering"
    },
    {
      title: "Civil",
      description: "Civil Engineering - Infrastructure design and construction management.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/civil",
      category: "Engineering"
    },
    {
      title: "EEE",
      description: "Electrical & Electronics Engineering - Power systems and electronics.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      format: "Full-Time",
      duration: "4 Years",
      eligibility: "Grade 12 (PCM)",
      path: "/academics/programs/eee",
      category: "Engineering"
    }
  ];

  const filteredCourses = courses.filter(course => course.category === selectedFilter);

  const selectedCourse = filteredCourses[selectedIndex];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setSelectedIndex(0);
  };

  const handleCourseClick = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleMobileCourseToggle = (idx: number) => {
    setOpenCourseIndex(openCourseIndex === idx ? null : idx);
  };


  const selectedCourseCard = (
    <div className="bg-primary rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 min-h-[300px] sm:min-h-[350px] md:min-h-[380px] shadow-sm">
      <div className="w-full md:w-5/12 shrink-0">
        <div className="h-56 sm:h-64 md:h-full w-full rounded-xl overflow-hidden relative shadow-inner">
          <img
            alt={selectedCourse.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            src={selectedCourse.image}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6">{selectedCourse.title}</h3>
          <hr className="border-white/30 mb-4 sm:mb-6" />
          <p className="text-white leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base xl:text-lg">
            {selectedCourse.description}
          </p>
          <hr className="border-white/30 mb-4 sm:mb-6" />
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <div className="border-r border-white/30 pr-1 sm:pr-2">
              <span className="block text-xs text-white/70 mb-1 flex items-center justify-center sm:justify-start gap-1">
                <span className="material-icons text-xs sm:text-sm">school</span> <span className="text-[10px] sm:text-xs">Format</span>
              </span>
              <span className="block text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-center sm:text-left">{selectedCourse.format}</span>
            </div>
            <div className="border-r border-white/30 px-1 sm:px-2">
              <span className="block text-xs text-white/70 mb-1 flex items-center justify-center sm:justify-start gap-1">
                <span className="material-icons text-xs sm:text-sm">schedule</span> <span className="text-[10px] sm:text-xs">Duration</span>
              </span>
              <span className="block text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-center sm:text-left">{selectedCourse.duration}</span>
            </div>
            <div className="pl-1 sm:pl-2">
              <span className="block text-xs text-white/70 mb-1 flex items-center justify-center sm:justify-start gap-1">
                <span className="material-icons text-xs sm:text-sm">person</span> <span className="text-[10px] sm:text-xs">Eligibility</span>
              </span>
              <span className="block text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-center sm:text-left">{selectedCourse.eligibility}</span>
            </div>
          </div>
        </div>
        <Link to={selectedCourse.path} className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-yellow-500/20 text-sm sm:text-base">
          View Program
          <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-12 w-full max-w-[1700px]">
      <div className="mb-8 sm:mb-10 md:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">
          Explore Our Premier Programs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
          Practical learning and personal growth to build skills, mindset, and future-ready leadership.
        </p>
      </div>

      <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
        <button
          onClick={() => handleFilterChange('Schooling')}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${selectedFilter === 'Schooling' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Schooling
        </button>
        <button
          onClick={() => handleFilterChange('College')}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${selectedFilter === 'College' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          College (PU)
        </button>
        <button
          onClick={() => handleFilterChange('UG')}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${selectedFilter === 'UG' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Undergraduate
        </button>
        <button
          onClick={() => handleFilterChange('PG')}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${selectedFilter === 'PG' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Postgraduate
        </button>
        <button
          onClick={() => handleFilterChange('Engineering')}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-colors ${selectedFilter === 'Engineering' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Engineering
        </button>
      </div>

      <div className="grid grid-cols-1 min-[1000px]:grid-cols-12 gap-8 xl:gap-12">
        <div className="min-[1000px]:col-span-4 xl:col-span-3 flex flex-col space-y-3">
          {filteredCourses.map((course, idx) => (
            <React.Fragment key={course.title}>
              <button
                onClick={() => {
                  handleCourseClick(idx);
                  if (window.innerWidth < 1000) {
                    handleMobileCourseToggle(idx);
                  }
                }}
                className={`group w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 bg-white border border-primary hover:shadow-md ${selectedIndex === idx
                  ? "shadow-sm relative overflow-hidden"
                  : ""
                  }`}
              >
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${course.category === 'Schooling' ? 'bg-purple-100 text-purple-800' :
                      course.category === 'College' ? 'bg-orange-100 text-orange-800' :
                        course.category === 'UG' ? 'bg-blue-100 text-blue-800' :
                          course.category === 'PG' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                      }`}>
                      {course.category}
                    </span>
                    <span className={`font-medium text-primary ${selectedIndex === idx
                      ? "font-bold text-sm sm:text-base"
                      : "group-hover:text-primary-dark text-sm sm:text-base"
                      }`}>
                      {course.title}
                    </span>
                  </div>
                  <ChevronDown className={`min-[1000px]:hidden h-4 w-4 text-primary transition-transform duration-200 ${openCourseIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {openCourseIndex === idx && (
                <div className="min-[1000px]:hidden mt-4 animate-in slide-in-from-top-2 duration-200">
                  <div className="bg-primary rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-sm">
                    <div className="w-full">
                      <div className="h-48 sm:h-56 w-full rounded-xl overflow-hidden relative shadow-inner mb-4">
                        <img
                          alt={course.title}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          src={course.image}
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{course.title}</h3>
                        <hr className="border-white/30 mb-3 sm:mb-4" />
                        <p className="text-white leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          {course.description}
                        </p>
                        <hr className="border-white/30 mb-3 sm:mb-4" />
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="border-r border-white/30 pr-1 sm:pr-2">
                            <span className="block text-xs text-white/70 mb-1 flex items-center justify-center gap-1">
                              <span className="material-icons text-xs">school</span> <span className="text-[10px]">Format</span>
                            </span>
                            <span className="block text-white font-bold text-[10px] sm:text-xs text-center">{course.format}</span>
                          </div>
                          <div className="border-r border-white/30 px-1 sm:px-2">
                            <span className="block text-xs text-white/70 mb-1 flex items-center justify-center gap-1">
                              <span className="material-icons text-xs">schedule</span> <span className="text-[10px]">Duration</span>
                            </span>
                            <span className="block text-white font-bold text-[10px] sm:text-xs text-center">{course.duration}</span>
                          </div>
                          <div className="pl-1 sm:pl-2">
                            <span className="block text-xs text-white/70 mb-1 flex items-center justify-center gap-1">
                              <span className="material-icons text-xs">person</span> <span className="text-[10px]">Eligibility</span>
                            </span>
                            <span className="block text-white font-bold text-[10px] sm:text-xs text-center">{course.eligibility}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={course.path} className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-yellow-500/20 text-sm">
                        View Program
                        <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="min-[1000px]:col-span-8 xl:col-span-9">
          <div className="hidden min-[1000px]:block">
            {selectedCourseCard}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses;

