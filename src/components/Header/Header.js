import React from 'react'
import Enid from "./Missdine.jpeg"

function Header() {
  return (
    <div className='col-sm-12'>
      <div className="col-sm-12" style={{display:"flex", flexWrap:"Wrap"}}>
        <div className="image">
            <img src={Enid} alt="" style={{height:"400px",width:"400px",borderRadius:"50%"}}/>
        </div>
        <div className="info">
            <h1>Hello, I'm Enid,</h1>
            <h1>And I am a <span>Software Developer</span></h1>
            <p>Hire me !</p>
        </div>
      </div>
    </div>
  )
}

export default Header
