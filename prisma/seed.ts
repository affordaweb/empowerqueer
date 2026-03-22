import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "aivan.c.alvarez@gmail.com";
  const ADMIN_PASSWORD = process.env.ADMIN_INITIAL_PASSWORD || "EmpQueer@26!";

  const existing = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } });
  if (existing) {
    console.log(`Admin user already exists: ${ADMIN_EMAIL}`);
    return;
  }

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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
