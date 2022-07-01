import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Studies</h1>
      <div className='experienceContainer__info'>
        <Experience number="2012-2013" title='I Have done my SSLC education with 84%, Which helped me to choose Computer Science group for my Higher Education' ></Experience>
        <Experience number="2014-2015" title='I Have done my HSC education with 77%, Which helped me to improve my understanding of any problem'></Experience>
        <Experience number="2015-2019" title='I completed my UG studies with major in IT(Information Technology) and scored 72%, which helped me to explore new technologies'></Experience>
      </div>
    </Element>
  )
}

export default ExperienceContainer
