
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useSelector((state: RootState) => state.item);

console.log("user",user)

    if (user === undefined) {
      // still loading user info, do nothing yet
      return;
    }

    // if (!user) {
    //   // Not logged in, redirect to customer app home (login)
    //   window.location.replace("http://localhost:5174");
    //   return;
    // }
  if (user?.role === "admin") {
    return <Outlet />;
  }

  return null;
}

export default ProtectedRoute;
