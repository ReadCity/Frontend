/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react"
import { zodResolver } from '@hookform/resolvers/zod'
import { axiosClient } from '@src/main'
import axios, { type AxiosResponse } from 'axios'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { z } from 'zod'

const loginSchema = z.object({
  name: z.string(),
  password: z.string()
})

interface LoginInputs extends z.infer<typeof loginSchema> { };
interface LoginResponse {
  data: string
  msg: string
  status: 200
}

export default function Login() {
  const navigate = useNavigate()
  const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm<LoginInputs>({
    mode: 'all',
    resolver: zodResolver(loginSchema)
  })
  const loginHandler: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const loginResponse: AxiosResponse<LoginResponse> = await axiosClient.post('/auth/login', data)
      toast.success('Successfully logged in! Redirecting you...')
      localStorage.setItem('readcityuz.token', loginResponse.data.data)
      navigate('/admin');
      reset()
    } catch (error) {
      toast.error('Email or password is incorrect!')
      console.log(error)
    }
  }
  return (
    <>
      <Box as="section">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Heading color="teal">
                Sign in
              </Heading>
              <Box as="form" onSubmit={handleSubmit(loginHandler)} className="space-y-4 md:space-y-6">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input {...register('name')} type="text" autoComplete="username" />
                  {(errors.name != null) ? <FormErrorMessage>{errors.name.message}</FormErrorMessage> : null}
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input {...register('password')} type="password" id="password" autoComplete="current-password" placeholder="••••••••" />

                </FormControl>
                <Button type="submit" colorScheme="teal">Sign in</Button>
              </Box>
            </div>
          </div>
        </div>
      </Box>
      <ToastContainer />
    </>
  )
}
