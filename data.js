const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create skills_set with related skills
  const frontendSkillsSet = await prisma.skills_set.create({
    data: {
      name: 'Frontend Development',
      color: '#FF5733',
      skills: {
        create: [
          { name: 'HTML', logo: 'html-logo.png' },
          { name: 'CSS', logo: 'css-logo.png' },
          { name: 'JavaScript', logo: 'js-logo.png' },
        ],
      },
    },
  });

  const backendSkillsSet = await prisma.skills_set.create({
    data: {
      name: 'Backend Development',
      color: '#33FF57',
      skills: {
        create: [
          { name: 'Node.js', logo: 'node-logo.png' },
          { name: 'Express', logo: 'express-logo.png' },
          { name: 'MongoDB', logo: 'mongodb-logo.png' },
        ],
      },
    },
  });

  // Create experience
  const experience = await prisma.experience.create({
    data: {
      company_name: 'Tech Corp',
      starting_date: '2020-01-01',
      ending_date: '2022-01-01',
      position: 'Software Engineer',
      description: ['Developed web applications', 'Collaborated with cross-functional teams'],
    },
  });

  // Create projects
  const project = await prisma.projects.create({
    data: {
      name: 'Portfolio Website',
      description: ['A personal portfolio website to showcase projects and skills'],
      gist: 'A full-stack web application built with React and Node.js',
      website: 'https://portfolio.example.com',
      github: 'https://github.com/username/portfolio',
      image: ['portfolio-screenshot1.png', 'portfolio-screenshot2.png'],
      cover: 'portfolio-cover.png',
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
  });

  console.log('Data generation completed.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
