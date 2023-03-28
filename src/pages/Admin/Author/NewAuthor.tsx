import { zodResolver } from "@hookform/resolvers/zod";
import { AdminForm } from "@src/components/Form/AdminForm";
import AdminImageUploader from "@src/components/Form/AdminImageUploader";
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from "@src/components/Form/Form.styles";
import { Col2 } from "@src/styles/globals";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";


const NewAuthorSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.string(),
  date_of_death: z.string(),
  country: z.string(),
  bio: z.string(),
  image: z.any(),
  genre_id: z.string()
});

export type NewAuthorInputs = z.infer<typeof NewAuthorSchema>;

export default function NewAuthor() {
  const [authorImage, setAuthorImage] = useState<File>();
  const { register, handleSubmit, formState: { errors, }, setValue, reset } = useForm<NewAuthorInputs>({
    mode: "all",
    resolver: zodResolver(NewAuthorSchema)
  });
  const categories = ["Drama", "Romantic", "Sports", "Religious", "Action", "Fantasy", "Science", "Sci-fi", "History"];
  const success = () => toast.success("Success!");
  const fail = (message: string) => toast.error("Failed! " + message);
  const newAuthorHandler: SubmitHandler<NewAuthorInputs> = async (data) => {
    try {
    } catch (error: any) {
    }
  }

  // useEffect(() => {
  //   setValue("image", authorImage);

  // }, [authorImage])
  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setAuthorImage} formId="authorForm" Image={authorImage} inputId="authorImage" />
      <AdminForm id="authorForm" title="Add new author" submitHandler={handleSubmit(newAuthorHandler)}>
        <StyledFormWrapper>
          <StyledFormInput {...register("first_name")} type="text" placeholder="First name" />
          <StyledFormInput {...register("last_name")} type="text" placeholder="Last name" />
          <StyledFormInput {...register("date_of_birth")} type="number" placeholder="Date of birth" />
          <StyledFormInput {...register("date_of_death")} type="number" placeholder="Date of death" />
          <StyledFormInput {...register("country")} type="text" placeholder="Country" />
          <StyledFormInput {...register("bio")} type="text" placeholder="Biography" />
          <StyledFormSelect {...register("genre_id")}>
            {categories?.map(category => {
              return <StyledFormOption key={category} value={category}>
                {category}
              </StyledFormOption>
            })}
          </StyledFormSelect>
          <StyledFormInput className="visually-hidden" aria-hidden="true" id="authorImage" {...register("image")} onChangeCapture={(e: any) => {
            setAuthorImage(e.target.files[0]);
          }} type="file" placeholder="Biography" />
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
