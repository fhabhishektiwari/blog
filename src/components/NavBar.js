import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand><Link to='/'>ReactLab</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav><Link to="/">Home</Link></Nav>
                <Nav><Link to='/about'>About</Link></Nav>
                <Nav><Link to='/contact'>Contact Us</Link></Nav>
                {/*<Nav><Link to='/user/anil'>Anil</Link></Nav>*/}
                {/*<Nav><Link to='/user/peter'>Peter</Link></Nav>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;