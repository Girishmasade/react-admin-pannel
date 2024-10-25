import { Table } from "antd"
import { TableData } from "../utils/TableData"
const {Column} = Table

const Dashboard = () => {
  return (
    <Table>
        {
            TableData.map((item) => (
                <Column title={item.title}  key={item.id}/>
            ))
        }
    </Table>
  )
}

export default Dashboard
