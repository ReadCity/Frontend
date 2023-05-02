import styled from 'styled-components'

export const StyledTable = styled.table.attrs({
  className: 'm-8 w-full max-w-[90%] max-h-[800px]'
})`
  overflow: scroll;
`
export const StyledTableRow = styled.tr.attrs({
  className: 'text-white bg-gradient'
})``
export const StyledTableData = styled.td.attrs({ className: 'py-5 px-8' })`
  text-overflow: ellipsis;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
`
export const StyledTableUnstyledRow = styled.tr.attrs({
  className: 'border'
})``
export const StyledTableHeader = styled.thead``
export const StyledTableHead = styled.th.attrs({
  className: 'py-4 px-8 text-start font-semibold'
})``
export const StyledTableBody = styled.tbody``
export const StyledAdminAddButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 100;
  padding: 1em 1.5em;
  cursor: pointer;
`
