export interface Founder {
    id: number;
    name: string;
    role: string;
    image: string;
    objectPosition: string;
    description: string;
}

export interface OfficeBearer {
    name: string;
    role: string;
    image: string;
    objectPosition: string;
}

export const founders: Founder[] = [
    {
        id: 3,
        name: "Dr. Zubair Kola",
        role: "Vice President II",
        image: "/images/leaders/Dr. Zubair Kola.avif",
        objectPosition: "right center",
        description: "Dr. Zubair Kola serves Anjuman with dedication and insight as Vice President-II, playing a vital role in strengthening the Trust’s pursuit of educational excellence and community development..",
    },
    {
        id: 1,
        name: "Yunus Kazia",
        role: "President",
        image: "/images/leaders/yk-2.avif",
        objectPosition: "right center",
        description: "President Janab Yunus Kazia leads Anjuman with dedication and vision as the 11th President of the Trust, guiding the organization toward excellence in education and community service.",
    },
    {
        id: 2,
        name: "Sadique Pilloor",
        role: "Vice President I",
        image: "/images/leaders/sadique-2.avif",
        objectPosition: "right center",
        description: "Janab Sadique Pilloor contributes to Anjuman with commitment and foresight as Vice President-I, supporting the Trust’s mission of advancing educational excellence and community welfare.",
    },
    {
        id: 4,
        name: "Ishaq Shabandri",
        role: "General Secretary",
        image: "/images/leaders/ishaque-sha.png",
        objectPosition: "right center",
        description: "The Office of the General Secretary is held by Janab Mohammed Ishaque Shabandri, who oversees day-to-day operations and ensures effective coordination across all departments and institutions of Anjuman.",
    },
    {
        id: 5,
        name: "Jukaku Ismail",
        role: "Additional General Secretary",
        image: "/images/Ismail_Jukaku.jpg",
        objectPosition: "right center",
        description: "Jukaku Ismail serves Anjuman with commitment and insight as Additional General Secretary, playing a vital role in strengthening the Trust’s pursuit of educational excellence and community development..",
    },
];

export const officeBearers: OfficeBearer[] = [
    { name: "Janab Yunus Kazia", role: "President", image: "/images/yunus-Kazia.avif", objectPosition: "center" },
    { name: "Janab Mohammed Sadique Pilloor", role: "Vice President I", image: "/images/sadique.avif", objectPosition: "center 15%" },
    { name: "Dr. Mohammed Zubair Kola", role: "Vice President II", image: "/images/Zubair_kola.avif", objectPosition: "center 10%" },
    { name: "Janab Ishaque Shabandri", role: "General Secretary", image: "/images/Ishaq_shabandri.avif", objectPosition: "right 45%" },
    { name: "Janab Ismail Jukaku", role: "Additional General Secretary", image: "/images/Ismail_Jukaku.jpg", objectPosition: "center top" },
    { name: "Janab Syed Ahmed Parvez S.M", role: "Finance Secretary", image: "/images/parvez.avif", objectPosition: "center 50%" },
    { name: "Janab Syed Hashim S J", role: "Secretary, Works Committee", image: "/images/hashim.avif", objectPosition: "center 10%" },
    { name: "Janab Ansar Damda Abu", role: "Secretary, IT, AITM BOARD", image: "/images/ansar-damdaabu.avif", objectPosition: "center 30%" },
    { name: "Janab Abdul Hameed Athar Ruknuddin", role: "Secretary, Deenyath Board", image: "/images/Athar.jpg", objectPosition: "center 20%" },
    { name: "Janab Mohammed Aheed Mohtesham", role: "Secretary, AIMCA, ACE", image: "/images/Aheed_mohtesham.jpg", objectPosition: "center top" },
    { name: "Janab Faiyaz Ahmed Kola", role: "Secretary, Degree & PU College Board", image: "/images/FAIYAZ.avif", objectPosition: "center 50" },
    { name: "Janab Sadullah Ruknuddin", role: "Secretary, High School Board", image: "/images/Sadullah.avif", objectPosition: "center 25%" },
    { name: "Janab Afaque Mohtesham", role: "Secretary, Primary School Board", image: "/images/Afaque-Mohtesham.avif", objectPosition: "center 10%" },
];
