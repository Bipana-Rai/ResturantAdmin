import BookingBar from "@/components/BookingBar";
import BookingTable from "@/components/BookingTable";
import { getBookingDetail } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ManageBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const [bookingStatus, setBookingStatus] = useState("all");
  const { bookingDetail } = useSelector((state: RootState) => state.item);

  const filterBookingDetail =
    bookingStatus === "all"
      ? bookingDetail
      : bookingDetail.filter((e) => e.status === bookingStatus);

  console.log("filter", filterBookingDetail);

  useEffect(() => {
    dispatch(getBookingDetail());
  }, [dispatch]);
  console.log(bookingStatus);

  return (
    <>
      <BookingBar setBookingStatus={setBookingStatus} />
      <div className="px-5">
        <BookingTable filterData={filterBookingDetail} />
      </div>
    </>
  );
}

export default ManageBooking;
