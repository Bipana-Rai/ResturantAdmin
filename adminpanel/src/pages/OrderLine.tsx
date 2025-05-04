import waitlist from "../data/waitlist";

import menu from "../data/menu";
import TableDetailCard from "../components/TableDetailCard";
import Itemcard from "../components/Itemcard";
import OrderInfoCard from "../components/OrderInfoCard";

function OrderLine() {
  return (
    <>
      <div className="grid lg:grid-cols-6 relative  ">
        <div className="lg:col-span-4 rounded-xl pt-2 px-2 ">
          <p className="font-bold text-xl pb-3">Order List</p>
          <div className="flex justify-around">
            {waitlist.map((e, i) => (
              <button key={i} className="border-1  rounded-2xl px-4 py-1 ">
                <p>{e.list}</p>
              </button>
            ))}
          </div>

          <div className="py-8">
            <OrderInfoCard />
          </div>
          <div className="border-b-1 pb-5 border-dashed border-gray-300">
            <p className="text-xl font-bold pb-4 ">Foodies Menu</p>
            <div className="flex gap-4">
              {menu.map((e, i) => (
                <div className="flex w-40 border-1 px-2 rounded-xl gap-3 items-center border-gray-400 ">
                  <div key={i} className=" h-full bg-gray-100  w-10   ">
                    <img src={e.img} alt="" className="object-cover" />
                  </div>
                  <div className="">
                    <p className="font-bold">{e.category}</p>
                    <p className="text-sm text-gray-500">{e.items} items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-4 flex justify-around gap-3 flex-wrap">
            {[...Array(15)].map(() => (
              <Itemcard/>
            ))}
          </div>
        </div>
        {/* next col */}
        <div className="lg:col-span-2    bg-gray-300 mt-[-7px]    ">
          <div className=" sticky top-15 border-0 h-[89vh] px-3">
            <TableDetailCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderLine;
