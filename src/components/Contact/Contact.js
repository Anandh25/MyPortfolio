import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import {Instagram,LinkedIn,GitHub} from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>anandhmanoharan@gmail.com</span>
            </p>
            <p>
                Mobile Number : <span>+91 9345493810</span> 
            </p>
            <div className='contact__icons'>
            <a href='https://www.linkedin.com/in/anandhmanoharan-2592a913a/' target={'_blank'}>
            <IconButton>
            <LinkedIn />
            </IconButton>
            </a>
            <a href='https://github.com/Anandh25/' target={'_blank'}>
            <IconButton>
            <GitHub />
            </IconButton>
            </a>
            <a href='https://www.instagram.com/anandh_mano' target={'_blank'}>
            <IconButton>
            <Instagram />
            </IconButton>
            </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
