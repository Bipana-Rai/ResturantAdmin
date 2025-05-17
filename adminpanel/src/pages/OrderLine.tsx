import Selector from "@/components/Selector";
import { getDineIn, updateDineInStatus } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderLine() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const handleStatusChange=(id?:string,status?:string)=>{
    dispatch(updateDineInStatus({id,status:status}))
  }
  useEffect(() => {
    dispatch(getDineIn());
  });
  return (
    <>
     
    <div className="flex fixed w-[82vw]  bg-white justify-between px-8 pt-3 border-b-1  items-center pb-2 border-gray-300 ">
        <p className="text-xl font-semibold font-serif">Order Items</p>
        <div className="flex  gap-5">
      <Selector title={"All"}/>
       <Selector title={"Dine In"}/>
        <Selector title={"TakeAway"}/>
      
       </div>
        
    </div>
      <div className="py-4 ps-7 pt-23  flex gap-5 flex-wrap">
        {orderDetail.map((data) => (
          <div className="w-[340px] flex gap-2 flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-3 bg-gray-50 px-4 border-1 border-gray-400 border-dashed">
            <div className="flex flex-col gap-2">
                <div className="flex gap-5 justify-between items-center">
              <p className="text-lg font-semibold font-serif">Table #{data.tableNumber}</p>
              <p className="bg-cyan-200 px-4 rounded-md text-blue-500 text-sm">{data.status}</p>
              </div>
              <div className="flex justify-between border-b-1 border-dashed border-gray-500">
                <p className="font-semibold">Dishes</p>
                <p
                  className="font-semibold 
              text-right"
                >
                  Quantity
                </p>
              </div>
              {data?.cartItems?.map((cart) => (
                <div className="flex justify-between">
                  <p>{cart.dishName}</p>
                  <p className="text-right pe-7">{cart.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 border-t-1 border-dashed border-gray-400 pt-4  py-2 items-center">
              <label htmlFor="">Status</label>
              <select
              value={data.foodStatus}
               onChange={(e)=>handleStatusChange(data._id,e.target.value)}
             
                className=" border-1 border-gray-500 rounded-sm text-sm py-1 px-2"
              >
                <option value="waiting">Waiting</option>
                <option value="in kitchen">In Kitchen</option>
                <option value="served">Served</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderLine;
