
function BookingBar() {
  return (
    <>
      <div className=" flex justify-between   py-3 w-[82vw] items-center">
        <div className="flex">
          <p className="text-2xl font-bold font-serif px-5">Bookings</p>
          <div className="flex items-center">
            <div className="px-5 border-1 bg-green-600 rounded-l-md border-e-0  border-gray-400 text-gray-100 py-1">
              All
            </div>
            <div className="px-5 py-1 border-1 border-e-0 border-gray-500">
              Booked
            </div>
            <div className="px-5 py-1 border-1 border-e-0 border-gray-500">
              Completed
            </div>
            <div className="px-5 py-1 border-1 border-gray-500 rounded-r-md ">
              Cancelled
            </div>
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
