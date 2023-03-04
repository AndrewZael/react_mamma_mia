import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PizzasContext from '../contexts/PizzasContext';
import AddRemove from '../components/AddRemove';

const Pizza = () => {

  const { pizzas, pizzasAdded } = useContext(PizzasContext);
  const { id } = useParams();
  const [pizza, setpizza] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setpizza(pizzas.find(p => p.id === id));
  }, [pizzas, id]);

  useEffect(() => {
    setQuantity(pizzasAdded.find(p => p.id === id)?.quantity);
  }, [pizzasAdded, id]);

  return (
    <article title={pizza.name} className="border rounded overflow-hidden">
      <div className="row mx-0">
        <div role="img" className="img-detail col-12 col-md-7 bg" style={{ backgroundImage: `url(${pizza.img})` }}>
        </div>
        <div className="col-12 col-md-5 p-3">
          <h1 className="text-capitalize pb-3 mb-3 border-bottom">{ pizza.name }</h1>
          <p>{ pizza.desc }</p>
          <strong>Ingredientes</strong>
          <ul className="mt-2">
            {
              pizza.ingredients?.map(ing => (
                <li key={ing} className="text-capitalize">{ ing }</li>
              ))
            }
          </ul>
          <footer className="d-flex justify-content-between mt-4 mb-2">
            <span className="h4 m-0">Precio $<data value={pizza.price}>
              { pizza.price?.toLocaleString(['id', 'en']) }</data></span>
            <div>
              <AddRemove pizza={pizza} quantity={quantity} />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}

export default Pizza