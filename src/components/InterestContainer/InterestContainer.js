import React from 'react'
import { Element } from 'react-scroll'
import  Interest from '../Interests/Interests'
import './InterestContainer.css'

const InterestContainer = () => {
    const interests = [
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZI-AZFpRT2BCzvUNKXFvmtHfoMWdc_HXx-T9uiJFHVrqWYi7B8hjQ9vIwo_jSYCy06k&usqp=CAU",
            title:"I like to play football",
            desc:"In recent times i got admire to football...",
        },
        {
            img:"https://meadowscastlerock.com/wp-content/uploads/2016/07/Learn-to-Play-Guitar-in-a-Day-at-The-Grange-The-Meadows-Castle-Rock-1.jpg",
            title:"I love Music ",
            desc:"In free time i often listening to music... and learning guitar",
        },
        {
            img:"https://lh3.googleusercontent.com/QGnGwBvxC6O0qOXa87XO0oe4h7ldyU8A63nBQY42xQ4YSXVdA75Yi8inib_E4J_oguHeQw=s151",
            title:"I like doing mimicry onstage",
            desc:"Have participated in culturals and stage performances in college for mimicry ",
        },
    ]
  return (
   <Element className='interestContainer' id='int'>
    <h1>Interests</h1>
    <p>My own interests ....</p>
    <div className='interestContainer__interests'>
{
    interests.map((interest, index)=>{
        return (
            <Interest key={index} img={interest.img} title={interest.title} desc={interest.desc} link={interest.link}/>
        )
    })
} 
    </div>
   </Element>
  )
}


export default InterestContainer
