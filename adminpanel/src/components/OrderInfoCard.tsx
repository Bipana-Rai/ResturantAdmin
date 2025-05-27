import { orderData } from "@/features/items/itemSlice";
interface OrderLineProps{
  data:orderData;
 
}
function OrderInfoCard({data,}:OrderLineProps) {
  return (
    <>
      <div className="h-[95px] w-[250px] shrink-0 py-1 px-3 bg-[#89e7ff] rounded-xl cursor-pointer  " >
        <div className="flex justify-between  ">
            <p>Order#F27 </p>
            <p>Table {data.tableNumber}</p>
        </div>
        <p>Item :8X</p>
        <div className="flex justify-between items-center   ">
            <p className="text-sm ">2 mins ago</p>
            <div className="px-3  bg-[#066146] flex  text-gray-100 rounded-2xl text-sm py-1 "><p>{data.foodStatus}</p></div>
        </div>
      </div>

    </>
  );
}

export default OrderInfoCard;
