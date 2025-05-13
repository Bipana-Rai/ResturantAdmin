import { MdOutlineDashboard } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaChair } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
const sidebarContent=[{
   
    tab:"Dashboard",
    icon:<MdOutlineDashboard />,
    path:'/dashboard'
},
{
    tab:"Order Line",
    icon:<BiSolidFoodMenu />,
     path:'/orderline'
},

{
    tab:"Manage Dishes",
    icon:<FaBowlFood />,
     path:'/managedishes/all'
},
{
    tab:"Manage Table",
    icon:<FaChair />,
     path:'/managetable'
},
{
    tab:"Manage Booking",
    icon:<FaBowlFood />,
     path:'/managebooking'
},
]
export default sidebarContent