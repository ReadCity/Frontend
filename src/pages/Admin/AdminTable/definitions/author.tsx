import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/react"
import { axiosAdminClient, queryClient } from '@src/main'
import { type AuthorModel } from '@src/models/author'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import React from "react"
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { mutate } = useMutation({
        mutationKey: ['authors'],
        mutationFn: async () => {
          return (await axiosAdminClient.delete('/author?id=' + String(props.row.original.id))).data
        },
        onSuccess(data, variables, context) {
          void queryClient.invalidateQueries({ queryKey: ['author/all'] })
          toast.success("Muvaffaqqiyatli o'chirildi!")
        },
        onError(error, variables, context) {
          console.log(error)
          toast.error('Xatolik yuzaga keldi!')
        }
      })
      return <div className="flex flex-col gap-4 lg:flex-row">
        <IconButton icon={<DeleteIcon />} colorScheme="red" aria-label="Delete" />
        <IconButton icon={<EditIcon />} colorScheme="green" aria-label="Edit" onClick={() => { mutate() }} />
      </div>
    }
  })
]

export default authorColsDef
