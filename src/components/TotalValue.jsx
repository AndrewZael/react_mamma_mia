import React from 'react'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import PizzasContext from '../contexts/PizzasContext'

const TotalValue = ({ cart = true }) => {

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
 
  const { pizzas, pizzasAdded } = useContext(PizzasContext);

  const sum = () => {
    const arrTotalValuesPizza = [];
    let quantitySum = 0;
    pizzasAdded.map(p => {
      const pizza = pizzas.find(pizza => pizza.id === p.id);
      arrTotalValuesPizza.push(pizza.price * p.quantity);
      quantitySum += p.quantity;
    });
    setTotal(arrTotalValuesPizza.reduce((a, b) => a + b, 0));
    setQuantity(quantitySum);
  }

  useEffect(() => {
     sum();
  }, [pizzasAdded]);

  return (
    <div className="d-flex align-items-center">
      { cart ?
      <NavLink to="/shopping-cart" className="position-relative">
        {
          quantity > 0 ? <span id="badge-total" className="badge bg-danger rounded-circle position-absolute">
          { quantity }
        </span> : null
        }
        <span className="material-icons-outlined bg-primary text-light rounded-circle p-2">
          shopping_cart
        </span>
      </NavLink> : null
      }
      <data className="d-flex align-items-center text-light ms-3 text-dark fw-bold h5 mb-0">
        ${total.toLocaleString(['id', 'en'])}
      </data>
    </div>
  )
}

export default TotalValue