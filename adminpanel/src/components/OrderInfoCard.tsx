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
        className={`h-[95px] w-[260px] shrink-0 py-1 px-5 rounded-md border-1  border-gray-500  cursor-pointer  1} `}
      >
        <div className="flex justify-between  ">
          <p>Order#F27 </p>
          <p>Table #{data.tableNumber}</p>
        </div>
        <p>Item : {data.cartItems.length}</p>
        <div className="flex justify-between items-center   ">
          <p className="text-sm ">{dayjs(data.createdAt).fromNow()} </p>
          <div
            className={`px-3  bg-[#066146] flex  text-gray-100 rounded-md text-sm py-1 ${
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
