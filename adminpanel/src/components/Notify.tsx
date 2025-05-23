import { useEffect, useState } from "react";
import { DineInNotification } from "@/features/items/notificationSlice";
type NotifyProps = {
  notification: DineInNotification[];
};

function Notify({ notification }: NotifyProps) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (notification.length > 0) {
      const lastNotification = notification[notification.length - 1];
      const audio = new Audio("/Notification.mp3");
      audio.play().catch((error) => {
        console.warn("cannot play audio", error);
      });
      setMessage(`You have received new order from  ${lastNotification.user}`);
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);
  if (!show) return null;

  return (
    <>
      <div className="fixed top-0 z-40 w-full   ">
        <div className="flex flex-col items-center h-25 rounded-sm   bg-[#246b80ce] gap-2 text-gray-50 justify-center">
          <p className="text-2xl ">New Order Arrived !</p>
          <p> {message}</p>
        </div>
      </div>
    </>
  );
}

export default Notify;
