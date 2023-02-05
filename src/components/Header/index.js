import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const { authenticated } = useSelector(state => state.auth);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className='navbar-brand'>ECOM DASHBOARD</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          {!authenticated && <><Nav>
            <li className='nav-item'>
              <NavLink to="/signup" className='nav-link'>Signup</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/signin" className='nav-link'>Signin</NavLink>
            </li>
          </Nav>
          </>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;