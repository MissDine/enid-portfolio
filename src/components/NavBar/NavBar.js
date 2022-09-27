import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <Navbar className='navba' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-sm-12">
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/ios-glyphs/2x/facebook.png" alt="facebook" /></Nav.Link>
            <Nav.Link href="#instagram"><img src="https://img.icons8.com/ios-filled/2x/instagram-new.png" alt="instagram" /></Nav.Link>
            <Nav.Link href="#twitter"><img src="https://img.icons8.com/ios-filled/2x/twitter-squared.png" alt="twitter" /></Nav.Link>
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/external-prettycons-flat-prettycons/2x/external-youtube-multimedia-prettycons-flat-prettycons.png" alt="youtube" /></Nav.Link>
            <Nav.Link as = {Link} to = {"/home"}>Home</Nav.Link>
            <Nav.Link as = {Link} to = {"/chaplaincy"}>Chaplaincy</Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"}>Contact Us</Nav.Link>
            <Nav.Link as = {Link} to = {"/support"}>Support St Paul's</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

export default NavBar