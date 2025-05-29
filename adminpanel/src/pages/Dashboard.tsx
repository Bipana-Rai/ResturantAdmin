import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableDetailCard from "../components/TableDetailCard";
import DashboardTable from "@/components/DashboardTable";
import QRcode from "react-qr-code";
import PaymentCard from "@/components/PaymentCard";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const [id, setId] = useState<string | undefined>();
  const [paymentWay, setPaymentWay] = useState("");
  const paymentData = orderDetail.find((e) => e._id === id);

  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);
  return (
    <>
      {
        <div className="h-[100vh] w-[100vw] z-30 fixed top-0 left-0 bg-[#00000083] backdrop-blur-md flex items-center justify-center">
          {paymentWay === "khalti" ? (
            <PaymentCard method={"khalti"} />
          ) : paymentWay === "esewa" ? (
            <PaymentCard method={"esewa"} />
          ) : (
            <div></div>
          )}
        </div>
      }
      <div className="grid lg:grid-cols-6 relative">
        <div className="col-span-4 px-2 py-2 overflow-y-auto">
          <DashboardTable setId={setId} />
        </div>

        {/* next col */}
        <div className="lg:col-span-2    bg-gray-300 mt-[-7px]    ">
          <div className=" sticky top-15 border-0 h-[89vh] px-3">
            <TableDetailCard data={paymentData} setPaymentWay={setPaymentWay} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
