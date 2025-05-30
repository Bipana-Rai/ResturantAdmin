import {
  getDineIn,
  getTakeAway,
  updateDineInStatus,
  updateTakeAwayStatus,
} from "@/features/items/itemSlice";
import { orderData } from "@/features/items/itemSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
interface OrderLineProps {
  data: orderData;
}

function OrderCard({ data }: OrderLineProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleStatusChange = async (
    id?: string,
    status?: string,
    currentStatus?: string
  ) => {
    if (currentStatus === "dine In") {
      await dispatch(updateDineInStatus({ id, status: status }));
       dispatch(getDineIn());
    } else {
      await dispatch(updateTakeAwayStatus({ id, status: status }));
      dispatch(getTakeAway())
    }

   
  };
  return (
    <div className="w-[340px] flex gap-2 flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-3 bg-gray-50 px-4 border-1 border-gray-400 border-dashed">
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 justify-between items-center">
          <p className="text-lg font-semibold font-serif">
            Table #{data.tableNumber}
          </p>
          <p
            className={` px-4 rounded-md text-sm ${
              data.status === "takeAway"
                ? "bg-black text-gray-50"
                : "bg-gray-300"
            }`}
          >
            {data.status}
          </p>
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
          onChange={(e) =>
            handleStatusChange(data._id, e.target.value, data.status)
          }
          className=" border-1 border-gray-500 rounded-sm text-sm py-1 px-2"
        >
          <option value="waiting">Waiting</option>
          <option value="in kitchen">In Kitchen</option>
          <option value="served">Served</option>
        </select>
      </div>
    </div>
  );
}

export default OrderCard;
