import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'
import GlobalStyles from '@styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import APP_MODE from './constants/app-mode'
import { ToastContainer } from "react-toastify"
export const BASE_URL = import.meta.env.VITE_BACKEND_URL
export const queryClient = new QueryClient()
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  params: {
    take: 10000
  }
})
export const axiosAdminClient = axios.create({
  baseURL: BASE_URL as string + '/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('readcityuz.token') as string}`
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer />
        {APP_MODE !== 'production' && <ReactQueryDevtools />}
      </QueryClientProvider>
    </BrowserRouter>
    <GlobalStyles />
  </>
)
