import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import {NavLink} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { clearAllCart } from "../featchers/cartSlice";

function Navbars() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.cart)
  return (
    <Navbar expand="lg" fixed='top' className="navbars bg-dark ">
      <Container>
        <NavLink to='/' className="logo text-bs-btn-active-bg">Cart App</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className="text-light px-3">Home</NavLink>
            <NavLink to='/cart' className="text-light">cart- <small className='text-danger'>{value.cart.length}</small> </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button className={value.cart.length < 1 && 'nonBtn'} variant="primary" onClick={() => dispatch(clearAllCart())}>clear to cart</Button>
      </Container>
    </Navbar>
  );
}

export default Navbars;