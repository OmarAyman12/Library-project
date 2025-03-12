import React from "react";

import { fetchAllProducts } from "@/utils/actions";

import ProductsLayout from "./ProductsLayout";

async function ProductsPage({searchParams,}:{searchParams:{search?:string}}) {
  const search= searchParams.search || "";
  const products = await fetchAllProducts(search);

 
  return (
    <div className="m-4">
      <h1 className="mb-3 text-center">Products Page</h1>
      <ProductsLayout pageLayout="grid" search={search} />
    </div>
  );
}

export default ProductsPage;
