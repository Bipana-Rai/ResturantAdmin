import { MdAddBox } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getDishes } from "../features/items/itemSlice";
import { useParams } from "react-router-dom";
interface ManageDishes {
  setIsShowDishes: (value: boolean) => void;
}

interface Dishes {
  dishName: string;
  dishPrice: number;
  dishImage?: string;
  dishCategory: string;
}

function DishesList({ setIsShowDishes }: ManageDishes) {
  const { category } = useParams();
  const { dishesDetail } = useSelector((state: RootState) => state.item);
  const dispatch = useDispatch<AppDispatch>();

  const [finalDish, setFinalDish] = useState<Dishes[]>([]);
  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      const filtered = dishesDetail.filter(
        (dish) => dish.dishCategory === category
      );
      setFinalDish(filtered);
    } else {
      setFinalDish(dishesDetail);
    }
  }, [category, dishesDetail]);
  return (
    <>
      {category && (
        <div
          className="h-[170px] w-[160px] border-2 border-cyan-400 border-dashed flex flex-col justify-center items-center cursor-pointer "
          onClick={() => setIsShowDishes(true)}
        >
          <div className="text-cyan-600 text-3xl ">
            <MdAddBox />
          </div>
          <p className="text-center text-sm pt-2 px-2 font-semibold">
            Add New Dish to {category}
          </p>
        </div>
      )}

      {finalDish?.map((e) => (
        <div className=" relative -z-10 h-[170px] w-[160px] border-1 cursor-pointer border-gray-400 flex flex-col justify-between   ">
          <div className="absolute top-0">
            <FaRegSquare />
          </div>
          <div className="flex items-center justify-center bg-gray-200 p-1">
            <img
              src={`http://localhost:5000/uploads/${e.dishImage}`}
              alt=""
              className="h-19 w-33"
            />
          </div>
          <div className="ps-1 py-2 ">
            <p className="text-sm text-gray-500">{e.dishCategory}</p>
            <p className=" text-gray-800 text-sm font-semibold">{e.dishName}</p>
            <p className="font-semibold">${e.dishPrice}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default DishesList;
