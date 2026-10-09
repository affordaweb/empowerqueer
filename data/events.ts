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

// Verified against official organizer pages on October 5, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "pfip-vismin-regional-forum-2026",
    title: "PFIP Visayas-Mindanao Regional Forum",
    dateISO: "2026-10-22",
    dateDisplay: "October 22, 2026",
    time: "Schedule to be announced by PFIP",
    location: "TOA Global, Cebu",
    description: "PFIP's regional forum brings workplace inclusion conversations and LGBTQIA+ professional networking to participants from Visayas and Mindanao. Confirm final details with PFIP before attending.",
    category: "Advocacy",
    tags: ["Cebu", "Workplace Inclusion", "Visayas", "Mindanao"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
    link: "https://pfip.com.ph/2025-programs/",
  },
  {
    id: "pfip-q4-fellowship-2026",
    title: "PFIP Q4 Fellowship",
    dateISO: "2026-11-12",
    dateDisplay: "November 12, 2026",
    time: "Schedule to be announced by PFIP",
    location: "Amazon; final venue details to be confirmed",
    description: "PFIP's fourth-quarter fellowship is a member networking event focused on connection, collaboration, celebration, and workplace inclusion. Confirm access and venue details with PFIP.",
    category: "Social",
    tags: ["PFIP", "Networking", "Workplace Inclusion", "LGBTQIA+ Professionals"],
    image: "https://pfip.com.ph/wp-content/uploads/2026/04/7-1.png",
    link: "https://pfip.com.ph/2025-programs/",
  },
  {
    id: "pfip-transgender-experience-2026",
    title: "The Transgender Experience",
    dateISO: "2026-11-13",
    dateDisplay: "November 13, 2026",
    time: "Schedule to be announced by PFIP",
    location: "Online",
    description: "A PFIP virtual workplace-awareness session on understanding gender-expansive and gender-nonconforming identities. Attendance details have not yet been published.",
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
    location: "Quezon City; cinemas to be announced",
    description: "QCinema's 14th edition will premiere its 2026 QCShorts grantees, including Filipino projects addressing queer embodiment, lesbian experience, gender expression, and queer coming-of-age.",
    category: "Cultural",
    tags: ["QCinema", "Quezon City", "Film", "Queer Stories", "QCShorts"],
    image: "https://qcinema.ph/wp-content/uploads/qcs2026grantees.jpg",
    link: "https://qcinema.ph/news/qcinema-introduces-the-2026-batch-of-qcshorts-filmmakers/",
    featured: true,
  },
];
