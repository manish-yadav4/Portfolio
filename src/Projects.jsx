import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            {/* <ProjectCard title="Personal Website" main="this is my  personal website"/> */}
            <ProjectCard title="To-do list" main="this is my to-do list"/>
            <ProjectCard title="Weather Application" main="this is my  personal website"/>
        </div>
    </div>
  )
}

export default Projects