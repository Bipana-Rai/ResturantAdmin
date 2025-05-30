import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDetailCard from "../components/TableDetailCard";
import DashboardTable from "@/components/DashboardTable";
import PaymentCard from "@/components/PaymentCard";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const [id, setId] = useState<string | undefined>(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("selectedOrderId") || undefined;
  }
  return undefined;
});

  const [paymentWay, setPaymentWay] = useState("");
  const paymentData = orderDetail.find((e) => e._id === id);
  const[showPayment,setShowPayment]=useState(false)

  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);
  useEffect(() => {
  if (orderDetail.length > 0 && !id) {
    setId(orderDetail[0]._id);
  }
  if(id){
    localStorage.setItem("selectedOrderId",id)
  }
}, [orderDetail, id]);
  return (
    <>
      {
        showPayment && (
        <div className="h-[100vh] w-[100vw] z-30 fixed top-0 left-0 bg-[#00000083] backdrop-blur-md flex items-center justify-center">
          {paymentWay === "khalti" ? (
            <PaymentCard method={"khalti"} setShowPayment={setShowPayment} />
          ) : paymentWay === "esewa" ? (
            <PaymentCard method={"esewa"} setShowPayment={setShowPayment} />
          ) : (
            <div>
              {}
            </div>
          )}
        </div>
        )
      }
      <div className="grid lg:grid-cols-6 relative">
        <div className="col-span-4 px-2 py-2 overflow-y-auto">
          <DashboardTable setId={setId} id={id} />
        </div>

        {/* next col */}
        <div className="lg:col-span-2    bg-gray-300 mt-[-7px]    ">
          <div className=" sticky top-15 border-0 h-[89vh] px-3">
            <TableDetailCard data={paymentData} setPaymentWay={setPaymentWay} paymentWay={paymentWay} setShowPayment={setShowPayment} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
