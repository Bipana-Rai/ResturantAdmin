import BookingBar from "@/components/BookingBar";
import BookingTable from "@/components/BookingTable";
import EditBookingForm from "@/components/EditBookingForm";
import { getBookingDetail } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export type ActionState = {
  type: "edit" | "delete" | null;
  id: string | undefined;
};
function ManageBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const [showEditBookingForm, setShowEditBookingForm] = useState(false);
  const [action, setAction] = useState<ActionState>({ type: null, id: undefined });
  const [bookingStatus, setBookingStatus] = useState("all");
  const { bookingDetail } = useSelector((state: RootState) => state.item);

  const filterBookingDetail =
    bookingStatus === "all"
      ? bookingDetail
      : bookingDetail.filter((e) => e.status === bookingStatus);

  useEffect(() => {
    dispatch(getBookingDetail());
  }, [dispatch, showEditBookingForm, setShowEditBookingForm]);

  return (
    <>
    <title>Manage Booking</title>
    
      {showEditBookingForm && (
        <div className="h-[100vh] top-0 left-0 bg-[#0000005d] w-[100vw] fixed  z-20 flex items-center justify-center">
          <EditBookingForm
            action={action}
            setShowEditBookingForm={setShowEditBookingForm}
          />
        </div>
      )}

      <BookingBar setBookingStatus={setBookingStatus} />
      <div className="px-5">
        <BookingTable
          action={action}
          setAction={setAction}
          filterData={filterBookingDetail}
          setShowEditBookingForm={setShowEditBookingForm}
        />
      </div>
    </>
  );
}

export default ManageBooking;
