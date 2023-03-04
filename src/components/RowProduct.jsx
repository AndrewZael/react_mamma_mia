import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import PizzasContext from '../contexts/PizzasContext'
import AddRemove from '../components/AddRemove';
import { NavLink } from 'react-router-dom';

const RowProduct = ({ pizza }) => {

  const { pizzas, pizzasAdded } = useContext(PizzasContext);
  const [ objPizza, setObjPizza ] = useState({});

  useEffect(() => {
    setObjPizza(pizzas.find(p => p.id === pizza?.id));
  }, [pizzas, pizza?.id]);

  return (
    <tr className="border-bottom">
      <td width="100" className="py-3">
        <NavLink to={`/pizza/${pizza.id}`}>
          <img src={objPizza.img} alt={objPizza.name} width="80" className="rounded" />
        </NavLink>
      </td>
      <td className="py-2 text-capitalize">
         { objPizza.name }
      </td>
      <td>
        <div className="d-flex justify-content-end align-items-center">
          $<data value={(pizza.quantity * objPizza.price).toString()} className="me-3">
            {(pizza.quantity * objPizza.price).toLocaleString(['id', 'en'])}
          </data>
          <AddRemove 
            pizza={objPizza} 
            quantity={pizzasAdded.find(p => p.id === pizza.id)?.quantity} />
          </div>
      </td>
    </tr>
  )
}

export default RowProduct