import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./outlet/MainLayout";
import Dashboard from "./pages/Dashboard";
import ManageBooking from "./pages/ManageBooking";
import ManageDishes from "./pages/ManageDishes";
import ManageTables from "./pages/ManageTables";
import OrderLine from "./pages/OrderLine";
import Notification from "./components/Notification";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNotification } from "./features/items/notificationSlice";
import { AppDispatch } from "./store/store";
import { getDineIn } from "./features/items/itemSlice";
import SingleOrder from "./components/SingleOrder";
const socket = io("http://localhost:5000", {
  withCredentials: true,
});

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    socket.on("newDineInOrder", (data) => {
      console.log("Received dine-in order via socket:", data);
      dispatch(addNotification(data));
      dispatch(getDineIn())
    });
    return () => {
      socket.off("newDineInOrder");
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/orderline" element={<OrderLine />} />
          <Route path="/managedishes/all" element={<ManageDishes />} />
          <Route path="/managetable" element={<ManageTables />} />
          <Route path="/managedishes/:category" element={<ManageDishes />} />
          <Route path="/managebooking" element={<ManageBooking />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/singleData/:id" element={<SingleOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
