import React from 'react'
import Digital from '../assets/screencapture-pagefly-by-sirajul-myshopify-2025-03-15-06_40_48.png'
import Nike from '../assets/screencapture-pet-portraites-com-myshopify-apps-pagefly-preview-2025-03-15-06_49_43.png'
import Clothify from '../assets/screencapture-https-slumblr-com-myshopify-2025-03-17-22_46_21.png'
// import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "Pagefly Landing Page",
          // description:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
          // techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
          link: "https://pagefly-by-sirajul.myshopify.com/",
          Password:1234 ,
          image: Digital, // Replace with your project screenshot
        },
        {
          title: "Figma to Pagefly Landing Page",
          // description:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
          // techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
          link: "https://pet-portraites-com.myshopify.com/apps/pagefly/preview?id=82cfab79-32ac-4568-8b34-a45d335ee337",
          password: 1234,
          image: Nike, // Replace with your project screenshot
        },
        {
          title: "Shrine theme customization",
          // description:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
          // techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
          link: "https://https-slumblr-com.myshopify.com/",
          password: 1234,
          image: Clothify, // Replace with your project screenshot
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-80 object-cover px-3 pt-1 
                    rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 '>{project.title}</h3>
                        {/* <p className='text-gray-300 mb-4'>{project.description}</p> */}
                        {/* <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div> */}
                        <div className='flex gap-12 mt-2'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer ' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.password} target='_blank' rel='noopener noreferrer'
                             className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg 
                             shadow-md hover:bg-gray-900 transition-colors'> password:1234</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
