import { getDineIn, orderData } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderCard from "./OrderCard";

function SingleOrder() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const data = orderDetail?.find((e) => e._id === id);

  const [filterData, setFilterData] = useState<orderData[]>(data ? [data] : []);
  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
       {filterData.map((order) => (
        <OrderCard key={order._id} data={order}/>
      ))}
    </div>
  );
}

export default SingleOrder;
