import { useState } from "react";

interface ManageBookingProps {
  setBookingStatus: (bookingStatus: string) => void;
}
function BookingBar({ setBookingStatus }: ManageBookingProps) {
  const statusData = [
    { status: "all", bg: "bg-gray-400" },
    { status: "booked", bg: "bg-cyan-600" },
    { status: "completed", bg: "bg-green-600" },
    { status: "cancelled", bg: "bg-red-600" },
  ];
  const [active, setActive] = useState("all");
  const handleClick = (data: string) => {
    setBookingStatus(data);
    setActive(data);
  };

  return (
    <>
      <div className=" flex justify-between   py-3 w-[82vw] items-center">
        <div className="flex">
          <p className="text-2xl font-bold font-serif px-5">Bookings</p>
          <div className="flex items-center border-1 border-gray-400 cursor-pointer rounded-s-md rounded-e-md overflow-hidden">
            {statusData.map((data) => (
              <div
                className={`px-5  ${
                  active === data.status && `${data.bg} text-gray-100`
                }    border-e-1   text-black py-1`}
                onClick={() => handleClick(data.status)}
              >
                {data.status}
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
