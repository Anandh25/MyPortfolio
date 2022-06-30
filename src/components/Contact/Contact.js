import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn} from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>anandhmanoharan@gmai.com</span>
            </p>
            <p>
                Github : <span>https://github.com/Anandh25</span> 
            </p>
            <div className='contact__icons'></div>
            <a href='google.com'>
            <IconButton>
            <LinkedIn />
            </IconButton>
            </a>
            <a href='google.com'>
            <IconButton>
            <Facebook />
            </IconButton>
            </a>
            <a href='google.com'>
            <IconButton>
            <Instagram />
            </IconButton>
            </a>
        </div>
    </Element>
  )
}

export default Contact
