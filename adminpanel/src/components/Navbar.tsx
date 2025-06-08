import { authorizeUser } from "@/features/items/itemSlice";
import { clearUnreadCount } from "@/features/items/notificationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { CiBellOn } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { unreadCount } = useSelector((state:RootState) => state.notification);

  const {user} = useSelector((state: RootState) => state.item);
  const dispatch = useDispatch<AppDispatch>();
  const handleNotificationsViewed = () => {
    navigate("/notification");
    dispatch(clearUnreadCount());
    dispatch(authorizeUser())
  };
  console.log(user)

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
              <div className="h-10  w-10 rounded-[50%] overflow-hidden border-1 border-gray-400 flex items-center justify-center">
              <p className="text-2xl font-semibold text-black ">{user?.fullName.charAt(0)}</p>  
               
              </div>
              <p>{user?.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
