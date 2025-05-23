import Navbar from "@/components/Navbar";
import Notify from "@/components/Notify";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

function MainLayout() {
  const notification = useSelector(
    (state: RootState) => state.notification.notification
  );
  return (
    <>
      <Navbar />
      <Sidebar />
      <Notify notification={notification} />
      <div className=" ml-[236px] mt-14   ">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
