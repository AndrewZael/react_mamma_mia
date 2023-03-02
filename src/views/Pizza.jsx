import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PizzasContext from '../contexts/PizzasContext';
import BtnAdd from '../components/BtnAdd';

const Pizza = () => {

  const { id } = useParams();
  const [pizza, setpizza] = useState({});
  const { pizzas } = useContext(PizzasContext);
  const getPizza = () => {
    setpizza(pizzas.filter(p => p.id === id)[0]);
  }

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <article title={pizza.name} className="border rounded overflow-hidden">
      <div className="row mx-0">
        <div role="img" className="col-7 bg" style={{ backgroundImage: `url(${pizza.img})` }}></div>
        <div className="col-5 p-3">
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
            <span className="h4 m-0">Precio $<data value="10.325">10.325</data></span>
            <BtnAdd />
          </footer>
        </div>
      </div>
    </article>
  )
}

export default Pizza