/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import AdminImageUploader from '@src/components/Form/AdminImageUploader'
import { AdminForm } from '@src/components/Form/AdminForm'
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from '@src/components/Form/Form.styles'
import { Col2 } from '@src/styles/globals'
import { BookSchema } from '@src/schemas/book'
import { type Book } from '@src/interfaces'
import { axiosAdminClient, axiosClient } from '@src/main'
import FormInput from '../FormInput/FormInput'
import useCategories from '@src/hooks/useCategories'
import useAuthors from '@src/hooks/useAuthors'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import type { BookModel } from "@src/models/book"
import { Box, FormControl, Input, Select, Stack } from "@chakra-ui/react"

export default function EditBook() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<Book>({
    mode: 'all',
    resolver: zodResolver(BookSchema),
    defaultValues: {

    }
  })
  const { id } = useParams();
  const { data: book } = useQuery({
    queryKey: ["book", "edit", id],
    queryFn: async (): Promise<BookModel> => {
      return await (await axiosClient.get("/book/" + String(id))).data.data;
    },
    onSuccess(data) {
      Object.entries(data).forEach(pair => {
        console.log(pair);

        // @ts-ignore
        if (pair === "image") return;
        // @ts-ignore
        setValue(pair[0], pair[1]);
      })
    },
  });
  const [authorId, setAuthorId] = useState<number>(1)
  const [bookImage, setBookImage] = useState<File>()
  const { authors } = useAuthors()
  const { categories } = useCategories()
  const success = (msg: string) => toast.success(msg)
  const fail = (message: string) => toast.error('Xatolik! ' + message)
  const NewBookHandler: SubmitHandler<Book> = async (data) => {
    try {
      const newData = new FormData()
      Object.entries(data).forEach(item => {
        if (item[0] === 'file') {
          // @ts-expect-error
          newData.append(item[0], item[1][0])
          // @ts-expect-error
          console.log(item[0], item[1][0])
        } else {
          // @ts-expect-error
          newData.append(item[0], item[1])
        }
      })
      await axiosAdminClient.patch('/book/' + String(id), newData);
      success('Book is successfully created!')
      reset()
      setBookImage(undefined)
    } catch (error: any) {
      console.log(error)
      fail("Iltimos formani to'g'ri to'ldirganingizni yana bir bor tekshiring!")
    }
  }
  // useEffect(() => {
  //   setValue("file", bookImage);
  // }, [bookImage])
  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setBookImage} formId="authorForm" Image={bookImage} inputId="bookImage" />
      <AdminForm id="authorForm" title="Kitobni o'zgartirish" submitHandler={handleSubmit(NewBookHandler)}>
        <Stack>
          <FormControl>
            <Input {...register('title')} type="text" placeholder="Kitob nomi" />
          </FormControl>
          <FormControl>
            <Input {...register('pages')} type="number" placeholder="Sahifalar soni" />
          </FormControl>
          <FormControl>
            <Input {...register('year')} type="number" placeholder="Chop etilgan yili" />
          </FormControl>
          <FormControl>
            <Input {...register('price')} type="number" placeholder="Narxi" />
          </FormControl>
          <FormControl>
            <Input {...register('rating')} type="number" placeholder="Reyting" />
          </FormControl>
          <FormControl>
            <Input {...register('count')} type="number" placeholder="Sotuvdagi soni" />
          </FormControl>
          <Select {...register('categoryId')} onChangeCapture={(e: any) => {
            setAuthorId(e.target.value)
          }}>
            <Box as="option" defaultChecked>Kategoriyani tanlash</Box>
            {categories?.map(category => {
              return <Box as="option" key={category.name} value={category.id}>
                {category.name}
              </Box>
            })}
          </Select>

          <Select {...register('authorId')} >
            <Box as="option" defaultChecked>Choose author</Box>
            {authors?.map(author => {
              return <Box as="option" key={author.id} value={author.id}>
                {author.name}
              </Box>
            })}
          </Select>
          <FormControl>
            <Input {...register('desc')} type="text" placeholder="description" />
          </FormControl>
          <FormControl>
            <Input id="bookImage" {...register('file')} onChangeCapture={(e: any) => {
              setBookImage(e.target.files[0])
            }} type="file" placeholder="image" />
          </FormControl>
        </Stack>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
