// ─── DIRECTORY DATA ───────────────────────────────────────────────────────────
// Philippine-focused directory of LGBTQIA+ organisations, health services,
// hotlines, and support resources. Entries use provider sources where available;
// contact providers before visiting because hours and services can change.
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
    address: "2627 Dian Street, Barangay 757, San Andres, Manila 1017",
    phone: "+63 2 8536 7886 / 0928 785 4244",
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
    category: "advocacy-rights",
    description: "PFIP is a nonprofit community of practice of more than 100 member organizations advancing LGBTQIA+ workplace equality and economic inclusion through learning, research, and collaboration.",
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
    name: "Wagayway Equality Desk - Batangas City",
    category: "advocacy-rights",
    description: "A community-linked access point connecting LGBTQIA+ people and other community members with sexual-health, mental-health, human-rights, and socioeconomic support and referrals. Contact the Desk before visiting to confirm its current location and hours.",
    address: "Batangas City, Philippines",
    website: "https://www.empowerqueerhub.com/equality-desk/",
    tags: ["Government", "Anti-Discrimination", "Referrals"],
    featured: true,
  },
  {
    id: "ar-2",
    name: "Commission on Human Rights – Philippines (CHR)",
    category: "advocacy-rights",
    description: "The CHR is the national human rights institution in the Philippines. Accepts complaints of human rights violations including discrimination based on sexual orientation and gender identity.",
    address: "Commonwealth Avenue, Quezon City, Philippines",
    phone: "(02) 8294-8704 / 0936 068 0982 / 0920 506 1194",
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
    description: "Mental health advocacy organization and peer-support network focused on awareness and stigma reduction. Its help page also lists national crisis resources, including the DOH-NCMH hotline.",
    website: "https://mentalhealthph.org",
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
    description: "Provides a free, anonymous 24/7 crisis line. Counseling and subsidized counseling are separate services with their own availability and eligibility requirements.",
    hotline: "+63 2 8893 7603 / +63 919 056 0709 / +63 917 800 1123 / +63 917 108 5412",
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
    name: "Batangas Medical Center - HIV Treatment Hub",
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
    description: "Philippines-based HIV testing, prevention, treatment, and advocacy organization operating community-based hubs and clinics in Luzon, Visayas, and Mindanao.",
    address: "Multiple locations across the Philippines",
    phone: "0917 628 8743 / 0998 563 7307",
    website: "https://loveyourself.ph",
    tags: ["Manila", "Testing", "Community"],
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
    tags: ["Manila", "Key Populations", "NGO"],
    featured: true,
  },

  // ── Sexual Health ──────────────────────────────────────────────────────────────

  {
    id: "sh-1",
    name: "LoveYourself Anglo – Sexual Health Clinic",
    category: "sexual-health",
    description: "LGBTQIA+-affirming sexual health clinic offering free HIV rapid testing, STI testing and treatment, condom distribution, and PrEP consultations.",
    address: "Unit 5, 3/F, Anglo Building, 715-A Shaw Boulevard, Mandaluyong City",
    phone: "Testing: 0969 028 8272 / 0997 658 2437; Treatment: 0967 315 8719",
    website: "https://loveyourself.ph/hubsclinics/",
    tags: ["PrEP", "STI", "Free Testing"],
    featured: true,
  },
    {
      id: "sh-2",
      name: "Family Planning Organization of the Philippines (FPOP)",
      category: "sexual-health",
      description: "The Philippine member association of the International Planned Parenthood Federation, providing sexual and reproductive healthcare, contraceptive care, fertility services, and comprehensive sexuality education.",
      address: "Multiple locations, Metro Manila",
      website: "https://www.ippf.org/about-us/member-associations/philippines",
      tags: ["Reproductive Health", "STI", "Contraception"],
    },
    {
      id: "sh-3",
      name: "PULSE Clinic Manila",
      category: "sexual-health",
       description: "LGBTQIA+-focused sexual health clinic offering confidential HIV testing, PrEP, PEP, STI screening, treatment, and teleconsultation services.",
       address: "Manila and Angeles-Clark, Philippines",
       phone: "+63 968 189 6969",
      website: "https://www.pulse-clinic.com.ph",
      tags: ["PrEP", "PEP", "HIV Testing", "STI", "Sexual Health"],
      featured: true,
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

  // ── NEW ADDITIONS (2026) ─────────────────────────────────────────────────

  {
    id: "cc-9",
    name: "Bisdak Pride, Inc.",
    category: "community-center",
    description: "A Cebu-based LGBTQIA+ organization established in 2005, born from the First Visayas-Mindanao LGBTQ Leadership Conference. Provides community programs, Pride events, advocacy campaigns, and peer support for LGBTQIA+ individuals across the Visayas and Mindanao regions.",
    address: "Cebu City, Cebu, Philippines",
    website: "https://www.facebook.com/BisdakPrideInc/",
    tags: ["Cebu", "Visayas", "Mindanao", "Leadership"],
    featured: false,
  },
  {
    id: "cc-10",
    name: "LGBTQ 4th District of Batangas Community",
    category: "community-center",
    description: "A grassroots LGBTQIA+ community organization serving the 4th District of Batangas Province, including Rosario, Ibaan, and surrounding municipalities. Organizes community events, peer support, and local advocacy initiatives for LGBTQIA+ individuals in provincial Batangas.",
    address: "Rosario, Batangas, Philippines",
    tags: ["Batangas", "Grassroots", "Provincial", "Community Support"],
    featured: false,
  },
  {
    id: "ys-4",
    name: "TransMan Pilipinas",
    category: "youth-services",
    description: "A support and advocacy group for transgender men in the Philippines. Provides a safe space for trans men to express themselves, share experiences regarding transition, access resources, and build community. Offers peer support, information on healthcare access, and community organizing.",
    address: "Metro Manila, Philippines",
    website: "https://www.facebook.com/TransManPilipinas/",
    tags: ["Trans Men", "Peer Support", "Healthcare Access"],
    featured: true,
  },
  // ── NEW ADDITIONS (2026-Q3) ─────────────────────────────────────────

  {
    id: "cc-11",
    name: "CAMP Pag-ayo, Inc.",
    category: "community-center",
    description: "Culture and Arts Managers of the Philippines (CAMP) Pag-ayo, Inc. is a non-profit organization providing HIV Counseling and Testing (HCT) training, SOGIESC workshops, peer education, and mental health support. DOH-accredited HCT trainer and certified community-based HIV screening provider. Serves key populations, PLHIV, and LGBTQIA+ communities nationwide.",
    address: "45 Manila East Road, Barangay San Roque, Angono, Rizal",
    phone: "+63 967 164 6030",
    website: "https://www.campincph.org/",
    tags: ["Rizal", "HIV Training", "SOGIESC", "Peer Education", "DOH-Accredited"],
    featured: true,
  },
  {
    id: "cc-12",
    name: "Bahaghari Soccsksargen",
    category: "community-center",
    description: "A regional LGBTQIA+ organization in SOCCSKSARGEN (Region 12), Mindanao, advocating for gender equality, HIV awareness, and inclusive health services. Partners with government agencies like PIA and local LGUs to conduct information and empowerment seminars for LGBTQIA+ youth leaders.",
    address: "General Santos City, SOCCSKSARGEN, Philippines",
    tags: ["Mindanao", "Youth", "HIV Awareness", "Gender Equality"],
    featured: false,
  },
  {
    id: "cc-13",
    name: "LGBTQIA-Silbi Batangas City Inc.",
    category: "community-center",
    description: "A Batangas City-based LGBTQIA+ organization that organizes the annual Rampa Na: Batangas City Pride Month Celebration and confers the Bahaghari Award to individuals and institutions championing LGBTQ+ rights and inclusion in Batangas.",
    address: "Batangas City, Batangas, Philippines",
    tags: ["Batangas City", "Pride", "Advocacy", "Awards"],
    featured: true,
  },
  {
    id: "ar-5",
    name: "ASEAN SOGIE Caucus",
    category: "advocacy-rights",
    description: "A Philippine-registered regional LGBTQIA+ human-rights organization advancing SOGIESC rights through advocacy, research, capacity building, and leadership development across Southeast Asia.",
    address: "Quezon City, Metro Manila, Philippines",
    website: "https://aseansogiecaucus.org/",
    tags: ["Human Rights", "SOGIESC", "Southeast Asia", "Capacity Building"],
    featured: true,
  },
  {
    id: "sh-4",
    name: "LoveYourself Victoria",
    category: "sexual-health",
    description: "A trans-health-focused LoveYourself hub offering HIV screening, hormone-management consultations, and pre-gender-affirming-surgery assessment and counseling.",
    address: "2442 Park Avenue, 1/F Torres Building, Pasay City",
    phone: "Testing: 0915 831 8715; Inquiries: 0961 524 1939 / (02) 7002 6976",
    website: "https://loveyourself.ph/hubsclinics/",
    tags: ["Trans Health", "HIV Testing", "Hormone Management", "Pasay"],
    featured: true,
  },
  {
    id: "hiv-7",
    name: "HERO by LoveYourself",
    category: "hiv-services",
    description: "A LoveYourself community hub providing HIV testing, prevention, treatment support, and referrals for communities in Cavite and Southern Tagalog.",
    address: "2/F EMA Building, Aguinaldo Highway, Bacoor, Cavite",
    phone: "Testing: 0956 751 4053; Treatment: 0969 205 6211; (046) 537-7549",
    website: "https://loveyourself.ph/hubsclinics/",
    tags: ["HIV Testing", "Treatment", "Cavite", "Southern Tagalog"],
    featured: true,
  },
];
