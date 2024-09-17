import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Skills from "../components/Skills"
import {
	skills_set,
	skills,
	experience,
	projects
} from "@prisma/client"
import backgrounds from "../public/backgrounds"
import { useEffect } from "react"
import { getPlaiceholder } from "plaiceholder"
import { GetStaticProps } from 'next';
import { PrismaClient } from "@prisma/client"


// const prisma = new PrismaClient()

type SkillsSetType = skills_set & { skills: skills[] }

interface Props {
	skillSet: SkillsSetType[]
	experiences: experience[]
	projectsWithPlaceholder: (projects & { placeholder: [] })[]
}

const Home: NextPage<Props> = ({
	skillSet,
	experiences,
	projectsWithPlaceholder
}) => {

	console.log(skillSet)
	const randomBackground = () => {
		const randomindex = Math.floor(Math.random() * backgrounds.length)
		return backgrounds[randomindex].url
	}

	useEffect(() => {
		const background = randomBackground()
		document.getElementById(
			"bg"
		)!.style.backgroundImage = `url(${background})`
	}, [])

	return (
		<div>
			<Head>
				<title>Ashutosh Portfolio</title>
				<meta
					name="description"
					content="Portfolio website for software developer Sarthak Ahuja"
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<>
				<Navbar />

				<div
					id="bg"
					className=" bg-center bg-cover bg-no-repeat h-screen w-[100%] absolute inset-0 z-[-10]"
				>
					<div className="backdrop-blur-[100px] h-[250%]"></div>
				</div>
				<div className="mt-[66.5px] sm:mt-[109px] md:mt-[105px] lg:mt-[107px] xl:mt-[124px]"></div>

				<Hero />
				<About experiences={experiences} />
				<Work projects={projectsWithPlaceholder} />
				<Skills skillSet={skillSet} />
				<Contact />
				<Footer />
			</>
		</div>
	)
}


// export const getStaticProps: GetStaticProps<Props> = async () => {
// 	const prisma = new PrismaClient()
// 	try {
// 	const experiences = await prisma.experience.findMany();
// 	const skillSet = await prisma.skills_set.findMany({
// 		include: {
// 			skills:true,
// 		}
// 	});
// 	const projects = await prisma.projects.findMany();
// 	const projectsWithPlaceholder = projects.map(project => ({
// 		...project,
// 		placeholder: [], // Add any default value you want for placeholder
// 	  }));
// 	console.log('*********MongoDB DATA', experiences); // Debugging line
// 	console.log(">>>>>>skills",skillSet)
// 	return {
// 		props: { experiences, skillSet, projectsWithPlaceholder },
// 	};
// 	} catch (error) {
// 	  console.error('Error fetching experiences:', error); // Debugging line
// 	return {
// 		props: { experiences: [] ,  skillSet: [], projectsWithPlaceholder[]}, // Handle errors by returning an empty array
// 	};
// 	}
// };


// new

export const getStaticProps: GetStaticProps<Props> = async () => {
	const prisma = new PrismaClient();
	try {
	  const experiences = await prisma.experience.findMany();
	  const skillSet = await prisma.skills_set.findMany({
		include: {
		  skills: true,
		},
	  });
  
	  const projects = await prisma.projects.findMany();
  
	  // Add placeholder array to each project
	  const projectsWithPlaceholder = projects.map(project => ({
		...project,
		placeholder: [], // Add any default value you want for placeholder
	  }));
  
	  return {
		props: {
		  experiences,
		  skillSet,
		  projectsWithPlaceholder, // Ensure this is properly included in the returned props
		},
	  };
	} catch (error) {
	  console.error('Error fetching data:', error);
	  return {
		props: {
		  experiences: [],
		  skillSet: [],
		  projectsWithPlaceholder: [], // Handle errors by returning an empty array
		},
	  };
	}
  };
  


//   export const getProps:GetStaticProps<Props> = async() => {
// 	const prisma = new PrismaClient()

// 		try{
// 		const skillSet = await prisma.skills_set.findMany()

// 		console.log('*********MongoDB DATA', skillSet) // Debugging line
// 		return {
// 			props: { skillSet },
// 		}
// 	} catch (error) {
// 		console.error('Error fetching skillSet:', error) // Debugging line
// 		return {
// 			props: { skillSet: [] }, // Handle errors by returning an empty array
// 		}
// 	}
//   }

export default Home
