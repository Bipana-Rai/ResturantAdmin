import { useEffect } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/items/itemSlice";
import { AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface ManageDishes {
  setIsShowCategory: (value: boolean) => void;
  isShowCategory: boolean;
}
function DisheshCategogy({ setIsShowCategory, isShowCategory }: ManageDishes) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { categoryDetail } = useSelector((state: RootState) => state.item);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const handleClick = (category: string) => {
    navigate(`/manageDishes/${category}`);
  };
  return (
    <>
      <p className="text-xl px-6 py-2 font-semibold ">Dishes Category</p>
      <div className="flex  flex-col justify-between">
        <div className=" h-[75vh] scroll-hidden flex flex-col gap-2 overflow-y-auto  px-9">
          <div
            className="flex bg-white items-center cursor-pointer  py-1  shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between  rounded-md px-3"
            onClick={() => handleClick("all")}
          >
            <div className="flex   w-full  gap-2 items-center">
              <div className="h-10  w-12 flex items-center justify-center rounded-2xl overflow-hidden bg-orange-300">
                <img src="/food.png" alt="" className="object-cover h-12" />
              </div>
              <p className="font-semibold text-sm pe-2">All Dishes</p>
            </div>
            <div className=" bg-cyan-500 h-5 w-5 flex items-center justify-center rounded-full p-1">
              <p className="text-gray-700  text-[11px] ">15</p>
            </div>
          </div>

          {categoryDetail?.map((e) => (
            <div
              className="flex bg-white items-center  cursor-pointer py-1  shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between  rounded-md px-3"
              onClick={() => handleClick(e.category)}
            >
              <div className="flex   w-full  gap-2 items-center">
                <div className="h-10  w-12 flex items-center justify-center rounded-2xl overflow-hidden bg-orange-300">
                  <img
                    src={`https://resturantbackend-rwdm.onrender.com/uploads/${e.image}`}
                    alt=""
                    className="object-cover h-12"
                  />
                </div>
                <p className="font-semibold text-sm pe-2">{e.category}</p>
              </div>
              <div className=" bg-cyan-500 h-5 w-5 flex items-center justify-center rounded-full p-1">
                <p className="text-gray-700  text-[11px] ">15</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-white shadow-[0_3px_10px_rgb(0,0,0,0.5)]  flex py-2 px-2  items-center justify-center  text-gray-200  w-full ">
          <div
            className=" bg-cyan-600 gap-1 w-full py-1 cursor-pointer  rounded-md  tex flex items-center justify-center "
            onClick={() => setIsShowCategory(!isShowCategory)}
          >
            <BiMessageSquareAdd />
            Add new category
          </div>
        </div>
      </div>
    </>
  );
}

export default DisheshCategogy;
