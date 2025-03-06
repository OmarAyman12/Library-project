import React from "react";
import ProductsCarousel from "./ProductsCarousel";
import { fetchAllProducts } from "@/utils/actions";

async function ProductsPage() {
  const products = await fetchAllProducts();
  console.log(products);
  return (
    <div>
      <ProductsCarousel products={products ?? []} />
    </div>
  );
}

export default ProductsPage;
