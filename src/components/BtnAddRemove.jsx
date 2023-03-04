import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import PizzasContext from '../contexts/PizzasContext'

const BtnAddRemove = ({ pizza, type = 'add', btn = 'danger', textBtn = 'Añadir' }) => {
  
  const { pizzasAdded, setPizzasAdded } = useContext(PizzasContext);
  const [ quantity, setQuantity ] = useState(0);

  useEffect(() => {
      setQuantity(pizzasAdded.find(p => p.id === pizza.id)?.quantity);
  }, [pizzasAdded, pizza]);

  const addRemovePizza = () => {
    const pizzaAdd = {
      id: pizza.id,
      quantity: 1
    }
    const objPizza = pizzasAdded.find(p => p.id === pizza.id);
    const arrPizzas = [...pizzasAdded];

    if(objPizza !== undefined){
        const i = arrPizzas.findIndex(p => p.id === pizza.id);
        type === 'add' ? arrPizzas[i].quantity += 1 : arrPizzas[i].quantity -= 1;
    }else{
      arrPizzas.push(pizzaAdd);
    }
    setPizzasAdded([...arrPizzas]);
  }

  return (
    <button onClick={() => addRemovePizza()} className={`btn flex-fill btn-${btn}`} 
    disabled={(type !== 'add' && quantity === 0) || (type !== 'add' && quantity === undefined)}>
      { textBtn }
    </button>
  )
}

export default BtnAddRemove