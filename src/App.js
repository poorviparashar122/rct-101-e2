import React from "react";
import Product from "./components/Product"
import AddProduct from "./components/AddProduct";
import Pagination from "./components/Pagination"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="App">

  <AddProduct/>
  <Product/>
  <Pagination/>
  <Products/>
 
  
  </div>
  );
}

export default App;
