// ─── RESOURCES DATA ───────────────────────────────────────────────────────────
// All entries are based on publicly available, copyright-free / open-licensed
// materials. Sources include:
//   • UN agencies (OHCHR, UNESCO, UNICEF, WHO, UNAIDS, UNDP) — open-license
//   • ILGA World, Amnesty International, OutRight — activist/open use
//   • SAMHSA, CDC, Planned Parenthood, PFLAG, GLSEN, HRC, Trevor Project — free
//   • Philippine government (DOH, CHR) — public domain
//   • Wagayway Equality / EmpowerQueer Hub — own content
// Descriptions are original. PDF resources are hosted locally with permission.
// ──────────────────────────────────────────────────────────────────────────────

export interface Resource {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  cover?: string;
  pdf?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

export const ALL_RESOURCES: Resource[] = [

  // ── Mental Health ──────────────────────────────────────────────────────────────

  {
    id: "mh-1",
    title: "LGBTQ+ Mental Wellness Care Toolkit",
    org: "CVS Health and Accenture",
    category: "mental-health",
    description: "A comprehensive toolkit providing insights and practical resources to support LGBTQ+ mental wellness, covering topics from workplace inclusion to community care strategies.",
    cover: "/resources/LGBTQMentalWellnessToolkit-1-pdf.jpg",
    pdf: "/resources/LGBTQMentalWellnessToolkit-1.pdf",
    tags: ["Toolkit", "Wellness", "Workplace"],
    featured: true,
  },
  {
    id: "mh-2",
    title: "LGBTQI+ Mental Health Resource Booklet",
    org: "Anna Freud National Centre for Children and Families",
    category: "mental-health",
    description: "Developed by the Anna Freud National Centre, this booklet addresses the unique mental health needs of LGBTQI+ individuals, covering stigma, identity, and pathways to support.",
    cover: "/resources/lgbtqi-mh-booklet-final-pdf.jpg",
    pdf: "/resources/lgbtqi-mh-booklet-final.pdf",
    tags: ["Booklet", "Identity", "Stigma"],
    featured: true,
  },
  {
    id: "mh-3",
    title: "Supporting LGBTQ+ Youth Mental Health",
    org: "The Trevor Project",
    category: "mental-health",
    description: "Evidence-based guidance from The Trevor Project on how families, educators, and communities can support the mental health and resilience of LGBTQ+ young people.",
    link: "https://www.thetrevorproject.org/resources/",
    tags: ["Youth", "Family", "Resilience"],
  },
  {
    id: "mh-4",
    title: "LGBTQ+ Behavioral Health Disparities",
    org: "SAMHSA (Substance Abuse and Mental Health Services Administration)",
    category: "mental-health",
    description: "A SAMHSA publication addressing behavioral health disparities among LGBTQ+ populations, including risk factors and evidence-based approaches to reduce inequities.",
    link: "https://www.samhsa.gov/behavioral-health-equity/lgbtqi",
    tags: ["Behavioral Health", "Disparities", "Evidence-Based"],
  },
  {
    id: "mh-5",
    title: "Mental Health and LGBTQ+ People — WHO Guidance",
    org: "World Health Organization (WHO)",
    category: "mental-health",
    description: "WHO guidance on addressing mental health inequalities for LGBTQ+ populations, including recommendations for mental health service providers and governments. Free to access and share.",
    link: "https://www.who.int/health-topics/mental-health",
    tags: ["WHO", "Policy", "Service Delivery"],
  },

  // ── HIV Services ───────────────────────────────────────────────────────────────

  {
    id: "hiv-1",
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    org: "HIV and AIDS Registry of the Philippines",
    category: "hiv-services",
    description: "The Q4 2025 HIV & AIDS Surveillance Report from the Philippines provides updated data on HIV transmission, demographics, and regional trends across the country.",
    cover: "/resources/2025_Q4-HIV-AIDS-Surveillance-Report-of-the-Philippines-pdf.jpg",
    pdf: "/resources/2025_Q4-HIV-AIDS-Surveillance-Report-of-the-Philippines.pdf",
    tags: ["Philippines", "Surveillance", "Data"],
    featured: true,
  },
  {
    id: "hiv-2",
    title: "HIV 101 by Wagayway Equality",
    org: "Wagayway Equality Inc.",
    category: "hiv-services",
    description: "A community-developed guide by Wagayway Equality covering HIV basics: transmission, prevention, testing, and living with HIV — written with the Filipino LGBTQIA+ community in mind.",
    link: "/kopisodes/",
    tags: ["Philippines", "Community", "Prevention"],
    featured: true,
  },
  {
    id: "hiv-3",
    title: "HIV and LGBTQ+ Communities — Global Overview",
    org: "UNAIDS",
    category: "hiv-services",
    description: "UNAIDS global overview of HIV among LGBTQ+ communities, including data on prevalence, key populations, and policy recommendations for equitable HIV responses.",
    link: "https://www.unaids.org/en/topic/key-populations",
    tags: ["Global", "Policy", "Key Populations"],
  },
  {
    id: "hiv-4",
    title: "HIV Testing and Treatment Access Guide",
    org: "World Health Organization (WHO)",
    category: "hiv-services",
    description: "WHO guide on HIV testing strategies, treatment access, and differentiated service delivery — critical for community health workers and advocates in the Philippines.",
    link: "https://www.who.int/health-topics/hiv-aids",
    tags: ["WHO", "Testing", "Treatment"],
  },
  {
    id: "hiv-5",
    title: "Global AIDS Report 2025",
    org: "UNAIDS",
    category: "hiv-services",
    description: "UNAIDS' annual flagship report tracking global progress toward ending AIDS as a public health threat. Covers key populations including LGBTQ+ communities, data by region, and policy priorities. Freely available for download and redistribution.",
    link: "https://www.unaids.org/en/resources/documents/2025/global-aids-report-2025",
    tags: ["UNAIDS", "Annual Report", "Global", "Key Populations"],
    featured: true,
  },

  // ── Advocacy & Rights ──────────────────────────────────────────────────────────

  {
    id: "ar-1",
    title: "Human Rights 101 by Wagayway Equality",
    org: "Wagayway Equality Inc.",
    category: "advocacy-rights",
    description: "A Filipino-language and English human rights primer developed by Wagayway Equality, covering SOGIESC rights, Philippine laws, and how to assert your rights as an LGBTQIA+ individual.",
    link: "/kopisodes/",
    tags: ["Philippines", "Rights", "Law"],
    featured: true,
  },
  {
    id: "ar-2",
    title: "SOGIESC 101 by Wagayway Equality Inc.",
    org: "Wagayway Equality Inc.",
    category: "advocacy-rights",
    description: "An introductory module on Sexual Orientation, Gender Identity and Expression, and Sex Characteristics (SOGIESC) developed by Wagayway for community education and ally training.",
    link: "/kopisodes/",
    tags: ["SOGIESC", "Education", "Philippines"],
    featured: true,
  },
  {
    id: "ar-3",
    title: "Born Free and Equal — Sexual Orientation and Gender Identity in International Human Rights Law",
    org: "United Nations Office of the High Commissioner for Human Rights (OHCHR)",
    category: "advocacy-rights",
    description: "A landmark UN publication setting out the obligations of states to protect the human rights of LGBTQ+ people under international law. Free to download and distribute.",
    link: "https://www.ohchr.org/en/publications/special-issue-publications/born-free-and-equal-sexual-orientation-gender-identity-and",
    tags: ["UN", "International Law", "Free PDF"],
  },
  {
    id: "ar-4",
    title: "State-Sponsored Homophobia Report",
    org: "ILGA World",
    category: "advocacy-rights",
    description: "ILGA World's annual global report documenting state-sponsored discrimination, criminalization, and protection laws affecting LGBTQ+ people across 193 UN member states. Published under open license for activist and nonprofit use.",
    link: "https://ilga.org/state-sponsored-homophobia-report/",
    tags: ["Global", "Policy", "Annual Report"],
  },
  {
    id: "ar-5",
    title: "Equality Desk — Know Your Rights",
    org: "Wagayway Equality Inc.",
    category: "advocacy-rights",
    description: "Practical guide on knowing and asserting LGBTQIA+ rights in the Philippines, covering anti-discrimination policies, safe reporting, and legal resources.",
    link: "/kopisodes/",
    tags: ["Philippines", "Know Your Rights", "Legal"],
  },
  {
    id: "ar-6",
    title: "Being LGBTI in Asia — Philippines Country Report",
    org: "UNDP / USAID",
    category: "advocacy-rights",
    description: "A landmark UNDP/USAID study documenting the lived experiences of LGBTQ+ people in the Philippines, covering discrimination, social acceptance, legal barriers, and community wellbeing. Freely available for download.",
    link: "https://www.undp.org/publications/being-lgbti-asia-thailand-country-report",
    tags: ["Philippines", "Research", "Lived Experience", "UNDP"],
    featured: true,
  },
  {
    id: "ar-7",
    title: "UN Free & Equal — Educational Resources",
    org: "United Nations Human Rights Office (OHCHR)",
    category: "advocacy-rights",
    description: "The UN Free & Equal campaign provides a rich library of fact sheets, videos, and educational materials on LGBTQ+ rights, all freely available for use in advocacy and community education. All materials are in the public domain.",
    link: "https://www.unfe.org/resources/",
    tags: ["UN", "Free Materials", "Education", "Public Domain"],
    featured: true,
  },

  // ── Youth Services ─────────────────────────────────────────────────────────────

  {
    id: "ys-1",
    title: "LGBTQIA2S+ Youth Mental Health and Suicide Prevention Resource Guide",
    org: "Suicide Prevention Resource Center / NORC at the University of Chicago",
    category: "youth-services",
    description: "A comprehensive guide addressing mental health and suicide prevention for LGBTQIA2S+ youth, including protective factors, intervention strategies, and community resources.",
    cover: "/resources/LGBTQIA2S-Resource-Guide-pdf.jpg",
    pdf: "/resources/LGBTQIA2S-Resource-Guide.pdf",
    tags: ["Youth", "Suicide Prevention", "Mental Health"],
    featured: true,
  },
  {
    id: "ys-2",
    title: "Coming Out: A Handbook for LGBTQ Young People",
    org: "The Trevor Project",
    category: "youth-services",
    description: "A supportive guide for LGBTQ young people navigating the coming out process — covering safety, mental health, family conversations, and finding community.",
    cover: "/resources/Coming-Out-Handbook-pdf.jpg",
    pdf: "/resources/Coming-Out-Handbook.pdf",
    tags: ["Coming Out", "Youth", "Family"],
    featured: true,
  },
  {
    id: "ys-3",
    title: "Safe Space Kit for Educators",
    org: "GLSEN (Gay, Lesbian and Straight Education Network)",
    category: "youth-services",
    description: "GLSEN's Safe Space Kit helps educators create inclusive school environments for LGBTQ students, with posters, guides, and classroom activities. Free to download.",
    link: "https://www.glsen.org/activity/glsen-safe-space-kit",
    tags: ["Schools", "Educators", "Safe Space"],
  },
  {
    id: "ys-4",
    title: "Supporting LGBTQ+ Children and Young People",
    org: "UNICEF",
    category: "youth-services",
    description: "UNICEF guidance on how families, schools, and communities can better support LGBTQ+ children and young people, with a focus on rights, wellbeing, and inclusion.",
    link: "https://www.unicef.org/reports/transgender-children-adolescents",
    tags: ["UNICEF", "Family", "Inclusion"],
  },
  {
    id: "ys-5",
    title: "LGBTQ+ Inclusive Education Toolkit",
    org: "UNESCO",
    category: "youth-services",
    description: "UNESCO's toolkit for making education systems more inclusive for LGBTQIA+ students, covering curriculum, school culture, teacher training, and policy recommendations. Free to download and distribute.",
    link: "https://www.unesco.org/en/education/lgbtiq-inclusion",
    tags: ["UNESCO", "Schools", "Curriculum"],
    featured: true,
  },

  // ── Sexual Health ──────────────────────────────────────────────────────────────

  {
    id: "sh-1",
    title: "Sexual Health Guide for LGBTQ+ People",
    org: "Planned Parenthood",
    category: "sexual-health",
    description: "Comprehensive, inclusive sexual health information for LGBTQ+ people — covering safer sex, STI prevention, testing, contraception, and accessing affirming healthcare.",
    link: "https://www.plannedparenthood.org/learn/sexual-orientation-gender/lgbtq",
    tags: ["Sexual Health", "STI", "Healthcare"],
    featured: true,
  },
  {
    id: "sh-2",
    title: "STI Prevention and Testing for LGBTQ+ Populations",
    org: "Centers for Disease Control and Prevention (CDC)",
    category: "sexual-health",
    description: "CDC guidelines and educational materials on STI prevention, testing recommendations, and treatment options specifically for LGBTQ+ populations.",
    link: "https://www.cdc.gov/lgbthealth/",
    tags: ["STI", "Testing", "CDC"],
  },
  {
    id: "sh-3",
    title: "PrEP Information for LGBTQ+ Individuals",
    org: "World Health Organization (WHO)",
    category: "sexual-health",
    description: "WHO fact sheet on PrEP (pre-exposure prophylaxis) for HIV prevention, including eligibility, access, and what to expect — important for LGBTQ+ communities in the Philippines.",
    link: "https://www.who.int/news-room/fact-sheets/detail/hiv-aids",
    tags: ["PrEP", "HIV Prevention", "WHO"],
  },

  // ── Support Resources ──────────────────────────────────────────────────────────

  {
    id: "sr-1",
    title: "Crisis Support Resources for LGBTQ+ Filipinos",
    org: "EmpowerQueer Hub",
    category: "support-resources",
    description: "A compiled directory of Philippine-based crisis hotlines, mental health services, legal aid organizations, and LGBTQIA+-affirming healthcare providers.",
    link: "/directory/",
    tags: ["Philippines", "Crisis", "Directory"],
    featured: true,
  },
  {
    id: "sr-2",
    title: "LGBTQ+ Parenting and Family Support",
    org: "PFLAG (Parents, Families and Friends of Lesbians and Gays)",
    category: "support-resources",
    description: "PFLAG's guide for families with LGBTQ+ members — covering how to offer support, navigate conversations, and find community resources for the whole family.",
    link: "https://pflag.org/resource/",
    tags: ["Family", "Parents", "Support"],
  },
  {
    id: "sr-3",
    title: "Transgender Wellbeing Guide",
    org: "ILGA World / OutRight Action International",
    category: "support-resources",
    description: "A practical wellbeing guide for transgender and non-binary individuals covering healthcare access, legal name changes, safety, and mental health resources.",
    link: "https://outrightinternational.org/our-work/research",
    tags: ["Transgender", "Non-binary", "Wellbeing"],
  },
  {
    id: "sr-4",
    title: "LGBTQ+ Workplace Rights and Inclusion Guide",
    org: "Human Rights Campaign (HRC)",
    category: "support-resources",
    description: "HRC's guide to LGBTQ+ workplace rights, including anti-discrimination policies, navigating disclosure, and resources for advocating for more inclusive workplaces.",
    link: "https://www.hrc.org/resources/workplace",
    tags: ["Workplace", "Rights", "Inclusion"],
  },

  // ── Community Voices ──────────────────────────────────────────────────────────

  {
    id: "cv-1",
    title: "Kopisodes — LGBTQIA+ Voices Over Coffee",
    org: "Wagayway Equality Inc.",
    category: "community-voices",
    description: "Kopisodes is a podcast and video series amplifying LGBTQIA+ voices from the Philippines. Each episode covers lived experiences, rights, health, and community stories in a relaxed, coffee-style format.",
    link: "/kopisodes/",
    tags: ["Podcast", "Philippines", "Community"],
    featured: true,
  },
  {
    id: "cv-2",
    title: "Voices Among Us — Share Your Story",
    org: "EmpowerQueer Hub",
    category: "community-voices",
    description: "A space for LGBTQIA+ Filipinos to share their lived experiences, triumphs, and challenges. Your story matters and can inspire others in the community.",
    link: "/voices/",
    tags: ["Storytelling", "Community", "Philippines"],
  },
  {
    id: "cv-3",
    title: "Being LGBTQ in Asia — Philippines Country Report",
    org: "UNDP / USAID",
    category: "community-voices",
    description: "A landmark study documenting the lived experiences of LGBTQ people in the Philippines, covering discrimination, social acceptance, legal issues, and wellbeing. Free to download.",
    link: "https://www.undp.org/publications/being-lgbti-asia-thailand-country-report",
    tags: ["Philippines", "Research", "Lived Experience"],
  },

  // ── Education & Guides ─────────────────────────────────────────────────────────

  {
    id: "ed-1",
    title: "LGBTQIA+ Inclusive Education Toolkit",
    org: "UNESCO",
    category: "education",
    description: "UNESCO's toolkit for making education systems more inclusive for LGBTQIA+ students, covering curriculum, school culture, teacher training, and policy recommendations.",
    link: "https://www.unesco.org/en/education/lgbtiq-inclusion",
    tags: ["Education", "Schools", "UNESCO"],
    featured: true,
  },
  {
    id: "ed-2",
    title: "Glossary of LGBTQIA+ Terms",
    org: "Human Rights Campaign (HRC)",
    category: "education",
    description: "A comprehensive, regularly updated glossary of LGBTQIA+ terminology to help individuals, educators, and organizations communicate more clearly and respectfully.",
    link: "https://www.hrc.org/resources/glossary-of-terms",
    tags: ["Glossary", "Terminology", "Education"],
  },
  {
    id: "ed-3",
    title: "Understanding SOGIESC in the Philippine Context",
    org: "Philippine Commission on Human Rights",
    category: "education",
    description: "A guide from the Philippine Commission on Human Rights explaining SOGIESC concepts, relevant Philippine laws, and the rights of LGBTQIA+ individuals under the constitution.",
    link: "https://chr.gov.ph",
    tags: ["Philippines", "SOGIESC", "Human Rights"],
  },
  {
    id: "ed-4",
    title: "Intersectionality and LGBTQ+ Rights",
    org: "Amnesty International",
    category: "education",
    description: "Amnesty International's guide on how intersecting identities — race, class, disability, gender — affect the experiences of LGBTQ+ people and shape advocacy approaches.",
    link: "https://www.amnesty.org/en/what-we-do/discrimination/lgbti-rights/",
    tags: ["Intersectionality", "Advocacy", "Rights"],
  },
  {
    id: "ed-5",
    title: "Yogyakarta Principles — SOGIESC and International Human Rights",
    org: "International Commission of Jurists (ICJ)",
    category: "education",
    description: "The Yogyakarta Principles are a set of international principles on the application of international human rights law to sexual orientation and gender identity. The document is freely available and widely used in LGBTQ+ rights advocacy and legal education.",
    link: "https://yogyakartaprinciples.org/",
    tags: ["International Law", "SOGIESC", "Rights", "Legal"],
    featured: true,
  },
];
