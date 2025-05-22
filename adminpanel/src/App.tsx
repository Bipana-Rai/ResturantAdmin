import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManageDishes from "./pages/ManageDishes";
import ManageTables from "./pages/ManageTables";
import ManageBooking from "./pages/ManageBooking";
import Dashboard from "./pages/Dashboard";
import OrderLine from "./pages/OrderLine";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./outlet/MainLayout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { authorizeUser } from "./features/items/itemSlice";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authorizeUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orderline" element={<OrderLine />} />
            <Route path="/managedishes/all" element={<ManageDishes />} />
            <Route path="/managetable" element={<ManageTables />} />
            <Route path="/managedishes/:category" element={<ManageDishes />} />
            <Route path="/managebooking" element={<ManageBooking />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
