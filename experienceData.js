const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create experiences
  const experiences = [
    {
      company_name: 'Amazon',
      starting_date: '2020-01-01',
      ending_date: '2022-01-01',
      position: 'Software Development Engineer',
      description: ['Developed web applications', 'Collaborated with cross-functional teams'],
    },
  ];

  for (const exp of experiences) {
    await prisma.experience.create({
      data: exp,
    });
  }

  console.log('Experience data generation completed.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
