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

// Verified against official organizer pages and reputable news sources on November 22, 2026.
export const ALL_EVENTS: Event[] = [
  {
    id: "mr-gay-world-2026",
    title: "Mr Gay World 2026",
    dateISO: "2026-12-01",
    dateDisplay: "November 22 - December 1, 2026",
    time: "Finals on December 1; full schedule to be announced",
    location: "Cebu City, Philippines",
    description: "The 18th edition of Mr Gay World comes to Cebu City for a week of advocacy, leadership, and pageantry. Drei Arias, crowned Mr. Gay World Philippines 2026, carries the Philippine flag. Follow the organizer for the final schedule, venue details, and tickets.",
    category: "Cultural",
    tags: ["Mr Gay World", "Cebu City", "Pageant", "Advocacy", "International"],
    image: "https://images.assettype.com/tribune/2026-06-27/7438bjkv/IMG1468.jpeg?w=1200&auto=format&q=70",
    link: "https://www.facebook.com/mgworg",
    featured: true,
  },
  {
    id: "cake-in-the-name-of-love-2026",
    title: "CAKE: In the Name of Love",
    dateISO: "2026-12-02",
    dateDisplay: "December 2, 2026",
    time: "8:00 PM",
    location: "Music Museum, Greenhills, San Juan City",
    description: "Brigiding brings her CAKE drag showcase to a bigger stage for a World AIDS Day benefit in partnership with LoveYourself. IN THE NAME OF LOVE explores love as resilience, self-discovery, and collective care, with performances by Precious Paula Nicole, M1ss Jade So, Zymba Ding, OV Cunt, Merckz, Shewarma, Lakan, Joe Abuda, Eure'Karma, Indigo, Malayaugh, and Dysco Fever.",
    category: "Cultural",
    tags: ["Drag", "World AIDS Day", "LoveYourself", "Benefit", "Metro Manila"],
    image: "https://www.wheninmanila.com/wp-content/uploads/2026/11/886169169_18643359763021161_109171566614681912_n_edit_860215714470167-1024x768.jpg",
    link: "https://www.wheninmanila.com/brigiding-cake-drag-show-to-the-music-museum-this-december/",
    featured: true,
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
    description: "The global observance returns under the 2026 theme \"Ending AIDS starts with access,\" calling for access to services, rights, resources, and political leadership. In the Philippines, the Department of Health is distributing condoms free of charge through regional health offices, partner local governments, and DOH-certified HIV treatment hubs for World AIDS Day outreach activities. Communities and clinics usually mark the day with testing drives, forums, and memorial activities.",
    category: "Health",
    tags: ["HIV", "World AIDS Day", "Health", "Community Solidarity"],
    image: "/images/gallery/HIV-and-Aids-Surveillance.jpg",
    link: "https://www.unaids.org/en/2026-world-aids-day",
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
