import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const GALLERY_IMAGES = [
  { src: "/images/gallery/EmpQueer-Image-220.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 0 },
  { src: "/images/gallery/EmpQueer-Image-221.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 1 },
  { src: "/images/gallery/EmpQueer-Image-217.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 2 },
  { src: "/images/gallery/EmpQueer-Image-216.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 3 },
  { src: "/images/gallery/EmpQueer-Image-210.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 4 },
  { src: "/images/gallery/EmpQueer-Image-208.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 5 },
  { src: "/images/gallery/EmpQueer-Image-206.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 6 },
  { src: "/images/gallery/EmpQueer-Image-202.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 7 },
  { src: "/images/gallery/EmpQueer-Image-194.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 8 },
  { src: "/images/gallery/EmpQueer-Image-193.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 9 },
  { src: "/images/gallery/EmpQueer-Image-192.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 10 },
  { src: "/images/gallery/EmpQueer-Image-190.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 11 },
  { src: "/images/gallery/EmpQueer-Image-189.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 12 },
  { src: "/images/gallery/EmpQueer-Image-187.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 13 },
  { src: "/images/gallery/EmpQueer-Image-184.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 14 },
  { src: "/images/gallery/EmpQueer-Image-180.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 15 },
  { src: "/images/gallery/EmpQueer-Image-177.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 16 },
  { src: "/images/gallery/EmpQueer-Image-176.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 17 },
  { src: "/images/gallery/EmpQueer-Image-175.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 18 },
  { src: "/images/gallery/EmpQueer-Image-173.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 19 },
  { src: "/images/gallery/EmpQueer-Image-170.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 20 },
  { src: "/images/gallery/EmpQueer-Image-165.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 21 },
  { src: "/images/gallery/EmpQueer-Image-164.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 22 },
  { src: "/images/gallery/EmpQueer-Image-162.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 23 },
  { src: "/images/gallery/EmpQueer-Image-160.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 24 },
  { src: "/images/gallery/EmpQueer-Image-149.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 25 },
  { src: "/images/gallery/EmpQueer-Image-148.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 26 },
  { src: "/images/gallery/EmpQueer-Image-147.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 27 },
  { src: "/images/gallery/EmpQueer-Image-146.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 28 },
  { src: "/images/gallery/EmpQueer-Image-142.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 29 },
  { src: "/images/gallery/EmpQueer-Image-141.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 30 },
  { src: "/images/gallery/EmpQueer-Image-140.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 31 },
  { src: "/images/gallery/EmpQueer-Image-139.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 32 },
  { src: "/images/gallery/EmpQueer-Image-138-1.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 33 },
  { src: "/images/gallery/EmpQueer-Image-138.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"], order: 34 },
  { src: "/images/gallery/EmpQueer-Image-136.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 35 },
  { src: "/images/gallery/EmpQueer-Image-135.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 36 },
  { src: "/images/gallery/EmpQueer-Image-134.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 37 },
  { src: "/images/gallery/EmpQueer-Image-133.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 38 },
  { src: "/images/gallery/EmpQueer-Image-132.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 39 },
  { src: "/images/gallery/EmpQueer-Image-130.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"], order: 40 },
  { src: "/images/gallery/EmpQueer-Image-120.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 41 },
  { src: "/images/gallery/EmpQueer-Image-118.jpg", alt: "Metro Manila Pride", tags: ["Pride"], order: 42 },
  { src: "/images/gallery/EmpQueer-Image-117.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 43 },
  { src: "/images/gallery/EmpQueer-Image-116.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 44 },
  { src: "/images/gallery/EmpQueer-Image-115.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 45 },
  { src: "/images/gallery/EmpQueer-Image-113.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 46 },
  { src: "/images/gallery/EmpQueer-Image-109.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"], order: 47 },
  { src: "/images/gallery/EmpQueer-Image-102.jpg", alt: "EmpowerQueer Community Moment", tags: ["Training"], order: 48 },
  { src: "/images/gallery/EmpQueer-Image-101.jpg", alt: "EmpowerQueer Community Moment", tags: ["Training"], order: 49 },
  { src: "/images/gallery/DSC_0800.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 50 },
  { src: "/images/gallery/DSC_0735.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 51 },
  { src: "/images/gallery/DSC_0664.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 52 },
  { src: "/images/gallery/DSC_0639.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 53 },
  { src: "/images/gallery/DSC_0136.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 54 },
  { src: "/images/gallery/DSC_0101.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 55 },
  { src: "/images/gallery/DSC_0096.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 56 },
  { src: "/images/gallery/DSC_0028.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"], order: 57 },
  { src: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg", alt: "Batangas Pride Month Celebration 2023", tags: ["Pride"], order: 58 },
  { src: "/images/gallery/Wagayway-Equality-Join-in-Sublian-Festival.jpg", alt: "Wagayway Equality — Sublian Festival", tags: ["Events"], order: 59 },
  { src: "/images/gallery/Wagayway-Equality-Sublian-Festival.jpg", alt: "Wagayway Equality — Sublian Festival", tags: ["Events"], order: 60 },
  { src: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg", alt: "Equality Desk by Wagayway Equality", tags: ["Advocacy"], order: 61 },
  { src: "/images/gallery/Equality-Desk-Hero.jpg", alt: "Equality Desk", tags: ["Advocacy"], order: 62 },
  { src: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg", alt: "HIV 101 by Wagayway Equality", tags: ["Training"], order: 63 },
  { src: "/images/gallery/HIV-and-Aids-Surveillance.jpg", alt: "HIV and AIDS Surveillance", tags: ["Training"], order: 64 },
  { src: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg", alt: "Human Rights 101 by Wagayway Equality", tags: ["Training"], order: 65 },
  { src: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg", alt: "SOGIESC 101 by Wagayway Equality Inc", tags: ["Training"], order: 66 },
];

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

const KOPISODES = [
  {
    slug: "2025-hiv-aids-surveillance-update-what-the-data-tells-us",
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    desc: "The latest HIV & AIDS Surveillance of the Philippines (Oct–Dec 2025) report highlights both progress and urgent gaps in our national response. By the end of 2025, an estimated 252,800 Filipinos are living with HIV, yet only 61% have been reached.",
    tags: ["LGBTQ+ Issues", "HIV & AIDS"],
    categoryIds: ["lgbtq-issues", "hiv-aids"],
    date: "2025",
    img: "/images/gallery/HIV-and-Aids-Surveillance.jpg",
    order: 0,
    published: true,
  },
  {
    slug: "human-rights-101-by-wagayway-equality",
    title: "Human Rights 101 by Wagayway Equality",
    desc: "Human Rights 101 by Wagayway Equality offered participants a foundational understanding of their rights and freedoms, emphasizing equality, dignity, and protection under the law. The session explored key concepts, legal frameworks, and real-life applications, creating a safe and empowering space for learning.",
    tags: ["Youth Services", "Advocacy & Rights"],
    categoryIds: ["youth-services", "advocacy-rights"],
    date: "2025",
    img: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
    order: 1,
    published: true,
  },
  {
    slug: "hiv-101-by-wagayway-equality",
    title: "HIV 101 by Wagayway Equality",
    desc: "HIV 101 by Wagayway Equality focused on building clear and accurate understanding of HIV, including prevention, testing, treatment, and care. The session addressed common myths and fears, helping participants gain reliable knowledge in a safe and supportive environment.",
    tags: ["Support Resources", "HIV & AIDS"],
    categoryIds: ["support-resources", "hiv-aids"],
    date: "2025",
    img: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg",
    order: 2,
    published: true,
  },
  {
    slug: "sogiesc-101-by-wagayway-equality-inc",
    title: "SOGIESC 101 by Wagayway Equality Inc",
    desc: "SOGIESC 101 by Wagayway Equality Inc. provided a clear and safe space for learning about sexual orientation, gender identity, gender expression, and sex characteristics. The session helped participants better understand diversity through open discussion and affirming education.",
    tags: ["Support Resources", "Education"],
    categoryIds: ["support-resources", "education"],
    date: "2025",
    img: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg",
    order: 3,
    published: true,
  },
  {
    slug: "wagayway-equality-join-sublian-festival",
    title: "Wagayway Equality Join Sublian Festival",
    desc: "Wagayway Equality proudly joined the Sublian Festival, taking part in one of Batangas' most cherished cultural celebrations. Their presence highlighted the importance of inclusion, respect, and equal representation within traditional community events.",
    tags: ["Advocacy & Rights", "Community Voices"],
    categoryIds: ["advocacy-rights", "community-voices"],
    date: "2025",
    img: "/images/gallery/Wagayway-Equality-Join-in-Sublian-Festival.jpg",
    order: 4,
    published: true,
  },
  {
    slug: "batangas-pride-month-celebration-2023",
    title: "Batangas Pride Month Celebration 2023",
    desc: "The Batangas Pride Month Celebration 2023, led by Wagayway Equality, brought together diverse voices from the community in a joyful and welcoming space. During the 8th Batangan Pride Celebration held on June 27, 2023, participants joined in solidarity and celebration.",
    tags: ["Community Voices", "LGBTQ+ Issues"],
    categoryIds: ["community-voices", "lgbtq-issues"],
    date: "2023",
    img: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
    order: 5,
    published: true,
  },
  {
    slug: "equality-desk-by-wagayway-equality",
    title: "Equality Desk by Wagayway Equality",
    desc: "The increasing prevalence of HIV in Batangas City is a major concern, especially among young key populations (YKP), Men having Sex with Men (MSM), transgender individuals, and other affected groups. Stigma and discrimination create barriers to accessing health services.",
    tags: ["LGBTQ+ Issues", "Advocacy & Rights"],
    categoryIds: ["lgbtq-issues", "advocacy-rights"],
    date: "2025",
    img: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg",
    order: 6,
    published: true,
  },
];

async function main() {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "aivan.c.alvarez@gmail.com";
  const ADMIN_PASSWORD = process.env.ADMIN_INITIAL_PASSWORD || "EmpQueer@26!";

  // Seed admin user
  const existing = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } });
  if (!existing) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    const admin = await prisma.user.create({
      data: {
        name: "Admin",
        email: ADMIN_EMAIL,
        passwordHash,
        role: "ADMIN",
        status: "APPROVED",
      },
    });
    console.log(`✅ Admin user created: ${admin.email}`);
    console.log(`   ID: ${admin.id}`);
  } else {
    console.log(`Admin user already exists: ${ADMIN_EMAIL}`);
  }

  // Seed gallery images (only if none exist)
  const galleryCount = await prisma.galleryImage.count();
  if (galleryCount === 0) {
    await prisma.galleryImage.createMany({ data: GALLERY_IMAGES });
    console.log(`✅ Seeded ${GALLERY_IMAGES.length} gallery images`);
  } else {
    console.log(`Gallery already seeded (${galleryCount} found)`);
  }

  // Seed kopisodes (only if none exist)
  const kopisodeCount = await prisma.kopisode.count();
  if (kopisodeCount === 0) {
    await prisma.kopisode.createMany({ data: KOPISODES });
    console.log(`✅ Seeded ${KOPISODES.length} kopisodes`);
  } else {
    console.log(`Kopisodes already seeded (${kopisodeCount} found)`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
