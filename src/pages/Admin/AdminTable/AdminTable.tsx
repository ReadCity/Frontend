import { useQuery } from '@tanstack/react-query'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { type MouseEvent } from 'react'
import { axiosAdminClient, queryClient } from '@src/main'
import axios from 'axios'
import Loader from '@src/components/Loader'
import { StyledDiv } from '@src/styles/globals'
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

interface AdminTableProps {
  tableFor: string
  tableHeaders: any
  page?: string | number
  hooks?: any
  tableKey: string
};

export default function AdminTable({ tableFor, tableHeaders, page, hooks, tableKey }: AdminTableProps) {
  const tableRoute = tableFor
  const addRoute = `/${tableKey}/new`
  const { data, isLoading } = useQuery({
    queryKey: [tableFor],
    queryFn: async () => {
      return await (await axiosAdminClient.get(`${tableRoute}`, {
        params: {
          take: 1000000
        }
      })).data
    },
    staleTime: 50000
  })

  const navigate = useNavigate()

  const handleTableClick = async (e: MouseEvent<HTMLTableSectionElement, globalThis.MouseEvent>) => {
    const currentTarget = e.target as HTMLElement
    if (currentTarget.matches('button')) {
      const buttonDataId = currentTarget.dataset.id
      const buttonRow = JSON.parse(currentTarget.dataset.row as string)
      const buttonId = currentTarget.id
      if (buttonId === 'edit') {
        navigate(`/edit/${tableFor}/${buttonDataId as string}`, {
          state: buttonRow
        }); return
      }
      try {
        const deleteRoute = tableFor.slice(0, -1)
        // partners -> partner, files -> file, news
        await axios.delete(`${deleteRoute}/delete/${buttonDataId as string}`)
        toast.success("Muvaffaqqiyatli o'chirildi!")
        await queryClient.invalidateQueries({
          queryKey: [tableFor],
          exact: true
        })
      } catch (error) {
        toast.error('Xatolik yuz berdi')
      }
    }
  }
  const columns = tableHeaders
  const tableInstance = useReactTable({
    columns,
    data: data?.data.data,
    getCoreRowModel: getCoreRowModel()

  })

  const { getHeaderGroups } = tableInstance
  return (
    isLoading
      ? <Loader />
      : <>
        <StyledDiv className="w-full h-[700px] overflow-x-visible overflow-y-auto mt-8 lg:overflow-x-hidden">
          <TableContainer>
            <Table size={["sm", "sm", "sm", "md", "lg"]} colorScheme="teal">
              <Thead>
                {getHeaderGroups().map(headerGroup => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <Th key={header.id}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <Tbody onClick={handleTableClick}>
                {tableInstance.getRowModel().rows.map(row => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map(cell => {
                      return <Td key={cell.id} >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}

                      </Td>
                    })}
                  </Tr>
                ))}

              </Tbody>
            </Table>
          </TableContainer>
        </StyledDiv>
        <Button onClick={() => { navigate(addRoute) }} mt="4" colorScheme="teal">
          Qo&apos;shish
        </Button>
      </>
  )
}
