import React from 'react';
import { useContext } from 'react';
import PizzasContext from '../contexts/PizzasContext'
import RowProduct from '../components/RowProduct';
import TotalValue from '../components/TotalValue';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
 
const ShoppingCart = () => {

  const { pizzasAdded } = useContext(PizzasContext);
  const [btnPay, setBtnPay] = useState(false);

  useEffect(() => {
      setBtnPay(pizzasAdded.some(p => p.quantity > 0));
  }, [pizzasAdded]);

  return (
    <div className="p-4 bg-light rounded border">
      <h1 className="h5 fw-bold mb-3">
        { btnPay ? 'Detalle del pedido' : 'Carrito vacío' }
      </h1>

      { btnPay ?
      <>
      <table cellPadding="10" className="w-100 bg-white rounded">
        <tbody>
        {
          pizzasAdded.map(pizza => (
                pizza.quantity > 0 ?
                <RowProduct key={pizza.id} pizza={pizza}  /> : null
          ))
        }
        </tbody>
      </table>
      <footer className="d-flex flex-column align-items-end my-4">
        <TotalValue cart={false} />
        <button disabled={!btnPay} className="btn btn-success mt-3">
          Ir a pagar
         </button>
      </footer>
      </> :
        <>
        <p className="mt-4">No hay pizzas agregadas a tu carrito.</p>
        <NavLink to="/" className="btn btn-danger">Ir a comprar</NavLink>
        </>
      }
    </div>

  )
}

export default ShoppingCart