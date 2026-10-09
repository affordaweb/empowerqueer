export interface Opportunity {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  location?: string;
  deadline?: string;
  cover?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

// Open opportunities verified on official sources October 5, 2026.
export const ALL_OPPORTUNITIES: Opportunity[] = [
  {
    id: "loveyourself-hr-finance-internships-2026",
    title: "Human Resources and Finance Internships",
    org: "LoveYourself Inc.",
    category: "internships",
    description: "LoveYourself is accepting currently enrolled students for Human Resources and Finance internships. Applicants should be gender-sensitive and committed to an inclusive, non-discriminatory workplace.",
    location: "Kapitolyo, Pasig City",
    deadline: "Open - no closing date stated",
    cover: "https://loveyourself.ph/wp-content/uploads/2026/03/JOIN-OUR-TEAM-1-scaled.png",
    link: "https://loveyourself.ph/looking-for-interns/",
    tags: ["Internship", "Human Resources", "Finance", "Pasig"],
    featured: true,
  },
  {
    id: "loveyourself-community-center-nurse-2026",
    title: "Community Center Nurse",
    org: "LoveYourself Inc.",
    category: "jobs",
    description: "LoveYourself is recruiting registered nurses to provide HIV and SOGIE education, PEP and PrEP support, STI management, counseling, and community-based screening. Applicants need active Philippine nursing registration and at least one year of related experience.",
    location: "Angono, Rizal / Lapu-Lapu City, Cebu",
    deadline: "Open - no closing date posted",
    cover: "https://loveyourself.ph/wp-content/uploads/2026/03/JOIN-OUR-TEAM-1-750x400.png",
    link: "https://loveyourself.ph/hiring-registered-nurse/",
    tags: ["Nursing", "HIV", "Healthcare", "Philippines"],
    featured: true,
  },
  {
    id: "ship-pinalapit-community-advisory-board-2026",
    title: "PINALAPIT Study Community Advisory Board",
    org: "Sustained Health Initiatives of the Philippines",
    category: "advocacy",
    description: "SHIP is selecting seven community members to help shape a national study on delivering twice-yearly injectable PrEP alongside oral PrEP. Applicants must be at least 18 and identify with one of the study's key populations; an honorarium and training are provided.",
    location: "Philippines / In-person and virtual sessions",
    deadline: "October 23, 2026",
    cover: "https://www.ship.ph/wp-content/uploads/2026/09/Pinalapit-1.png",
    link: "https://www.ship.ph/join-the-pinalapit-study-community-advisory-board/",
    tags: ["PrEP", "Community Advisory Board", "HIV Research", "Philippines"],
    featured: true,
  },
  {
    id: "point-flagship-scholarship-2027",
    title: "Point Foundation Flagship Scholarship",
    org: "Point Foundation",
    category: "scholarships",
    description: "Awards of up to US$15,000 for LGBTQ+ community members and allies enrolled full-time at accredited nonprofit institutions in the United States. Applicants need a minimum 3.3 GPA; fully online programs are excluded.",
    location: "United States institutions",
    deadline: "November 19, 2026 at 5:00 PM PST",
    cover: "https://pointfoundation.org/hubfs/art%20-%20butterfly%20-%20community%20college%20scholarship%20(1).png",
    link: "https://pointfoundation.org/scholarships/flagship",
    tags: ["LGBTQ+", "Scholarship", "Higher Education"],
    featured: true,
  },
  {
    id: "uaf-security-wellbeing-grant",
    title: "Security and Well-being Grant",
    org: "Urgent Action Fund Asia and Pacific",
    category: "scholarships",
    description: "Grants of up to US$5,000 for eligible women and non-binary human-rights defenders or organizations in Asia and the Pacific facing immediate safety, medical, or psychosocial needs.",
    location: "Asia-Pacific / Philippines eligible",
    deadline: "Open / Rolling",
    cover: "https://uafanp.org/sites/uafanp.org/files/2021-11/Security_grant_image.png",
    link: "https://uafanp.org/security-and-well-being-grants",
    tags: ["Emergency Grant", "Safety", "LBTQI+ Rights"],
    featured: true,
  },
  {
    id: "uaf-resourcing-resilience-grant",
    title: "Resourcing Resilience Grant",
    org: "Urgent Action Fund Asia and Pacific",
    category: "scholarships",
    description: "Up to US$5,000 for eligible women and non-binary human-rights defenders responding to an unexpected advocacy opportunity or an urgent need to strengthen movement resilience.",
    location: "Asia-Pacific / Philippines eligible",
    deadline: "Open / Rolling",
    cover: "https://uafanp.org/sites/uafanp.org/files/2021-11/grant_img2.png",
    link: "https://uafanp.org/resourcing-resilience-grants",
    tags: ["Movement Grant", "Advocacy", "LBTQI+ Rights"],
  },
  {
    id: "front-line-protection-grants",
    title: "Protection Grants for Human Rights Defenders",
    org: "Front Line Defenders",
    category: "scholarships",
    description: "Emergency grants of up to EUR7,500 for human-rights defenders at risk. Eligible costs can include physical and digital security, legal fees, and attack-related medical support.",
    location: "Global / Philippines eligible",
    deadline: "Open - no deadline stated",
    link: "https://www.frontlinedefenders.org/en/programme/protection-grants",
    tags: ["Protection", "Human Rights", "Emergency Grant"],
  },
  {
    id: "loveyourself-volunteer-2026",
    title: "LoveYourself Volunteer Engagement",
    org: "LoveYourself Inc.",
    category: "volunteer",
    description: "LoveYourself accepts Philippine-based volunteers for virtual and in-person roles. The process includes an interview, orientation, and HIV and SOGIESC 101 training.",
    location: "Philippines / Virtual and in-person",
    deadline: "Open - no closing date stated",
    cover: "https://loveyourself.ph/wp-content/uploads/2020/10/Logo-LoveYourself.jpg",
    link: "https://loveyourself.ph/be-a-volunteer/",
    tags: ["Volunteer", "HIV", "SOGIESC", "Philippines"],
    featured: true,
  },
  {
    id: "loveyourself-junior-digital-artists-2026",
    title: "Junior Graphic Designer and Junior Video Editor",
    org: "LoveYourself Inc.",
    category: "jobs",
    description: "Entry-level creative roles supporting LoveYourself's digital campaigns. Recent graduates are welcome; graphic-design applicants need a portfolio, while video-editing samples or a demo reel are advantageous.",
    location: "Shaw Boulevard, Mandaluyong City",
    deadline: "Open on organizer page - confirm availability before applying",
    cover: "https://loveyourself.ph/wp-content/uploads/2026/03/JOIN-OUR-TEAM-1-750x400.png",
    link: "https://loveyourself.ph/hiring-digital-artists/",
    tags: ["Graphic Design", "Video Editing", "Entry Level", "Mandaluyong"],
    featured: true,
  },
];
