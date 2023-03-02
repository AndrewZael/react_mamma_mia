import React from 'react'
import { useNavigate } from 'react-router-dom';
import BtnAdd from '../components/BtnAdd';

const Card = ({ pizza }) => {

  const navigate = useNavigate();

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

          <div className="d-flex justify-content-between mt-4 gap-3 p-3">
            <button onClick={() => navigate(`/pizza/${pizza.id}`)} className="btn btn-secondary flex-fill">
              Ver más
            </button>
            <BtnAdd pizza={pizza} />
          </div>

        </div>
      </div>
    </article>
  )
}

export default Card