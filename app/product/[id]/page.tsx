import React from "react";
import { fetchSingleProduct } from "@/utils/actions";
async function page({ params }: { params: { id: string } }) {
    const product=await fetchSingleProduct(params.id);
 return (
   <div className="container mx-auto p-6">
     <h1 className="text-2xl font-bold">{product.title}</h1>
     <img
       src={product.image || "/placeholder.jpg"}
       alt={product.title}
       className="w-full h-auto"
     />
     <p className="mt-4">{product.description}</p>
   </div>
 );
}

export default page;
