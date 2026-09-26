export type CategoryKey = "Pride" | "Health" | "Workshop" | "Advocacy" | "Cultural" | "Social";

export interface Event {
  id: string;
  title: string;
  /** Final event date in YYYY-MM-DD format, used to remove completed listings. */
  dateISO: string;
  dateDisplay: string;
  time: string;
  location: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
  ongoing?: boolean;
}

// Verified against official organizer pages on September 26, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "wagayway-sogiesc-101-ongoing",
    title: "SOGIESC 101 - Understanding Gender & Sexuality",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "An ongoing Wagayway Equality learning program introducing sexual orientation, gender identity, gender expression, and sex characteristics through accessible and affirming community education.",
    category: "Workshop",
    tags: ["Wagayway Equality", "SOGIESC", "Education", "Batangas"],
    image: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg",
    link: "/kopisodes/sogiesc-101-by-wagayway-equality-inc",
    ongoing: true,
  },
  {
    id: "wagayway-hiv-101-ongoing",
    title: "HIV 101 - Prevention, Testing & Community Care",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "Ongoing community education covering HIV transmission, prevention, testing, treatment, care, and stigma reduction for LGBTQIA+ people and allies.",
    category: "Health",
    tags: ["Wagayway Equality", "HIV", "Community Care", "Batangas"],
    image: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg",
    link: "/kopisodes/hiv-101-by-wagayway-equality",
    ongoing: true,
  },
  {
    id: "wagayway-human-rights-101-ongoing",
    title: "Human Rights 101 by Wagayway Equality",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "An ongoing introduction to equality, dignity, legal protections, and practical ways LGBTQIA+ community members can understand and assert their rights.",
    category: "Advocacy",
    tags: ["Wagayway Equality", "Human Rights", "Legal Education", "Batangas"],
    image: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
    link: "/kopisodes/human-rights-101-by-wagayway-equality",
    ongoing: true,
  },
  {
    id: "equality-desk-know-your-rights-ongoing",
    title: "Equality Desk - Know Your Rights",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Contact the Equality Desk for current hours",
    location: "2/F ENRO Building, P. Burgos Street, Batangas City",
    description: "An ongoing community access point providing information, support, and referrals for sexual and mental health, socio-economic concerns, discrimination, and human-rights issues.",
    category: "Advocacy",
    tags: ["Batangas City", "Equality Desk", "Know Your Rights", "Support"],
    image: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg",
    link: "/equality-desk/",
    ongoing: true,
  },
  {
    id: "puregold-cinepanalo-queer-films-2026",
    title: "Puregold CinePanalo 2026: Filipino Queer Films",
    dateISO: "2026-10-04",
    dateDisplay: "September 23-October 4, 2026",
    time: "See the official festival schedule",
    location: "Gateway Cineplex 18 and participating Ayala Malls cinemas",
    description: "The festival lineup includes Multwoh (Patay na Patay Sa'yo) and Patay Gutom, two Filipino queer supernatural films exploring romance, grief, family, and queer life.",
    category: "Cultural",
    tags: ["Film", "Queer Stories", "Metro Manila", "CinePanalo"],
    image: "https://static1.squarespace.com/static/603206e1372b9903d47694fa/65bf8e1cee2b201234f24a6b/6a904c319e7eab623869be5e/1787902332711/cinepanalo+2026.jpg?format=1500w",
    link: "https://www.sinegang.ph/press-releases/cinepanalo-2026-first-look-posters-fulllength-sgph",
    featured: true,
  },
  {
    id: "pfip-lead-forward-finale-2026",
    title: "PFIP Lead Forward: Capstone Sharing and Graduation",
    dateISO: "2026-10-06",
    dateDisplay: "October 6, 2026",
    time: "10:00 AM-5:00 PM",
    location: "Unilab Bayanihan Center, Pasig City",
    description: "The concluding session of PFIP's LGBTQIA+ leadership program features capstone presentations, leadership integration, and graduation. Confirm late-admission eligibility with PFIP before registering.",
    category: "Workshop",
    tags: ["Pasig", "Leadership", "LGBTQIA+ Professionals", "PFIP"],
    image: "https://app.glueup.com/resources/public/images/fixed-width/600/ec736bf2-742b-418a-a4ac-0993a8ce6464.jpg",
    link: "https://app.glueup.com/event/pfip-lead-forward-172038/",
  },
  {
    id: "pfip-vismin-regional-forum-2026",
    title: "PFIP Visayas-Mindanao Regional Forum",
    dateISO: "2026-10-22",
    dateDisplay: "October 22, 2026",
    time: "Schedule to be announced by PFIP",
    location: "TOA Global, Cebu",
    description: "PFIP's regional forum brings workplace inclusion conversations and LGBTQIA+ professional networking to participants from Visayas and Mindanao. Confirm final details with PFIP before attending.",
    category: "Advocacy",
    tags: ["Cebu", "Workplace Inclusion", "Visayas", "Mindanao"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
    link: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
  },
  {
    id: "pfip-transgender-experience-2026",
    title: "The Transgender Experience",
    dateISO: "2026-11-13",
    dateDisplay: "November 13, 2026",
    time: "Schedule to be announced by PFIP",
    location: "Online",
    description: "A PFIP awareness session on understanding gender-expansive and gender-nonconforming identities. Check PFIP's learning calendar for registration updates.",
    category: "Workshop",
    tags: ["Transgender", "Gender Expansive", "Workplace Inclusion", "PFIP"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/8-1.png",
    link: "https://pfip.com.ph/wp-content/uploads/2026/04/8-1.png",
  },
  {
    id: "qcinema-2026",
    title: "14th QCinema International Film Festival",
    dateISO: "2026-11-22",
    dateDisplay: "November 13-22, 2026",
    time: "Screening schedule to be announced",
    location: "Quezon City",
    description: "QCinema returns with Filipino and international cinema, including confirmed QCShorts projects exploring queer embodiment and gender expression. The full RainbowQC lineup is still to be announced.",
    category: "Cultural",
    tags: ["Quezon City", "Film", "Queer Stories", "QCinema"],
    image: "https://qcinema.ph/wp-content/uploads/qcs2026grantees.jpg",
    link: "https://qcinema.ph/news/qcinema-introduces-the-2026-batch-of-qcshorts-filmmakers/",
    featured: true,
  },
];
