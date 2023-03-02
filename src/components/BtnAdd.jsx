import React, { useContext } from 'react'
import { useState } from 'react';
import PizzasContext from '../contexts/PizzasContext'

const BtnAdd = ({ pizza }) => {
  
  const { pizzasAdded, setPizzasAdded } = useContext(PizzasContext);

  const addPizza = () => {
    const pizzaAdd = {
      id: pizza.id,
      pizzas: [pizza]
    }
    let objPizza = pizzasAdded.find(p => p.id === pizza.id);
    const arrPizzas = pizzasAdded.filter(p => p.id !== pizza.id);
    objPizza !== undefined ?
        objPizza.pizzas.unshift(pizza) :
        objPizza = pizzaAdd;
    arrPizzas.push(objPizza);
    setPizzasAdded([...arrPizzas]);
  }

  return (
    <button onClick={() => addPizza()} className="btn btn-danger flex-fill">Añadir</button>
  )
}

export default BtnAdd