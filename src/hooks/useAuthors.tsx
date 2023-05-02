import { axiosClient } from '@src/main'
import { type AuthorModel } from '@src/models/author'
import { useQuery } from '@tanstack/react-query'

export default function useAuthors () {
  const { data: authors, ...rest } = useQuery({
    queryKey: ['authors'],
    queryFn: async (): Promise<AuthorModel[]> => {
      return (await axiosClient.get('/author/all', {
        params: {
          take: 100000
        }
      })).data.data.data
    },
    placeholderData: []
  })
  return { authors, ...rest }
}
