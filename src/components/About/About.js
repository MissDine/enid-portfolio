import React from 'react'

function About() {
  return (
    <div className="col-sm-12" id="about" style={{backgroundColor:"#EAF6F6"}}>
        <h1 style={{fontSize:"2rem", textAlign:"center",color:"#FF0063"}}>About Us</h1>
        <div className="col-sm-12">
            <p style={{fontSize:"1rem", marginLeft:"10vw",marginRight:"10vw",marginBottom:"2vh"}}>
            Enid is an enthusiastic, self-motivated and skilled full-stack developer who enjoys designing and developingsolutions that satisfy the needs of the customer. She also enjoys learning new technologies, tools and methodologies that enable her to develop more efficiently.
            </p>
        </div>
        <div className="col-sm-12" style={{marginLeft:"45vw"}}>
        <button style={{backgroundColor:"#FF0063", border:" solid 0px", color:"white"}}>Download CV</button>
        </div>
    </div>
  )
}

export default About