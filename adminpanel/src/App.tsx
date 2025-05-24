import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import "./App.css";
import Notification from "./components/Notification";
import SingleOrder from "./components/SingleOrder";
import { authorizeUser, getDineIn } from "./features/items/itemSlice";
import { addNotification } from "./features/items/notificationSlice";
import MainLayout from "./outlet/MainLayout";
import Dashboard from "./pages/Dashboard";
import ManageBooking from "./pages/ManageBooking";
import ManageDishes from "./pages/ManageDishes";
import ManageTables from "./pages/ManageTables";
import OrderLine from "./pages/OrderLine";
import { AppDispatch, RootState } from "./store/store";
import ProtectedRoute from "./components/ProtectedRoute";

const socket = io("http://localhost:5000", {
  withCredentials: true,
});

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {user} =useSelector((state:RootState)=>state.item)
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
  useEffect(()=>{
     dispatch(authorizeUser())
  },)
  console.log("use",user)

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
         <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/orderline" element={<OrderLine />} />
          <Route path="/managedishes/all" element={<ManageDishes />} />
          <Route path="/managetable" element={<ManageTables />} />
          <Route path="/managedishes/:category" element={<ManageDishes />} />
          <Route path="/managebooking" element={<ManageBooking />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/singleData/:id" element={<SingleOrder />} />
        </Route>
         </Route>
        
      </Routes>
    </>
  );
}

export default App;
