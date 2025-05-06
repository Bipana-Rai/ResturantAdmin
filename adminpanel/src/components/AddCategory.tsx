import { RiAddCircleFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/items/itemSlice";
import { AppDispatch } from "../store/store";
import { useState } from "react";

interface ManageDishes {
  setIsShowCategory: (value: boolean) => void;
}
interface FormData {
  category: string;
  image: File | null;
}

function AddCategory({ setIsShowCategory }: ManageDishes) {

  const dispatch = useDispatch<AppDispatch>();
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
  
    const formData = new FormData();
    formData.append("category", data.category);
    if (data.image) {
      formData.append("image", data.image);
    }
    dispatch(addCategory(formData));
    setIsShowCategory(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

                                                      
  return (
    <>
      <div className="fixed top-0 h-screen backdrop-blur-[2px] bg-[#0000006e] w-screen flex items-center justify-center  ">
        <div className="anime h-[300px] w-[450px] flex flex-col  justify-between relative  py-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-8  bg-white">
          <div
            className="right-4 absolute cursor-pointer"
            onClick={() => setIsShowCategory(false)}
          >
            <ImCross />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="flex flex-col items-center">
              <div className="h-[120px] relative w-[120px]  bg-gray-200  rounded-full flex items-center justify-center" >
                <label className=" h-7 w-7 bg-gray-300 flex items-center justify-center text-sm rounded-full absolute right-3 top-24 cursor-pointer">
                  <FaCamera />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </label>
                <img
                  src={preview || "/food.png"}
                  alt="Preview"
                  className="absolute h-20 rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col pb-3 h-full w-full  gap-4">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-xl font-bold text-center">
                  Category
                </label>
                <input
                  type="text"
                  className=" w-full bg-gray-300 py-1 px-2 rounded-lg"
                  placeholder="Enter category"
                  {...register("category", { required: true, maxLength: 20 })}
                />
                {errors.category && errors.category.type === "required" && (
                  <span role="alert" className="text-red-700">please enter category</span>
                )}
              </div>

              <button
                type="submit"
                className="px-2 py-2 rounded-lg  bg-cyan-700 text-gray-200 w-full flex items-center justify-center gap-1 text-xl cursor-pointer "
              >
                {" "}
                <RiAddCircleFill />
                <p className="text-sm">Add Category</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
