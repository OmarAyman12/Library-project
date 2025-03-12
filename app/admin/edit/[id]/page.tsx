import { editProduct, fetchSingleProduct } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import TextArea from "@/components/form/TextArea";
import SubmitButton from "@/components/form/SubmitButton";
import FormInput from "@/components/form/FormInput";

export default async function EditPage({
  params: p,
}: {
  params: { id: string };
}) {

  const params = await Promise.resolve(p);
  const id = params.id;

  const productData = await fetchSingleProduct(id);

  const { title, authorName, image, publishDate, price, description } =
    productData;

  return (
    <section>
      <FormContainer action={editProduct}>
        <input type="hidden" name="id" id="id" value={id} />
        <FormInput type="text" name="title" defaultValue={title} />
        <FormInput type="text" name="authorName" defaultValue={authorName} />
        <FormInput type="text" name="image" defaultValue={image} />
        <FormInput type="date" name="publishDate" defaultValue={publishDate} />
        <FormInput type="text" name="price" defaultValue={price} />
        <TextArea name="description" defaultValue={description} />
        <SubmitButton name="Update" />
      </FormContainer>
    </section>
  );
}
