import { fetchAllProducts } from "@/utils/actions";
import { layout } from "@/utils/types";
import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsCarousel from "./ProductsCarousel";
import Link from "next/link";

async function ProductsLayout({ pageLayout, search }: layout) {
  const products = await fetchAllProducts(search);
  return (
    <div>
      {pageLayout === "grid" ? (
        <ProductsGrid products={products || []} />
      ) : (
        <ProductsCarousel products={products || []} />
      )}
    </div>
  );
}

export default ProductsLayout;
