import BookingBar from "@/components/BookingBar";
import BookingTable from "@/components/BookingTable";
import EditBookingForm from "@/components/EditBookingForm";
import { getBookingDetail } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ManageBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const [showEditBookingForm, setShowEditBookingForm] = useState(false);
  const [id, setId] = useState("");
  const [bookingStatus, setBookingStatus] = useState("all");
  const { bookingDetail } = useSelector((state: RootState) => state.item);

  const filterBookingDetail =
    bookingStatus === "all"
      ? bookingDetail
      : bookingDetail.filter((e) => e.status === bookingStatus);

  useEffect(() => {
    dispatch(getBookingDetail());
  }, [dispatch,showEditBookingForm,setShowEditBookingForm]);

  return (
    <>
      {showEditBookingForm && (
        <div className="h-[100vh] top-0 bg-[#0000005d] w-[100vw] fixed  z-20 flex items-center px-80">
          <EditBookingForm
            id={id}
            setShowEditBookingForm={setShowEditBookingForm}
          />
        </div>
      )}

      <BookingBar setBookingStatus={setBookingStatus} />
      <div className="px-5">
        <BookingTable
          setId={setId}
          filterData={filterBookingDetail}
          setShowEditBookingForm={setShowEditBookingForm}
        />
      </div>
    </>
  );
}

export default ManageBooking;
