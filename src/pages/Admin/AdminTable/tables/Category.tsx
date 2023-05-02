import AdminTable from '../AdminTable'
import categoryColsDef from '../definitions/category'

export default function Category () {
  return (
    <AdminTable tableKey="category" tableFor="category" tableHeaders={categoryColsDef} />
  )
}
