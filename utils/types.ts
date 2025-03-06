export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;


type Product={
  title:string;
  authorName:string;
  image:string;
}