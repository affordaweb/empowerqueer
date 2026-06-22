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
      "The iconic White Party returns after 12 years with Vice Ganda headlining. Theme 'REIGNITE' — dress in all-white for a massive celebration featuring world-class performances, DJ sets, and immersive experiences. Portion of proceeds supports LoveYourself's HIV awareness and advocacy initiatives.",
    category: "Cultural",
    tags: ["Pasay", "White Party", "Vice Ganda", "LoveYourself"],
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

];
