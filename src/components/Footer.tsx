import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  PhoneCall,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about/introduction' },
    { name: 'Academics', path: '/academics/programs-offered' },
    { name: 'Governing Body', path: '/about/management' },
    { name: 'Our Institutions', path: '/about/institutions' },
    { name: 'Careers', path: '/careers' },
  ];

  const studentLinks = [
    { name: 'Meritorious Students', path: '/students/meritorious-students' },
    { name: 'Scholarships', path: '/students/scholarships' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Recent Happenings', path: '/happenings' }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* College Info */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/images/ahm-logo.png"
                  alt="Logo"
                  className="h-10 sm:h-14 w-auto object-contain"
                />
                <div className="text-white">
                  <h3 className="font-bold tracking-widest leading-none text-xl sm:text-3xl uppercase relative inline-block pb-0.5">
                    ANJUMAN
                    <span className="absolute left-0 bottom-0 w-full h-[0.5px] bg-white"></span>
                  </h3>
                  <p className="text-[8px] sm:text-xs font-semibold tracking-[0.10em] uppercase opacity-80 whitespace-nowrap">
                    Group of Institutions
                  </p>
                </div>
              </div>

              {/* Vertical Divider - Mobile Only */}
              <div className="h-8 w-px bg-white/20 mx-1 sm:hidden"></div>

              {/* 105 Years Image - Mobile Only */}
              <img
                src="/images/105-footer.png"
                alt="105 Years of Excellence"
                className="h-10 w-auto object-contain opacity-90 sm:hidden"
              />
            </div>

            <p className="text-blue-200 text-sm leading-relaxed">
              Anjuman Group of Institutions is committed to providing quality
              education and fostering academic excellence. We prepare students
              for successful careers and responsible citizenship.
            </p>

            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-blue-200 hover:text-yellow-500 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Corner */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Student Corner</h4>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500 mt-1" />
                <p className="text-blue-200 text-sm">
                  Anjuman Hami-e-Muslimeen, AnjumanAbad – 581320
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <p className="text-blue-200 text-sm">+91 9916932224</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <p className="text-blue-200 text-sm">anjuman@anjuman.edu.in</p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 text-yellow-500" />
                <p className="text-blue-200 text-sm">Landline: 08385-226283</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 border-t border-blue-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
            <p>&copy; 2026 AHM. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="#" className="hover:text-white">Privacy Policy</Link>
              <Link to="#" className="hover:text-white">Terms of Service</Link>
              <Link to="#" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
