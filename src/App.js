import { useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist + 1} : x ))
    } else {
      setCartItems(...cartItems, {...product, qty: 1})
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist - 1} : x ))
    }
  }

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
