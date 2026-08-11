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
  // ── POST-PRIDE SEASON 2026 (JULY–DECEMBER) ─────────────────────────────

  {
    id: "intensity-manila-2026",
    title: "Intensity Manila Circuit Event 2026",
    dateISO: "2026-10-02",
    dateDisplay: "October 2–3, 2026",
    time: "Evening onwards",
    location: "Stratosphere Events Hall, Century Mall, Makati City",
    description:
      "One of Manila's premier gay circuit parties returns, bringing the international circuit party scene to Makati. A unique fusion of elegance, diversity, and pulsating energy featuring world-class DJs and internationally renowned GoGo performers from across the Asian circuit scene. A standout event in Asia's circuit party calendar.",
    category: "Social",
    tags: ["Makati", "Circuit Party", "Nightlife", "International"],
    image: "/images/gallery/EmpQueer-Image-194.jpg",
    link: "https://www.gaytravel4u.com/event/intensity-manila-circuit-event/",
    featured: false,
  },
  {
    id: "iclqapm-2026",
    title: "International Conference on LGBTQ+ Activism and Political Movements",
    dateISO: "2026-10-09",
    dateDisplay: "October 9–10, 2026",
    time: "Full Day",
    location: "Manila, Philippines",
    description:
      "The International Conference on LGBTQ+ Activism and Political Movements (ICLAPM-26) brings together leading experts, advocates, and thought leaders for provocative discussions on LGBTQ+ activism worldwide. Over 500 participants expected, with networking opportunities, paper presentations, and panel discussions on global LGBTQ+ political movements.",
    category: "Advocacy",
    tags: ["Manila", "Conference", "International", "Activism", "Research"],
    image: "/images/gallery/EmpQueer-Image-170.jpg",
    link: "https://www.researchfora.net/event/index.php?id=100830099",
    featured: false,
  },
  {
    id: "qcinema-pride-2026",
    title: "QCinema International Film Festival — Pride Section",
    dateISO: "2026-10-07",
    dateDisplay: "October 7–16, 2026",
    time: "Various Screening Times",
    location: "Various cinemas across Quezon City",
    description:
      "The QCinema International Film Festival returns with its celebrated Pride Section, featuring award-winning queer films from the Philippines and around the world. Screenings, director Q&As, and panel discussions on queer representation in cinema. Organized by the Quezon City Government.",
    category: "Cultural",
    tags: ["Quezon City", "Film Festival", "QCinema", "Queer Cinema"],
    image: "/images/gallery/EmpQueer-Image-170.jpg",
    link: "https://qcinema.ph/",
    featured: false,
  },
  {
    id: "icepgi-2026",
    title: "International Conference on Eroticism, Performance, and Gender Identity",
    dateISO: "2026-11-30",
    dateDisplay: "November 30 – December 1, 2026",
    time: "Full Day",
    location: "Manila, Philippines",
    description:
      "The International Conference on Eroticism, Performance, and Gender Identity (ICEPGI-26) is a premier global platform for exchanging ideas on gender studies, sexuality, human rights, and media representations of gender and sexuality. Features paper presentations, panel discussions, and networking across diverse session tracks. Organized by APSTE.",
    category: "Advocacy",
    tags: ["Manila", "Conference", "International", "Gender Studies", "Human Rights"],
    image: "/images/gallery/EmpQueer-Image-160.jpg",
    link: "https://apste.net/conf/index.php?id=100950261",
    featured: false,
  },
];
