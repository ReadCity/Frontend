import { useEffect, useState } from 'react'
import { z } from 'zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, ToastContainer } from 'react-toastify'
import AdminImageUploader from '@src/components/Form/AdminImageUploader'
import { AdminForm } from '@src/components/Form/AdminForm'
import { StyledFormInput, StyledFormOption, StyledFormSelect, StyledFormWrapper } from '@src/components/Form/Form.styles'
import { Col2, StyledDiv } from '@src/styles/globals'
import { BookSchema } from '@src/schemas/book'
import { type Book } from '@src/interfaces'
import { axiosAdminClient } from '@src/main'
import { AxiosError } from 'axios'
import FormInput from '../FormInput/FormInput'
import useCategories from '@src/hooks/useCategories'
import useAuthors from '@src/hooks/useAuthors'

export default function NewBook () {
  const [authorId, setAuthorId] = useState<number>(1)
  const [bookImage, setBookImage] = useState<File>()
  const { authors, isLoading: isAuthorLoading } = useAuthors()
  const { categories, isLoading: isCategoryLoading } = useCategories()
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<Book>({
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
      const newData = new FormData()
      Object.entries(data).forEach(item => {
        if (item[0] === 'file') {
          const fileList = item[1] as FileList
          // @ts-expect-error
          newData.append(item[0], item[1][0])
          // @ts-expect-error
          console.log(item[0], item[1][0])
        } else {
          // @ts-expect-error
          newData.append(item[0], item[1])
        }
      })
      const newBookResponse = await axiosAdminClient.post('/book', newData)

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
      <AdminForm id="authorForm" title="Kitob qo'shish" submitHandler={handleSubmit(NewBookHandler)}>
        <StyledFormWrapper>
          <FormInput inputError={errors.title?.message}>
            <StyledFormInput {...register('title')} type="text" placeholder="Kitob nomi" />
          </FormInput>
          <FormInput inputError={errors.pages?.message}>
            <StyledFormInput {...register('pages')} type="number" placeholder="Sahifalar soni" />
          </FormInput>
          <FormInput inputError={errors.year?.message}>
            <StyledFormInput {...register('year')} type="number" placeholder="Chop etilgan yili" />
          </FormInput>
          <FormInput inputError={errors.price?.message}>
            <StyledFormInput {...register('price')} type="number" placeholder="Narxi" />
          </FormInput>
          <FormInput inputError={errors.rating?.message}>
            <StyledFormInput {...register('rating')} type="number" placeholder="Reyting" />
          </FormInput>
          <FormInput inputError={errors.count?.message}>
            <StyledFormInput {...register('count')} type="number" placeholder="Sotuvdagi soni" />
          </FormInput>
          <FormInput inputError={errors.categoryId?.message}>
            <StyledFormSelect {...register('categoryId')} onChangeCapture={(e: any) => {
              setAuthorId(e.target.value)
            }}>
              <StyledFormOption defaultChecked>Kategoriyani tanlash</StyledFormOption>
              {categories?.map(category => {
                return <StyledFormOption key={category.name} value={category.id}>
                  {category.name}
                </StyledFormOption>
              })}
            </StyledFormSelect>

          </FormInput>
          <FormInput inputError={errors.authorId?.message}>
            <StyledFormSelect {...register('authorId')} >
              <StyledFormOption defaultChecked>Muallifni tanlash</StyledFormOption>
              {authors?.map(author => {
                return <StyledFormOption key={author.id} value={author.id}>
                  {author.name}
                </StyledFormOption>
              })}
            </StyledFormSelect>
          </FormInput>
          <FormInput inputError={errors.desc?.message}>
            <StyledFormInput {...register('desc')} type="text" placeholder="description" />
          </FormInput>
          <StyledFormInput className="visually-hidden" aria-hidden="true" id="bookImage" {...register('file')} onChangeCapture={(e: any) => {
            setBookImage(e.target.files[0])
          }} type="file" placeholder="image" />
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </Col2>
  )
}
