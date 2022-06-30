import React from 'react'
import { Element } from 'react-scroll'
import  Project from '../Projects/Projects'
import './ProjectContainer.css'


const ProjectContainer = () => {
    const projects = [
        {
            img:"https://preview.redd.it/g925jqjovmm81.png?width=960&crop=smart&auto=webp&s=3aa171c4f1260b20f60000689bbe648d61a451c8",
            title:"Project1",
            desc:"A project description is a high-level overview of why you're doing a project. The document explains a project's objectives and its essential qualities. Think of it as the elevator pitch that focuses",
            link:"www.facebook.com",
        },
        {
            img:"https://lh3.googleusercontent.com/0ETIHMdwbqrfXfOaawNIb7RWQy4pNCyjfeoSU0ChGI3H70GPlermDpjwa0IFATNhOKi5vY58WdmyKg4tt1PKAy9LJp94fm6rDVMNXQ6xddfAY_R0LZK7xxiLZjN5jY79pAbsSqTD",
            title:"MOVIE-BOOKING-APP",
            desc:"A project description is a high-level overview of why you're doing a project. The document explains a project's objectives and its essential qualities. Think of it as the elevator pitch that focuses",
            link:"https://github.com/Anandh25/UPGRAD_MOVIE_APP",
        },
        {
            img:"https://c4.wallpaperflare.com/wallpaper/1008/495/585/league-of-legends-summoner-s-rift-project-skins-wallpaper-preview.jpg",
            title:"Project3",
            desc:"A project description is a high-level overview of why you're doing a project. The document explains a project's objectives and its essential qualities. Think of it as the elevator pitch that focuses",
            link:"www.instagram.com",
        },
    ]
  return (
   <Element className='projectContainer' id='projects'>
    <h1>Projects</h1>
    <p>Some Projects i did till now...</p>
    <div className='projectContainer__projects'>
{
    projects.map((project, index)=>{
        return (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
        )
    })
} 
    </div>
   </Element>
  )
}

export default ProjectContainer
