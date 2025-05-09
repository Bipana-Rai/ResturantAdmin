import { TableCell, TableRow } from "@/components/ui/table";
import { TableData } from "../features/items/itemSlice";
import StatusToggle from "./StatusToggle";
interface TableDataProps {
  data: TableData;
}

function TableDetail({ data }: TableDataProps) {
  return (
    <>
      <TableRow>
        <TableCell>{data.tableNum}</TableCell>
        <TableCell>{data.tableCapacity}</TableCell>
        <TableCell>{data.tableLocation}</TableCell>
        <TableCell className="flex gap-5">
          <StatusToggle />
          {data.tableStatus}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableDetail;
