import React from 'react'
import { Element } from 'react-scroll'
import  Project from '../Projects/Projects'
import './ProjectContainer.css'


const ProjectContainer = () => {
    const projects = [
        // {
        //     img:"https://preview.redd.it/g925jqjovmm81.png?width=960&crop=smart&auto=webp&s=3aa171c4f1260b20f60000689bbe648d61a451c8",
        //     title:"Project1",
        //     desc:"A project description is a high-level overview of why you're doing a project. The document explains a project's objectives and its essential qualities. Think of it as the elevator pitch that focuses",
        //     link:"www.facebook.com",
        // },
        {
            img:"https://lh3.googleusercontent.com/0ETIHMdwbqrfXfOaawNIb7RWQy4pNCyjfeoSU0ChGI3H70GPlermDpjwa0IFATNhOKi5vY58WdmyKg4tt1PKAy9LJp94fm6rDVMNXQ6xddfAY_R0LZK7xxiLZjN5jY79pAbsSqTD",
            title:"MOVIE-BOOKING-APP",
            desc:"This project is aimed at developing the front end of a real-world application in React. With this application, which is named BookMyMovie, users can browse upcoming and released movies and so on",
            link:"https://github.com/Anandh25/UPGRAD_MOVIE_APP",
            
        },
        {
            img:"data:image/png;base64,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",
            title:"GUVI",
            desc:"Successfully completed an educational intern as a Software Developer at Guvi Geek Network Pvt Ltd, IITM Research Park in Chennai from 11 Jan 2018 to 10 Feb 2018",
            link:"https://www.guvi.in/",
        },
    ]
  return (
   <Element className='projectContainer' id='projects'>
    <h1>Project and Intern related to Frontend development</h1>
    {/* <p>Project and Intern related to Frontend development</p> */}
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
