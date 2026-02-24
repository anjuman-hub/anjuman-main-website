export interface Institution {
    id: string;
    name: string;
    category: string;
    location: string;
    establishment: string;
    description: string;
    image: string;
    stats: {
        students: string;
        faculty: string;
        courses: string;
    };
    website: string;
}

export const institutions: Institution[] = [
    // COLLEGES (4)
    {
        id: 'aitm',
        name: 'Anjuman Institute of Technology and Management',
        category: 'Higher Education',
        location: 'Anjumanabad, Bhatkal',
        establishment: '1980',
        description: 'A premier engineering and management institution providing quality technical education and fostering innovation through its various UG and PG programs.',
        image: '/images/institutions/aitm.avif',
        stats: { students: '1500+', faculty: '100+', courses: '8+' },
        website: 'https://aitm.edu.in/'
    },
    {
        id: 'aimca',
        name: 'Anjuman Institute of Management and Computer Application',
        category: 'Higher Education',
        location: 'Anjumanabad, Bhatkal',
        establishment: '1996',
        description: 'Dedicated to excellence in management and computer applications, preparing students for the dynamic corporate and tech world.',
        image: '/images/institutions/aimca.avif',
        stats: { students: '400+', faculty: '30+', courses: '4+' },
        website: 'https://www.aimca.in/'
    },
    {
        id: 'aasc',
        name: 'Anjuman Arts, Science, Commerce College & PG Centre',
        category: 'Higher Education',
        location: 'Bhatkal, Karnataka',
        establishment: '1968',
        description: 'One of the oldest and most prestigious colleges in the region, offering a wide range of undergraduate and postgraduate courses in traditional streams.',
        image: '/images/institutions/aascc.avif',
        stats: { students: '2000+', faculty: '120+', courses: '12+' },
        website: 'https://www.anjumancollege.in/'
    },
    {
        id: 'ace',
        name: 'Anjuman College of Education (B.Ed)',
        category: 'Higher Education',
        location: 'Bhatkal, Karnataka',
        establishment: '2004',
        description: 'Nurturing future educators with modern teaching methodologies and a strong ethical foundation.',
        image: '/images/institutions/ace.avif',
        stats: { students: '100+', faculty: '15+', courses: '1+' },
        website: 'https://ace.anjuman.edu.in/'
    },
    {
        id: 'acfw',
        name: 'Anjuman College for Women',
        category: 'Higher Education',
        location: 'Bhatkal, Karnataka',
        establishment: '1995',
        description: 'Empowering women through quality higher education in Arts, Science and Commerce.',
        image: '/images/institutions/acfw.avif',
        stats: { students: '600+', faculty: '40+', courses: '5+' },
        website: 'https://www.anjuman.edu.in/acw/'
    },

    // PU COLLEGES (2)
    {
        id: 'apuc-boys',
        name: 'Anjuman Pre-University College for Men',
        category: 'PU Education',
        location: 'Bhatkal, Karnataka',
        establishment: '1970',
        description: 'Providing a robust foundation for higher education in Science, Commerce, and Arts for boys.',
        image: '/images/institutions/apucm.avif',
        stats: { students: '800+', faculty: '40+', courses: '3' },
        website: 'https://apuc.anjuman.edu.in/'
    },
    {
        id: 'apuc-girls',
        name: 'Anjuman Pre-University College for Women',
        category: 'PU Education',
        location: 'Bhatkal, Karnataka',
        establishment: '1971',
        description: 'Empowering young women with quality pre-university education in a safe and supportive environment.',
        image: '/images/institutions/apucw.avif',
        stats: { students: '900+', faculty: '45+', courses: '3' },
        website: 'https://apucw.anjuman.edu.in/'
    },

    // HIGH SCHOOLS (4)
    {
        id: 'abhs',
        name: 'Anjuman Boys High School',
        category: 'High School',
        location: 'Bhatkal, Karnataka',
        establishment: '1919',
        description: 'The historic starting point of Anjuman, dedicated to building character and academic excellence for over a century.',
        image: '/images/institutions/ABHS.avif',
        stats: { students: '1200+', faculty: '60+', courses: 'State' },
        website: 'https://abhs.anjuman.edu.in/'
    },
    {
        id: 'aghs',
        name: 'Anjuman Girls High School',
        category: 'High School',
        location: 'Bhatkal, Karnataka',
        establishment: '1925',
        description: 'Fostering excellence in girls through balanced education of modern subjects and moral values.',
        image: '/images/institutions/aghs.avif',
        stats: { students: '1100+', faculty: '55+', courses: 'State' },
        website: 'https://aghs.anjuman.edu.in/'
    },
    {
        id: 'agemhs',
        name: 'Anjuman Girls English Medium High School',
        category: 'High School',
        location: 'Bhatkal, Karnataka',
        establishment: '1995',
        description: 'Providing modern English medium education for girls while maintaining cultural heritage.',
        image: '/images/institutions/agemhs.avif',
        stats: { students: '500+', faculty: '35+', courses: 'English' },
        website: 'https://agemhs.anjuman.edu.in/'
    },
    {
        id: 'iauhs',
        name: 'Islamia Anglo Urdu High School',
        category: 'High School',
        location: 'Bhatkal, Karnataka',
        establishment: '1940',
        description: 'Promoting linguistic skills and quality education through Urdu and English media.',
        image: '/images/institutions/iauhs.avif',
        stats: { students: '600+', faculty: '30+', courses: 'Urdu' },
        website: 'https://islamia.anjuman.edu.in/'
    },

    // PRIMARY SCHOOLS (5)
    {
        id: 'alfitrah',
        name: 'Alfitrah Pre-Islamic School',
        category: 'Primary School',
        location: 'Bhatkal, Karnataka',
        establishment: '2010',
        description: 'Focusing on early childhood development with a blend of modern and pre-islamic curriculum.',
        image: '/images/institutions/alfitrah.avif',
        stats: { students: '300+', faculty: '20+', courses: 'Pre-Primary' },
        website: 'https://alfitrah.anjuman.edu.in/'
    },
    {
        id: 'azad',
        name: 'Anjuman Azad Primary School',
        category: 'Primary School',
        location: 'Bhatkal, Karnataka',
        establishment: '1955',
        description: 'Providing a strong foundational education to hundreds of students in the local community.',
        image: '/images/institutions/aaps.avif',
        stats: { students: '700+', faculty: '35+', courses: 'Primary' },
        website: 'https://aaps.anjuman.edu.in/'
    },
    {
        id: 'noor',
        name: 'Anjuman Noor Primary School',
        category: 'Primary School',
        location: 'Bhatkal, Karnataka',
        establishment: '1960',
        description: 'Dedicated to basic education and holistic development of young learners.',
        image: '/images/institutions/anps.avif',
        stats: { students: '500+', faculty: '25+', courses: 'Primary' },
        website: 'https://anps.anjuman.edu.in/'
    },
    {
        id: 'emps',
        name: 'Anjuman English Medium Primary School',
        category: 'Primary School',
        location: 'Bhatkal, Karnataka',
        establishment: '1985',
        description: 'A modern primary school offering English medium education for all round development.',
        image: '/images/institutions/aeps.avif',
        stats: { students: '650+', faculty: '30+', courses: 'English' },
        website: 'https://aemhps.anjuman.edu.in/'
    },
];

export const categories = ['All', 'Higher Education', 'PU Education', 'High School', 'Primary School'];
