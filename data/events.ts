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
    id: "batangas-city-pride-2026",
    title: "Batangas City Pride Month 2026",
    dateISO: "2026-06-11",
    dateDisplay: "June 11, 2026",
    time: "8:00 AM onwards",
    location: "Batangas City Convention Center (BCCC), Batangas City",
    description:
      "Batangas City's annual Pride Month celebration featuring the \"Rampa Na, Kahit Ano Ka, Love Ka!\" Pride Walk from the Provincial Capitol to BCCC. Includes the Bahaghari Awards honoring individuals, businesses, and institutions supporting LGBTQ+ advancement, fashion design competitions, hair and makeup showcases, and free services for PWDs and KALIPI members.",
    category: "Pride",
    tags: ["Batangas City", "Pride Walk", "Bahaghari Awards", "Annual"],
    image: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
    link: "https://www.batangascity.gov.ph",
    featured: true,
  },
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
  {
    id: "kolorete-lpu-batangas-2026",
    title: "KOLORETE — LPU Batangas Pride 2026",
    dateISO: "2026-06-15",
    dateDisplay: "June 15, 2026",
    time: "TBA",
    location: "Lyceum of the Philippines University, Batangas",
    description:
      "Lyceum of the Philippines University Batangas' annual Pride celebration — a campus-wide explosion of color, identity, and community featuring performances, exhibits, advocacy talks, and a showcase of LGBTQIA+ student voices.",
    category: "Cultural",
    tags: ["Batangas", "LPU", "Campus Pride", "Annual"],
    image: "/images/gallery/EmpQueer-Image-117.jpg",
    link: "https://lpubatangas.edu.ph",
    featured: false,
  },

  // ── NATIONAL ────────────────────────────────────────────────────────────────

  {
    id: "metro-manila-pride-2026",
    title: "Metro Manila Pride 2026",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "All Day",
    location: "Metro Manila, Philippines (Multiple Venues)",
    description:
      "Asia's first and largest Pride event — started in June 1984. Metro Manila Pride attracts over 100,000 participants each year with concerts, film screenings, art exhibitions, a massive Pride March, and discussions on LGBTQ+ rights, mental health, and HIV/AIDS awareness.",
    category: "Pride",
    tags: ["National", "Metro Manila", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-118.jpg",
    link: "https://mmpride.org/",
    featured: false,
  },
  {
    id: "pride-ph-festival-2026",
    title: "LOV3LABAN — Pride PH Festival 2026",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "All Day",
    location: "Quezon City, Metro Manila (Venue TBA)",
    description:
      "Pride PH Festival returns with the LOV3LABAN spirit — a national Pride March, Pride Expo, live performances from LGBTQIA+ artists and drag performers, and Pride Villages spread across Quezon City. Organized by the Pride PH Coalition.",
    category: "Pride",
    tags: ["National", "Quezon City", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-109.jpg",
    link: "https://prideph.org/",
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
    id: "surftown-pride-2026",
    title: "Surftown Pride 2026",
    dateISO: "2026-06-07",
    dateDisplay: "June 7–9, 2026",
    time: "12:00 NN – 9:00 PM",
    location: "San Juan, La Union",
    description:
      "A 3-day LGBTQIA+ celebration in the surf capital of the Philippines under the #MakiAgos theme. Features activist talks, drag performances, the House of Nak showcase, voguing battles, pop-up markets, and the iconic Surftown Ball.",
    category: "Social",
    tags: ["La Union", "Regional", "Drag", "Annual"],
    image: "/images/gallery/EmpQueer-Image-132.jpg",
    link: "https://surftownpride.com/",
    featured: false,
  },
  {
    id: "pfip-pride-summit-2026",
    title: "PFIP Pride Summit 2026",
    dateISO: "2026-06-12",
    dateDisplay: "June 12, 2026",
    time: "9:00 AM – 5:00 PM",
    location: "BGC, Taguig City / Hybrid (Online)",
    description:
      "The Philippine Financial & Inter-Industry Pride (PFIP) annual Pride Summit brings together HR professionals, executives, and LGBTQIA+ advocates to advance workplace equality. Features keynote speakers, panel discussions on the SOGIE Equality Bill, DEI best practices, and the Rainbow Youth Academy recognition.",
    category: "Advocacy",
    tags: ["PFIP", "Workplace", "DEI", "Annual", "National"],
    image: "/images/gallery/EmpQueer-Image-136.jpg",
    link: "https://pfip.com.ph",
    featured: false,
  },

];
