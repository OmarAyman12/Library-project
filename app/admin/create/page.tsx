import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import TextArea from "@/components/form/TextArea";
import { addBook } from "@/utils/actions";
import React from "react";

function CreatePage() {
  return (
    <FormContainer action={addBook}>
      <FormInput type="text" name="title" />
      <FormInput type="text" name="authorName" />
      <FormInput type="text" name="image" />
      <FormInput type="date" name="publishDate" />
      <FormInput type="text" name="price" />
      <TextArea name="description" />
      <SubmitButton name="Add book" />
    </FormContainer>
  );
}

export default CreatePage;
