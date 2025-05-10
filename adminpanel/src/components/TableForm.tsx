import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addTable } from "../features/items/itemSlice";
import { TableData } from "../features/items/itemSlice";
import { ImCross } from "react-icons/im";
interface tableProps {
  setShow: (show: boolean) => void;
}
function TableForm({ setShow }: tableProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TableData>();
  const onSubmit = (data: TableData) => {
    const transformedData = {
      ...data,
    };

    dispatch(addTable(transformedData));
    // setShow(false);
  };
  return (
    <div className="fixed h-[100vh] w-[100vw] bg-[#000000b4]  flex items-center px-80 z-30">
      <div className="anime relative w-[450px] pb-4 rounded-md bg-white px-10">
        <div
          className="absolute right-5 top-3 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <ImCross />
        </div>

        <p className="text-2xl font-bold text-cyan-800 text-center py-4 ">
          Table Data
        </p>
        <form
          action=""
          className="flex flex-col gap-1 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 ">
            <label className="font-semibold" htmlFor="">
              Table Number
            </label>
            <input
              type="text"
              placeholder="Enter table number.."
              className="border-1 py-1 border-gray-600 rounded-md   px-2 "
              {...register("tableNum", { required: true })}
            />
            {errors.tableNum && errors.tableNum.type === "required" && (
              <span className="text-red-600 text-sm">
                Please Enter Table capacity.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="">
              Capacity
            </label>
            <input
              type="text"
              className="border-1 border-gray-600 rounded-md  px-2  py-1"
              placeholder="Enter capacity..."
              {...register("tableCapacity", { required: true })}
            />
            {errors.tableCapacity &&
              errors.tableCapacity.type === "required" && (
                <span className="text-red-600 text-sm">
                  Please Enter Table Name.
                </span>
              )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="">
              Location
            </label>
            <input
              type="text"
              className="border-1 text-gray-700 py-1 border-gray-600 rounded-md px-2 "
              placeholder="Enter Location"
              {...register("tableLocation")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              Status
            </label>
            <select
              className="border-1 text-gray-600 px-2 py-1 border-gray-600 rounded-md "
              {...register("tableStatus", { required: true })}
            >
              <option value="available">Available</option>
              <option value="booked">Booked</option>
            </select>
          </div>
          <button
            className=" mt-4 bg-cyan-600 py-1 cursor-pointer rounded-md text-gray-200   "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TableForm;
