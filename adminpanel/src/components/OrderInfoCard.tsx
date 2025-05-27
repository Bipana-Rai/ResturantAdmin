import { orderData } from "@/features/items/itemSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
interface OrderLineProps {
  data: orderData;
}
function OrderInfoCard({ data }: OrderLineProps) {
  dayjs.extend(relativeTime);
  return (
    <>
      <div
        className={`h-[95px] w-[250px] shrink-0 py-1 px-3 bg-[#89e7ff] rounded-xl cursor-pointer  1 ${
          data.foodStatus === "waiting"
            ? "bg-red-200"
            : data.foodStatus === "served"
            ? "bg-green-200"
            : "bg-blue-200"
        } `}
      >
        <div className="flex justify-between  ">
          <p>Order#F27 </p>
          <p>Table #{data.tableNumber}</p>
        </div>
        <p>Item : {data.cartItems.length}</p>
        <div className="flex justify-between items-center   ">
          <p className="text-sm ">{dayjs(data.createdAt).fromNow()} </p>
          <div
            className={`px-3  bg-[#066146] flex  text-gray-100 rounded-2xl text-sm py-1 ${
              data.foodStatus === "waiting"
                ? "bg-red-600"
                : data.foodStatus === "served"
                ? "bg-green-600"
                : "bg-blue-500"
            } `}
          >
            <p>{data.foodStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderInfoCard;
