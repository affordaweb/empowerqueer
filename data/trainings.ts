export interface Training {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  format?: string;
  duration?: string;
  cost?: string;
  cover?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

// Current scheduled, on-demand, and self-paced programs verified October 5, 2026.
export const ALL_TRAININGS: Training[] = [
  {
    id: "hct-2026-batches-8-10",
    title: "HIV Counseling and Testing (HCT) Training - Batches 8, 9, and 10",
    org: "CAMP Pag-ayo, Inc.",
    category: "hiv-sexual-health",
    description: "A five-day HIV counseling and testing certification workshop for medical and non-medical professionals, advocates, and key-population support workers. Batch 8 runs October 21-25 with enrollment by October 13; Batch 9 runs November 9-13 with enrollment by November 2; Batch 10 runs December 9-13 with enrollment by December 1. The organizer excludes participants operating in Bicol Region and Central Visayas.",
    format: "In-Person - Jade Hotel and Suites, Makati City",
    duration: "5 days per batch; October 21-25, November 9-13, or December 9-13, 2026",
    cost: "PHP 25,000 individual; PHP 23,500 each for groups of at least four",
    link: "https://forms.gle/s2VQoWEPXmjrZbq96",
    tags: ["HIV", "Counseling", "Certification", "DOH", "Makati", "CAMP Pag-ayo"],
    featured: true,
  },
  {
    id: "pfip-lead-forward-2026",
    title: "PFIP Lead Forward",
    org: "Philippine Financial & Inter-Industry Pride",
    category: "leadership",
    description: "A six-month leadership program for LGBTQIA+ professionals and allies. The October 6 final session covers leadership integration, capstone sharing, formal recognition, and graduation.",
    format: "Hybrid; final session at Unilab Bayanihan Center, Pasig City",
    duration: "April 21-October 6, 2026",
    cost: "PFIP member PHP 12,000; non-member PHP 15,000, VAT-exclusive",
    cover: "https://app.glueup.com/resources/public/images/fixed-width/600/ec736bf2-742b-418a-a4ac-0993a8ce6464.jpg",
    link: "https://app.glueup.com/event/pfip-lead-forward-172038/",
    tags: ["Leadership", "Workplace", "Philippines"],
    featured: true,
  },
  {
    id: "pfip-transgender-experience-2026",
    title: "The Transgender Experience",
    org: "Philippine Financial & Inter-Industry Pride",
    category: "inclusion-diversity",
    description: "A virtual workplace-awareness session on understanding gender-expansive and gender-nonconforming identities. PFIP lists the session for November 13; public registration has not been announced.",
    format: "Online",
    duration: "November 13, 2026",
    cost: "PFIP member benefit; confirm access with organizer",
    cover: "https://pfip.com.ph/wp-content/uploads/2026/04/8-1.png",
    link: "https://pfip.com.ph/2025-programs/",
    tags: ["Transgender", "Gender Expansive", "Workplace Inclusion"],
    featured: true,
  },
  {
    id: "pfip-transgender-experience-t3-2026",
    title: "The Transgender Experience Train-the-Trainer (T3)",
    org: "Philippine Financial & Inter-Industry Pride",
    category: "inclusion-diversity",
    description: "A PFIP train-the-trainer session on understanding gender-expansive and gender-nonconforming identities.",
    format: "Confirm delivery details with PFIP",
    duration: "November 27, 2026",
    cost: "One complimentary PFIP member-company slot; additional headcount PHP 7,000 per session",
    cover: "https://pfip.com.ph/wp-content/uploads/2026/04/8-1.png",
    link: "https://pfip.com.ph/2025-programs/",
    tags: ["Transgender", "Gender Expansive", "Gender Non-conforming", "Train-the-Trainer", "Workplace Inclusion"],
  },
  {
    id: "up-sogie-self-paced",
    title: "Anong Bet Mo? Girl, Boy, Bakla, Tomboy: A SOGIE Training",
    org: "UP Rainbow Research Hub",
    category: "inclusion-diversity",
    description: "A self-directed Philippine learning resource with video and guided activities introducing SOGIESC through wellbeing, inclusion, stigma, and discrimination.",
    format: "Online / Self-Directed",
    duration: "Self-directed",
    cost: "Free",
    cover: "https://rainbowresearchhub.up.edu.ph/wp-content/uploads/2023/06/UP-RRH-Thumbnail-01-1024x576.png",
    link: "https://rainbowresearchhub.up.edu.ph/resources/anong-bet-mo-girl-boy-bakla-tomboy-a-sogie-training/",
    tags: ["SOGIESC", "Wellbeing", "Inclusion", "Philippines", "Self-Directed"],
    featured: true,
  },
  {
    id: "updgo-on-demand",
    title: "Gender Sensitivity Training (GST) and Gender Sensitivity Orientation (GSO)",
    org: "UP Diliman Gender Office",
    category: "inclusion-diversity",
    description: "On-demand Gender Sensitivity Training for UP Diliman personnel and Gender Sensitivity Orientation for students. Requested seminars may address SOGIE, gender-based violence, paralegal work, interviewing, and masculinities.",
    format: "On Request",
    cost: "Contact organizer",
    cover: "https://dgo.upd.edu.ph/wp-content/uploads/2021/03/GST-About.jpg",
    link: "https://dgo.upd.edu.ph/category-trainings-and-seminars-trainings-and-seminars/about-the-program/",
    tags: ["UP Diliman", "Gender Sensitivity", "SOGIE", "On Request"],
  },
  {
    id: "violence-free-philippines",
    title: "Violence-Free Philippines: Online SOGIESC Course",
    org: "Outright International",
    category: "human-rights",
    description: "A free 20-lesson course on human rights, SOGIESC, Philippine law, gender-based violence remedies, psychosocial support, and affirmative counseling. Certificate requirements include reflection papers and an inclusive action plan.",
    format: "Online / Self-Paced",
    duration: "Approximately 6 hours of video / 20 lessons",
    cost: "Free",
    cover: "https://import.cdn.thinkific.com/940806/h6sZ0hIiTLOydNZFds43_onlinetraining.png",
    link: "https://outright-online-gbv.thinkific.com/courses/outright-onlineGBV",
    tags: ["Philippines", "Human Rights", "Gender-Based Violence", "SOGIESC", "Certificate"],
    featured: true,
  },
  {
    id: "camp-ipecs-on-request",
    title: "Integrated Peer Education and Community-Based Screening Training",
    org: "CAMP Pag-ayo, Inc.",
    category: "community-organizing",
    description: "An on-request HIV peer-education and community-outreach program using arts and social media to build stigma-reduction materials. Participants may qualify as peer educators or community-based screening motivators based on performance.",
    format: "In-Person / On Request",
    cost: "Contact organizer",
    link: "https://www.campincph.org/home/training-programs",
    tags: ["Peer Education", "HIV", "Community Outreach", "Stigma Reduction", "CAMP Pag-ayo"],
  },
  {
    id: "building-rainbow-communities",
    title: "Building Rainbow Communities: LGBTQI Community-Based Organizing Modules",
    org: "Babaylanes, Inc.",
    category: "community-organizing",
    description: "Three downloadable modules for LGBTQI organizers, especially in provincial communities, covering educational seminars, organizational development, and public-policy engagement.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.balangaw.ph/resources/learning-materials/building-rainbow-communities-lgbtqi-community-based-organizing-modules",
    tags: ["LGBTQI Organizing", "Provincial Communities", "Organizational Development", "Public Policy"],
    featured: true,
  },
];
