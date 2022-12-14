import React from 'react'
import Enid from "./Missdine.jpeg"
import Typed from "react-typed"

function Header() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#66BFBF"}}>
      <div className="col-sm-12" style={{display:"flex", flexWrap:"Wrap"}}>
        <div className="col-sm-">
            <img src={Enid} alt="" style={{height:"400px",width:"400px",borderRadius:"50%"}}/>
        </div>
        <div className="col-sm-12">
            <h1>Hello, I'm Enid</h1>
            <h1>And I am a <span>
            <Typed
            strings={["FullStack Software Developer"]}
            typeSpeed={150}
            backSpeed={150}
            loop
            style={{fontSize:"1.5rem",fontWeight:"600px", color:"#FF0063"}}
          />
            </span></h1>
            <a href="enidnyatichi1212@gmail.com">
                <button style={{backgroundColor:"#FF0063", border:" solid 0px", color:"white"}}>Hire me !</button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Header
