/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import AdminImageUploader from '@src/components/Form/AdminImageUploader'
import { AdminForm } from '@src/components/Form/AdminForm'
import { Col2 } from '@src/styles/globals'
import { BookSchema } from '@src/schemas/book'
import { type Book } from '@src/interfaces'
import { axiosAdminClient } from '@src/main'
import useCategories from '@src/hooks/useCategories'
import useAuthors from '@src/hooks/useAuthors'
import { FormControl, Input, Select, Stack } from "@chakra-ui/react"

export default function NewBook() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [bookImage, setBookImage] = useState<File>()
  const { authors } = useAuthors()
  const { categories } = useCategories()
  const { register, handleSubmit, reset } = useForm<Book>({
    mode: 'all',
    resolver: zodResolver(BookSchema),
    defaultValues: {
      authorId: '1',
      categoryId: '1'
    }
  })
  const success = (msg: string) => toast.success(msg)
  const fail = (message: string) => toast.error('Xatolik! ' + message)
  const NewBookHandler: SubmitHandler<Book> = async (data) => {
    try {
      setLoading(true)
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
      await axiosAdminClient.post('/book', newData)
      success('Book is successfully created!')
      reset()
      setBookImage(undefined)
    } catch (error: any) {
      console.log(error)
      fail("Iltimos formani to'g'ri to'ldirganingizni yana bir bor tekshiring!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Col2>
      <AdminImageUploader setAuthorImage={setBookImage} formId="authorForm" Image={bookImage} inputId="bookImage" />
      <AdminForm isLoading={isLoading} id="authorForm" title="Kitob qo'shish" submitHandler={handleSubmit(NewBookHandler)}>
        <Stack spacing="4">
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
          <FormControl>
            <Select {...register('categoryId')}>
              <option defaultChecked>Kategoriyani tanlash</option>
              {categories?.map(category => {
                return <option key={category.name} value={category.id}>
                  {category.name}
                </option>
              })}
            </Select>

          </FormControl>
          <FormControl>
            <Select {...register('authorId')} >
              <option defaultChecked>Muallifni tanlash</option>
              {authors?.map(author => {
                return <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              })}
            </Select>
          </FormControl>
          <FormControl>
            <Input {...register('desc')} type="text" placeholder="description" />
          </FormControl>
          <Input className="visually-hidden" aria-hidden="true" id="bookImage" {...register('file')} onChangeCapture={(e: any) => {
            setBookImage(e.target.files[0])
          }} type="file" placeholder="image" />
        </Stack>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
