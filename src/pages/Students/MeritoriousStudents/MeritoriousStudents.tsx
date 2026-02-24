import { useState } from 'react';
import { Medal, Sparkles } from 'lucide-react';

const MeritoriousStudents = () => {
  const [activeTab, setActiveTab] = useState<'viquar' | 'dukhtar'>('dukhtar');

  const dukhtarAwards = [
    { year: '2013-14', name: 'Aysha Muznah', parent: 'D/O Mohammed Ameen Shoupa', detail: '92% (IX Std)' },
    { year: '2012-13', name: 'Farheen Dilkash Muallim', parent: 'D/O Mohammed Ameen Muallim', detail: '97.1%' },
    { year: '2011-12', name: 'Samaha', parent: 'D/O Syed Nasir Barmawar', detail: '95.5%' },
    { year: '2011-12', name: 'Anisa Shaikh', parent: 'D/O Zainulabideen Shaikh', detail: '93.7%' },
  ];

  const viquarAwards = [
    { year: '2018', name: 'Mohammed Ammr', parent: 'S/O Mohiddin Jailani Akrami' },
    { year: '2017', name: 'Mohammed Zuhaib Siddiqua', parent: 'S/O S. M. Siddiqua' },
    { year: '2016', name: 'Syed Abubakar', parent: 'S/O Syed Mohammed Maliki' },
    { year: '2015', name: 'Afzaal', parent: 'S/O Shabbir Ahmed Dafedar' },
    { year: '2014', name: 'Muhammad Moosa', parent: 'S/O Muhammad Ibrahim Patel' },
    { year: '2013', name: 'Muhammad Rafey', parent: 'S/O Muhammad Jameel Shaikh' },
    { year: '2012', name: 'Abdul Bais', parent: 'S/O Abdul Basit Kadli' },
    { year: '2011', name: 'Muhammad Yusuf', parent: 'S/O Muhammad Yaqoob Ruknuddin' },
    { year: '2010', name: 'Mohd Maaz', parent: 'S/O Mohd Ansar Damda' },
    { year: '2009', name: 'Mohd Noufil', parent: 'S/O Abdul Nasir' },
    { year: '2008', name: 'Mohd Muazzam M Damda', parent: '' },
    { year: '2007', name: 'Mohd Furquan M.I Zummi', parent: '' },
    { year: '2006', name: 'Tanveer Ahmed I Pasha', parent: '' },
    { year: '2005', name: 'Mohd Imran A Ruknuddin', parent: '' },
    { year: '2004', name: 'Ashfaque Ahmed K.C', parent: '' },
    { year: '2003', name: 'Mohd Omaies N.Qazi', parent: '' },
    { year: '2002', name: 'Mohd Makeen Kandloor', parent: '' },
    { year: '2001', name: 'Yasir Arfath Awati', parent: '' },
    { year: '2000', name: 'Quazi Mohammed Nawaf', parent: '' },
    { year: '1999', name: 'Siddique Mohammed Fahim Ismail', parent: '' },
    { year: '1998', name: 'Damda Abdul Muneeb', parent: '' },
    { year: '1997', name: 'Momin Mohammed Sameer', parent: '' },
    { year: '1996', name: 'Karikal Syed All Zameer', parent: '' },
    { year: '1995', name: 'Mohtisham Mohammed Anas', parent: '' },
    { year: '1994', name: 'Mohammed Nadeem IS.', parent: '' },
    { year: '1993', name: 'Damudi Mohammed Quaid', parent: '' },
    { year: '1992', name: 'Damda Fardin', parent: '' },
    { year: '1991', name: 'Fayazulla Huseni Beg', parent: '' },
    { year: '1990', name: 'MulIa Mubashir Gani', parent: '' },
    { year: '1989', name: 'Barmavar Syed Muzamil', parent: '' },
    { year: '1988', name: 'Shakir Ahamed Javali', parent: '' },
    { year: '1987', name: 'Naseem Ahmed Khan', parent: '' },
    { year: '1986', name: 'Mohtisham Ismail Jaleel', parent: '' },
    { year: '1985', name: 'Syed Mohammed Al Jinnah', parent: '' },
    { year: '1984', name: 'Ibrahim Khaleel Johar', parent: '' },
    { year: '1983', name: 'Abdul Rahman S.', parent: '' },
    { year: '1982', name: 'S M Arshad', parent: '' },
    { year: '1981', name: 'Koteshwar SM. Shuaib', parent: '' },
    { year: '1980', name: 'Momin Viquar Ahamed', parent: '' },
    { year: '1979', name: 'Imtiyaz Ahamed R R.', parent: '' },
    { year: '1978', name: 'Abdul Haseeb S.K.M.', parent: '' },
    { year: '1977', name: 'Mohamoodul Hassan', parent: '' },
    { year: '1976', name: 'Momin Shabeer', parent: '' },
    { year: '1975', name: 'Mohammed Fayaz', parent: '' },
    { year: '1974', name: 'Mujeeb Rahman', parent: '' },
    { year: '1973', name: 'Yusuf Khan', parent: '' },
    { year: '1972', name: 'Abdul Rauf', parent: '' },
    { year: '1971', name: 'Mohammed Ashfaq', parent: '' },
    { year: '1970', name: 'Syed Irfan', parent: '' },
    { year: '1969', name: 'Mohammed Zubair M.M.K.', parent: '' },
    { year: '1968', name: 'Mohammed Iqbal M.N.A.', parent: '' },
    { year: '1967', name: 'Shabandri Shamshuddin Abdulkadir', parent: '' },
    { year: '1966', name: 'Kobatte Mohammed Khaleel', parent: '' },
    { year: '1965', name: 'Siddique Mohammed Ismail Sahib', parent: '' },
    { year: '1964', name: 'Kola Mohammed Iqbal', parent: '' },
    { year: '1963', name: 'Kasimji Abubakar Ali', parent: '' },
    { year: '1962', name: 'Mohtesham Usman Hassan', parent: '' },
    { year: '1961', name: 'Venkatesh P Bhatkal', parent: '' },
    { year: '1960', name: 'Kobatte Muhammed Salahuddin', parent: '' },
  ];




  const tabs = [
    { id: 'dukhtar', label: 'Dukhtar-e-Anjuman', icon: Sparkles },
    { id: 'viquar', label: 'Viquar-e-Anjuman', icon: Medal },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10 md:mb-16 mt-12 md:mt-20">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6">Meritorious Students</h1>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-yellow-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed italic px-4">
            "Recognizing prestige, celebrating excellence, and honoring the legacy of our brightest stars."
          </p>
        </div>

        {/* Tab Navigation - Scrollable on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar pb-4 md:pb-0 md:flex-wrap md:justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 md:px-0 -mx-4 md:mx-0 snap-x">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'viquar' | 'dukhtar')}
                className={`flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 font-semibold whitespace-nowrap snap-center ${activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-sm md:text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100 mx-2 md:mx-0">

          {activeTab === 'dukhtar' && (
            <div className="p-6 md:p-12">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8 text-left">
                <div className="p-2.5 md:p-3 bg-blue-100 rounded-xl md:rounded-2xl shrink-0">
                  <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl text-sm md:text-2xl font-bold text-blue-900">Dukhtar-e-Anjuman</h2>
                  <p className="text-blue-600 text-xs md:text-base font-medium">Prestigious Achievement Award for Girls</p>
                </div>
              </div>

              <div className="overflow-x-auto -mx-6 md:mx-0">
                <table className="w-full text-left border-collapse min-w-full">
                  <thead>
                    <tr className="border-b-2 border-yellow-200">
                      <th className="py-2 px-4 md:py-4 md:px-6 text-blue-900 font-bold uppercase tracking-wider text-[10px] md:text-sm w-20 md:w-32">Year</th>
                      <th className="py-2 px-4 md:py-4 md:px-6 text-blue-900 font-bold uppercase tracking-wider text-[10px] md:text-sm">Awardee Name</th>
                      <th className="py-2 px-4 md:py-4 md:px-6 text-blue-900 font-bold uppercase tracking-wider text-[10px] md:text-sm w-24 md:w-40">% in SSLC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dukhtarAwards.map((award, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-yellow-50 transition-colors group">
                        <td className="py-2 px-4 md:py-4 md:px-6 font-mono text-gray-500 font-bold text-[11px] md:text-base">{award.year}</td>
                        <td className="py-2 px-4 md:py-4 md:px-6">
                          <div className="font-bold text-blue-900 group-hover:text-blue-700 leading-tight text-xs md:text-base">{award.name}</div>
                          <div className="text-gray-500 text-[10px] md:text-sm italic mt-0.5">{award.parent}</div>
                        </td>
                        <td className="py-2 px-4 md:py-4 md:px-6 text-xs md:text-base font-bold text-blue-900">{award.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'viquar' && (
            <div className="p-6 md:p-12">
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8 text-left">
                <div className="p-2.5 md:p-3 bg-yellow-100 rounded-xl md:rounded-2xl shrink-0">
                  <Medal className="h-6 w-6 md:h-8 md:w-8 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl text-sm md:text-2xl font-bold text-blue-900">Viquar-e-Anjuman</h2>
                  <p className="text-yellow-600 text-xs md:text-base font-medium">The Highest Honor of Excellence</p>
                </div>
              </div>

              <div className="overflow-x-auto -mx-6 md:mx-0">
                <table className="w-full text-left border-collapse min-w-full">
                  <thead>
                    <tr className="border-b-2 border-yellow-200">
                      <th className="py-2 px-4 md:py-4 md:px-6 text-blue-900 font-bold uppercase tracking-wider text-[10px] md:text-sm w-20 md:w-24">Year</th>
                      <th className="py-2 px-4 md:py-4 md:px-6 text-blue-900 font-bold uppercase tracking-wider text-[10px] md:text-sm">Awardee Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {viquarAwards.map((award, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-yellow-50 transition-colors group">
                        <td className="py-2 px-4 md:py-4 md:px-6 font-mono text-gray-500 font-bold text-[11px] md:text-base">{award.year}</td>
                        <td className="py-2 px-4 md:py-4 md:px-6 text-sm md:text-base">
                          <div className="font-bold text-blue-900 group-hover:text-yellow-700 leading-tight text-xs md:text-base">{award.name}</div>
                          {award.parent && <div className="text-gray-500 text-[10px] md:text-sm italic mt-0.5">{award.parent}</div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default MeritoriousStudents;