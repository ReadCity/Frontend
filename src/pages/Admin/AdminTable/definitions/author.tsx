import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { axiosAdminClient, queryClient } from '@src/main'
import { type AuthorModel } from '@src/models/author'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import { toast } from 'react-toastify'

const columnHelper = createColumnHelper<AuthorModel>()

const authorColsDef = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.row.original.id

  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.row.original.name
  }),
  columnHelper.display({
    id: crypto.randomUUID(),
    cell: props => {
      const { mutate } = useMutation({
        mutationKey: ['authors'],
        mutationFn: async () => {
          return (await axiosAdminClient.delete('/author?id=' + props.row.original.id)).data
        },
        onSuccess (data, variables, context) {
          queryClient.invalidateQueries({ queryKey: ['author/all'] })
          toast.success("Muvaffaqqiyatli o'chirildi!")
        },
        onError (error, variables, context) {
          console.log(error)
          toast.error('Xatolik yuzaga keldi!')
        }
      })
      return <div className="flex flex-col gap-4 lg:flex-row">
                <button className="p-1 text-white bg-green-600 rounded-lg transition-opacity duration-300 hover:opacity-70">
                    <EditIcon aria-hidden="true" />
                </button>
                <button onClick={() => { mutate() }} className="p-1 text-white bg-red-600 rounded-lg transition-opacity duration-300 hover:opacity-70">
                    <DeleteIcon aria-hidden="true" />
                </button>
            </div>
    }
  })
]

export default authorColsDef
