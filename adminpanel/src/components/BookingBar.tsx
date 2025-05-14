
interface ManageBookingProps{
setBookingStatus:(bookingStatus:string)=>void
}
function BookingBar({setBookingStatus}:ManageBookingProps) {
  const statusData = ["all", "booked", "completed", "cancelled"];
  const handleClick=(data:string)=>{
    setBookingStatus(data)
  }

  return (
    <>
      <div className=" flex justify-between   py-3 w-[82vw] items-center">
        <div className="flex">
          <p className="text-2xl font-bold font-serif px-5">Bookings</p>
          <div className="flex items-center border-1 border-gray-400 cursor-pointer">
            {statusData.map((data) => (
              <div className="px-5     border-e-1   text-black py-1" onClick={()=>handleClick(data)}>
                {data}
              </div>
            ))}
          </div>
        </div>
        <button className="bg-cyan-600 text-gray-200 px-10 text-sm py-2 rounded-md">
          Add new Booking
        </button>
      </div>
    </>
  );
}

export default BookingBar;
