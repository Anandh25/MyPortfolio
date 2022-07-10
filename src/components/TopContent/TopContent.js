import React from 'react'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent__container'>
        <h1>Anandh Manoharan</h1>
        <p>I am an Information Technology graduated student. A Music in the background and a cup of coffee next to my machine where my keys are designing something. Bliss right:)</p>
        {/* <a href="https://app.luminpdf.com/viewer/62bd5dad66d0065b920e096f" target={"_blank"} rel={"noopener noreferrer"}> */}
        <a href="https://drive.google.com/file/d/1bFZ2K9duuQ0sg11cwn5GmBnERI6sPRiT/view?usp=sharing" target={"_blank"} rel={"noopener noreferrer"}>
        
            <button className='topContent__downloadButton'>Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default TopContent
