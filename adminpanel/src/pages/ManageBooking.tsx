import BookingBar from "@/components/BookingBar"
import BookingTable from "@/components/BookingTable"

function ManageBooking() {
  return (
    <>
    <BookingBar/>
    <div className="px-5">
    <BookingTable/>
    </div>
    </>
  )
}

export default ManageBooking