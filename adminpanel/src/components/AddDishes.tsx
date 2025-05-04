import { RiAddCircleFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDishes } from "../features/items/itemSlice";
import { AppDispatch } from "../store/store";
import { useParams } from "react-router-dom";
interface ManageDishes {
  setIsShowDishes: (value: boolean) => void;
}
interface DishFormValues {
  dishImage: File | null;
  dishName: string;
  dishPrice: number;
  dishCategory:string;
}

function AddDishes({ setIsShowDishes }: ManageDishes) {
  const { category } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DishFormValues>();
  const onSubmit = (data: DishFormValues) => {
    const formData = new FormData();
    formData.append("dishName", data.dishName);
    formData.append("dishPrice", data.dishPrice.toString());
    formData.append("dishCategory", data.dishCategory);

    if (data.dishImage) {
      formData.append("dishImage", data.dishImage);
    }
    dispatch(addDishes(formData));
    setIsShowDishes(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("dishImage", file);
      setPreview(URL.createObjectURL(file));
    }
  };
  useEffect(()=>{
    if(category){
      setValue("dishCategory",category)
    }
  },[category,setValue])
  return (
    <div className="fixed top-0 h-screen backdrop-blur-[2px] bg-[#0000006e] w-screen flex items-center justify-center  ">
      <div className="anime h-[400px] w-[500px] flex flex-col  justify-between relative  py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-8  bg-white">
        <div
          className="right-4  absolute cursor-pointer"
          onClick={() => setIsShowDishes(false)}
        >
          <ImCross />
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center">
            <div className="h-[120px] relative w-[120px]  bg-gray-200  rounded-full flex items-center justify-center">
              <label className=" h-7 w-7 bg-gray-300 flex items-center justify-center text-sm rounded-full cursor-pointer absolute right-1 top-22">
                <FaCamera />
                <input
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </label>
              <img
                src={preview || "/food.png"}
                alt=""
                className="absolute h-20"
              />
            </div>
          </div>
          <div>
            <label className="text-lg font-semibold">Category: </label>
            <input
              readOnly
              className="text-md text-gray-600 text-[16px]"
              {...register("dishCategory")}
            />
            
          </div>

          <div className="flex flex-col pb-3 h-full w-full  gap-3">
            <div className="flex flex-col gap-1 ">
              <label
                htmlFor=""
                className="text-lg  text-gray-800 font-semibold "
              >
                Dish Name
              </label>
              <input
                type="text"
                className=" w-full border-1 outline-cyan-700 border-cyan-500 py-1 px-2 rounded-lg"
                placeholder="Enter dishes name"
                {...register("dishName", { required: "true" })}
              />
              {errors.dishName && errors.dishName.type === "requires" && (
                <span className="text-red-600">Enter Dish name</span>
              )}
            </div>
            <div className="flex flex-col text-gray-800  gap-1 ">
              <label htmlFor="" className="text-lg font-semibold ">
                Price$
              </label>
              <input
                type="text"
                className=" w-full border-1 outline-cyan-700 border-cyan-500 py-1 px-2 rounded-lg"
                placeholder="Enter price"
                {...register("dishPrice", { required: "true" })}
              />
              {errors.dishPrice && errors.dishPrice.type === "required" && (
                <span className="text-red-500">Enter price of dish</span>
              )}
            </div>
            <button
              type="submit"
              className="px-2 py-2 rounded-lg  bg-cyan-700 text-gray-200 w-full flex items-center justify-center gap-1 text-xl "
            >
              {" "}
              <RiAddCircleFill />
              <p className="text-sm">Add Dishes</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDishes;
