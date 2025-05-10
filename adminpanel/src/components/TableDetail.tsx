import { TableCell, TableRow } from "@/components/ui/table";
import {
  deleteTableData,
  editTableData,
  TableData,
} from "../features/items/itemSlice";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

interface TableDataProps {
  data: TableData;
  setShowEdit: (showEdit: boolean) => void;
  setId: (id: string) => void;
}
function TableDetail({ data, setShowEdit, setId }: TableDataProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    const updatedStatus =
      data.tableStatus === "available" ? "booked" : "available";
    dispatch(editTableData({ id: data._id, updatedStatus: updatedStatus }));
  };
  const handleEdit = () => {
    setShowEdit(true);
    setId(data._id);
  };
  const handleDelete = () => {
    dispatch(deleteTableData(data._id));
  };
  return (
    <>
      <TableRow>
        <TableCell>{data.tableNum}</TableCell>
        <TableCell>{data.tableCapacity}</TableCell>
        <TableCell>{data.tableLocation}</TableCell>
        <TableCell className="flex gap-5">
          {/* <StatusToggle status={currentStatus} onStatusChange={handleStatusChange} id={data._id} /> */}
          <div
            className={`h-8 w-16 cursor-pointer relative border rounded-full  flex items-center ${
              data.tableStatus === "available"
                ? "bg-cyan-700"
                : "bg-[#fa2121ea] border-1 border-red-400"
            } `}
            onClick={handleClick}
          >
            <div
              className={`h-7 w-7 absolute  border-1  bg-white  rounded-full  toggle ${
                data.tableStatus === "available"
                  ? "left-0 border-cyan-700 "
                  : "right-[1px] border-red-600 "
              }`}
            ></div>
          </div>
          {data.tableStatus}
        </TableCell>
        <TableCell>
          <div className="flex gap-5 text-xl">
            <div className="text-cyan-700 cursor-pointer" onClick={handleEdit}>
              <RiEdit2Fill />
            </div>
            <div className="text-red-600 cursor-pointer" onClick={handleDelete}>
              <MdDelete />
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableDetail;
