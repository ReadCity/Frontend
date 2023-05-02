import AdminTable from '../AdminTable'
import authorColsDef from '../definitions/author'

export default function BookTable () {
  return (
        <AdminTable tableKey="author" tableFor="author/all" tableHeaders={authorColsDef} />
  )
}
