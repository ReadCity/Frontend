import { axiosClient } from '@src/main'
import { type CategoryModel } from '@src/models/category'
import { useQuery } from '@tanstack/react-query'

export default function useCategories () {
  const { data: categories, ...rest } = useQuery({
    queryKey: ['category'],
    queryFn: async (): Promise<CategoryModel[]> => {
      return (await axiosClient.get('/category', {
        params: {
          take: 10000
        }
      })).data.data.data
    },
    placeholderData: []
  })
  return {
    categories: [...categories!, { createdAt: Date.now(), deletedAt: null, id: 'all', name: 'All', updatedAt: null }] as CategoryModel[], ...rest
  }
}
