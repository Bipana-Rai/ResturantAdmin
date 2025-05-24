import sidebarContent from "../data/sidebarContent";
import account from "../data/accountsettings";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
type sidebarItem = {
  tab: string;
  path: string;
  icon: React.ReactNode;
};
interface sidebarProps{
  setLogout:(logout:boolean)=>void
}

function Sidebar({setLogout}:sidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: sidebarItem) => {
    navigate(e.path);
  };


  return (
    <>
      <div className="w-[236px]  bg-gray-100 flex flex-col border-r-1 border-gray-300 justify-between h-full fixed top-14 left-0 z-10">
        <div className=" pt-10 flex flex-col px-2 gap-6 ">
          {sidebarContent.map((e, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-8 py-2 hover:bg-cyan-600 rounded-2xl  w-full    cursor-pointer ${
                location.pathname === e.path ? "bg-cyan-600" : ""
              }`}
              onClick={() => handleClick(e)}
            >
              {e.icon}
              <p>{e.tab}</p>
            </div>
          ))}
        </div>
        <div className="  flex flex-col  gap-4 px-10 pb-20 ">
          {account.map((e,i) => (
            <div key={i} className="flex items-center gap-3">
              {e.icon}
              <p>{e.tab}</p>
            </div>
          ))}
          <p className="flex items-center gap-4 cursor-pointer" onClick={()=>setLogout(true)}><IoMdLogOut />  Logout </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
