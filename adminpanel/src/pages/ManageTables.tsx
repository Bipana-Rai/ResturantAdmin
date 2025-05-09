import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDetail from "../components/TableDetail";
import { getTable } from "../features/items/itemSlice";
import { AppDispatch, RootState } from "../store/store";

// import TableForm from "../components/TableForm"

function ManageTables() {
  const dispatch = useDispatch<AppDispatch>();
  const { tableDetail } = useSelector((state: RootState) => state.item);
  useEffect(() => {
    dispatch(getTable());
  }, [dispatch]);
  console.log(tableDetail);
  return (
    <>
      <div className="flex  justify-between px-3 py-4">
        <p className="text-3xl font-bold">Table Data</p>
        <button className="bg-cyan-700 rounded-md px-5 py-1 text-gray-200">
          Add Table
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <p>Table Number</p>
            </TableHead>
            <TableHead>
              <p>Table capacity</p>
            </TableHead>
            <TableHead>
              <p>Table Location</p>
            </TableHead>
            <TableHead>
              <p>Table Status</p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableDetail?.map((data, idx) => (
            <TableDetail key={idx} data={data} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ManageTables;
