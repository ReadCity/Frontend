import { AdminForm } from '@src/components/Form/AdminForm'
import { type Category } from '@src/interfaces'
import { axiosAdminClient, queryClient } from '@src/main'
import { StyledContainer, StyledDiv, StyledSection } from '@src/styles/globals'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import FormInput from '../FormInput/FormInput'

import { StyledButton } from '@src/styles/components'
import { StyledFormInput, StyledFormWrapper } from '@src/components/Form/Form.styles'

export default function NewCategory () {
  const { mutateAsync, mutate, isError, isLoading } = useMutation({
    mutationKey: ['category'],
    mutationFn: async (data: Category) => {
      return (await axiosAdminClient.post('/category', data)).data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
      toast.success('Muvaffaqqiyatli amalga oshirildi!', {
        autoClose: false
      })
      reset()
    },
    onError (error: any, variables, context) {
      toast.error('Xatolik ' + error.response.data.message)
      console.log(error)
    }
  })
  const { handleSubmit, register, reset, formState: { errors, isValid } } = useForm<Category>({
    mode: 'all'
  })
  const handleCategoryMutation: SubmitHandler<Category> = async (data) => {
    try {
      const categoryMutation = await mutateAsync(data)
      toast.success('Muvaffaqqiyatli amalga oshirildi!')
      reset()
    } catch (error: any) {
      toast.error('Xatolik ' + error.response.data.message)
      console.log(error)
    }
  }
  return (
    <>
      <AdminForm style={{ border: '1px solid red' }} className="grid gap-4" title="Kategoriya qo'shish" submitHandler={handleSubmit((data) => { mutate(data) })}>
        <StyledFormWrapper>
          <FormInput inputError={errors.name?.message}>
            <StyledFormInput {...register('name')} placeholder="kategoriya" />
          </FormInput>
        </StyledFormWrapper>
      </AdminForm>
      <ToastContainer />
    </>
  )
}
