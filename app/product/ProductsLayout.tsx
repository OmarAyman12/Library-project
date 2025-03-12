import { fetchAllProducts } from '@/utils/actions'
import { layout } from '@/utils/types'
import React from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsCarousel from './ProductsCarousel'
import Link from 'next/link'

async function ProductsLayout({pageLayout,search}:layout) {
    const products=await fetchAllProducts(search);
    const searchTerm = search ? `&search=${search}` : "";
    
  return (
    <div>
      {pageLayout === "grid" ? (
        <Link href={`/product?${searchTerm}`}>
          <ProductsGrid products={products || []} />
        </Link>
      ) : (
        <Link href={`/product?${searchTerm}`}>
          <ProductsCarousel products={products || []} />
        </Link>
      )}
    </div>
  );
}

export default ProductsLayout