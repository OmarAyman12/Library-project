"use server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { Book } from "./schemas";
import { revalidatePath } from "next/cache";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

export const addBook = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateForm = Book.parse(rawData);
    const validateData = { ...validateForm };
    await prisma.book.create({
      data: validateData,
    });
    return { message: "Product created" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAllProducts = async ( search = "") => {
  try {
    return await prisma.book.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
          { authorName: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.log();
  }
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.book.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/product");
  return product;
};

export const editSingleProduct = async (productId: string) => {};

export const deleteSingleProduct = async (productId: string) => {
  try {
    await prisma.book.delete({
      where: {
        id: productId,
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    return renderError(error);
  }
};

export const editProduct = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validateForm = Book.parse(rawData);
    const productId = formData.get("id") as string;

    if (!productId) {
      return { message: "Error: Missing product ID" };
    }

    await prisma.book.update({
      where: { id: productId },
      data: { ...validateForm },
    });

    revalidatePath(`/admin/edit/${productId}`);

    return { message: "Product updated" };
  } catch (error) {
    return renderError(error);
  }
};
