import React from "react";
import ProductsLayout from "./product/ProductsLayout";


function HomePage() {

  return <div><h1>Home page</h1>
    <ProductsLayout pageLayout="carousel" search=""/>
   </div>;
}

export default HomePage;
