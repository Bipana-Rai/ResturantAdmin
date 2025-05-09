import { TableCell, TableRow } from "@/components/ui/table";
import { TableData } from "../features/items/itemSlice";
import StatusToggle from "./StatusToggle";
interface TableDataProps {
  data: TableData;
}

function TableDetail({ data }: TableDataProps) {
  return (
    //  <li>{data.tableNum}</li>
    <>
      <TableRow>
        <TableCell>{data.tableNum}</TableCell>
        <TableCell>{data.tableCapacity}</TableCell>
        <TableCell>{data.tableLocation}</TableCell>
        <StatusToggle />
        <TableCell>{data.tableStatus}</TableCell>
      </TableRow>
    </>
  );
}

export default TableDetail;
