import { lazy } from 'react';

// About Pages
export const Introduction = lazy(() => import('../pages/About/Introduction/index'));
export const VisionMission = lazy(() => import('../pages/About/VisionMission/index'));
export const Management = lazy(() => import('../pages/About/Management/index'));
export const Objectives = lazy(() => import('../pages/About/Objectives/index'));
export const Plans = lazy(() => import('../pages/About/Plans/index'));
export const Policies = lazy(() => import('../pages/About/Policies/index'));
export const CollegeByelaws = lazy(() => import('../pages/About/CollegeByelaws/index'));
export const Contact = lazy(() => import('../pages/Contact/index'));
export const History = lazy(() => import('../pages/About/History/index'));
export const InstitutionsPage = lazy(() => import('../pages/About/Institutions/index'));
export const PresidentDesk = lazy(() => import('../pages/About/PresidentDesk/index'));
export const GeneralSecretaryDesk = lazy(() => import('../pages/About/GeneralSecretaryDesk/index'));
export const ExecutiveMembers = lazy(() => import('../pages/About/ExecutiveMembers/index'));

// Board Pages
export const DeeniyatBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.DeeniyatBoard })));
export const PrimaryBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.PrimaryBoard })));
export const HighSchoolBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.HighSchoolBoard })));
export const DegreeBoysBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.DegreeBoysBoard })));
export const DegreeGirlsBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.DegreeGirlsBoard })));
export const PUCBoysBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.PUCBoysBoard })));
export const PUCGirlsBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.PUCGirlsBoard })));
export const AITMBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.AITMBoard })));
export const AIMCABoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.AIMCABoard })));
export const ACEBoard = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.ACEBoard })));
export const WorksCommittee = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.WorksCommittee })));
export const SpecialInvitees = lazy(() => import('../pages/About/Boards').then(m => ({ default: m.SpecialInvitees })));

// Academics Pages
export const HomePage = lazy(() => import('../pages/HomePage/index'));
export const ProgramsOffered = lazy(() => import('../pages/Academics/ProgramsOffered/ProgramsOffered'));
export const HowToApply = lazy(() => import('../pages/Academics/HowToApply/HowToApply'));
export const KindergartenProgramDetail = lazy(() => import('../pages/Academics/Programs/Kindergarten'));
export const PrimaryProgramDetail = lazy(() => import('../pages/Academics/Programs/Primary'));
export const HighSchoolProgramDetail = lazy(() => import('../pages/Academics/Programs/HighSchool'));
export const PUC1ProgramDetail = lazy(() => import('../pages/Academics/Programs/PUC1'));
export const PUC2ProgramDetail = lazy(() => import('../pages/Academics/Programs/PUC2'));
export const BBAProgramDetail = lazy(() => import('../pages/Academics/Programs/BBA'));
export const BCAProgramDetail = lazy(() => import('../pages/Academics/Programs/BCA'));
export const BAProgramDetail = lazy(() => import('../pages/Academics/Programs/BA'));
export const BScProgramDetail = lazy(() => import('../pages/Academics/Programs/BSc'));
export const BComProgramDetail = lazy(() => import('../pages/Academics/Programs/BCom'));
export const MBAProgramDetail = lazy(() => import('../pages/Academics/Programs/MBA'));
export const MComProgramDetail = lazy(() => import('../pages/Academics/Programs/MCom'));
export const MAProgramDetail = lazy(() => import('../pages/Academics/Programs/MA'));
export const MCAProgramDetail = lazy(() => import('../pages/Academics/Programs/MCA'));
export const CSEProgramDetail = lazy(() => import('../pages/Academics/Programs/CSE'));
export const MechanicalProgramDetail = lazy(() => import('../pages/Academics/Programs/Mechanical'));
export const ECEProgramDetail = lazy(() => import('../pages/Academics/Programs/ECE'));
export const CSEDSProgramDetail = lazy(() => import('../pages/Academics/Programs/CSEDS'));
export const RoboticsAIProgramDetail = lazy(() => import('../pages/Academics/Programs/RoboticsAI'));
export const AIMLProgramDetail = lazy(() => import('../pages/Academics/Programs/AIML'));
export const CivilProgramDetail = lazy(() => import('../pages/Academics/Programs/Civil'));
export const EEEProgramDetail = lazy(() => import('../pages/Academics/Programs/EEE'));
export const CSAIProgramDetail = lazy(() => import('../pages/Academics/Programs/CSAI'));

// Student Corner Pages
export const MeritoriousStudents = lazy(() => import('../pages/Students/MeritoriousStudents/MeritoriousStudents'));
export const Scholarships = lazy(() => import('../pages/Students/Scholarships/Scholarships'));
export const Placements = lazy(() => import('../pages/Students/Placements/Placements'));

// Gallery
export const Gallery = lazy(() => import('../pages/Gallery/index'));

