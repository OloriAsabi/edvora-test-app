import { BrowserRouter,Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout }from "./components";
import { Orders, Products } from "./pages";
import { getOrders, getProducts } from "./api/api";

import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    setIsLoading(true)
    getProducts()
    .then((data) => {
      const items = data.data
      setProducts(expanded ? items : items.slice(0, 20));
      // console.log(data);
    });
    getOrders()
    .then((data) => {
      const items = data.data
      setOrders(expanded ? items : items.slice(0, 20));
      // console.log(data);
    })
    setIsLoading(false);
  }, [expanded])

return (
  <BrowserRouter>
  <Layout> 
    <div className="text-black bg-white h-screen dark:bg-black dark:text-white">
    <Routes>
    <Route exact path="/" 
    element={
    <Products
     isLoading={isLoading} 
     setExpanded={setExpanded} 
     expanded={expanded} 
     products={products} 
     />} 
     />
     <Route path="/orders"
    element={
    <Orders
    orders={orders}
    isLoading={isLoading}
    setExpanded={setExpanded} 
    expanded={expanded} 
    />} 
    />
    </Routes>
    </div>
    </Layout>
  </BrowserRouter>
);
}

export default App;
