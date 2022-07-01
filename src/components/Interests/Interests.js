import React,{ useState } from 'react'
import './Interests.css'

const Interests = ({img,title,desc,link}) => {
    const [show, setShow] = useState(false);
  return (
    <a href={link}>
        <div className='interest' 
        onMouseEnter={()=>setShow(true)} 
        onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className='interest__content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div> 
                ) : (
                    <img src ={img} alt="" />
                )
            }

        </div>
    </a>
  )
}

export default Interests
