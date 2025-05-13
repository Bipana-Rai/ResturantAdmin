import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManageDishes from "./pages/ManageDishes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OrderLine from "./pages/OrderLine";
import ManageTables from "./pages/ManageTables";
import ManageBooking from "./pages/ManageBooking";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=" ml-[236px] mt-14   ">
        <Routes>
          <Route path="/orderline" element={<OrderLine />} />
          <Route path="/managedishes/all" element={<ManageDishes />} />
          <Route path="/managetable" element={<ManageTables />} />
          <Route path="/managedishes/:category" element={<ManageDishes />} />
          <Route path="/managebooking" element={<ManageBooking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
