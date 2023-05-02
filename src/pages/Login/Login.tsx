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

export default function Login () {
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
      setTimeout(() => { navigate('/admin') }, 2000)
      reset()
    } catch (error) {
      toast.error('Email or password is incorrect!')
      console.log(error)
    }
  }
  return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in
                            </h2>
                            <form onSubmit={handleSubmit(loginHandler)} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input {...register('name')} type="text" autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {(errors.name != null) ? <span className="text-red-600">{errors.name.message}</span> : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register('password')} type="password" id="password" autoComplete="current-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {(errors.password != null) ? <span className="text-red-600">{errors.password.message}</span> : null}
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
  )
}
