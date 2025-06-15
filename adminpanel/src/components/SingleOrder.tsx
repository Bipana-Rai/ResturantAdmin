import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderCard from "./OrderCard";

function SingleOrder() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const data = orderDetail?.find((e) => e._id === id);
  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
       {data && <OrderCard key={data._id} data={data} />}
    </div>
  );
}

export default SingleOrder;
