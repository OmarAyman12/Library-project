import React from "react";

import { fetchAllProducts } from "@/utils/actions";

import ProductsLayout from "./ProductsLayout";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { search?: string } | Promise<{ search?: string }>;
}) {

  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams.search || "";

  return (
    <div className="m-4">
      <h1 className="mb-3 text-center">Products Page</h1>
      <ProductsLayout pageLayout="grid" search={search} />
    </div>
  );
}




