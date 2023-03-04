import React from 'react'
import { NavLink } from 'react-router-dom'
import TotalValue from './TotalValue';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-content-center p-3 bg-info position-sticky top-0">
      <NavLink to="/" className="btn border-0 px-0 text-dark fw-bold d-flex">
      <span className="material-icons-outlined me-2">local_pizza</span> 
      ¡Pizzeria Mamma Mia!
      </NavLink>
      <TotalValue />
    </header>
  )
}

export default Header