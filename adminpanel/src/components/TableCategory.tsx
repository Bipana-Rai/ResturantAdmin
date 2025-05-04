import { CiSearch } from "react-icons/ci";
import { GiRoundTable } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
function TableCategory() {
  const catgetory = [
    { type: "All", num: "12" },
    { type: "Reservation", num: "12" },
    { type: "On dine", num: "12" },
    { type: "Wait", num: "12" },
  ];
  return (
    <div className="  flex flex-col justify-between  ">
      <div className="px-3 ">
        <div className="flex scroll-hidden   gap-5 overflow-x-auto  ">
          {catgetory.map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-md shrink-0  w-29 h-9 bg-white border-1 border-gray-400 gap-1 px-2  py-1 text-sm"
            >
              <p>{e.type}</p>
              <p className="bg-cyan-500 px-1 rounded-full">{e.num}</p>
            </div>
          ))}
        </div>
        <div className="py-3">
          <p>Thu,11 January 2024</p>
        </div>
        <div className="flex gap-2 py-1 items-center px-3 bg-white border-1 border-gray-400 text-lg rounded-md">
          <CiSearch />
          <input
            type="text"
            className="outline-0 text-sm"
            placeholder="Search Category"
          />
        </div>
        <div className="scroll-hidden flex flex-col gap-2 pt-2 h-[62vh] overflow-y-auto px-2 ">
          {[...Array(15)].map(() => (
            <div className="flex  bg-white py-1 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-1 rounded-md">

              <div className="text-cyan-600 flex items-center rounded-xl bg-cyan-200  ">
                <p>on Dine</p>
              </div>
             
              <div className="flex flex-col flex-1 px-2">
                <div className="flex justify-between   gap-6 ps-1  ">
                  <p className="font-semibold text-sm">authman ibn Hunaif</p>
                  <p className="text-gray-500 text-sm">Dinner</p>
                </div>

                <div className="flex  justify-around text-gray-600 ">
                  <div className="flex gap-1 items-center">
                    <GiRoundTable />1
                  </div>
                  <div className="flex gap-1 items-center">
                    <IoPeopleOutline />2
                  </div>
                  <div className="flex gap-1 text-green-800 items-center">
                    <FaCircleCheck />
                    <p className="text-gray-600">Payment</p>
                  </div>
                </div>
                <div className="flex gap-2 px-2 text-gray-600 items-center">
                  <FaPhoneAlt />
                  <p>+099 9000 0000</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-white shadow-[0_3px_10px_rgb(0,0,0,0.5)] flex py-2 px-2  items-center justify-center  text-gray-200  w-full ">
        <div className=" bg-cyan-600 gap-1 w-full py-1  rounded-md  tex flex items-center justify-center ">
          <BiMessageSquareAdd />
          Add new category
        </div>
      </div>
    </div>
  );
}

export default TableCategory;
