import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <Navbar className='col-sm-12' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="col-sm-12">
          <Nav className="col-sm-12">
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/ios-glyphs/2x/facebook.png" alt="facebook" style={{height:"40px",width:"40px"}}/></Nav.Link>
            <Nav.Link href="#instagram"><img src="https://img.icons8.com/ios-filled/2x/instagram-new.png" alt="instagram" style={{height:"40px",width:"40px"}}/></Nav.Link>
            <Nav.Link href="#twitter"><img src="https://img.icons8.com/ios-filled/2x/twitter-squared.png" alt="twitter" style={{height:"40px",width:"40px"}}/></Nav.Link>
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/external-prettycons-flat-prettycons/2x/external-youtube-multimedia-prettycons-flat-prettycons.png" alt="youtube" style={{height:"40px",width:"40px"}}/></Nav.Link>
            <Nav.Link as = {Link} to = {"/home"} style={{textDecoration:"none",marginLeft:"10vw"}}>Home</Nav.Link>
            <Nav.Link as = {Link} to = {"/About"} style={{textDecoration:"none"}}>About</Nav.Link>
            <Nav.Link as = {Link} to = {"/Services"} style={{textDecoration:"none"}}>Services</Nav.Link>
            <Nav.Link as = {Link} to = {"/experiences"} style={{textDecoration:"none"}}>experiences</Nav.Link>
            <Nav.Link as = {Link} to = {"/Projects"} style={{textDecoration:"none"}}>Projects</Nav.Link>
            <Nav.Link as = {Link} to = {"/Contact"} style={{textDecoration:"none"}}>Contact</Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

export default NavBar