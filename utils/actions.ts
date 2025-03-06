"use server";
import prisma from "./db";
import { Book } from "./schemas";

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
    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};


export const fetchAllProducts=async()=>{
   try {
     return await prisma.book.findMany({
       orderBy: { createdAt: "desc" }, 
     });
   } catch (error) {
    console.log()
   }
}
