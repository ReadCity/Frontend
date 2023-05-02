import { zodResolver } from '@hookform/resolvers/zod'
import { AdminForm } from '@src/components/Form/AdminForm'
import { StyledFormInput, StyledFormWrapper } from '@src/components/Form/Form.styles'
import { type Author } from '@src/interfaces'
import { axiosAdminClient } from '@src/main'
import { AuthorSchema } from '@src/schemas/author'
import { Col2 } from '@src/styles/globals'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import AdminImageUploader from '@src/components/Form/AdminImageUploader'
import FormInput from '../FormInput/FormInput'
import { type SubmitHandler, useForm } from 'react-hook-form'

export default function NewAuthor () {
  const { mutateAsync, isLoading, isError } = useMutation({
    mutationKey: ['authors'],
    mutationFn: async (data: Author) => {
      if (!data.dateOfDeath) {
        delete data.dateOfDeath
      }
      return (await axiosAdminClient.post('/author', data)).data
    }
  })
  const [authorImage, setAuthorImage] = useState<File>()
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<Author>({
    mode: 'all',
    resolver: zodResolver(AuthorSchema)
  })
  const success = () => toast.success('Success!')
  const fail = (message: string) => toast.error('Failed! ' + message)
  const newAuthorHandler: SubmitHandler<Author> = async (data) => {
    try {
      const newAuthorResponse = await mutateAsync(data)
      success()
      reset()
    } catch (error: any) {
      console.log(error)
      fail('Check all the fields')
    }
  }

  useEffect(() => {
    setValue('file', authorImage)
  }, [authorImage])
  return (
    <>
      <AdminForm id="authorForm" title="Add new author" submitHandler={handleSubmit(newAuthorHandler)}>
        <StyledFormWrapper>
          <FormInput inputError={errors.name?.message}>
            <StyledFormInput {...register('name')} type="text" placeholder="First name" />
          </FormInput>
          <FormInput inputError={errors.dateOfBirth?.message}>
            <StyledFormInput {...register('dateOfBirth')} type="number" placeholder="Date of birth" />
          </FormInput>
          <FormInput inputError={errors.dateOfBirth?.message}>
            <StyledFormInput {...register('dateOfDeath')} type="number" placeholder="Date of death" />
          </FormInput>
          <FormInput inputError={errors.dateOfBirth?.message}>
            <StyledFormInput {...register('description')} type="string" placeholder="description" />
          </FormInput>
          <FormInput inputError={errors.dateOfBirth?.message}>
            <StyledFormInput {...register('file')} type="text" placeholder="img url" />
          </FormInput>
        </StyledFormWrapper>
      </AdminForm >
      <ToastContainer />
    </>
  )
}