// Happenings
export const Eventlist = lazy(() => import('../pages/Happenings/EventList/EventList'));
export const Eventdetails = lazy(() => import('../pages/Happenings/EventDetails/EventDetails'));

// Careers
export const Careers = lazy(() => import('../pages/Careers/index'));

// Path to Component Mapping for Prefetching
export const prefetchMap: Record<string, () => Promise<unknown>> = {
    '/': () => import('../pages/HomePage/index'),
    '/about/introduction': () => import('../pages/About/Introduction/index'),
    '/about/history': () => import('../pages/About/History/index'),
    '/about/vision-mission': () => import('../pages/About/VisionMission/index'),
    '/about/management': () => import('../pages/About/Management/index'),
    '/about/objectives': () => import('../pages/About/Objectives/index'),
    '/about/plans': () => import('../pages/About/Plans/index'),
    '/about/policies': () => import('../pages/About/Policies/index'),
    '/about/college-byelaws': () => import('../pages/About/CollegeByelaws/index'),
    '/about/contact': () => import('../pages/Contact/index'),
    '/about/institutions': () => import('../pages/About/Institutions/index'),
    '/about/president-desk': () => import('../pages/About/PresidentDesk/index'),
    '/about/general-secretary-desk': () => import('../pages/About/GeneralSecretaryDesk/index'),
    '/about/executive-members': () => import('../pages/About/ExecutiveMembers/index'),
    '/about/boards/deeniyat': () => import('../pages/About/Boards'),
    '/about/boards/primary-school': () => import('../pages/About/Boards'),
    '/about/boards/high-school': () => import('../pages/About/Boards'),
    '/about/boards/degree-boys': () => import('../pages/About/Boards'),
    '/about/boards/degree-girls': () => import('../pages/About/Boards'),
    '/about/boards/pu-boys': () => import('../pages/About/Boards'),
    '/about/boards/pu-girls': () => import('../pages/About/Boards'),
    '/about/boards/aitm': () => import('../pages/About/Boards'),
    '/about/boards/aimca': () => import('../pages/About/Boards'),
    '/about/boards/ace': () => import('../pages/About/Boards'),
    '/about/boards/works': () => import('../pages/About/Boards'),
    '/about/boards/special-invitees': () => import('../pages/About/Boards'),
    '/academics/programs-offered': () => import('../pages/Academics/ProgramsOffered/ProgramsOffered'),
    '/academics/how-to-apply': () => import('../pages/Academics/HowToApply/HowToApply'),
    '/academics/programs/kindergarten': () => import('../pages/Academics/Programs/Kindergarten'),
    '/academics/programs/primary': () => import('../pages/Academics/Programs/Primary'),
    '/academics/programs/highschool': () => import('../pages/Academics/Programs/HighSchool'),
    '/academics/programs/puc1': () => import('../pages/Academics/Programs/PUC1'),
    '/academics/programs/puc2': () => import('../pages/Academics/Programs/PUC2'),
    '/academics/programs/bba': () => import('../pages/Academics/Programs/BBA'),
    '/academics/programs/bca': () => import('../pages/Academics/Programs/BCA'),
    '/academics/programs/ba': () => import('../pages/Academics/Programs/BA'),
    '/academics/programs/bsc': () => import('../pages/Academics/Programs/BSc'),
    '/academics/programs/bcom': () => import('../pages/Academics/Programs/BCom'),
    '/academics/programs/mba': () => import('../pages/Academics/Programs/MBA'),
    '/academics/programs/mcom': () => import('../pages/Academics/Programs/MCom'),
    '/academics/programs/ma': () => import('../pages/Academics/Programs/MA'),
    '/academics/programs/mca': () => import('../pages/Academics/Programs/MCA'),
    '/academics/programs/cse': () => import('../pages/Academics/Programs/CSE'),
    '/academics/programs/mechanical': () => import('../pages/Academics/Programs/Mechanical'),
    '/academics/programs/ece': () => import('../pages/Academics/Programs/ECE'),
    '/academics/programs/cse-ds': () => import('../pages/Academics/Programs/CSEDS'),
    '/academics/programs/robotics-ai': () => import('../pages/Academics/Programs/RoboticsAI'),
    '/academics/programs/aiml': () => import('../pages/Academics/Programs/AIML'),
    '/academics/programs/civil': () => import('../pages/Academics/Programs/Civil'),
    '/academics/programs/eee': () => import('../pages/Academics/Programs/EEE'),
    '/students/meritorious-students': () => import('../pages/Students/MeritoriousStudents/MeritoriousStudents'),
    '/students/scholarships': () => import('../pages/Students/Scholarships/Scholarships'),
    '/students/placements': () => import('../pages/Students/Placements/Placements'),
    '/gallery': () => import('../pages/Gallery/index'),
    '/happenings': () => import('../pages/Happenings/EventList/EventList'),
    '/careers': () => import('../pages/Careers/index'),
};

export const prefetch = (path: string) => {
    const loader = prefetchMap[path];
    if (loader) {
        loader();
    }
};
