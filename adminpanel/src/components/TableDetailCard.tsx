import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TbReceiptDollar } from "react-icons/tb";
import { FaRegIdCard } from "react-icons/fa6";
import { LuScanLine } from "react-icons/lu";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
function TableDetailCard() {
  return (
    <>
      <div className="bg-white flex flex-col justify-between rounded-md h-[60vh] ">
        <div>
        <div className="flex justify-between p-2 border-b-1 border-gray-300 border-dashed">
          <p>Table No #04</p>
          <div className="flex gap-3 text-xl ">
            <CiEdit />
            <MdDeleteOutline />
          </div>
        </div>
        <div className="flex flex-col justify-between px-3 border-b-1 border-gray-400 border-dashed ">
          <div className="flex items-center justify-between py-2">
            <p className="font-semibold text-gray-900 text-lg">Ordered Items</p>
            <p className="text-gray-400">05</p>
          </div>
          <div className="flex max-h-[200px] overflow-y-auto justify-between px-3  ">
            <p className="text-gray-600">2x Pasta with Roast Beef</p>
            <p className="font-semibold text-gray-900">$20.00</p>
          </div>
          <div className="flex justify-between px-3  ">
            <p className="text-gray-600">2x Pasta with Roast Beef</p>
            <p className="font-semibold text-gray-900">$20.00</p>
          </div>
          <div className="flex justify-between px-3  ">
            <p className="text-gray-600">2x Pasta with Roast Beef</p>
            <p className="font-semibold text-gray-900">$20.00</p>
          </div>
          <div className="flex justify-between px-3  ">
            <p className="text-gray-600">2x Pasta with Roast Beef</p>
            <p className="font-semibold text-gray-900">$20.00</p>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-col justify-between">
          <p className="font-semibold text-gray-900 text-lg pb-2 ">
            Payment Summery
          </p>
          <div className="flex justify-between px-3 ">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-semibold text-gray-900">$67.00</p>
          </div>
          <div className="flex justify-between px-3 ">
            <p className="text-gray-500">Tax</p>
            <p className="font-semibold text-gray-900">$67.00</p>
          </div>
          <div className="flex justify-between px-3 pb-3 ">
            <p className="text-gray-500">Donation</p>
            <p className="font-semibold text-gray-900">$67.00</p>
          </div>
          </div>
          </div>
          <div className="flex justify-between border-dashed border-gray-400 pb-6 pt-2 px-4 border-t-1">
            <p className="font-semibold text-gray-900">Total Payable</p>
            <p className="font-semibold text-gray-900">$67.00</p>
          </div>
       
      </div>
     
      <div className="bg-white mt-1 h-[27vh] flex flex-col justify-between py-2 rounded-md px-3">
        <div>
          <p className="text-lg font-semibold py-2">Payment Method</p>

          <div className="flex justify-around py-3">
            <div className=" border-1 flex items-center border-gray-300 rounded-lg px-2 gap-2 py-1">
              <TbReceiptDollar />
              <p>Cash</p>
            </div>
            <div className=" border-1  flex items-center  border-gray-300 rounded-lg px-2 gap-2 py-1">
              <FaRegIdCard />
              <p>Card</p>
            </div>
            <div className=" border-1 border-gray-300  flex items-center rounded-lg px-2 gap-2 py-1">
              <LuScanLine />
              <p>Scan</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5  ">
          <div className="px-5 flex items-center gap-2 py-1 text-sm border-1 border-gray-300 rounded-md">
            <FiPrinter />
            Print
          </div>
          <div className="px-5 py-1 flex items-center gap-2  text-sm bg-blue-500 text-white rounded-md">
            <CiDesktopMouse2 />
            Place Order
          </div>
        </div>
      </div>
    </>
  );
}

export default TableDetailCard;
