import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDetailCard from "../components/TableDetailCard";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
    
    const filterOrder=orderDetail?.find((e)=>e._id===id)
  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);
  return (
    <>
      <div className="grid lg:grid-cols-6 relative">
       
        {/* next col */}
        <div className="lg:col-span-2    bg-gray-300 mt-[-7px]    ">
          <div className=" sticky top-15 border-0 h-[89vh] px-3">
            <TableDetailCard data={filterOrder} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
