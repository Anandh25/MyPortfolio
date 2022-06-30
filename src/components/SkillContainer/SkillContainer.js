import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skillimage.jpg'
import { LinearProgress } from '@mui/material/'
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
            <img src={skillimg} alt='' />
        </div>
        <div className='skillContainer__text'>
            <h2>***MY SKILLSET ***</h2>
            <div className='skillContainer__skillSet'>
                <h5>React</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant='determinate' value={40} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Java</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant='determinate' value={50} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>Sql</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant='determinate' value={60} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant='determinate' value={70} />
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                <LinearProgress variant='determinate' value={70} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
