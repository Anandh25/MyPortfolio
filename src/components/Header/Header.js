import React from 'react'
import { Link } from "react-scroll"
import './Header.css'

const header = () => {
  return (
    <div  className="header">
      <div className="header__left">
        <h1>Web<span> Developer</span></h1>
      </div>
      <div className="header__right">
      <Link to="about" smooth={true} duration={500}>
        <h4>About Me</h4>
      </Link>
      <Link to="skills" smooth={true} duration={500}>
        <h4>Skills</h4>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        <h4>Practicals</h4>
      </Link>
      <Link to="exp" smooth={true} duration={500}>
        <h4>Studies</h4>
      </Link>
      <Link to="int" smooth={true} duration={500}>
        <h4>Interests</h4>
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        <h4>Contact Me</h4>
      </Link>
      </div>
      
    </div>
  )
}

export default header
