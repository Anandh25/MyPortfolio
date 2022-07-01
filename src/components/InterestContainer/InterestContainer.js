import React from 'react'
import { Element } from 'react-scroll'
import  Interest from '../Interests/Interests'
import './InterestContainer.css'

const InterestContainer = () => {
    const interests = [
        {
            img:"https://lh3.googleusercontent.com/QGnGwBvxC6O0qOXa87XO0oe4h7ldyU8A63nBQY42xQ4YSXVdA75Yi8inib_E4J_oguHeQw=s151",
            title:"ENTERTAINMENT",
            desc:"Actively took part in stage performances during my college days for mimicry. Participated in auditions for KPY, Senior & Junior Competitions",
        },
        {
            img:"https://meadowscastlerock.com/wp-content/uploads/2016/07/Learn-to-Play-Guitar-in-a-Day-at-The-Grange-The-Meadows-Castle-Rock-1.jpg",
            title:"MUSIC",
            desc:"I often listen to music in free time. Got interest in Guitar and started learning to play",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZI-AZFpRT2BCzvUNKXFvmtHfoMWdc_HXx-T9uiJFHVrqWYi7B8hjQ9vIwo_jSYCy06k&usqp=CAU",
            title:"SPORT",
            desc:"In recent times, I got interests in football. So started playing it to get relaxed",
        },
    ]
  return (
   <Element className='interestContainer' id='int'>
    <h1>Interests</h1>
    {/* <p>My own interests ....</p> */}
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
