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

// Open opportunities verified on official sources September 10, 2026.
export const ALL_OPPORTUNITIES: Opportunity[] = [
  {
    id: "outright-senior-program-manager-2026",
    title: "Senior Program Manager, Global Rights and Grantmaking",
    org: "Outright International",
    category: "jobs",
    description: "A full-time role managing an international LGBTIQ+ rights grant portfolio. Applicants may be based in the Philippines; substantial multi-country grant-management experience and English and Spanish proficiency are required.",
    location: "Remote / Worldwide",
    deadline: "Open - no closing date posted",
    cover: "https://outrightinternational.bamboohr.com/jobs/share_image/38",
    link: "https://outrightinternational.bamboohr.com/careers/84",
    tags: ["LGBTIQ+ Rights", "Grantmaking", "Remote"],
    featured: true,
  },
  {
    id: "loveyourself-community-center-nurse-2026",
    title: "Community Center Nurse",
    org: "LoveYourself Inc.",
    category: "jobs",
    description: "LoveYourself is recruiting registered nurses to provide HIV and SOGIE education, PEP and PrEP support, STI management, counseling, and community-based screening. Applicants need an active Philippine nursing registration.",
    location: "Angono, Rizal / Lapu-Lapu City, Cebu",
    deadline: "Open - no closing date posted",
    cover: "https://loveyourself.ph/wp-content/uploads/2026/03/JOIN-OUR-TEAM-1-750x400.png",
    link: "https://loveyourself.ph/hiring-registered-nurse/",
    tags: ["Nursing", "HIV", "Healthcare", "Philippines"],
    featured: true,
  },
  {
    id: "pcafpd-scholarship-2026",
    title: "PCAFPD Scholarship for Filipino Students",
    org: "Peace Corps Alumni Foundation for Philippine Development",
    category: "scholarships",
    description: "Financial support for eligible Filipino undergraduate applicants, including tuition and fees, educational supplies, a living allowance, and a laptop. Applicants must demonstrate financial need, leadership, and commitment to Philippine development.",
    location: "Philippines",
    deadline: "September 30, 2026",
    cover: "https://rpcvphilippines.org/wp-content/uploads/2017/07/cropped-PCAFPDBanner_since1983_medsm.jpg",
    link: "https://rpcvphilippines.org/applications/",
    tags: ["Scholarship", "Filipino Students", "Financial Aid"],
    featured: true,
  },
  {
    id: "point-flagship-scholarship-2027",
    title: "Point Foundation Flagship Scholarship",
    org: "Point Foundation",
    category: "scholarships",
    description: "Awards of up to US$15,000 for LGBTQ+ and ally students enrolled full-time at accredited nonprofit colleges or universities in the United States. International students, including Filipinos who meet the enrollment rules, may apply.",
    location: "United States institutions",
    deadline: "November 19, 2026 at 5:00 PM PST",
    cover: "https://pointfoundation.org/hubfs/art%20-%20butterfly%20-%20community%20college%20scholarship%20(1).png",
    link: "https://pointfoundation.org/scholarships/flagship",
    tags: ["LGBTQ+", "Scholarship", "Higher Education"],
    featured: true,
  },
  {
    id: "digital-defenders-incident-response-fund",
    title: "Incident Response Fund",
    org: "Digital Defenders Partnership",
    category: "scholarships",
    description: "Rapid-response grants of up to US$5,000 for organizations and human-rights defenders, including LGBTQIA+ groups, responding to digital attacks or urgent digital-security threats.",
    location: "Global / Online application",
    deadline: "Open / Rolling",
    cover: "https://www.digitaldefenders.org/wp-content/uploads/2022/04/semilla.png",
    link: "https://www.digitaldefenders.org/incident-response-fund/",
    tags: ["Grant", "Digital Security", "Rapid Response"],
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
    link: "https://uafanp.org/our_grants",
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
    link: "https://uafanp.org/our_grants",
    tags: ["Movement Grant", "Advocacy", "LBTQI+ Rights"],
  },
  {
    id: "front-line-protection-grants",
    title: "Protection Grants for Human Rights Defenders",
    org: "Front Line Defenders",
    category: "scholarships",
    description: "Emergency grants of up to EUR7,500 for human-rights defenders at risk. Eligible costs can include physical and digital security, legal fees, and attack-related medical support.",
    location: "Global / Philippines eligible",
    deadline: "Open / Rolling",
    link: "https://www.frontlinedefenders.org/en/programme/protection-grants",
    tags: ["Protection", "Human Rights", "Emergency Grant"],
  },
  {
    id: "loveyourself-volunteer-2026",
    title: "LoveYourself Volunteer Engagement",
    org: "LoveYourself Inc.",
    category: "volunteer",
    description: "LoveYourself is accepting Philippine-based volunteers for virtual and in-person roles. The process includes an interview, orientation, and HIV and SOGIESC 101 training.",
    location: "Manila, Cebu, Bacolod, Baguio / Virtual",
    deadline: "Now accepting volunteers",
    cover: "https://loveyourself.ph/wp-content/uploads/2020/10/Logo-LoveYourself.jpg",
    link: "https://loveyourself.ph/be-a-volunteer/",
    tags: ["Volunteer", "HIV", "SOGIESC", "Philippines"],
    featured: true,
  },
];
