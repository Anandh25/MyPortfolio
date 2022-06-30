import React from 'react'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent__container'>
        <h1>Mr.Anandh Manoharan</h1>
        <p>I am an Information Technology graduated student. I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)...</p>
        <a href="https://app.luminpdf.com/viewer/62bd5dad66d0065b920e096f" target={"_blank"} rel={"noopener noreferrer"}>
            <button className='topContent__downloadButton'>Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default TopContent
