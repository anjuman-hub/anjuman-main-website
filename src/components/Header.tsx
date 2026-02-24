import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';
import { prefetch } from '../routes/lazyPages';

interface MenuItem {
  name: string;
  path?: string;
  submenu?: MenuItem[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Only one dropdown open
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<string | null>(null); // Nested dropdown

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      submenu: [
        { name: 'Introduction', path: '/about/introduction' },
        { name: 'History', path: '/about/history' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: "Executive Members", path: '/about/executive-members' },
        {
          name: "Board Members",
          submenu: [
            { name: "Deeniyat Board", path: "/about/boards/deeniyat" },
            { name: "Nursery & Primary School Board", path: "/about/boards/primary-school" },
            { name: "High School Board", path: "/about/boards/high-school" },
            {
              name: "PU & Degree College Boards",
              submenu: [
                { name: "Degree College Board (Boys)", path: "/about/boards/degree-boys" },
                { name: "Degree College Board (Girls)", path: "/about/boards/degree-girls" },
                { name: "PU College Board (Boys)", path: "/about/boards/pu-boys" },
                { name: "PU College Board (Girls)", path: "/about/boards/pu-girls" },
              ]
            },
            {
              name: "Professional College Boards",
              submenu: [
                { name: "AIMCA Board (BBA & BCA)", path: "/about/boards/aimca" },
                { name: "ACE Board (B.Ed)", path: "/about/boards/ace" },
              ]
            },
            { name: "AITM Board", path: "/about/boards/aitm" },
            { name: "Works Committee", path: "/about/boards/works" },
            { name: "Special Invitees", path: "/about/boards/special-invitees" },
          ]
        },
        { name: "President's Desk", path: '/about/president-desk' },
        { name: "General Secretary's Desk", path: '/about/general-secretary-desk' },


      ]
    },
    {
      name: 'Academics',
      submenu: [
        { name: 'Programs Offered', path: '/academics/programs-offered' },

      ]
    },
    { name: 'Governing Bodies', path: '/about/management' },
    { name: 'Our Institutions', path: '/about/institutions' },
    {
      name: 'Student Corner',
      submenu: [
        { name: 'Happenings', path: '/happenings' },
        { name: 'Meritorious Students', path: '/students/meritorious-students' },
        { name: 'Scholarships & Fee Concessions', path: '/students/scholarships' },
        { name: 'Gallery', path: '/gallery' },
      ]
    },
    { name: 'Contact', path: '/about/contact' }
  ];

  const centerMenuItems = menuItems;
  const rightMenuItems: MenuItem[] = [];


  const handleDropdownClick = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    } else {
      setActiveDropdown(name);
      setActiveNestedDropdown(null); // close nested when opening new dropdown
    }
  };

  const renderMenuItem = (item: MenuItem) => (
    <div
      key={item.name}
      className="relative"
      onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
      onMouseLeave={() => {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }}
    >
      {item.submenu ? (
        <>
          <button
            onClick={() => handleDropdownClick(item.name)}
            className="flex items-center px-3 py-2 rounded font-medium transition-all duration-200 text-gray-700 hover:text-blue-900 hover:bg-gray-100"
          >
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {/* MAIN DROPDOWN */}
          {activeDropdown === item.name && (
            <div
              className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 overflow-visible"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={(e) => {
                const target = e.relatedTarget as HTMLElement;
                // Don't close if moving to nested dropdown or deep nested dropdown
                if (target && (target.closest('.nested-dropdown-container') || target.closest('[data-deep-nested-key]'))) {
                  return;
                }
                setActiveDropdown(null);
                setActiveNestedDropdown(null);
              }}
            >
              {item.submenu.map((subItem) => {
                const nestedKey = `${item.name}-${subItem.name}`;

                return (
                  <div
                    key={subItem.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (subItem.submenu) {
                        setActiveNestedDropdown(nestedKey);
                      }
                    }}
                    onMouseLeave={(e) => {
                      const target = e.relatedTarget as HTMLElement;
                      // Don't close if moving to nested dropdown, deep nested dropdown, or bridge area
                      if (target && (target.closest('.nested-dropdown-container') ||
                        target.closest('[data-deep-nested-key]') ||
                        target.closest('.absolute.left-0'))) {
                        return;
                      }
                      setActiveNestedDropdown(null);
                    }}
                  >
                    {subItem.submenu ? (
                      <>
                        <button
                          className="flex justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                          onMouseEnter={() => {
                            if (subItem.submenu) {
                              setActiveNestedDropdown(nestedKey);
                            }
                          }}
                          onClick={() => {
                            if (subItem.submenu) {
                              if (activeNestedDropdown === nestedKey) {
                                setActiveNestedDropdown(null);
                              } else {
                                setActiveNestedDropdown(nestedKey);
                              }
                            }
                          }}
                        >
                          {subItem.name}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </button>

                        {/* NESTED DROPDOWN */}
                        {(activeNestedDropdown === nestedKey || activeNestedDropdown?.startsWith(nestedKey + '-')) && subItem.submenu && subItem.submenu.length > 0 && (
                          <>
                            {/* Invisible bridge area */}
                            <div
                              className="absolute left-0 top-0 w-12 h-full z-[59]"
                              style={{ left: '-12px' }}
                              onMouseEnter={() => {
                                setActiveNestedDropdown(nestedKey);
                              }}
                            />
                            <div
                              className="nested-dropdown-container absolute w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60]"
                              data-nested-key={nestedKey}
                              style={{
                                left: '100%',
                                top: '0',
                                minWidth: '256px'
                              }}
                              onMouseEnter={() => {
                                setActiveNestedDropdown(nestedKey);
                                setActiveDropdown(item.name);
                              }}
                              onMouseLeave={(e) => {
                                const target = e.relatedTarget as HTMLElement;
                                // Don't close if moving to deep nested dropdown or bridge
                                if (target && (target.closest('[data-deep-nested-key]') || target.closest('.absolute.left-0'))) {
                                  return;
                                }
                                setActiveNestedDropdown(null);
                              }}
                            >
                              {subItem.submenu.map((nested) => {
                                if (nested.submenu) {
                                  // Item has nested submenu (like PU & Degree College Boards)
                                  const deepNestedKey = `${nestedKey}-${nested.name}`;
                                  return (
                                    <div key={nested.name} className="relative">
                                      <button
                                        className="flex justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                                        onMouseEnter={() => {
                                          setActiveNestedDropdown(deepNestedKey);
                                        }}
                                      >
                                        {nested.name}
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                      </button>
                                      {activeNestedDropdown === deepNestedKey && nested.submenu && nested.submenu.length > 0 && (
                                        <div
                                          className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[70]"
                                          data-deep-nested-key={deepNestedKey}
                                          style={{
                                            left: 'calc(100% - 4px)'
                                          }}
                                          onMouseEnter={() => {
                                            setActiveNestedDropdown(deepNestedKey);
                                          }}
                                          onMouseLeave={(e) => {
                                            const target = e.relatedTarget as HTMLElement;
                                            // Don't close if moving back to parent nested dropdown
                                            if (!target || !target.closest('.nested-dropdown-container')) {
                                              setActiveNestedDropdown(nestedKey);
                                            }
                                          }}
                                        >
                                          {nested.submenu.map((deepNested) => (
                                            <Link
                                              key={deepNested.name}
                                              to={deepNested.path || '#'}
                                              onClick={() => {
                                                setActiveDropdown(null);
                                                setActiveNestedDropdown(null);
                                              }}
                                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                                            >
                                              {deepNested.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                } else {
                                  // Regular item without nested submenu
                                  return (
                                    <Link
                                      key={nested.name}
                                      to={nested.path || '#'}
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveNestedDropdown(null);
                                      }}
                                      onMouseEnter={() =>
                                        nested.path && prefetch(nested.path)
                                      }
                                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                                    >
                                      {nested.name}
                                    </Link>
                                  );
                                }
                              })}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <Link
                        to={subItem.path || '#'}
                        onClick={() => {
                          setActiveDropdown(null);
                          setActiveNestedDropdown(null);
                        }}
                        onMouseEnter={() =>
                          subItem.path && prefetch(subItem.path)
                        }
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path || '#'}
          onMouseEnter={() => item.path && prefetch(item.path)}
          className="px-3 py-2 rounded-full font-medium transition-all duration-200 text-gray-700 hover:text-blue-900 hover:bg-gray-100"
        >
          {item.name}
        </Link>
      )}
    </div>
  );

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="bg-blue-900 h-8 sm:h-10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="tel:08385-226283, +91 9916932224 " className="flex items-center text-white hover:text-blue-200">
            <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-1" />
            <span className="text-[10px] sm:text-sm hidden sm:inline">08385-226283, +91 9916932224 </span>
          </a>
          <a href="mailto:anjuman@anjuman.edu.in" className="flex items-center text-white hover:text-blue-200">
            <Mail className="h-3.5 w-3.5 sm:h-5 sm:w-5 mr-1" />
            <span className="text-[10px] sm:text-sm hidden sm:inline">anjuman@anjuman.edu.in</span>
          </a>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/careers" className="text-white hover:text-blue-200 hover:underline text-[10px] sm:text-sm font-medium transition-colors">
            Careers
          </Link>
          <div className="h-3 sm:h-4 w-px bg-white/30"></div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <a href="#" className="text-white hover:text-blue-200" aria-label="Facebook">
              <Facebook className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200" aria-label="Twitter">
              <Twitter className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200" aria-label="LinkedIn">
              <Linkedin className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-white hover:text-blue-200" aria-label="YouTube">
              <Youtube className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex items-center h-16 overflow-visible">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <img src="/images/ahmlogo.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm font-bold text-blue-900"><br className="sm:hidden" />
              </h1>
            </div>
          </Link>

          {/* Center Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-1 overflow-visible">
            {centerMenuItems.map(renderMenuItem)}
          </nav>

          {/* Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 overflow-visible">
            {rightMenuItems.map(renderMenuItem)}
            <img src="/images/105years.png" alt="105 Years of Excellence" className="h-12 w-auto ml-2" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-900 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-h-screen overflow-y-auto py-2">
              {menuItems.map((item) => (
                <MobileMenuItem key={item.name} item={item} closeMenu={() => setIsMobileMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Mobile menu
const MobileMenuItem = ({ item, closeMenu }: { item: MenuItem; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {item.submenu ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between w-full px-4 py-2.5 text-left text-gray-700 hover:bg-gray-50 text-sm font-medium"
          >
            {item.name}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className="bg-white">
              {item.submenu.map((subItem: MenuItem) => (
                <MobileSubMenuItem key={subItem.name} item={subItem} closeMenu={closeMenu} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path || '#'}
          onClick={closeMenu}
          onTouchStart={() => item.path && prefetch(item.path)}
          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-sm font-medium"
        >
          {item.name}
        </Link>
      )}
    </div>
  );
};

const MobileSubMenuItem = ({ item, closeMenu, depth = 0 }: { item: MenuItem; closeMenu: () => void; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${depth > 0 ? 'pl-4 border-l border-gray-200' : ''}`}>
      {item.submenu ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between w-full px-4 py-1.5 text-left text-gray-600 hover:bg-gray-100 text-[13px]"
          >
            {item.name}
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className={`${depth === 0 ? 'bg-gray-100' : 'bg-gray-50'}`}>
              {item.submenu.map((nested: MenuItem) => (
                <MobileSubMenuItem
                  key={nested.name}
                  item={nested}
                  closeMenu={closeMenu}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path || '#'}
          onClick={closeMenu}
          onTouchStart={() => item.path && prefetch(item.path)}
          className="block px-4 py-1.5 text-gray-600 hover:bg-gray-200 text-[13px]"
        >
          {item.name}
        </Link>
      )}
    </div>
  );
};

export default Header;
