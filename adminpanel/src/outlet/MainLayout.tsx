import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";
import Notify from "@/components/Notify";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

function MainLayout() {
  const notification = useSelector(
    (state: RootState) => state.notification.notification
  );
  const [logout, setLogout] = useState(false);
  return (
    <>
      {logout && (
        <div className="h-[100vh]  flex items-center justify-center fixed w-[100vw] backdrop-blur-md bg-[#00000054] z-50">
          {" "}
          <Logout setLogout={setLogout} />{" "}
        </div>
      )}

      <Navbar />
      <Sidebar setLogout={setLogout} />
      <Notify notification={notification} />
      <div className=" ml-[236px] mt-14   ">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
