import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { BookedData, editBookingDetail, editTableData, getBookingDetail, getTable } from "@/features/items/itemSlice";
import { ActionState } from "@/pages/ManageBooking";

interface TableCardProps {
  setShowEditBookingForm: (showEditBookingForm: boolean) => void;
 action:ActionState
}
function EditBookingForm({ setShowEditBookingForm, action }: TableCardProps) {
  const { bookingDetail,tableDetail } = useSelector((state: RootState) => state.item);
  const filterData = bookingDetail.find((e) => e._id === action?.id);
  const filterTable=tableDetail.find((e)=>e.tableNum===filterData?.tableNumber)
  console.log(filterData);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookedData>();
  useEffect(() => {
    reset(filterData);
  }, [reset, filterData]);

  const onSubmit = (data: BookedData) => {
    const transformedData = { ...data };
    const id=action?.id
    if(transformedData.status==="completed"){
        dispatch(editTableData({ id: filterTable?._id, updatedStatus: "available" }))
    }
    console.log(transformedData.status)
    dispatch(editBookingDetail({id,data:transformedData,status:transformedData.status}))
    
    setShowEditBookingForm(false);

  };
  useEffect(() => {
    dispatch(getBookingDetail());
    dispatch(getTable())
  }, [dispatch]);
  return (
    <div className="anime  w-[500px] rounded-xl pb-3 pt-2 bg-white px-5 shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <p className="text-2xl  font-bold text-center">Booking</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col leading-1">
          <div>
            <label className=" font-bold">Table : </label>
            <input
              className=" outline-0"
              type="text "
              {...register("tableNumber")}
              readOnly
            />
          </div>
          <input
            className="text-sm  outline-0 text-gray-700 
        font-semibold font-serif"
            readOnly
            {...register("location")}
          />
        </div>

        <div className="flex flex-col  pb-1">
          <label htmlFor="">Full Name </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            {...register("fullName", { required: true })}
            placeholder="Enter Full Name"
          />
          {errors.fullName && errors.fullName.type === "required" && (
            <span className="text-sm text-red-500">
              Please enter number of people
            </span>
          )}
        </div>
        <div className="flex flex-col  pb-1">
          <label htmlFor="">Phone No </label>
          <input
            type="tel"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter phone no"
            {...register("phNo", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phNo && (
            <span className="text-sm text-red-500">{errors.phNo.message}</span>
          )}
        </div>
        <div className="flex flex-col  pb-1">
          <label htmlFor="">Number of people </label>
          <input
            type="number"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter Number of people"
            {...register("members", {
              required: "Number of people is required",
              min: { value: 1, message: "Must be at least 1" },
              max: { value: 10, message: "Maximum 10 people" },
            })}
          />
          {errors.members && (
            <span className="text-sm text-red-500">
              {errors.members.message}
            </span>
          )}
        </div>
         <div className="flex   gap-4 py-2">
            <label htmlFor="" className="">
              Status
            </label>
            <select
              className="border-1 w-40 text-gray-600 px-2 py-1 text-sm border-gray-600 rounded-md "
              {...register("status", { required: true })}
            >
              <option value="available">Available</option>
              <option value="booked">Booked</option>
               <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
            </select>
          </div>
        <div className="py-1 flex gap-4">
          <label htmlFor="">Reservation Date</label>
          <input
            type="date"
            className="border-1 border-gray-500 rounded-md py-1 text-sm px-2 "
            {...register("bookingDate", { required: true })}
          />
          {errors.bookingDate && errors.bookingDate.type === "required" && (
            <span className="text-red-600 text-sm">Date is required</span>
          )}
        </div>
        <div className="py-2 flex gap-4">
          <label htmlFor="">Reservation time</label>
          <input
            type="time"
            className="border-1 border-gray-500 rounded-md py-1 text-sm px-2 "
            {...register("bookingTime", { required: true })}
          />
          {errors.bookingTime && errors.bookingTime.type === "required" && (
            <span className="text-red-600 text-sm">time is required</span>
          )}
        </div>
        
        <div className="flex justify-between pt-4 px-10">
          <button
            className="px-8 text-sm bg-white border-1 text-black border-black  py-2 rounded-md cursor-pointer"
            onClick={() => setShowEditBookingForm(false)}
          >
            {" "}
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 text-sm cursor-pointer bg-black text-gray-200 py-2 bg rounded-md"
          >
            {" "}
           Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBookingForm;
