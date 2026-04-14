import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding plans...');

  const plans = [
    {
      name: 'Free',
      slug: 'free',
      scriptLimit: 5,
      narrationLimit: 5,
      exportLimit: 3,
      priceMonthlyBrl: 0,
    },
    {
      name: 'Starter',
      slug: 'starter',
      scriptLimit: 30,
      narrationLimit: 30,
      exportLimit: 20,
      priceMonthlyBrl: 49.9,
    },
    {
      name: 'Creator',
      slug: 'creator',
      scriptLimit: null,
      narrationLimit: null,
      exportLimit: null,
      priceMonthlyBrl: 149.9,
    },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { slug: plan.slug },
      update: {
        name: plan.name,
        scriptLimit: plan.scriptLimit,
        narrationLimit: plan.narrationLimit,
        exportLimit: plan.exportLimit,
        priceMonthlyBrl: plan.priceMonthlyBrl,
      },
      create: plan,
    });
    console.log(`  ✓ Plan "${plan.name}" seeded`);
  }

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
