import { useQuery } from '@tanstack/react-query'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { StyledAdminAddButton, StyledTable, StyledTableBody, StyledTableData, StyledTableHead, StyledTableHeader, StyledTableRow, StyledTableUnstyledRow } from './admin-table.styles'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { type MouseEvent } from 'react'
import { axiosAdminClient, queryClient } from '@src/main'
import axios from 'axios'
import Loader from '@src/components/Loader'
import { StyledDiv } from '@src/styles/globals'

interface AdminTableProps {
  tableFor: string
  tableHeaders: any
  page?: string | number
  hooks?: any
  tableKey: string
};

export default function AdminTable ({ tableFor, tableHeaders, page, hooks, tableKey }: AdminTableProps) {
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
        navigate(`/edit/${tableFor}/${buttonDataId}`, {
          state: buttonRow
        }); return
      }
      try {
        const deleteRoute = tableFor.slice(0, -1)
        // partners -> partner, files -> file, news
        const deletedItemResponse = await axios.delete(`${deleteRoute}/delete/${buttonDataId}`)
        toast.success("Muvaffaqqiyatli o'chirildi!")
        queryClient.invalidateQueries({
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
            <StyledDiv className="w-full h-[600px] overflow-x-visible overflow-y-auto lg:overflow-x-hidden">
                <StyledTable>
                    <StyledTableHeader>
                        {getHeaderGroups().map(headerGroup => (
                            <StyledTableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <StyledTableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </StyledTableHead>
                                ))}
                            </StyledTableRow>
                        ))}
                    </StyledTableHeader>
                    <StyledTableBody onClick={handleTableClick}>
                        {tableInstance.getRowModel().rows.map(row => (
                            <StyledTableUnstyledRow key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                  return <StyledTableData key={cell.id} >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}

                                    </StyledTableData>
                                })}
                            </StyledTableUnstyledRow>
                        ))}

                    </StyledTableBody>
                </StyledTable>
            </StyledDiv>
            <StyledAdminAddButton onClick={() => { navigate(addRoute) }} className="text-white bg-mySecondary-100">
                Qo'shish
            </StyledAdminAddButton>
            <ToastContainer />
        </>
  )
}
