export interface ByeLawSection {
    title: string;
    points?: string[];
    subSections?: ByeLawSection[];
}

export const byeLawsContent: ByeLawSection[] = [
    {
        title: "College Motto",
        points: ["Stand by virtues with strength"],
    },
    {
        title: "BYE-LAWS of ANJUMAN ARTS, SCIENCE & COMMERCE COLLEGE, BHATKAL",
        subSections: [
            {
                title: "Definitions",
                points: [
                    "The 'Anjuman' shall mean the Anjuman Hami-e-Muslimeen, Bhatkal.",
                    "The 'College' shall mean the Anjuman Arts, Science & Commerce College, Bhatkal, U.K.",
                    "The 'Board' shall mean the College Board of the Anjuman.",
                    "The 'Executive Body' shall mean the executive body of the Anjuman.",
                ],
            },
            {
                title: "THE OBJECT OF THE BOARD",
                points: [
                    "The Board will carry out all the objects for imparting higher education as laid down in the object clause of the Anjuman.",
                    "The Board shall establish & maintain colleges and other educational institutions for imparting higher education in science, Arts, Commerce, Engineering etc.",
                    "To take over or affiliate other educational institutions, establish library, laboratory, reading rooms, typewriting institutions, and conduct literary & cultural activities, seminars, exhibitions, etc.",
                ],
            },
            {
                title: "COLLEGE BOARD",
                points: [
                    "The College Board shall consist of not less than 9 and not more than 17 members to be selected by the Anjuman managing committee.",
                    "The duration of the College Board will be four years, concurrent with the Executive Body.",
                    "The Principal of the college shall be the Ex-Officio Member Secretary of the College Board.",
                    "Office bearers: Chairman, Vice-Chairman, Ex-Officio General Secretary, Ex-Officio Member Secretary.",
                    "Meetings: At least once a month, notice 3 days prior, quorum 5 members, extraordinary meeting notice 24 hours, vacancies filled by parent body.",
                ],
            },
            {
                title: "DUTIES OF THE COLLEGE BOARD",
                points: [
                    "Responsible for general administration of the college including regulation of funds and approval of accounts.",
                    "Preparation of budget and comparing with actuals.",
                    "Appointments of Principal, teachers, and other staff.",
                    "Making rules for the college board.",
                ],
            },
            {
                title: "POWERS OF OFFICE BEARERS",
                subSections: [
                    {
                        title: "Chairman",
                        points: [
                            "Preside over all meetings of the College Board.",
                            "Have casting vote in case of tie.",
                            "Supervise all activities of the college with the help of the Principal.",
                            "In absence of Chairman, Vice-Chairman conducts meeting; if both absent, Board elects a member.",
                        ],
                    },
                    {
                        title: "General Secretary",
                        points: [
                            "Ex-Officio General Secretary of the College Board.",
                            "Establish rapport between college and Anjuman.",
                            "Arrange finance from Anjuman to the college.",
                            "Sign all important documents including appointments and terminations.",
                            "Joint Secretary represents in absence and can inspect accounts, classes, library, gymkhana, attend staff meetings.",
                        ],
                    },
                    {
                        title: "Secretary (Principal)",
                        points: [
                            "Issue agenda & notice for Board meeting.",
                            "Maintain minute book and get it approved.",
                            "Place requirements of staff, letters of resignation, and leave applications beyond seven days for approval.",
                            "Maintain accounts including income, expenditure, assets & liabilities; statements placed before Board quarterly.",
                            "Get accounts audited by Chartered Accountant within 3 months of year-end.",
                        ],
                    },
                    {
                        title: "Acting Secretary",
                        points: [
                            "Issue agenda & notices for meetings when authorized.",
                            "Record and maintain minutes book.",
                            "Carry on correspondence with collegiate authorities, university, staff, and others.",
                            "Prepare and present quarterly and yearly accounts.",
                            "Call for quotations and place orders for books, equipment, furniture, chemicals.",
                            "Carry on duties of Principal/Secretary in their absence as per Bye-Laws.",
                        ],
                    },
                ],
            },
            {
                title: "DUTIES OF THE PRINCIPAL",
                points: [
                    "Executive and academic head of the college.",
                    "Assign teaching, administrative, and extracurricular duties and ensure proper performance.",
                    "Disciplinary action subject to appeal to Chairman.",
                    "Responsible for student & staff discipline, safety of furniture, science apparatus, library books, fittings, office equipment.",
                    "Admissions, correspondence, enforcement of University rules.",
                    "Grant leave or permission to staff; leave >7 days reported to Board.",
                ],
            },
            {
                title: "CHAPTER II: Appointment & Service Condition of Staff",
                subSections: [
                    {
                        title: "Categories of Teachers",
                        points: ["As laid down by the University from time to time."],
                    },
                    {
                        title: "Qualifications",
                        points: ["As per University rules."],
                    },
                    {
                        title: "Pay Scale & Allowance",
                        points: ["Prescribed by University and State Government."],
                    },
                    {
                        title: "Selection of Staff",
                        points: [
                            "Permanent posts advertised; selection by College Board.",
                            "Temporary appointments by Chairman/Secretary for max 6 months without advertisement.",
                        ],
                    },
                    {
                        title: "Service Conditions",
                        points: [
                            "Probation: 2 years, extendable 1 year.",
                            "Increment during probation.",
                            "Confirmation after probation or 3 years continuous service.",
                            "Entitled for PF, pension, gratuity as per rules.",
                            "Termination: 1 month notice (probation), 3 months notice (confirmed).",
                            "Dismissal grounds: neglect, misconduct, breach of terms, unfitness, incompetence, abolition of post.",
                            "Inquiry required before dismissal; reasonable opportunity to be heard.",
                            "Suspension: half pay, no vocation, stay at headquarters.",
                            "Penalties: censure, withholding increment/promotion, demotion, recovery, fine, suspension, removal/dismissal.",
                            "Retirement: 55 years (extendable to 60).",
                            "Employees must devote fully, maintain decorum, not apply elsewhere without permission.",
                            "Confidentiality: No unauthorized communication or criticism of authorities.",
                            "Late attendance: Deduction or disciplinary action.",
                            "Abide by Principal’s instructions.",
                        ],
                    },
                    {
                        title: "Special Duties during Vacation",
                        points: [
                            "Carry out duties of other posts if required, max 2 months; additional allowance if approved.",
                            "Vacation department employees present during reopening and closing days.",
                            "Leave with medical grounds allowed to max 2 persons at a time.",
                        ],
                    },
                ],
            },
            {
                title: "CHAPTER III: Leave Rules",
                points: [
                    "Casual Leave: 15 days/year, max 7 at a time; proportional for new employees.",
                    "Half Pay Leave: 20 days/year, granted on medical certificate or private affairs; commuted leave max 240 days.",
                    "Earned Leave: 1/3 of period spent on duty, max 120 days; extendable to 180 days with medical certificate.",
                    "Extra Ordinary Leave: leave without pay; can be altered/refused by authority.",
                    "Applications >7 days submitted 15 days prior.",
                ],
            },
            {
                title: "CHAPTER IV: Miscellaneous",
                points: [
                    "Schedule of Appointment: register showing employees, qualifications, pay grades.",
                    "Amendments: 2/3 majority of total members; 15 days notice for meeting with proposed amendments.",
                    "Date of Commencement: 1st Jan 1974, except already finalized cases.",
                ],
            },
        ],
    },
];
