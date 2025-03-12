import React from "react";
import EditAndDeletePage from "./AdminDashboard";
import { fetchAllProducts } from "@/utils/actions";

async function AdminDashBoard() {
  const products = await fetchAllProducts();
  return <EditAndDeletePage products={products || []} />;
}

export default AdminDashBoard;
