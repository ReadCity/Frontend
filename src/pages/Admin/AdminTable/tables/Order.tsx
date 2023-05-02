import AdminTable from '../AdminTable'
import orderColsDef from '../definitions/order'

export default function OrderTable () {
  return (
        <AdminTable tableFor="admin-order" tableKey="order" tableHeaders={orderColsDef} />
  )
}
