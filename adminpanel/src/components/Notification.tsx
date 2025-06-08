import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";

function Notification() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const { notification } = useSelector(
    (state: RootState) => state.notification
  );
  dayjs.extend(relativeTime);

  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);

  return (
    <>
    <title>notification</title>
      <div className="fixed border-b py-4 w-full border-gray-300 bg-gray-50 z-20">
        <p className="text-2xl px-8 font-semibold">Notification</p>
      </div>
      <div className="pt-15">
        {[...orderDetail]?.map((data, i) => {
          const isNew = notification.some((n) => n._id === data._id);
          return (
            <div
              key={i}
              className={`${
                isNew ? "bg-gray-200" : "bg-white"
              } gap-7 px-8 flex items-center border-b border-gray-400 py-2 cursor-pointer`}
              onClick={() => navigate(`/singleData/${data._id}`)}
            >
              <div className="h-17 w-17 relative flex items-end justify-center  rounded-full bg-gray-300 overflow-hidden ">
                <img src="/profile.webp" alt="" className="w-14" />
              </div>
              <div className="">
                <p className="text-xl font-bold text-gray-700">
                  New Order Received!
                </p>

                <p className="text-sm text-gray-500">
                  {data.user} has palced a ${data.totalAmount} order for  {data.cartItems.length} items.
                </p>
                <div className=" text-gray-600 flex text-sm">
                  <p className="text-cyan-600 gap-2 flex flex-wrap">
                    (Items:
                    {data.cartItems.slice(0, 4).map((e, i) => (
                      <span key={i}>
                        {e.dishName}
                        {i < data.cartItems.length - 1 ? ", " : ""}
                      </span>
                    ))}
                    {data.cartItems.length > 4 && "..."} )
                  </p>
                  <p className="text-red-600 ps-4">Table:{data.tableNumber}</p>
                </div>

                <div className="flex items-center gap-4 text-gray-500 d">
                  <p className="font-semibold text-red-600">{data.status}</p>{" "}
                  <p className="text-sm">{dayjs(data.createdAt).fromNow()} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Notification;
