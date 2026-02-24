import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import TopLoader from './components/TopLoader';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPage } from './analytics';

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-sm">
    <TopLoader />
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-900"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-2 w-2 bg-blue-900 rounded-full animate-pulse"></div>
      </div>
    </div>  </div>
);
import * as Pages from './routes/lazyPages';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Pages.HomePage /></PageTransition>} />

          {/* About Routes */}
          <Route path="/about/introduction" element={<PageTransition><Pages.Introduction /></PageTransition>} />
          <Route path="/about/history" element={<PageTransition><Pages.History /></PageTransition>} />
          <Route path="/about/vision-mission" element={<PageTransition><Pages.VisionMission /></PageTransition>} />
          <Route path="/about/management" element={<PageTransition><Pages.Management /></PageTransition>} />
          <Route path="/about/objectives" element={<PageTransition><Pages.Objectives /></PageTransition>} />
          <Route path="/about/plans" element={<PageTransition><Pages.Plans /></PageTransition>} />
          <Route path="/about/policies" element={<PageTransition><Pages.Policies /></PageTransition>} />
          <Route path="/about/college-byelaws" element={<PageTransition><Pages.CollegeByelaws /></PageTransition>} />
          <Route path="/about/contact" element={<PageTransition><Pages.Contact /></PageTransition>} />
          <Route path="/about/institutions" element={<PageTransition><Pages.InstitutionsPage /></PageTransition>} />

          {/* Academics Routes */}
          <Route path="/academics/programs-offered" element={<PageTransition><Pages.ProgramsOffered /></PageTransition>} />

          {/* Program Detail Routes */}
          <Route path="/academics/programs/kindergarten" element={<PageTransition><Pages.KindergartenProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/primary" element={<PageTransition><Pages.PrimaryProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/highschool" element={<PageTransition><Pages.HighSchoolProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/puc1" element={<PageTransition><Pages.PUC1ProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/puc2" element={<PageTransition><Pages.PUC2ProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/bba" element={<PageTransition><Pages.BBAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/bca" element={<PageTransition><Pages.BCAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/ba" element={<PageTransition><Pages.BAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/bsc" element={<PageTransition><Pages.BScProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/bcom" element={<PageTransition><Pages.BComProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/mba" element={<PageTransition><Pages.MBAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/mcom" element={<PageTransition><Pages.MComProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/ma" element={<PageTransition><Pages.MAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/mca" element={<PageTransition><Pages.MCAProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/cse" element={<PageTransition><Pages.CSEProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/mechanical" element={<PageTransition><Pages.MechanicalProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/ece" element={<PageTransition><Pages.ECEProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/cse-ds" element={<PageTransition><Pages.CSEDSProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/robotics-ai" element={<PageTransition><Pages.RoboticsAIProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/aiml" element={<PageTransition><Pages.AIMLProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/civil" element={<PageTransition><Pages.CivilProgramDetail /></PageTransition>} />
          <Route path="/academics/programs/eee" element={<PageTransition><Pages.EEEProgramDetail /></PageTransition>} />

          <Route path="/academics/how-to-apply" element={<PageTransition><Pages.HowToApply /></PageTransition>} />


          {/* Staff Routes */}
          <Route path="/about/president-desk" element={<PageTransition><Pages.PresidentDesk /></PageTransition>} />
          <Route path="/about/general-secretary-desk" element={<PageTransition><Pages.GeneralSecretaryDesk /></PageTransition>} />
          <Route path="/about/executive-members" element={<PageTransition><Pages.ExecutiveMembers /></PageTransition>} />

          {/* Board Routes */}
          <Route path="/about/boards/deeniyat" element={<PageTransition><Pages.DeeniyatBoard /></PageTransition>} />
          <Route path="/about/boards/primary-school" element={<PageTransition><Pages.PrimaryBoard /></PageTransition>} />
          <Route path="/about/boards/high-school" element={<PageTransition><Pages.HighSchoolBoard /></PageTransition>} />
          <Route path="/about/boards/degree-boys" element={<PageTransition><Pages.DegreeBoysBoard /></PageTransition>} />
          <Route path="/about/boards/degree-girls" element={<PageTransition><Pages.DegreeGirlsBoard /></PageTransition>} />
          <Route path="/about/boards/pu-boys" element={<PageTransition><Pages.PUCBoysBoard /></PageTransition>} />
          <Route path="/about/boards/pu-girls" element={<PageTransition><Pages.PUCGirlsBoard /></PageTransition>} />
          <Route path="/about/boards/aitm" element={<PageTransition><Pages.AITMBoard /></PageTransition>} />
          <Route path="/about/boards/aimca" element={<PageTransition><Pages.AIMCABoard /></PageTransition>} />
          <Route path="/about/boards/ace" element={<PageTransition><Pages.ACEBoard /></PageTransition>} />
          <Route path="/about/boards/works" element={<PageTransition><Pages.WorksCommittee /></PageTransition>} />
          <Route path="/about/boards/special-invitees" element={<PageTransition><Pages.SpecialInvitees /></PageTransition>} />


          {/* Student Corner Routes */}
          <Route path="/students/meritorious-students" element={<PageTransition><Pages.MeritoriousStudents /></PageTransition>} />
          <Route path="/students/scholarships" element={<PageTransition><Pages.Scholarships /></PageTransition>} />
          <Route path="/students/placements" element={<PageTransition><Pages.Placements /></PageTransition>} />

          {/* Gallery Routes */}
          <Route path="/gallery" element={<PageTransition><Pages.Gallery /></PageTransition>} />

          {/* Happenings Routes */}
          <Route path="/happenings" element={<PageTransition><Pages.Eventlist /></PageTransition>} />
          <Route path="/happenings/event/:id" element={<PageTransition><Pages.Eventdetails /></PageTransition>} />

          {/* Careers Route */}
          <Route path="/careers" element={<PageTransition><Pages.Careers /></PageTransition>} />

        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;