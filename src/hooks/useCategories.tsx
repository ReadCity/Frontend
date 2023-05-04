import { axiosClient } from '@src/main'
import { type CategoryModel } from '@src/models/category'
import { useQuery } from '@tanstack/react-query'

export default function useCategories() {
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    categories: [...categories!] as CategoryModel[], ...rest
  }
}
