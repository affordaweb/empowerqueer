// ─── EVENTS DATA ───────────────────────────────────────────────────────────────
// HOW TO ADD AN EVENT:
//   • Add a new object to ALL_EVENTS.
//   • dateISO: "YYYY-MM-DD" — past events are automatically removed by the weekly
//     GitHub Actions content-refresh workflow (scripts/fetch-content.ts).
//   • featured: true — pins the event to the top.
//   • Priority: Batangas City / Batangas Province events go first.
//
// SCOPE: Philippines-only events. No international events.
//
// SOURCES: All external events link to official organisation pages.
//   Recurring public events (Pride marches, etc.) are copyright-free public
//   information. Descriptions are original. No Facebook sources used.
// ──────────────────────────────────────────────────────────────────────────────

export type CategoryKey = "Pride" | "Health" | "Workshop" | "Advocacy" | "Cultural" | "Social";

export interface Event {
  id: string;
  title: string;
  /** ISO date "YYYY-MM-DD" — events past this date are automatically removed */
  dateISO: string;
  dateDisplay: string;
  time: string;
  location: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  image: string;
  link?: string;
  /** Featured events sort to the very top */
  featured?: boolean;
}

export const ALL_EVENTS: Event[] = [

  // ── FEATURED — BATANGAS PRIORITY ────────────────────────────────────────────

  {
    id: "batangas-province-lgbtqia-2026",
    title: "11th LGBTQIA+ Celebration — Province of Batangas",
    dateISO: "2026-11-05",
    dateDisplay: "November 5, 2026",
    time: "All Day",
    location: "Provincial DREAM Zone, Capitol Site, Batangas City",
    description:
      "The province-wide annual LGBTQIA+ celebration organized by the Provincial Government of Batangas (PSWDO) and PARINE Inc. Features a Grand Pride Parade symbolizing unity and support for LGBTQIA+ rights, a mental health presentation on stigma and resilience, Festival Queen & King Costume Competition, LGBTQIA+ Got Talent showcase, and recognition ceremonies.",
    category: "Advocacy",
    tags: ["Batangas Province", "Grand Parade", "Wagayway", "Annual"],
    image: "/images/gallery/EmpQueer-Image-116.jpg",
    link: "https://portal.batangas.gov.ph",
    featured: true,
  },

  // ── PRIDE MONTH 2026 — LAST WEEK (JUNE 22–30) ──────────────────────────────

  {
    id: "sm-pride-takeover-2026",
    title: "SM Pride Takeover 2026",
    dateISO: "2026-06-22",
    dateDisplay: "June 22–30, 2026",
    time: "Mall Hours",
    location: "SM Supermalls Nationwide (SM MOA, SM North EDSA, SM Megamall, etc.)",
    description:
      "SM Supermalls transforms into a vibrant stage celebrating diversity, creativity, and authentic self-expression. A week-long takeover featuring Pride exhibits, community booths, performances, drag shows, and rainbow activations across all major SM malls. Everyone is invited to shine.",
    category: "Cultural",
    tags: ["National", "SM Supermalls", "Mall-Wide", "Pride Takeover"],
    image: "/images/gallery/EmpQueer-Image-150.jpg",
    link: "https://www.smsupermalls.com",
    featured: false,
  },
  {
    id: "metro-manila-pride-2026",
    title: "Metro Manila Pride March 2026",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "10:00 AM onwards",
    location: "Remedios Circle, Malate, Manila",
    description:
      "Metro Manila Pride returns after a two-year hiatus with the theme 'Bukas, Atin. Atin ang Kasaysayan. Atin ang Bukas.' — a Pride March and Festival at Remedios Circle. Features a street fair, advocacy exhibits, community booths, live performances, and thousands of marchers. Free admission.",
    category: "Pride",
    tags: ["National", "Manila", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-118.jpg",
    link: "https://mmpride.org/",
    featured: false,
  },
  {
    id: "pride-ph-festival-2026",
    title: "LOV3LABAN — Pride PH Festival 2026",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "10:00 AM – late",
    location: "University of the Philippines Diliman, Quezon City",
    description:
      "Southeast Asia's largest Pride demonstration. A full-day program: Pride Expo (10 AM) with merchants, NGOs, and health screenings; Pride March (3 PM) from Quezon Memorial Circle through major QC thoroughfares; and Pride Night with live performances. Hundreds of thousands expected. Free admission.",
    category: "Pride",
    tags: ["National", "Quezon City", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-109.jpg",
    link: "https://prideph.org/",
    featured: false,
  },
  {
    id: "white-party-manila-2026",
    title: "WHITE PARTY MANILA: REIGNITE",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "8:00 PM onwards",
    location: "World Trade Center Metro Manila, Pasay City",
    description:
      "The iconic White Party returns after 12 years, headlined by Vice Ganda with 15 ambassadors including KaladKaren, Ice Seguerra, Janella Salvador, and Mimiyuuuh. Theme 'REIGNITE' — dress in all-white for a massive celebration featuring live performances by Ben&Ben, Gloc-9, Maki, Marina Summers, a fashion show with 100+ models, and world-class DJ sets. A collaboration between Mentorque Productions and LoveYourself Inc. Portion of proceeds supports HIV awareness programs, testing, and care.",
    category: "Cultural",
    tags: ["Pasay", "White Party", "Vice Ganda", "LoveYourself", "Mentorque"],
    image: "/images/gallery/EmpQueer-Image-160.jpg",
    link: "https://www.whitepartymanila.com",
    featured: false,
  },
  {
    id: "out-and-about-pride-fair-2026",
    title: "OUT & ABOUT: Pride Community Fair",
    dateISO: "2026-06-26",
    dateDisplay: "June 26–28, 2026",
    time: "Mall Hours",
    location: "Venice Grand Canal Mall, McKinley Hill, Taguig City",
    description:
      "A curated Pride community fair featuring LGBTQIA+-owned brands, local artisans, handmade crafts, stickers, candles, earrings, prints, and tote bags. Browse art, support queer-owned businesses, and connect with local creators in a vibrant community market setting.",
    category: "Cultural",
    tags: ["Taguig", "Art Market", "Queer-Owned", "Community Fair"],
    image: "/images/gallery/EmpQueer-Image-190.jpg",
    link: "https://www.instagram.com/thealiensclubofficial/",
    featured: false,
  },
  {
    id: "pride-stride-run-2026",
    title: "Pride Stride Run 2026",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "Early Morning",
    location: "Bridgetowne, Pasig City",
    description:
      "A fun run organized with LoveYourself Inc. promoting fitness, inclusivity, health awareness, and LGBTQIA+ empowerment. Run, jog, or walk as part of a community that celebrates identity and wellness. Proceeds support HIV awareness and community health programs.",
    category: "Health",
    tags: ["Pasig", "Fun Run", "LoveYourself", "Fitness"],
    image: "/images/gallery/EmpQueer-Image-176.jpg",
    link: "https://proadcreativeevents.myruntime.com/register/pride-stride-run-2026",
    featured: false,
  },
  {
    id: "fete-de-la-musique-pride-2026",
    title: "Fête de la Musique — Pride and Allies Stage",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "TBA",
    location: "Mejo Kitchen Bar, Quezon City",
    description:
      "A special Pride and Allies stage as part of the global Fête de la Musique 'For the People, By the People' music festival. Featuring live gigs from queer and ally musicians — free admission, celebrating music, diversity, and community.",
    category: "Cultural",
    tags: ["Quezon City", "Music", "Live Gig", "Free Admission"],
    image: "/images/gallery/EmpQueer-Image-170.jpg",
    link: "https://www.instagram.com/fetedelamusiqueph/",
    featured: false,
  },
  {
    id: "pride-parade-after-party-2026",
    title: "BBB 8.0: The Pride Parade After Party",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "8:00 PM – 3:00 AM",
    location: "Bigger Pictures, Greenfield District, Mandaluyong City",
    description:
      "Bears, Beers, & Bars (BBB) presents the official Pride after party with a 'Leather Edition' theme. A night of dancing, drag performances, DJs, and celebration. All proceeds go to Golden Gays and Golden Bekis — supporting elderly members of the LGBTQIA+ community.",
    category: "Social",
    tags: ["Mandaluyong", "After Party", "Fundraiser", "Golden Gays"],
    image: "/images/gallery/EmpQueer-Image-194.jpg",
    link: "https://www.instagram.com/bbb_manila/",
    featured: false,
  },
  {
    id: "south-pride-bf-homes-2026",
    title: "South Pride — BF Homes",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "11:00 PM onwards",
    location: "BF Homes Park, Parañaque City",
    description:
      "South Pride brings the Pride celebration to the southern metro. A community-driven Pride gathering in BF Homes Park with music, performances, and a safe space for LGBTQIA+ individuals and allies in Parañaque and the South.",
    category: "Pride",
    tags: ["Parañaque", "South Metro", "Community Pride"],
    image: "/images/gallery/EmpQueer-Image-208.jpg",
    link: "",
    featured: false,
  },
  {
    id: "aklas-sayaw-2026",
    title: "Aklas Sayaw: Dance with Pride",
    dateISO: "2026-06-26",
    dateDisplay: "June 26, 2026",
    time: "6:00 PM onwards",
    location: "#57 1st Avenue, Brgy. Bagong Lipunan ng Crame, Quezon City",
    description:
      "Aklas Sayaw is a Pride dance event celebrating queer movement and expression. Featuring dance performances, workshops, and an open floor for the community to dance with pride, freedom, and joy.",
    category: "Cultural",
    tags: ["Quezon City", "Dance", "Performance", "Workshop"],
    image: "/images/gallery/EmpQueer-Image-202.jpg",
    link: "",
    featured: false,
  },
  {
    id: "serve-and-slay-2026",
    title: "Serve and Slay Pride Edition",
    dateISO: "2026-06-25",
    dateDisplay: "June 25, 2026",
    time: "6:00 PM onwards",
    location: "Hoesik Bar & Lounge, Mandaluyong City",
    description:
      "A Pride-themed night of drag performances, music, and celebration. Come dressed to impress and ready to serve — a night of queer glamour, drag excellence, and community fun.",
    category: "Social",
    tags: ["Mandaluyong", "Drag", "Nightlife", "Pride"],
    image: "/images/gallery/EmpQueer-Image-206.jpg",
    link: "",
    featured: false,
  },
  {
    id: "baks-laban-after-party-2026",
    title: "Baks-Laban: A Pride After Party",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "2:52 PM onwards",
    location: "Laging Handa, Quezon City",
    description:
      "Keep the Pride energy going at Baks-Laban, the ultimate Pride after party in Quezon City. A celebration of queer joy, community, and resistance — with music, performances, and great company.",
    category: "Social",
    tags: ["Quezon City", "After Party", "Community", "Celebration"],
    image: "/images/gallery/EmpQueer-Image-216.jpg",
    link: "",
    featured: false,
  },
  {
    id: "cebu-pride-2026",
    title: "Cebu Pride Festival 2026",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "All Day",
    location: "Cebu City, Cebu",
    description:
      "A month-long celebration (theme: Stand Proudly, Love Loudly!) culminating in the main Cebu City Pride Parade. Events include art fairs at Ayala Malls, drag performances, Mandaue Pride March, pride runs, BL community gatherings, and a Pride Picnic.",
    category: "Pride",
    tags: ["Cebu", "Regional", "Pride Parade", "Annual"],
    image: "/images/gallery/EmpQueer-Image-133.jpg",
    link: "https://cebupride.org/",
    featured: false,
  },
  {
    id: "pride-run-cebu-2026",
    title: "RUNRIO Pride Run 2026 — Cebu",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "Early Morning (Gun Start TBA)",
    location: "SM Seaside, Cebu City",
    description:
      "The Cebu leg of the RUNRIO Pride Run 2026 series. Join runners, allies, and advocates in a joyful, empowering event celebrating inclusivity and unity. Categories include 1K Dog, 3K, 5K, 10K, and 16K with full race kit entitlements.",
    category: "Health",
    tags: ["Cebu", "Fun Run", "Fitness", "Regional"],
    image: "/images/gallery/EmpQueer-Image-175.jpg",
    link: "https://priderun.ph/",
    featured: false,
  },
  // ── WAGAYWAY EQUALITY / ESPASYO ONGOING SERVICES ──────────────────────────

  {
    id: "espasyo-hiv-testing-ongoing",
    title: "Free HIV Testing at Espasyo by Wagayway Equality",
    dateISO: "2026-06-23",
    dateDisplay: "Ongoing — Mon to Sat, 10:00 AM – 8:00 PM",
    time: "10:00 AM – 8:00 PM",
    location: "Espasyo Community Center, 3/F Golden Core Ville Bldg., Nueva Villa Subd., Brgy. Alangilan, Batangas City",
    description:
      "Get free, confidential HIV screening in a safe and welcoming space at Espasyo, the community center operated by Wagayway Equality (founded by Aivan Alvarez). Services include HIV testing, psychosocial counseling, and referrals. Walk-ins welcome. Your privacy and dignity are respected.",
    category: "Health",
    tags: ["Batangas City", "HIV Testing", "Wagayway Equality", "Free", "Espasyo"],
    image: "/images/gallery/EmpQueer-Image-116.jpg",
    link: "https://www.facebook.com/wagaywayequality",
    featured: false,
  },
  {
    id: "project-ligtas-outreach-2026",
    title: "Project L.I.G.T.A.S. — Community HIV & SOGIESC Outreach",
    dateISO: "2026-07-15",
    dateDisplay: "July 15, 2026",
    time: "8:00 AM – 5:00 PM",
    location: "Batangas Province (various remote barangays)",
    description:
      "Wagayway Equality's community outreach program bringing HIV 101 education, SOGIESC 101 discussions, RA 11166 awareness, and free HIV testing to remote communities in Batangas. Interactive learning sessions and confidential screening services aimed at breaking stigma and promoting early detection. Organizer: Wagayway Equality Inc. / Aivan Alvarez.",
    category: "Health",
    tags: ["Batangas", "HIV 101", "SOGIESC 101", "Wagayway Equality", "Outreach"],
    image: "/images/gallery/EmpQueer-Image-150.jpg",
    link: "https://www.facebook.com/wagaywayequality",
    featured: false,
  },
  {
    id: "empowerqueer-financial-training-2026",
    title: "EmpowerQueer: Financial Literacy & Socio-Economic Empowerment Training",
    dateISO: "2026-08-22",
    dateDisplay: "August 22, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Batangas City (venue TBD via Wagayway Equality)",
    description:
      "Wagayway Equality's strategic program aimed at enhancing the socioeconomic well-being of LGBTQIA+ individuals. Features financial literacy training, savings and investment planning, and entrepreneurship workshops to build self-sufficiency and economic empowerment for the queer community. Organized by Wagayway Equality Inc. in partnership with Ascend Development Solutions.",
    category: "Workshop",
    tags: ["Batangas City", "Financial Literacy", "EmpowerQueer", "Wagayway Equality", "Training"],
    image: "/images/gallery/EmpQueer-Image-190.jpg",
    link: "https://www.facebook.com/wagaywayequality",
    featured: false,
  },
  {
    id: "vso-voyage-2026",
    title: "VSO Voyage 2026 — Wagayway Equality Volunteers' Academy",
    dateISO: "2026-09-12",
    dateDisplay: "September 12–13, 2026",
    time: "Whole Day",
    location: "Batangas City",
    description:
      "The flagship volunteering program of Wagayway Equality's Volunteers' Academy. A two-day capacity-building event for aspiring equality champions featuring workshops on community organizing, HIV advocacy, SOGIESC awareness, and leadership development. Organized by the Office of the Executive Director, supported by Ascend Development Solutions, in partnership with Batangas City Government.",
    category: "Workshop",
    tags: ["Batangas City", "Volunteers", "Wagayway Equality", "Leadership", "Training"],
    image: "/images/gallery/EmpQueer-Image-109.jpg",
    link: "https://www.facebook.com/wagaywayequality",
    featured: false,
  },
  {
    id: "kopisodes-podcast-ep3-2026",
    title: "Kopisodes: Wagayway Equality Podcast (New Episode)",
    dateISO: "2026-07-10",
    dateDisplay: "July 10, 2026",
    time: "Online",
    location: "Online — Wagayway Equality Facebook Page & YouTube",
    description:
      "Kopisodes is the flagship podcast and video advocacy platform of Wagayway Equality Inc., amplifying LGBTQIA+ voices, community stories, and rights-based conversations. New episodes drop bi-monthly featuring advocates, community leaders, and inspiring stories from the LGBTQIA+ community in Batangas and beyond.",
    category: "Advocacy",
    tags: ["Podcast", "Wagayway Equality", "Kopisodes", "Online"],
    image: "/images/gallery/EmpQueer-Image-160.jpg",
    link: "https://www.youtube.com/@Kopisodes",
    featured: false,
  },

];
