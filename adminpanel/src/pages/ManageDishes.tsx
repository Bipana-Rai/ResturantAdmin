import {  useState } from "react";
import AddCategory from "../components/AddCategory";
import DisheshCategogy from "../components/DisheshCategogy";
import DishesList from "../components/DishesList";
import Navdishesh from "../components/Navdishesh";
import AddDishes from "../components/AddDishes";


function ManageDishes() {
 
  // console.log(category)
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);
  const [isShowDishes, setIsShowDishes] = useState<boolean>(false);

  return (
    <>
      <div className="grid  lg:grid-cols-7 relative">
        <div className="col-span-2 h-[83vh] bg-gray-100 sticky top-14  ">
          <DisheshCategogy
            setIsShowCategory={setIsShowCategory}
            isShowCategory={isShowCategory}
          />
        </div>
        <div className="col-span-5 w-full ">
          <Navdishesh setIsShowDishes={setIsShowDishes} />
          <div className="flex flex-wrap gap-5 px-4">
            <DishesList setIsShowDishes={setIsShowDishes} />
          </div>
        </div>
      </div>
      {isShowCategory && <AddCategory setIsShowCategory={setIsShowCategory} />}
      {isShowDishes && <AddDishes setIsShowDishes={setIsShowDishes} />}
    </>
  );
}

export default ManageDishes;
