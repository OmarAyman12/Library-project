import { fetchAllProducts } from "@/utils/actions";
import { Book } from "@prisma/client";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import FavoritesButton from "./FavoritesButton";

async function ProductsGrid({ products }: { products: Book[] }) {
  return (
    <section className="grid grid-cols-3 place-items-center">
      {products.map((product) => {
        const { image, title, id, description, price } = product;
        return (
          <div key={id} className="border w-fit relative group">
            <Link href={`/product/${id}`}>
              <Image src={image} alt={title} width={300} height={12} priority />
            </Link>
            <div className="">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>${price}</p>
            </div>
            <AddToCartBtn />
            <div className="absolute top-2 z-6 right-2">
              <FavoritesButton />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ProductsGrid;
