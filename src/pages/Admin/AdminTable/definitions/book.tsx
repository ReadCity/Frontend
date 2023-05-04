/* eslint-disable react-hooks/rules-of-hooks */

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/react"
import { Book } from '@src/interfaces'
import { axiosAdminClient, queryClient } from '@src/main'
import { type BookModel } from '@src/models/book'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const columnHelper = createColumnHelper<BookModel>()

const bookColsDef = [
  columnHelper.accessor('id', {
    cell: (info) => info.row.original.id
  }),
  columnHelper.accessor('title', {
    cell: (info) => info.row.original.title
  }),
  columnHelper.accessor('count', {
    cell: (info) => info.row.original.count
  }),
  columnHelper.display({
    id: crypto.randomUUID(),
    cell: (props) => {
      const { mutate } = useMutation({
        mutationKey: ['books'],
        mutationFn: async () => {
          return (await axiosAdminClient.delete('/book/' + String(props.row.original.id))).data
        },
        onSuccess(data, variables, context) {
          void queryClient.invalidateQueries({ queryKey: ['books', 'book'] })
          toast.success("Muvaffaqqiyatli o'chirildi!")
        },
        onError(error, variables, context) {
          console.log(error)
          toast.error('Xatolik yuzaga keldi!')
        }
      });
      const navigate = useNavigate();
      return <div className="flex gap-4">
        <IconButton colorScheme="green" aria-label="Edit book" onClick={() => {
          navigate("/book/edit/" + String(props.row.original.id));
        }} icon={<EditIcon />} />
        <IconButton icon={<DeleteIcon />} colorScheme="red" aria-label="Delete book" onClick={() => {
          mutate()
        }} />
      </div>
    }
  })
]

export default bookColsDef
