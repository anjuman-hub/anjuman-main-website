import React from 'react';
import { Award, Briefcase, TrendingUp, Star } from 'lucide-react';

interface PlacedStudent {
  name: string;
  company: string;
  package: string;
  image: string;
}

interface RecruitingCompany {
  name: string;
  logo: string;
}

interface PlacementsSectionProps {
  placedStudents: PlacedStudent[];
  recruitingCompanies: RecruitingCompany[];
}

const PlacementsSection: React.FC<PlacementsSectionProps> = ({ placedStudents, recruitingCompanies }) => {
  return (
    <section id="placements" className="py-12 sm:py-16 md:py-10 lg:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Placements & Recruiters</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 px-4">Our students are placed in top companies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left - Companies */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Recruiters</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {recruitingCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 sm:p-4 flex items-center justify-center h-20 sm:h-24 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="font-bold text-blue-900 group-hover:text-yellow-600 transition-colors duration-300 text-sm sm:text-base">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 bg-blue-800/50 rounded-lg p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-400 mr-2" />
                  <span className="text-xs sm:text-sm md:text-base font-semibold">Placement Statistics</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-xs sm:text-sm text-blue-200">Placement Rate</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">₹6.0L</div>
                  <div className="text-xs sm:text-sm text-blue-200">Highest Package</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Placed Students Scrolling */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Recently Placed Students</h3>
            </div>
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
              <div
                className="space-y-3 sm:space-y-4"
                style={{
                  animation: 'scrollUp 30s linear infinite'
                }}
              >
                {[...placedStudents, ...placedStudents].map((student, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-md"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 sm:border-4 border-yellow-400"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-blue-900 text-sm sm:text-base md:text-lg truncate">{student.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Placed at <span className="font-semibold text-blue-900">{student.company}</span></p>
                        <p className="text-yellow-600 font-bold text-xs sm:text-sm">{student.package}</p>
                      </div>
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
