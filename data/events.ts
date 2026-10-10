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
