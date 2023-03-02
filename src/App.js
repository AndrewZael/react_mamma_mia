import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './views/Home';
import Pizza  from './views/Pizza';
import ShoppingCart from  './views/ShoppingCart';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import PizzasContext from './contexts/PizzasContext';
import DATA from './assets/data/pizzas.json';

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasAdded, setPizzasAdded] = useState([]);

  const shareData = {
    pizzas,
    setPizzas,
    pizzasAdded,
    setPizzasAdded
  }
  const getPizzas = () => {
    setPizzas(DATA);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <main className="App">
      <PizzasContext.Provider value={shareData}>
        <BrowserRouter>
            <Header />
            <section className="mx-auto mb-5 container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pizza/:id' element={pizzas.length > 0 ? <Pizza /> : null} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
              </Routes>
            </section>
        </BrowserRouter>
      </PizzasContext.Provider>
    </main>
  );
}

export default App;
