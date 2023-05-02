import AdminTable from '../AdminTable'
import bookColsDef from '../definitions/book'

export default function BookTable () {
  return (
        <AdminTable tableKey="book" tableFor="book/all" tableHeaders={bookColsDef} />
  )
}
