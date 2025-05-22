import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=" ml-[236px] mt-14   ">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
