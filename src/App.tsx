import React from 'react';
import './App.css';
import ProductList from './views/ProductList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './components/Banner';
import { createProduct, updateProduct } from './services/pichinchaService';
import EditProduct from './views/EditProduct';
import CreateProduct from './views/CreateProduct';

function App() {

  const product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  }

  const handleNewProductSubmit = (newProduct: any) => {

    createProduct(newProduct)
      .then((response) => {
        console.log('Product created: ', newProduct);
      })
      .catch((error) => {
        console.error('Error creating new product:', error);
      });
  };

  const handleProductEdit = (product: any) => {
    updateProduct(product)
    .then((response) => {
      console.log('Product updated: ', product);
    })
    .catch((error) => {
      console.error('Error updating product:', error);
    });
  }

  return (
    <Router>
      <div className="App">
        <Banner/>
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/agregar">
            <CreateProduct onSubmit={handleNewProductSubmit} productData={product} checked={false}/>
          </Route>
          <Route path="/editar">
            <EditProduct onSubmit={handleProductEdit}/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
