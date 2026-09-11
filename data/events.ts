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

// Verified against official organizer pages on September 10, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "wagayway-sogiesc-101-ongoing",
    title: "SOGIESC 101 - Understanding Gender & Sexuality",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "An ongoing Wagayway Equality learning program introducing sexual orientation, gender identity, gender expression, and sex characteristics through accessible and affirming community education.",
    category: "Workshop",
    tags: ["Wagayway Equality", "SOGIESC", "Education", "Batangas"],
    image: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg",
    link: "/kopisodes/sogiesc-101-by-wagayway-equality-inc",
    ongoing: true,
  },
  {
    id: "wagayway-hiv-101-ongoing",
    title: "HIV 101 - Prevention, Testing & Community Care",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "Ongoing community education covering HIV transmission, prevention, testing, treatment, care, and stigma reduction for LGBTQIA+ people and allies.",
    category: "Health",
    tags: ["Wagayway Equality", "HIV", "Community Care", "Batangas"],
    image: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg",
    link: "/kopisodes/hiv-101-by-wagayway-equality",
    ongoing: true,
  },
  {
    id: "wagayway-human-rights-101-ongoing",
    title: "Human Rights 101 by Wagayway Equality",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Available on demand",
    location: "Wagayway Equality / Online",
    description: "An ongoing introduction to equality, dignity, legal protections, and practical ways LGBTQIA+ community members can understand and assert their rights.",
    category: "Advocacy",
    tags: ["Wagayway Equality", "Human Rights", "Legal Education", "Batangas"],
    image: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
    link: "/kopisodes/human-rights-101-by-wagayway-equality",
    ongoing: true,
  },
  {
    id: "equality-desk-know-your-rights-ongoing",
    title: "Equality Desk - Know Your Rights",
    dateISO: "2026-09-10",
    dateDisplay: "Ongoing",
    time: "Contact the Equality Desk for current hours",
    location: "2/F ENRO Building, P. Burgos Street, Batangas City",
    description: "An ongoing community access point providing information, support, and referrals for sexual and mental health, socio-economic concerns, discrimination, and human-rights issues.",
    category: "Advocacy",
    tags: ["Batangas City", "Equality Desk", "Know Your Rights", "Support"],
    image: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg",
    link: "/equality-desk/",
    ongoing: true,
  },
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
