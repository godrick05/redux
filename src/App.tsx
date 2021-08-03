import React from 'react';
import ListProducts from './components/listProducts';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <ListProducts />
      <Product />
    </div>
  );
}

export default App;
