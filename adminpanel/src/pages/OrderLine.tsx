import OrderCard from "@/components/OrderCard";
import Selector from "@/components/Selector";
import {
  getDineIn,
  orderData,
} from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderLine() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const [filterData, setFilterData] = useState<orderData[]>(orderDetail);

  console.log(orderDetail)
  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);
  useEffect(() => {
    setFilterData(orderDetail);
  }, [orderDetail]);
  return (
    <>
      <div className="flex fixed w-[82vw]  bg-white justify-between px-8 pt-3 border-b-1  items-center pb-2 border-gray-300 ">
        <p className="text-xl font-semibold font-serif">Order Items</p>
        <div className="flex  gap-5">
          <Selector
            title={"All"}
            setFilterData={setFilterData}
            orderDetail={orderDetail}
          />
          <Selector
            title={"Dine In"}
            setFilterData={setFilterData}
            orderDetail={orderDetail}
          />
          <Selector
            title={"TakeAway"}
            setFilterData={setFilterData}
            orderDetail={orderDetail}
          />
        </div>
      </div>
      <div className="py-4 ps-7 pt-23  flex gap-5 flex-wrap">
        {filterData?.map((data) => (
         <OrderCard data={data} setFilterData={setFilterData} />
        ))}
      </div>
    </>
  );
}

export default OrderLine;
