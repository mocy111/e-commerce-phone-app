import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './component/Landing';
import Conexion from './component/Conexion';
import Cart from './component/Cart/Cart';
import Navbar from './component/NavBar';
import Footer from './component/Footer';
import ScrollIndicator from './component/ScrollIndicator';
import ScrollToTop from './component/ScrollToTop';
import Checkout from './component/Cart/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let copyState = [...cart];

  const handleAddToCart = (id, title, price, imageUrl, count) => {
    const filterCart = copyState.filter((param) => param.id === id);

    const item = { id, title, price, imageUrl, count };

    if (!copyState.length) {
      setCart((prev) => [...prev, item]);
    } else {
      if (!filterCart.length) {
        setCart((prev) => [...prev, item]);
      } else {
        const idFilter = filterCart[0].id;
        copyState = copyState.map((param) => {
          if (param.id === idFilter) param.count += 1;
          return param;
        });
        setCart(copyState);
      }
    }
  };

  const reduction = (id) => {
    copyState.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart(copyState);
    getTotal();
  };

  const increase = (id) => {
    copyState.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart(copyState);
    getTotal();
  };

  const removeProduct = (id) => {
    copyState.forEach((item, index) => {
      if (item.id === id) {
        copyState.splice(index, 1);
      }
    });
    setCart(copyState);
    getTotal();
  };

  const getTotal = () => {
    const res = copyState.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(res);
  };

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
    localStorage.setItem('dataTotal', JSON.stringify(total));
  }, [cart,total])

  useEffect(() => {
   
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            setCart(dataCart)
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            setTotal(dataTotal)
        }
  }, [])

  return (
    <div className='App'>
      <Router>
        <Navbar cartLength={cart.length} />
        <Switch>
          <Route path='/cart'>
            <Cart
              cart={cart}
              reduction={reduction}
              increase={increase}
              setCart={setCart}
              removeProduct={removeProduct}
              getTotal={getTotal}
              total={total}
            />
          </Route>
          <Route path='/conexion'>
            <Conexion />
          </Route>
          <Route path='/checkout'>
            <Checkout total={total} />
          </Route>
          <Route path='/'>
            <Landing handleAddToCart={handleAddToCart} />
          </Route>
        </Switch>
        <Footer />
        <ScrollIndicator />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
