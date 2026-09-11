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

// Current scheduled, on-demand, and self-paced programs verified September 10, 2026.
export const ALL_TRAININGS: Training[] = [
  {
    id: "hct-2026-batches-8-9",
    title: "HIV Counseling and Testing Training - Batches 8 and 9",
    org: "CAMP Pag-ayo, Inc.",
    category: "hiv-sexual-health",
    description: "A five-day HIV counseling and testing certification workshop for medical and non-medical professionals, advocates, and key-population support workers. Remaining batches run October 21-25 and November 9-13, 2026 in Makati City.",
    format: "In-Person - Makati City",
    duration: "5 days",
    cost: "Paid",
    cover: "https://lh3.googleusercontent.com/sitesv/AG8ngQW2ODyCNqO6J36V0cBxWBD7iBclRuRsNmhXOzsIwuvUjCJnttYk8TxFpmFOV9MStQ0Um2iN1ygbhxccABWT03x7xA2SvImZmRDabhtvZHpWL57Vye3bXXhNaBGJy52nOjAGFaxMrpqM0Nf6GVoyU_5AEn4K5gdUhFIERTdlz3SHL5GV0JpF6n3y8GgDDV_halDlzCJ3D8u5YfXFevbZb2qOK7tFrEIovHiRdEY2=w1280",
    link: "https://forms.gle/s2VQoWEPXmjrZbq96",
    tags: ["Philippines", "HIV", "Certification", "2026"],
    featured: true,
  },
  {
    id: "pfip-lead-forward-2026",
    title: "PFIP Lead Forward",
    org: "Philippine Financial & Inter-Industry Pride",
    category: "leadership",
    description: "A structured leadership program for LGBTQIA+ professionals and allies. The final in-person session on October 6 covers capstone sharing and leadership integration; ask PFIP whether late admission is available.",
    format: "Hybrid / Pasig City",
    duration: "Final session: October 6, 2026",
    cost: "Paid",
    cover: "https://app.glueup.com/resources/public/images/fixed-width/600/ec736bf2-742b-418a-a4ac-0993a8ce6464.jpg",
    link: "https://app.glueup.com/event/pfip-lead-forward-172038/",
    tags: ["Leadership", "Workplace", "Philippines"],
    featured: true,
  },
  {
    id: "up-sogie-self-paced",
    title: "Anong Bet Mo? A SOGIE Training",
    org: "UP Rainbow Research Hub",
    category: "inclusion-diversity",
    description: "A self-paced Philippine learning resource with video and guided activities on SOGIESC, inclusion, wellbeing, stigma, and discrimination.",
    format: "Online / Self-Paced",
    duration: "Self-paced",
    cost: "Free",
    cover: "https://rainbowresearchhub.up.edu.ph/wp-content/uploads/2023/06/UP-RRH-Thumbnail-01-1024x576.png",
    link: "https://rainbowresearchhub.up.edu.ph/resources/anong-bet-mo-girl-boy-bakla-tomboy-a-sogie-training/",
    tags: ["SOGIESC", "Philippines", "Self-Paced"],
    featured: true,
  },
  {
    id: "updgo-on-demand",
    title: "Gender Sensitivity and SOGIE-Responsive Seminars",
    org: "UP Diliman Gender Office",
    category: "inclusion-diversity",
    description: "On-demand gender sensitivity training and request-responsive seminars that can cover SOGIE for UP Diliman sectors. Arrangements are made directly with the Gender Office.",
    format: "On Request",
    cost: "Contact organizer",
    cover: "https://dgo.upd.edu.ph/wp-content/uploads/2021/03/GST-About.jpg",
    link: "https://dgo.upd.edu.ph/category-trainings-and-seminars-trainings-and-seminars/about-the-program/",
    tags: ["UP Diliman", "Gender Sensitivity", "SOGIE"],
  },
  {
    id: "violence-free-philippines",
    title: "Violence-Free Philippines: Online SOGIESC Course",
    org: "Outright International",
    category: "human-rights",
    description: "A free ten-module course on human rights, SOGIESC, Philippine law, gender-based violence remedies, psychological first aid, and affirmative counseling. A certificate is available on completion.",
    format: "Online / Self-Paced",
    duration: "10 modules",
    cost: "Free",
    link: "https://outrightinternational.org/violence-free-philippines",
    tags: ["Philippines", "Human Rights", "Certificate"],
    featured: true,
  },
  {
    id: "camp-ipecs-on-request",
    title: "Integrated Peer Education and Community-Based Screening Training",
    org: "CAMP Pag-ayo, Inc.",
    category: "community-organizing",
    description: "An on-request program combining peer education, community-based HIV screening, arts, and social media to build stigma-reduction and outreach skills.",
    format: "In-Person / On Request",
    cost: "Contact organizer",
    link: "https://www.campincph.org/home/training-programs",
    tags: ["Peer Education", "HIV", "Community"],
  },
  {
    id: "building-rainbow-communities",
    title: "Building Rainbow Communities Organizing Modules",
    org: "Babaylanes Inc. / Balangaw PH",
    category: "community-organizing",
    description: "Downloadable modules for LGBTQI community organizers, particularly in provincial areas, covering organizational development, education, and public-policy engagement.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.balangaw.ph/resources/learning-materials/building-rainbow-communities-lgbtqi-community-based-organizing-modules",
    tags: ["Philippines", "Organizing", "Provincial"],
    featured: true,
  },
];
