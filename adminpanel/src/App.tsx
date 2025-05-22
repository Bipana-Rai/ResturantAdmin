import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./outlet/MainLayout";
import Dashboard from "./pages/Dashboard";
import ManageBooking from "./pages/ManageBooking";
import ManageDishes from "./pages/ManageDishes";
import ManageTables from "./pages/ManageTables";
import OrderLine from "./pages/OrderLine";
import Notification from "./components/Notification";
function App() {
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
