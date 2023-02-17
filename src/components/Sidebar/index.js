import React from 'react'
import { Col } from 'react-bootstrap'
import "./style.css"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <Col md={2} className="sidebar">
        <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/category">Category</NavLink>
              </li>
        </ul>
    </Col> 
  )
}

export default Sidebar