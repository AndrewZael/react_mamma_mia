import React from 'react'
import { NavLink } from 'react-router-dom'
import TotalValue from './TotalValue';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-content-center p-3 mb-5 bg-info position-sticky top-0">
      <NavLink to="/" className="btn border-0 px-0 text-light"> ¡Pizzeria Mamma Mia!</NavLink>
      <TotalValue />
    </header>
  )
}

export default Header