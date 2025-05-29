import { clearUnreadCount } from "@/features/items/notificationSlice";
import { RootState } from "@/store/store";
import { CiBellOn } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { unreadCount } = useSelector((state:RootState) => state.notification);
  const dispatch = useDispatch();
  const handleNotificationsViewed = () => {
    navigate("/notification");
    dispatch(clearUnreadCount());
  };

  return (
    <>
      <div className="w-full  items-center fixed top-0 z-20">
        <div className=" flex justify-between items-center px-2 border-b-1 border-gray-300   bg-white py-2">
          <div className="px-8 flex items-center gap-2 ">
            <div className="text-3xl flex items-center ">
              <FaBowlFood />
            </div>
            <div className="leading-1 flex flex-col justify-center items-center">
              <p className=" font-bold text-xl">Tasty</p>
              <p className="text-gray-600 font-semibold">Station</p>
            </div>
          </div>
          <div className=" flex border-1 border-gray-300 px-3 py-1 rounded-md items-center w-80 gap-3">
            <IoSearchOutline />
            <input
              type="text"
              className=" outline-0 w-full "
              placeholder="search menu,order and more..."
            />
          </div>
          <div className="flex items-center gap-5">
            <div
              className="h-10 w-10 border-1 border-gray-400 cursor-pointer rounded-full  flex items-center relative justify-center"
              onClick={handleNotificationsViewed}
            >
              <CiBellOn />
              {unreadCount > 0 && (
                <span className="absolute top-[-5px] right-[-10px] h-6 w-6 bg-red-500 text-[12px] flex items-center justify-center rounded-full text-gray-50">
                  {unreadCount}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 pe-5">
              <div className="h-10  w-10 rounded-[50%] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="object-cover "
                />
              </div>
              <p>Taylor swift</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
