import React from 'react';
import './App.css';
import ProductList from './views/ProductList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProduct from './views/CreateProduct';
import Banner from './components/Banner';
import { createProduct } from './services/pichinchaService';

function App() {

  const handleNewProductSubmit = (newProduct: any) => {

    createProduct(newProduct)
      .then((response) => {
        console.log('Product created: ', newProduct);
      })
      .catch((error) => {
        console.error('Error creating new product:', error);
      });
  };

  return (
    <Router>
      <div className="App">
        <Banner/>
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/agregar">
            <CreateProduct onSubmit={handleNewProductSubmit}/>
          </Route>
          <Route path="/editar">
            <CreateProduct onSubmit={handleNewProductSubmit}/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
