import { useEffect, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import AdminImageUploader from "@src/components/Form/AdminImageUploader";
import { AdminForm } from "@src/components/Form/AdminForm";
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from "@src/components/Form/Form.styles";
import { Col2 } from "@src/styles/globals";


const NewBookSchema = z.object({
  title: z.string(),
  page: z.string(),
  year: z.string(),
  price: z.string(),
  genre_id: z.string(),
  author_id: z.string(),
  description: z.string(),
  image: z.any()
});

export type NewBookInputs = z.infer<typeof NewBookSchema>;

export default function NewBook() {
  const [authorId, setAuthorId] = useState<number>(1)
  const categories = ["Drama", "Romantic", "Sports", "Religious", "Action", "Fantasy", "Science", "Sci-fi", "History"];
  const authors = ["John Doe", "Joe Smith", "Susan Doe"];
  const [bookImage, setBookImage] = useState<File>();
  const { register, handleSubmit, formState: { errors, }, setValue, reset } = useForm<NewBookInputs>({
    mode: "all",
    resolver: zodResolver(NewBookSchema)
  });

  const success = () => toast.success("Success!");
  const fail = (message: string) => toast.error("Failed! " + message);
  const NewBookHandler: SubmitHandler<NewBookInputs> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   setValue("image", bookImage);
  // }, [bookImage])
  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setBookImage} formId="authorForm" Image={bookImage} inputId="bookImage" />
      <AdminForm id="authorForm" title="Add new book" submitHandler={handleSubmit(NewBookHandler)}>
        <StyledFormWrapper>
          <StyledFormInput {...register("title")} type="text" placeholder="title" />
          <StyledFormInput {...register("page")} type="number" placeholder="number of pages" />
          <StyledFormInput {...register("year")} type="number" placeholder="released year" />
          <StyledFormInput {...register("price")} type="number" placeholder="price" />
          <StyledFormSelect {...register("genre_id")} onChangeCapture={(e: any) => {
            setAuthorId(e.target.value);
          }}>
            {categories?.map(category => {
              return <StyledFormOption key={category} value={category}>
                {category}
              </StyledFormOption>
            })}
          </StyledFormSelect>
          <StyledFormSelect {...register("author_id")} >
            {authors?.map(author => {
              return <StyledFormOption key={author} value={author}>
                {author}
              </StyledFormOption>
            })}
          </StyledFormSelect>
          <StyledFormInput {...register("description")} type="text" placeholder="description" />
          <StyledFormInput className="visually-hidden" aria-hidden="true" id="bookImage" {...register("image")} onChangeCapture={(e: any) => {
            setBookImage(e.target.files[0]);
          }} type="file" placeholder="image" />
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
