import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PizzasContext from '../contexts/PizzasContext';
import AddRemove from './AddRemove';

const Card = ({ pizza }) => {

  const navigate = useNavigate();
  const { pizzasAdded } = useContext(PizzasContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
     setQuantity(pizzasAdded.find(p => p.id === pizza.id)?.quantity);
  }, [pizzasAdded, pizza.id]);

  return (
    <article title={`Pizza ${pizza.name.charAt().toUpperCase()}${pizza.name.slice(1)}`} 
    className="col-12 col-sm-6 col-md-4 mb-3">
      <div className="card overflow-hidden">
        <img src={pizza.img} alt={pizza.name} width="100%" />
        <div>
          <div className="p-3">
            <h2 className="text-capitalize border-bottom pb-3 mb-3 h3">{pizza.name}</h2>
            <h3 className="h5">Ingredientes</h3>
            <ul>
              {
                pizza.ingredients.map(ingredient => (
                  <li className="text-capitalize" key={ingredient}>{ingredient}</li>
                ))
              }
            </ul>
          </div>
          <data value={pizza.price} className="d-block text-center h3 mb-0 pt-3 border-top">
            ${pizza.price.toLocaleString(['id', 'en'])}
          </data>

          <div className="d-flex justify-content-between align-items-center mt-4 gap-3 p-3">
            <button onClick={() => navigate(`/pizza/${pizza.id}`)} className="btn btn-secondary w-50 text-nowrap">
              Ver más
            </button>
            <AddRemove pizza={pizza} quantity={quantity} />
          </div>

        </div>
      </div>
    </article>
  )
}

export default Card