const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient();

// async function main() {
//   try {
//     // Query the database
//     const experiences = await prisma.experience.findMany();

//     // Log the results to the terminal
//     console.log('Experiences:', experiences);
//   } catch (error) {
//     console.error('Error querying the database:', error);
//   } finally {
//     // Disconnect Prisma Client
//     await prisma.$disconnect();
//   }
// }


async function main() {
  try {
    const skillSet = await prisma.skills_set.findMany()

		console.log('*********MongoDB DATA', skillSet) // Debugging line
  } catch (error) {
    onsole.error('Error fetching skillSet:', error) // Debugging line
  }
}

// Run the main function
main();