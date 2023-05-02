import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Category } from '@src/interfaces'
import { axiosAdminClient, queryClient } from '@src/main'
import { type CategoryModel } from '@src/models/category'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import { toast } from 'react-toastify'

const columnHelper = createColumnHelper<CategoryModel>()

const categoryColsDef = [

  columnHelper.accessor('name', {
    header: 'ID',
    cell: (info) => info.row.original.id
  }),
  columnHelper.accessor('name', {
    header: 'Nomi',
    cell: (info) => info.row.original.name
  }),
  columnHelper.display({
    id: crypto.randomUUID(),
    cell: props => {
      const { mutate } = useMutation({
        mutationKey: ['categories'],
        mutationFn: async () => {
          return (await axiosAdminClient.delete('/category/' + props.row.original.id)).data
        },
        onSuccess (data, variables, context) {
          queryClient.invalidateQueries({ queryKey: ['category'] })
          toast.success("Muvaffaqqiyatli o'chirildi!")
        },
        onError (error, variables, context) {
          console.log(error)
          toast.error('Xatolik yuzaga keldi!')
        }
      })
      return <div className="flex gap-4">
        <button className="p-4 text-white bg-green-600 rounded-lg transition-opacity duration-300 hover:opacity-70">
          <EditIcon aria-hidden="true" />
        </button>
        <button onClick={() => { mutate() }} className="p-4 text-white bg-red-600 rounded-lg transition-opacity duration-300 hover:opacity-70">
          <DeleteIcon aria-hidden="true" />
        </button>
      </div>
    }
  })
]

export default categoryColsDef
