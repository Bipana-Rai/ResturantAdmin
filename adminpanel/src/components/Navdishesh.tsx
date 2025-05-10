import { CiSearch } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
interface ManageDishes{
  setIsShowDishes:(value:boolean)=>void
}
function Navdishesh({setIsShowDishes}:ManageDishes) {
   const { category } = useParams();
   console.log(category)
   const handleClick=()=>{
    if(!category){
      return alert("please Choose a category")
    }
    setIsShowDishes(true)
   }

  return (
    <>
       <div className="flex  items-center gap-3  justify-between px-3 py-3   sticky top-14 h-15 bg-white ">
        <p className="text-lg text-gray-700  font-bold">Manage Dishes</p>
        <div className="flex items-center border-1 border-gray-400 rounded-md gap-2 text-lg py-1 px-2">
          <CiSearch  />
          <input type="text" placeholder="search dishes" className="text-sm pe-10 outline-0 " />
        </div>

        <div className="flex bg-cyan-700 rounded-xl text-sm px-3 py-2 text-white  gap-2 items-center cursor-pointer" onClick={handleClick}>
          <IoMdAddCircleOutline />
          <p>Add New Dishes</p>
        </div>
      </div>
    </> 
  );
}

export default Navdishesh;
