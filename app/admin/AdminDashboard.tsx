"use client";
import React from "react";
import { Book } from "@prisma/client";
import { MdDeleteOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { deleteSingleProduct } from "@/utils/actions";
function EditAndDeletePage({ products }: { products: Book[] }) {
  return (
    <section>
      <Table>
        <TableCaption>Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Author Name</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="">Image</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id, title, authorName, image, description, price } =
              product;
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell>{authorName}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell className="h-auto rounded-md">
                  {image.length > 30 ? `${image.substring(0, 25)}...` : image}
                </TableCell>
                <TableCell>{price}</TableCell>
                <TableCell className="text-right items-center flex align-middle">
                  <Button className="bg-transparent hover:bg-gray-400">
                    <Link href={`/admin/edit/${id}`}>
                      <FaPen className="text-black" />
                    </Link>
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-gray-400"
                    onClick={() => deleteSingleProduct(id)}
                  >
                    <MdDeleteOutline className="text-black" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default EditAndDeletePage;
