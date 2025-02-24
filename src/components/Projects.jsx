import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white text-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title="Chef_website" main="This is chef website created using Html,Css and Js"/>
            <ProjectCard title="Portfolio_website" main="This is website is personal portfolio created using React and Tailwind css"/>
            <ProjectCard title="Virtual_r" main="A simple landing page for virtual reality software platform"/>
        </div>
    </div>
  )
}

export default Projects
