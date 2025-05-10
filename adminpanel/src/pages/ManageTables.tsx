import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDetail from "../components/TableDetail";
import { getTable } from "../features/items/itemSlice";
import { AppDispatch, RootState } from "../store/store";
import TableForm from "../components/TableForm";
import EditTableForm from "@/components/EditTableForm";


function ManageTables() {
  const dispatch = useDispatch<AppDispatch>();
  const[change,setChange]=useState("")
  
  const { tableDetail } = useSelector((state: RootState) => state.item);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const[id,setId]=useState("")
  useEffect(() => {
    dispatch(getTable());
  }, [dispatch,showEdit,change]);
 

  return (
    <>
      {show && <TableForm setShow={setShow} />}
      {showEdit && <EditTableForm setShowEdit={setShowEdit} id={id} />}     
      <div className="px-5">
        <div className="flex  justify-between px-3 py-4">
          <p className="text-3xl font-bold">Table Data</p>
          <button
            className="bg-cyan-700 rounded-md px-5 cursor-pointer py-1 text-gray-200"
            onClick={() => setShow(true)}
          >
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
              <TableHead className="ps-2">
                <p>Table Status</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDetail?.map((data, idx) => (
              <TableDetail key={idx} data={data} setShowEdit={setShowEdit} setId={setId} setChange={setChange}  />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default ManageTables;
