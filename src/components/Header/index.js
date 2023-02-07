import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../actions';

function Header() {
  const { authenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e) =>{
    e.preventDefault();
    dispatch(logOut());
    navigate("/signin")
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex
    :1}}>
      <Container fluid >
        <Link to="/" className='navbar-brand'>ECOM DASHBOARD</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          {!authenticated ? <><Nav>
            <li className='nav-item'>
              <NavLink to="/signup" className='nav-link'>Signup</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/signin" className='nav-link'>Signin</NavLink>
            </li>
          </Nav>
          </> :
          <Nav>
          <li className='nav-item'>
            <Button onClick={logoutHandler}>Signout</Button>
          </li>
        </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;