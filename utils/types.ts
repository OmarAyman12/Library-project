export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

type Product = {
  title: string;
  authorName: string;
  image: string;
};

export type layout = {
  pageLayout: "grid" | "carousel";
  search: string;
};
