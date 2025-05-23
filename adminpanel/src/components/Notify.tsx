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
      setMessage(`New order from ${lastNotification.user}`);
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 100000);
      return () => clearTimeout(timer);
    }
  }, [notification]);
  if (!show) return null;

  return (
    <>
      <div
        className="fixed h-20 z-40 w-full bg-amber-500"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <p>{message}</p>
          <button
            onClick={() => setShow(false)}
            style={{
              marginLeft: "20px",
              fontWeight: "bold",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}

export default Notify;
