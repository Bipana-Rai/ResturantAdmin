import paymenthod from "@/data/paymethod";
import {
  deleteDineInReceit,
  deleteTakeawayReceit,
  getDineIn,
  getTakeAway,
  orderData,
} from "@/features/items/itemSlice";
import { AppDispatch } from "@/store/store";
import axios from "axios";
import { CiDesktopMouse2, CiEdit } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { TbReceiptDollar } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface OrderLineProps {
  data?: orderData;
  setPaymentWay: (paymentWay: string) => void;
  setShowPayment: (showPayment: boolean) => void;
  paymentWay: string;
}
function TableDetailCard({
  data,
  paymentWay,
  setPaymentWay,
  setShowPayment,
}: OrderLineProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handlePayment = () => {
    if (!paymentWay) {
      alert("choose payment method !!");
    } else {
      if (paymentWay === "cash") return;
      setShowPayment(true);
    }
  };
  const handleDonePayment = async () => {
    if (data) {
      try {
        if (!paymentWay) return alert("choose payment method !!");
        const payload = {
          tableNumber: data?.tableNumber,
          cartItems: data?.cartItems,
          totalAmount: data?.totalAmount,
          paymentMethod: paymentWay,
          status: "paid",
          paidAt: new Date().toISOString(),
        };
        await axios.post("https://resturantbackend-rwdm.onrender.com/api/receits", payload);
        toast.success("Payment completed and order saved!");
        if (data?.status === "dine In") {
          dispatch(deleteDineInReceit({ id: data?._id }));
        } else {
          dispatch(deleteTakeawayReceit({ id: data?._id }));
        }
        dispatch(getDineIn());
        dispatch(getTakeAway());
      } catch (error) {
        console.error("Error saving order:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col justify-between rounded-md h-[64vh] ">
        <p className="text-center font-bold  border-b-1 border-dashed py-2 border-gray-300">
          Payment Details
        </p>
        <div>
          <div className="flex justify-between p-2 border-b-1 border-gray-300 border-dashed">
            <p>Table No #{data?.tableNumber}</p>
            <div className="flex gap-3 text-xl ">
              <CiEdit />
              <MdDeleteOutline />
            </div>
          </div>
          <div className="flex flex-col justify-between px-3 border-b-1 border-gray-400 border-dashed ">
            <div className="flex items-center justify-between py-1 pe-4">
              <p className="font-semibold text-gray-900 ">Ordered Items</p>
              <p className="text-gray-400">{data?.cartItems?.length}</p>
            </div>
            <div className="  overflow-y-auto h-[140px] scroll-hidden ">
              {data?.cartItems?.map((e) => (
                <div className="flex text-sm justify-between px-3">
                  <p className="text-gray-600">
                    {e.quantity}x {e.dishName}
                  </p>
                  <p className="font-semibold text-gray-900">
                    ${e.dishPrice.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-1 px-3 flex flex-col justify-between">
            <p className="font-semibold text-gray-900  pb-1 ">
              Payment Summery
            </p>
            <div className="flex justify-between text-sm px-3 ">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-semibold text-gray-900">
                ${data?.totalAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between px-3 text-sm ">
              <p className="text-gray-500">Tax</p>
              <p className="font-semibold text-gray-900">$0.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-dashed border-gray-400 pb-10 pt-2 px-4 border-t-1">
          <p className="font-semibold text-gray-900">Total Payable</p>
          <p className="font-semibold text-gray-900">
            ${data?.totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="bg-white mt-1 h-[25vh] flex flex-col justify-between py-2 rounded-md ">
        <div>
          <p className="text-lg px-3 font-semibold pb-2">Payment Method</p>
          <div className="flex  gap-1 px-4 flex-wrap  ">
            {paymenthod.map((e) => (
              <>
                <input
                  type="radio"
                  name="payment"
                  value={e.value}
                  className="ms-1"
                  onClick={(e) => setPaymentWay(e.currentTarget.value)}
                />
                {e.value === "cash" ? (
                  <div className=" border-1 flex items-center border-gray-400 rounded-md bg-gray-100 justify-center px-2 gap-2 ">
                    <TbReceiptDollar className="text-green-700" />
                    <p>Cash</p>
                  </div>
                ) : (
                  <div
                    className={` h-9  flex items-center   rounded-md w-20  relative  ${e.bg}  `}
                  >
                    <img
                      src={e.img}
                      alt=""
                      className=" absolute object-contain px-2 "
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-between px-4   ">
          <div className="px-5 flex items-center gap-2 py-2 text-sm border-1  border-gray-300 rounded-md">
            <FiPrinter />
            Print
          </div>
          <div
            className="px-4 py-1 cursor-pointer flex items-center gap-2  text-sm bg-blue-500 text-white rounded-md"
            onClick={handlePayment}
          >
            <CiDesktopMouse2 />
            payment
          </div>
          <div
            className="px-8   py-1 cursor-pointer flex items-center gap-2  text-sm bg-blue-500 text-white rounded-md"
            onClick={handleDonePayment}
          >
            Done
          </div>
        </div>
      </div>
    </>
  );
}

export default TableDetailCard;
