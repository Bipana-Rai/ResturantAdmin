import OrderCard from "@/components/OrderCard";
import OrderInfoCard from "@/components/OrderInfoCard";
import Selector from "@/components/Selector";
import waitlist from "@/data/waitlist";
import { getDineIn, getTakeAway, orderData } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderLine() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail ,takeawayOrder} = useSelector((state: RootState) => state.item);
  const [filterData, setFilterData] = useState<orderData[]>(orderDetail);

  console.log("talke", takeawayOrder);
  useEffect(() => {
    dispatch(getDineIn());
    dispatch(getTakeAway())
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
        <div className="rounded-xl pt-19 ps-5">
          <div className="flex justify-around">
            {waitlist.map((e, i) => (
              <button key={i} className={`  rounded-2xl px-4 py-1 ${e.bg} `}>
                <p>{e.list}</p>
              </button>
            ))}
          </div>

          <div className="scroll-hidden py-8 flex gap-2   overflow-x-auto">
            {orderDetail?.map((data) => (
              <OrderInfoCard key={data._id} data={data}  />
            ))}
          </div>
        </div>
      <div className="py-4 ps-7   flex gap-5 flex-wrap">
        {filterData?.map((data) => (
          <OrderCard data={data} setFilterData={setFilterData} />
        ))}
      </div>
          <div className="py-4 ps-7   flex gap-5 flex-wrap">
        {takeawayOrder?.map((data) => (
          <OrderCard data={data} setFilterData={setFilterData} />
        ))}
      </div>
    </>
  );
}

export default OrderLine;
