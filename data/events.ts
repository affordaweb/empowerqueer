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

// Verified against official organizer pages on October 9, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "pfip-vismin-regional-forum-2026",
    title: "PFIP Visayas-Mindanao Regional Forum",
    dateISO: "2026-10-22",
    dateDisplay: "October 22, 2026",
    time: "Schedule to be announced by PFIP",
    location: "TOA Global (Cebu)",
    description: "PFIP's regional forum centers regional voices in building stronger, more inclusive workplaces across Visayas and Mindanao. Confirm the schedule and access details with PFIP before attending.",
    category: "Advocacy",
    tags: ["PFIP", "Cebu", "Workplace Inclusion", "Visayas", "Mindanao"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
    link: "https://pfip.com.ph/2025-programs/",
  },
  {
    id: "pfip-q4-fellowship-2026",
    title: "PFIP Q4 Fellowship",
    dateISO: "2026-11-12",
    dateDisplay: "November 12, 2026",
    time: "Schedule to be announced by PFIP",
    location: "Amazon; exact site details to be announced",
    description: "PFIP's fourth-quarter fellowship invites workplace-inclusion champions to connect, collaborate, celebrate, and build professional relationships. Confirm member access, time, and the exact venue with PFIP.",
    category: "Social",
    tags: ["PFIP", "Networking", "Workplace Inclusion", "Details TBA"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
    link: "https://pfip.com.ph/2025-programs/",
  },
  {
    id: "pfip-transgender-experience-2026",
    title: "The Transgender Experience",
    dateISO: "2026-11-13",
    dateDisplay: "November 13, 2026",
    time: "Schedule to be announced by PFIP",
    location: "Venue or online platform to be announced",
    description: "A PFIP awareness session on understanding gender-expansive and gender-nonconforming identities. Time, venue or platform, and attendance details have not yet been published.",
    category: "Workshop",
    tags: ["PFIP", "Transgender", "Gender Expansive", "Gender Non-conforming", "Workplace Inclusion"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/8-1.png",
    link: "https://pfip.com.ph/2025-programs/",
  },
  {
    id: "transgender-day-of-remembrance-2026",
    title: "Transgender Day of Remembrance 2026",
    dateISO: "2026-11-20",
    dateDisplay: "November 20, 2026",
    time: "Local vigils and activities vary",
    location: "Philippines and worldwide",
    description: "An annual observance honoring transgender people whose lives were lost to anti-trans violence. Philippine community vigils may be announced separately by local LGBTQIA+ organizations.",
    category: "Advocacy",
    tags: ["Transgender", "Memorial", "Human Rights", "Community Vigil"],
    image: "https://media.glaad.org/wp-content/uploads/2025/11/19170541/GLAAD_TransgenderDayofRemebrance_Final_1200x630.jpg",
    link: "https://glaad.org/tdor/",
  },
  {
    id: "qcinema-2026",
    title: "14th QCinema International Film Festival",
    dateISO: "2026-11-22",
    dateDisplay: "November 13-22, 2026",
    time: "Screening schedule to be announced",
    location: "Gateway, Robinsons Galleria, TriNoma, Fisher Mall, and SM City Fairview cinemas",
    description: "QCinema's 14th edition includes RainbowQC, its LGBTQIA+ competition section, alongside Philippine and international films across the festival's Genre'teurs program. The full lineup is expected in the third week of October.",
    category: "Cultural",
    tags: ["QCinema", "RainbowQC", "Quezon City", "LGBTQIA+ Film", "Film Festival"],
    image: "https://qcinema.ph/wp-content/uploads/feat_genreteurs.jpg",
    link: "https://qcinema.ph/news/qcinema-introduces-genreteurs/",
    featured: true,
  },
  {
    id: "world-aids-day-2026",
    title: "World AIDS Day 2026",
    dateISO: "2026-12-01",
    dateDisplay: "December 1, 2026",
    time: "Local activities to be announced",
    location: "Philippines and worldwide",
    description: "The global health observance brings communities together to raise HIV awareness, support prevention and treatment, remember those who have died, and stand against HIV-related stigma.",
    category: "Health",
    tags: ["HIV", "World AIDS Day", "Health", "Community Solidarity"],
    image: "/images/gallery/HIV-and-Aids-Surveillance.jpg",
    link: "https://www.who.int/campaigns/world-aids-day",
  },
  {
    id: "human-rights-day-2026",
    title: "Human Rights Day 2026",
    dateISO: "2026-12-10",
    dateDisplay: "December 10, 2026",
    time: "Local activities to be announced",
    location: "Philippines and worldwide",
    description: "The annual United Nations observance marks the adoption of the Universal Declaration of Human Rights and offers communities a platform to affirm dignity, equality, and the human rights of LGBTQIA+ people.",
    category: "Advocacy",
    tags: ["Human Rights", "Equality", "United Nations", "LGBTQIA+ Rights"],
    image: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
    link: "https://www.un.org/en/observances/human-rights-day",
  },
  {
    id: "batangas-city-free-hiv-testing-2026",
    title: "Free HIV Testing at Batangas City Social Hygiene Clinic",
    dateISO: "2026-10-08",
    dateDisplay: "Ongoing",
    time: "Clinic hours not published; contact the City Health Office before visiting",
    location: "Batangas City Social Hygiene Clinic, Batangas City",
    description: "The Batangas City Local AIDS Council encourages residents to access free HIV testing and treatment through the city's Social Hygiene Clinic. The official announcement does not state clinic hours or whether an appointment is required.",
    category: "Health",
    tags: ["Batangas City", "Free HIV Testing", "HIV Treatment", "Local AIDS Council"],
    image: "https://www.batangascity.gov.ph/web/images/News/2026/October/08/d/01.jpg",
    link: "https://www.batangascity.gov.ph/web/current-news/8472-hiv-awareness-at-testing-pinalalakas-ng-batangas-city-local-aids-council",
    featured: true,
    ongoing: true,
  },
];
