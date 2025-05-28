import OrderCard from "@/components/OrderCard";
import OrderInfoCard from "@/components/OrderInfoCard";
import waitlist from "@/data/waitlist";
import { getDineIn, getTakeAway, orderData } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderLine() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail, takeawayOrder } = useSelector(
    (state: RootState) => state.item
  );
  const [filterData, setFilterData] = useState<orderData[]>(orderDetail);
  const [showDine, setShowDine] = useState(true);

  console.log("talke", takeawayOrder);
  useEffect(() => {
    dispatch(getDineIn());
    dispatch(getTakeAway());
  }, [dispatch]);
  useEffect(() => {
    setFilterData(orderDetail);
  }, [orderDetail]);
  return (
    <>
      <div className="flex fixed w-[82vw]  bg-white justify-between px-8 pt-3 border-b-1  items-center pb-2 border-gray-300 ">
        <p className="text-xl font-semibold font-serif">Order Items</p>
        <div className="flex  gap-10">
          <button className="w-30 border-1 border-gray-400 py-1 rounded-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-800" onClick={() => setShowDine(true)}>
            dine In
          </button>
          <button className="w-30 bg-black
           hover:bg-gray-600 py-1 rounded-sm text-gray-50 cursor-pointer" onClick={() => setShowDine(false)}>
            TakeAway
          </button>
        </div>
      </div>
      <div className="rounded-xl pt-19 ps-5">
        <div className="flex justify-around px-10">
          {waitlist.map((e, i) => (
            <button key={i} className={` w-30 cursor-pointer rounded-sm px-4 py-1 border-1  border-gray-300 `}>
              <p>{e.list}</p>
            </button>
          ))}
        </div>
        {showDine ? (
          <div className="scroll-hidden py-8 flex gap-2   overflow-x-auto">
            {orderDetail?.map((data) => (
              <OrderInfoCard key={data._id} data={data} />
            ))}
          </div>
        ) : (
          <div className="scroll-hidden py-8 flex gap-2   overflow-x-auto">
            {takeawayOrder?.map((data) => (
              <OrderInfoCard key={data._id} data={data} />
            ))}
          </div>
        )}
      </div>

      {showDine ? (
        <div className="py-4 ps-7   flex gap-5 flex-wrap">
          {filterData?.map((data) => (
            <OrderCard data={data} setFilterData={setFilterData} />
          ))}
        </div>
      ) : (
        <div className="py-4 ps-7   flex gap-5 flex-wrap">
          {takeawayOrder?.map((data) => (
            <OrderCard data={data} setFilterData={setFilterData} />
          ))}
        </div>
      )}
    </>
  );
}

export default OrderLine;
