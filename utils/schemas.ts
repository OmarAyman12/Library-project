import { z } from "zod";

const User = z.object({
  username: z.string(),
});


export const Book = z.object({
  title: z
    .string()
    .min(2, { message: "Title must have at least 2 characters" })
    .max(20, "Maximum length reached"),
  authorName: z
    .string()
    .min(2, { message: "Author name must have at least 2 characters" })
    .max(15, "Maximum length reached"),
  image: z
    .string()
    .url({ message: "Invalid URL. Please enter a valid image URL." }),
  price: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().positive({ message: "Price must be a positive number" })
  ),
  publishDate: z.preprocess(
    (val) => new Date(val as string),
    z.date({ message: "Invalid date format" })
  ),
  description: z
    .string()
    .max(200, { message: "Maximum character length reached" }),
});
