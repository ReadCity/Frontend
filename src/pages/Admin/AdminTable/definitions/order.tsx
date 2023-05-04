import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { axiosAdminClient, queryClient } from '@src/main'
import { type OrderModel } from '@src/models/order'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import { toast } from 'react-toastify'

const columnHelper = createColumnHelper<OrderModel>()

const orderColsDef = [

  columnHelper.accessor('id', {
    cell: (info) => info.row.original.id
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.row.original.name
  }),
  columnHelper.accessor('phone', {
    cell: (info) => info.row.original.phone
  }),

  columnHelper.display({
    id: crypto.randomUUID(),
    cell: props => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { mutate } = useMutation({
        mutationKey: ['orders'],
        mutationFn: async () => {
          return (await axiosAdminClient.delete('/order/' + String(props.row.original.id))).data
        },
        onSuccess(data, variables, context) {
          void queryClient.invalidateQueries({ queryKey: ['orders', 'order'] })
          toast.success("Muvaffaqqiyatli o'chirildi!")
        },
        onError(error, variables, context) {
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

export default orderColsDef
