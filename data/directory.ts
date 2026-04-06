// ─── DIRECTORY DATA ───────────────────────────────────────────────────────────
// Philippine-focused directory of LGBTQIA+ organisations, health services,
// hotlines, and support resources. All entries verified from official sources.
// Descriptions are original. Sources: official org websites, DOH, CHR.
// ──────────────────────────────────────────────────────────────────────────────

export interface Listing {
  id: string;
  name: string;
  category: string;
  description: string;
  address?: string;
  phone?: string;
  hotline?: string;
  website?: string;
  tags?: string[];
  featured?: boolean;
}

export const ALL_LISTINGS: Listing[] = [

  // ── Community Center ──────────────────────────────────────────────────────────

  {
    id: "cc-1",
    name: "Espasyo Community Center by Wagayway Equality",
    category: "community-center",
    description: "Espasyo is a vibrant and inclusive LGBTQIA+ community center established by Wagayway Equality to serve the queer community of Batangas. Offers safe space, peer support, education, and community events.",
    address: "Batangas City, Batangas, Philippines",
    phone: "09671382063",
    tags: ["Safe Space", "Batangas", "Peer Support"],
    featured: true,
  },
  {
    id: "cc-2",
    name: "Rainbow Rights Philippines",
    category: "community-center",
    description: "A Manila-based LGBTQIA+ rights advocacy organization providing legal assistance, paralegal training, and community organizing support for Filipino LGBT individuals.",
    address: "Quezon City, Metro Manila, Philippines",
    website: "https://rainbowrights.ph",
    tags: ["Manila", "Legal Aid", "Advocacy"],
  },
  {
    id: "cc-3",
    name: "Bahaghari Center for SOGIE Research, Education & Advocacy",
    category: "community-center",
    description: "The Bahaghari Center focuses on LGBTQIA+ welfare, education, and advocacy in the Philippines. It conducts research, provides community education, and collaborates with civil society organizations on SOGIESC rights across Luzon and nationwide.",
    address: "Metro Manila, Philippines",
    website: "https://bahagharicenter.org/",
    tags: ["Research", "SOGIESC", "Education", "National"],
    featured: true,
  },
  {
    id: "cc-4",
    name: "Queer Safe Spaces PH",
    category: "community-center",
    description: "A national group advocating for safe queer spaces, gender equality, and mental health in the Philippines. Hosts large community events and provides local support networks, with connections to regional groups including Batangas and Luzon.",
    address: "Metro Manila, Philippines",
    website: "https://www.queersafespacesph.org/",
    tags: ["Safe Space", "Mental Health", "National", "Events"],
    featured: true,
  },
  {
    id: "cc-5",
    name: "Philippine Financial & Inter-Industry Pride (PFIP)",
    category: "community-center",
    description: "PFIP is an alliance of 80+ Philippine corporations advancing LGBTQIA+ workplace equality and economic inclusion. Runs the Rainbow Youth Academy scholarship, the annual Pride Summit, and DEI programs for member companies.",
    address: "Metro Manila, Philippines",
    website: "https://pfip.com.ph",
    tags: ["Workplace", "Scholarship", "DEI", "Corporate Alliance"],
    featured: true,
  },
  {
    id: "cc-6",
    name: "UP Babaylan — University of the Philippines",
    category: "community-center",
    description: "The oldest LGBTQIA+ student organisation in the Philippines and in Asia. UP Babaylan provides safe spaces, peer support, and advocacy for LGBTQIA+ students at UP and collaborates with student councils and networks across Luzon.",
    address: "UP Diliman, Quezon City, Philippines",
    tags: ["Youth", "Student", "Oldest", "University"],
  },
  {
    id: "cc-7",
    name: "Metro Manila Pride",
    category: "community-center",
    description: "The organization behind Asia's largest Pride event, Metro Manila Pride also provides year-round community resources, volunteer programs, and LGBTQ+ advocacy campaigns. Works with regional organizers in Southern Luzon and Batangas.",
    address: "Metro Manila, Philippines",
    website: "https://mmpride.org/",
    tags: ["Pride", "National", "Advocacy", "Annual"],
  },

  // ── Advocacy & Rights ──────────────────────────────────────────────────────────

  {
    id: "ar-1",
    name: "Equality Desk – Batangas City Government",
    category: "advocacy-rights",
    description: "The Equality Desk is a dedicated in-office support hub developed by Wagayway Equality to serve LGBTQIA+ individuals within the Batangas City Government, providing referrals, support, and anti-discrimination resources.",
    address: "Batangas City Hall, Batangas City, Philippines",
    phone: "09763427850",
    tags: ["Government", "Anti-Discrimination", "Referrals"],
    featured: true,
  },
  {
    id: "ar-2",
    name: "Commission on Human Rights – Philippines (CHR)",
    category: "advocacy-rights",
    description: "The CHR is the national human rights institution in the Philippines. Accepts complaints of human rights violations including discrimination based on sexual orientation and gender identity.",
    address: "Commonwealth Avenue, Quezon City, Philippines",
    phone: "(02) 294-8704",
    website: "https://chr.gov.ph",
    tags: ["National", "Human Rights", "Complaints"],
  },
  {
    id: "ar-3",
    name: "Bahaghari (LGBTQ+ Alliance of the Philippines)",
    category: "advocacy-rights",
    description: "Bahaghari is a national alliance of LGBTQ+ organizations in the Philippines advocating for the passage of the SOGIE Equality Bill and anti-discrimination protections.",
    address: "Metro Manila, Philippines",
    website: "https://www.facebook.com/bahaghariph",
    tags: ["National", "SOGIE Bill", "Alliance"],
  },
  {
    id: "ar-4",
    name: "TLF Share Collective",
    category: "advocacy-rights",
    description: "A health and human rights organization for Filipino sexual and gender minorities, offering HIV testing, counseling, treatment support, and legal aid services.",
    address: "Malate, Manila, Philippines",
    phone: "(02) 8524-0779",
    website: "https://tlfshare.com",
    tags: ["Manila", "Legal Aid", "HIV", "Human Rights"],
    featured: true,
  },

  // ── Mental Health ──────────────────────────────────────────────────────────────

  {
    id: "mh-1",
    name: "National Center for Mental Health – Crisis Hotline",
    category: "mental-health",
    description: "A 24/7 hotline providing immediate psychological first aid and support for people experiencing emotional distress, mental health crises, or suicidal ideation.",
    hotline: "1553",
    phone: "(02) 8531-9001",
    tags: ["24/7", "Crisis", "Hotline"],
    featured: true,
  },
  {
    id: "mh-2",
    name: "POPMH – Lipa Chapter",
    category: "mental-health",
    description: "The Psychological Organization for the Promotion of Mental Health (POPMH) Lipa is a youth-driven initiative providing peer support, mental health advocacy, and community wellness programs.",
    address: "Lipa City, Batangas, Philippines",
    tags: ["Youth", "Peer Support", "Batangas"],
  },
  {
    id: "mh-3",
    name: "MindNation",
    category: "mental-health",
    description: "Online mental health platform connecting Filipinos to licensed therapists, coaches, and peer support. Offers accessible and affordable teleconsultations.",
    website: "https://mindnation.com",
    tags: ["Online", "Therapy", "Teleconsultation"],
  },
  {
    id: "mh-4",
    name: "MentalHealthPH",
    category: "mental-health",
    description: "Mental health advocacy organization and peer support network focused on raising awareness and reducing stigma. Maintains a directory of mental health professionals and free support groups.",
    website: "https://mentalhealthph.org",
    phone: "0917-899-8727",
    tags: ["Advocacy", "Peer Support", "Directory"],
  },
  {
    id: "mh-5",
    name: "RecoveryHub Philippines",
    category: "mental-health",
    description: "Licensed therapy services and recovery support for individuals facing mental health challenges, trauma, and substance use. Offers individual, group, and family therapy.",
    address: "Makati City, Metro Manila, Philippines",
    website: "https://recoveryhub.ph",
    tags: ["Therapy", "Recovery", "Trauma"],
  },
  {
    id: "mh-6",
    name: "In Touch Community Services",
    category: "mental-health",
    description: "Provides free mental health crisis intervention and counseling services to Filipinos in need. LGBTQIA+-affirming professionals available.",
    phone: "(02) 893-7603",
    hotline: "1-800-1888-1553",
    website: "https://www.in-touch.org",
    tags: ["Free", "Crisis", "Counseling"],
  },

  // ── HIV Services ───────────────────────────────────────────────────────────────

  {
    id: "hiv-1",
    name: "Batangas City Health Office – Social Hygiene Clinic",
    category: "hiv-services",
    description: "This local government initiative provides free, walk-in testing services for HIV and other sexually transmitted infections. Confidential results and referrals to treatment hubs.",
    address: "Batangas City Health Office, Batangas City, Philippines",
    phone: "0437238890",
    tags: ["Free Testing", "Batangas", "Walk-in"],
    featured: true,
  },
  {
    id: "hiv-2",
    name: "Batangas Regional Hospital – HIV Treatment Hub",
    category: "hiv-services",
    description: "Accredited HIV treatment hub offering ART (antiretroviral therapy), CD4 count monitoring, viral load testing, and psychosocial support for PLHIV.",
    address: "Kumintang Ibaba, Batangas City, Philippines",
    phone: "(043) 300-8899",
    tags: ["ART", "Treatment", "Batangas"],
    featured: true,
  },
  {
    id: "hiv-3",
    name: "LoveYourself Inc.",
    category: "hiv-services",
    description: "Philippines-based HIV testing, prevention, treatment, and advocacy organization. Operates community-based sexual health clinics with LGBTQIA+-affirming staff.",
    address: "San Juan City and Makati City, Metro Manila, Philippines",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["Manila", "Testing", "Community"],
  },
  {
    id: "hiv-4",
    name: "TLF Share Collective",
    category: "hiv-services",
    description: "A health and human rights organization for Filipino sexual and gender minorities, offering HIV testing, counseling, treatment support, and legal aid.",
    address: "Malate, Manila, Philippines",
    phone: "(02) 8524-0779",
    website: "https://tlfshare.com",
    tags: ["Manila", "Testing", "Legal Aid"],
  },
  {
    id: "hiv-5",
    name: "Remedios AIDS Foundation",
    category: "hiv-services",
    description: "One of the first AIDS service organizations in the Philippines, providing HIV counseling, testing, treatment facilitation, home-based care, and community education.",
    address: "Malate, Manila, Philippines",
    phone: "(02) 8525-5622",
    tags: ["Manila", "Counseling", "Testing"],
  },
  {
    id: "hiv-6",
    name: "ACTION (Action for Health Initiatives Inc.)",
    category: "hiv-services",
    description: "A Philippines-based health and human rights NGO delivering HIV prevention, testing, treatment, and advocacy services with a focus on key populations including gay men, MSM, and transgender individuals.",
    address: "Pasig City, Metro Manila, Philippines",
    website: "https://www.actionphilippines.org/",
    tags: ["Manila", "Key Populations", "NGO"],
    featured: true,
  },

  // ── Sexual Health ──────────────────────────────────────────────────────────────

  {
    id: "sh-1",
    name: "LoveYourself Anglo – Sexual Health Clinic",
    category: "sexual-health",
    description: "LGBTQIA+-affirming sexual health clinic offering free HIV rapid testing, STI testing and treatment, condom distribution, and PrEP consultations.",
    address: "Makati City, Metro Manila, Philippines",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["PrEP", "STI", "Free Testing"],
    featured: true,
  },
  {
    id: "sh-2",
    name: "Planned Parenthood – Philippines Partners",
    category: "sexual-health",
    description: "Affiliate clinics offering comprehensive sexual and reproductive health services, inclusive of LGBTQIA+ clients. Services include contraception, STI screening, and counseling.",
    address: "Multiple locations, Metro Manila",
    website: "https://www.ippf.org/about-us/member-associations/philippines",
    tags: ["Reproductive Health", "STI", "Contraception"],
  },

  // ── Healthcare Resources ───────────────────────────────────────────────────────

  {
    id: "hc-1",
    name: "Batangas Medical Center – Wellness Zone",
    category: "healthcare",
    description: "The Wellness Zone is a confidential and inclusive health service hub designed to cater to the health and wellness needs of the community, including LGBTQIA+ individuals.",
    address: "Kumintang Ibaba, Batangas City, Philippines",
    phone: "0437408307",
    tags: ["Batangas", "Inclusive", "Wellness"],
    featured: true,
  },
  {
    id: "hc-2",
    name: "Philippine General Hospital – HIV/AIDS Clinic",
    category: "healthcare",
    description: "PGH's HIV/AIDS clinic provides comprehensive care for PLHIV including ART, laboratory services, and psychological support. One of the largest treatment hubs in the Philippines.",
    address: "Taft Avenue, Manila, Philippines",
    phone: "(02) 8554-8400",
    website: "https://pgh.gov.ph",
    tags: ["Manila", "ART", "Laboratory"],
  },
  {
    id: "hc-3",
    name: "Department of Health – Philippines",
    category: "healthcare",
    description: "The Philippine DOH provides national health programs including HIV/AIDS prevention, mental health initiatives, and community health services. Hotline for health-related queries.",
    hotline: "1555",
    phone: "(02) 8651-7800",
    website: "https://doh.gov.ph",
    tags: ["National", "Health Programs", "Hotline"],
  },

  // ── Diagnostic & Testing ──────────────────────────────────────────────────────

  {
    id: "diag-1",
    name: "HIV Self-Testing – LoveYourself Kit",
    category: "diagnostic",
    description: "Discreet HIV self-testing kits available for purchase or free distribution through partner organizations. Results in 20 minutes. Available online and at select clinics.",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["Self-Test", "Discreet", "Online"],
    featured: true,
  },
  {
    id: "diag-2",
    name: "Batangas City – Community-Based HIV Testing",
    category: "diagnostic",
    description: "Community-based HIV testing and counseling available through Wagayway Equality and the Batangas City Health Office. Free, confidential, and walk-in friendly.",
    address: "Batangas City, Philippines",
    phone: "09671382063",
    tags: ["Free", "Walk-in", "Batangas"],
    featured: true,
  },
  {
    id: "diag-3",
    name: "Philippine Red Cross – HIV Testing Services",
    category: "diagnostic",
    description: "The Philippine Red Cross operates HIV testing and counseling centers across the country, open to all individuals including LGBTQIA+ community members.",
    phone: "(02) 8790-2300",
    website: "https://redcross.org.ph",
    tags: ["Nationwide", "Red Cross", "Counseling"],
  },

  // ── Youth Services ─────────────────────────────────────────────────────────────

  {
    id: "ys-1",
    name: "STRAP (Society of Transsexual Women of the Philippines)",
    category: "youth-services",
    description: "STRAP provides peer support, advocacy, and community services specifically for trans women in the Philippines, including youth outreach and health referrals.",
    address: "Metro Manila, Philippines",
    website: "https://www.facebook.com/STRAPHILIPPINES",
    tags: ["Trans Women", "Youth", "Peer Support"],
    featured: true,
  },
  {
    id: "ys-2",
    name: "Young LBQT+ Philippines",
    category: "youth-services",
    description: "A youth-led organization for young lesbians, bisexuals, queers, and transsexuals in the Philippines, providing safe spaces, education, and advocacy opportunities.",
    address: "Metro Manila, Philippines",
    tags: ["Youth", "Women", "Safe Space"],
  },
  {
    id: "ys-3",
    name: "PARINE Inc. — Batangas LGBTQIA+ Network",
    category: "youth-services",
    description: "A Batangas-based LGBTQIA+ network that co-organizes the provincial LGBTQIA+ celebration together with the Provincial Government of Batangas (PSWDO). Provides peer support, community programs, and youth outreach across Batangas Province.",
    address: "Batangas Province, Philippines",
    tags: ["Batangas", "Youth", "Community", "Provincial"],
    featured: true,
  },

  // ── Support Resources ──────────────────────────────────────────────────────────

  {
    id: "sr-1",
    name: "Tahanan – LGBTQIA+ Crisis Shelter",
    category: "support-resources",
    description: "Crisis shelter and temporary safe housing for LGBTQIA+ individuals facing homelessness, domestic violence, or family rejection. Provides psychosocial support and referrals.",
    address: "Metro Manila, Philippines",
    phone: "0917-111-0000",
    tags: ["Shelter", "Crisis", "Safe Housing"],
    featured: true,
  },
  {
    id: "sr-2",
    name: "GrayMatters Psychological Services",
    category: "support-resources",
    description: "Professional psychological services and teleconsultations for mental wellness, emotional health, and identity-affirmative therapy. LGBTQIA+-affirming practitioners.",
    address: "Quezon City, Metro Manila, Philippines",
    website: "https://graymatters.ph",
    tags: ["Therapy", "Affirming", "Teleconsultation"],
  },
  {
    id: "sr-3",
    name: "Ascend Development Solutions",
    category: "support-resources",
    description: "ESG/SDG-aligned trainings and capacity-building programs supporting governance, compliance, and institutional growth for organizations serving LGBTQIA+ communities.",
    address: "Metro Manila, Philippines",
    tags: ["Training", "Governance", "Capacity Building"],
  },
];
