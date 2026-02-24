
export interface EventType {
    id: number;
    title: string;
    date: string;
    day: string;
    month: string;
    time: string;
    venue: string;
    category: string;
    heroImage: string;
    galleryImages?: string[];
    attendees: string;
    status: 'past' | 'upcoming';
    description?: string;
}

export const allEvents: EventType[] = [
    {
        id: 1,
        title: 'Anjuman centre of excellece Hosts Four-Day Teachers’ Workshop with CIGI',
        date: '2025-10-18',
        day: '18',
        month: 'Oct',
        time: '10:00 AM - 1:00 PM',
        venue: 'Main Auditorium',
        category: 'Seminar',
        heroImage: '/images/events/CIGI.jpg',
        attendees: '120+ attendees expected',
        status: 'past',
        description: `A four-day training workshop for teachers and lecturers of Anjuman Hami-e-Muslimeen institutions, held from October 18 to 21 at the seminar hall of the Anjuman Institute of Technology and Management (AITM), concluded successfully. The programme aimed to enhance teaching skills, provide career guidance strategies, and strengthen faculty capacity to better support student development.

    Dr. Zubair Kola, Vice President of Anjuman, highlighted the benefits of such capacity-building initiatives, noting that the Anjuman Centre for Excellence prepares students for CET, NEET, CA, UPSC, and other competitive examinations, as well as government employment. He emphasized the value of participant feedback in improving future programmes.

    Muhammad Sadiq Pilloor, First Vice President of Anjuman, described the Centre as the realization of former President Advocate Muzammil Kazia’s vision, praising the team for its excellent work in promoting skill development. Advocate Kazia added that the workshop effectively strengthened the teaching faculty, enabling them to better guide students towards competitive exams and career opportunities.

    Trainer Mohammad Anas, Anjuman Additional Secretary Mohammad Ismail Jukaku, and others shared their insights during the programme. The welcome address was delivered by Yaseen Askiri, convener of the training committee, and Mohammad Mohsin, Principal of the BBA College, compered the sessions.`
    },
    {
        id: 2,
        title: '78th Independence Day Celebration',
        date: '2026-08-15',
        day: '15',
        month: 'Aug',
        time: '8:30 AM - 11:30 AM',
        venue: 'Anjuman Campus Ground',
        category: 'National Event',
        heroImage: '/images/events/ind.jpg',
        attendees: '1000+ students and faculty',
        status: 'upcoming',
        description: "Join us for a grand celebration of India's 78th Independence Day. The event will feature the ceremonial flag hoisting, a disciplined march past by our students, and a series of patriotic cultural performances. It is a day to honor our heritage, celebrate our freedom, and recommit ourselves to the service of the nation. All students, parents, and alumni are cordially invited to witness this proud moment at the Anjuman Campus Ground."
    },
    {
        id: 3,
        title: 'Proud Runners-Up at KUD Cricket Tournament',
        date: '2024-05-01',
        day: '01',
        month: 'May',
        time: '9:00 AM - 4:00 PM',
        venue: 'Hubli, Karnataka',
        category: 'Sports',
        heroImage: '/images/events/cricket-event5.jpg',
        galleryImages: ['/images/events/cricket-event1.jpg', '/images/events/cricket-event2.jpg', '/images/events/cricket-event3.jpg', '/images/events/cricket-event5.jpg'],
        attendees: '90 participants',
        status: 'past',
        description: `The Bhatkal Anjuman Institute of Management and Computer Application (AIMCA) demonstrated exceptional prowess, securing the runners-up position in the Karnataka University Dharwad (KUD) Second Zone Intercollegiate Cricket Tournament held in Hubli. The tournament featured eight teams, including Anjuman College Bhatkal, Oxford College Hubli, Anjuman Degree College Bhatkal, Guru Sudhindra College Bhatkal, Global College Hubli, JG College Hubli, Nehru College Hubli, and SK Arts College Hubli.

    AIMCA showcased a stellar performance, defeating Oxford College Hubli by an impressive 110 runs in the first quarter-final match. Anjuman, batting first, posted a formidable total of 250 runs in 20 overs, with Marwan Faqi Ahmada scoring an unbeaten 141 runs off just 67 balls, including six sixes and 15 fours. Zeeshan Mukhtasar contributed 50 runs to the team's total. Oxford College was subsequently bowled out for 140 runs. Khurram Gawai, the captain of Bhatkal Anjuman, excelled with the ball, taking three wickets for 23 runs in three overs, securing a convincing victory.

    In the semi-final, Bhatkal AIMCA continued their dominant display against Global College Hubli, amassing 234 runs while batting first. Marwan Faqi Ahmada once again shone with the bat, scoring 104 runs off 52 balls, including 18 fours and one six. Anjuman's bowler Faiz Qazi was instrumental in restricting Global College to 124 runs, claiming five wickets in four overs.

    The final match, shortened to 15 overs, saw Bhatkal AIMCA facing GJ Commerce College Hubli. Bhatkal scored 144 runs, courtesy of Marwan's rapid 60 runs. However, GJ Commerce College Hubli emerged victorious, chasing down the target with 145 runs for the loss of three wickets.

    Marwan Faqi Ahmada was named the best batsman of the tournament for his outstanding batting performance throughout the tournament. He was also awarded the man of the match in both the quarter-finals and semi-finals, highlighting his pivotal role in advancing his team to the finals.

    The Bhatkal AIMCA team, led by Khurram Gawai, included Marwan Faqi Ahmada, Mohammed Fahiman, Uaina Siddibapa, Zeeshan Mukhtasar, Faiz Qazi, Salah Hajika, Sameed Ahmed, Mohammad Sufiyan, Ismail Siddiqua, Mohammed Auf, Mazeen Kashimji, Hammad Kola, Swaleh Arzan, and Zaman Jabali. Mohan Mesta, Physical Education Director, served as the team coach, was also part of the team.

    Anjuman Hami e Muslimeen Bhatkal's President, Mohammed Yunus Qazia, General Secretary Ishaq Shabandari, Additional General Secretary Aftab Qamri, along with other officials and executive members of Anjuman, including AIMCA Principal Mohammed Mohsin, extended their congratulations to the entire team for their outstanding performance and securing the runners-up position in the tournament.`
    },
    {
        id: 4,
        title: 'Participation in Todays Human Chain Program',
        date: '2024-11-15',
        day: '15',
        month: 'Nov',
        time: '6:00 PM - 9:00 PM',
        venue: 'Convention Hall',
        category: 'Meetup',
        heroImage: '/images/events/human-chain1.jpg',
        attendees: '300+ alumni returning',
        status: 'past',
        description: "Human Chain Program: A Symbol of Unity and Democracy\n\nIn a powerful display of unity and commitment to democratic values, students and faculty members from all institutions participated in today’s Human Chain Program. The event aimed to symbolize the strength of togetherness and the importance of standing for collective causes.\n\nThis initiative reflects our dedication to fostering a sense of civic responsibility and cooperation among the younger generation. By joining hands, participants demonstrated their solidarity and belief in the principles of democracy, equality, and communal harmony.\n\nThe event was a resounding success, with hundreds of students and faculty members actively participating, showcasing their enthusiasm and dedication. This human chain is not just a physical connection, but a reminder of how we are all bound by shared responsibilities and common goals.\n\nTransport arrangements were made for female students, ensuring smooth participation for everyone involved. We are grateful to the authorities and the institutions for their support in making this event a meaningful and impactful one.\n\nTogether, we move forward, united in purpose and driven by the ideals of democracy and unity."
    },
    {
        id: 5,
        title: 'STEM Fest 2025',
        date: '2024-11-16',
        day: '16',
        month: 'Nov',
        time: '10:00 AM - 5:00 PM',
        venue: 'College Campus',
        category: 'Festival',
        heroImage: '/images/events/stem8.jpg',
        galleryImages: ['/images/events/stem1.jpg', '/images/events/stem2.jpg', '/images/events/stem3.jpg', '/images/events/stem4.jpg', '/images/events/stem5.jpg', '/images/events/stem6.jpg', '/images/events/stem7.jpg', '/images/events/stem8.jpg'],
        attendees: '500+ attendees',
        status: 'past',
        description: 'The Anjuman Institute of Technology and Management (AITM), Bhatkal, on Saturday hosted STEM Fest 2025, a one-day science and innovation festival organised exclusively for Pre-University Science students from across Karnataka. Held as part of the Anjuman Day celebrations, the fest aimed at fostering scientific curiosity and encouraging hands-on learning in the fields of Science, Technology, Engineering and Mathematics (STEM).\n\nMore than 800 PU Science students from various districts participated in the event, creating a vibrant atmosphere of innovation, learning and collaboration. The event featured a wide range of activities including science exhibitions, robotics demonstrations, coding competitions, and interactive workshops. Students from various departments presented their projects, highlighting their creativity and problem-solving skills.\n\nThe fest provided a platform for students to explore their interests in STEM fields and inspired many to pursue careers in these areas. The event was a great success, fostering a culture of innovation and scientific inquiry within the college community. Chief Guest Mr. Mohammed Ishaque Shabandri, General Secretary of Anjuman Hami-e-Muslimeen (AHM), lauded AITM for creating a meaningful platform that promotes scientific thinking among pre-university students.\n\nSpecial addresses were delivered by Mr. Mohammed Ansar Damda Abu, Secretary, AITM Board, and Mr. Mohammed Ismail Jukaku, Additional General Secretary, AHM. Mr. Mohammed Sadique Pilloor, Vice President-I of AHM, delivered the Presidential Address, followed by a Vote of Thanks proposed by Mr. Nader Ahmed.\n\nAs part of STEM Fest 2025, a wide range of competitive and interactive events—including Model Expo, Quiz Competition, Start-up Pitch, Puzzle Solving, Robo Race and others—were organised, drawing enthusiastic participation from the students. The fest concluded with a valedictory ceremony at 4:30 PM, during which winners were honoured with certificates.\n\nParticipation certificates were awarded to all students in recognition of their involvement and enthusiasm. The AITM management expressed heartfelt appreciation to the participating students, faculty coordinators and student volunteers for contributing to the grand success of STEM Fest 2025 and making it an enriching learning experience for young science aspirants.'
    },
    {
        id: 6,
        title: 'Helmet Traffic Awareness Programme',
        date: '2025-10-08',
        day: '08',
        month: 'Oct',
        time: '10:00 AM - 2:00 PM',
        venue: 'College Campus',
        category: 'Awareness Programme',
        heroImage: '/images/misc-optimized/helmetevent-1.webp',
        galleryImages: ['/images/misc-optimized/helmetevent-1.webp', '/images/misc-optimized/helmetevent-2.webp', '/images/misc-optimized/helmetevent-3.webp'],
        attendees: '200+ participants',
        status: 'past',
        description: 'The Helmet Traffic Awareness Programme was conducted by AIMCA, Bhatkal on October 8, 2025. The event aimed to promote the use of helmets and awareness about road safety among two-wheeler riders. It was jointly organized by Majlis-e-Islah wa Tanzeem, Anjuman Hami-e-Muslimeen, and the Uttara Kannada District Police.\n\nThe main objective was to reduce head injuries and fatalities caused by road accidents. Students and citizens were educated on the importance of disciplined and lawful driving. The campaign encouraged responsible behavior and a culture of safety awareness. Mr. Nagraj Kolershetty, Tahsildar of Bhatkal, served as the chief guest. Key speakers included Mr. Divakar (CPI, Bhatkal Town) and Adv. Syed Imran Lanka.\n\nThey shared valuable insights on helmet safety, legal aspects, and civic responsibility. Mr. Inayatullah Shabandri and Mr. Mohammed Mohsin also addressed the gathering. A road safety pledge was administered by Mr. Naveen, PSI of Bhatkal Police Station. Helmets were distributed to students who presented valid driving licenses. This initiative encouraged licensed youth to follow safety rules. The program showed that helmets can reduce fatal head injuries by 60 percent. It also helps prevent 70 percent of brain injuries in road accidents. The event inspired teamwork between law enforcement, educational institutions, and the community. Students actively participated, showing enthusiasm for the cause. The key message, \'Helmet On – Safety On,\' was reinforced throughout the event. It was a successful step toward promoting a safe and responsible driving culture in Bhatkal. The programme concluded with a call for continuous awareness and disciplined driving.'
    }
];
