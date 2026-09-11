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
}

// Verified against official organizer pages on September 10, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "pfip-pride-summit-2026",
    title: "2026 Pride Summit & Bahaghari Awards",
    dateISO: "2026-09-11",
    dateDisplay: "September 10-11, 2026",
    time: "September 10, 9:00 AM-5:00 PM; September 11, 1:00 PM-8:00 PM",
    location: "SPACE at One Ayala, Level 5, Makati City",
    description: "PFIP's two-day workplace inclusion summit brings together LGBTQIA+ professionals, allies, and organizations, concluding with the Philippine Bahaghari Awards.",
    category: "Advocacy",
    tags: ["Makati", "Workplace Inclusion", "PFIP", "Awards"],
    image: "https://app.glueup.com/resources/public/images/fixed-width/600/cd6f812a-bea2-4b5b-abe8-d44112589bf7.png",
    link: "https://app.glueup.com/event/2026-pride-summit-bahaghari-awards-ticket-and-registration-190572/",
    featured: true,
  },
  {
    id: "queen-universe-philippines-2026",
    title: "Queen Universe Philippines 2026 Grand Coronation Night",
    dateISO: "2026-09-13",
    dateDisplay: "September 13, 2026",
    time: "See official event page",
    location: "Mactan Expo Center, Mactan Newtown, Lapu-Lapu City, Cebu",
    description: "The inaugural national coronation celebrates transgender women through representation, advocacy, leadership, and talent.",
    category: "Cultural",
    tags: ["Cebu", "Transgender", "Pageant", "Representation"],
    image: "https://efficientrix.com/online-voting/27/images/logo/queen-universe-philippines-2026.jpg",
    link: "https://queenuniverseph.com/?page_id=1795",
    featured: true,
  },
  {
    id: "pfip-lead-forward-finale-2026",
    title: "PFIP Lead Forward: Capstone Sharing and Graduation",
    dateISO: "2026-10-06",
    dateDisplay: "October 6, 2026",
    time: "10:00 AM-5:00 PM",
    location: "Unilab Bayanihan Center, Pasig City",
    description: "The concluding session of PFIP's LGBTQIA+ leadership program features capstone presentations, leadership integration, and graduation. Confirm late-admission eligibility with PFIP before registering.",
    category: "Workshop",
    tags: ["Pasig", "Leadership", "LGBTQIA+ Professionals", "PFIP"],
    image: "https://app.glueup.com/resources/public/images/fixed-width/600/ec736bf2-742b-418a-a4ac-0993a8ce6464.jpg",
    link: "https://app.glueup.com/event/pfip-lead-forward-172038/",
  },
];
