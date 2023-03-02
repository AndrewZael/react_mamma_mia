import React from 'react'
import { useContext } from 'react';

import PizzasContext from '../contexts/PizzasContext';
import Card from '../components/Card';

const Home = () => {

  const { pizzas } = useContext(PizzasContext);

  return (
    <section title="Pizzas" className="row mx-auto container">
      {
        pizzas.map(pizza => (
          <Card key={pizza.id} pizza={pizza} />
        ))
      }
    </section>
  )
}

export default Home