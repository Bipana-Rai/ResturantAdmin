import { FaCircle } from "react-icons/fa";
function Tablebar() {
    const category=[
        {type:"Available", bg:"text-purple-800"},
        {type:"Reserved", bg:"text-green-800"},
        {type:"On dine" ,bg:"text-orange-800"},
    ]
  return (
   <>
   <div className="flex sticky top-14 justify-between px-2 py-2"> 
    <p className="font-semibold text-2xl ">Manage Tables</p>
    <div className="flex gap-3">
        <div className="px-3 text-sm py-1 bg-cyan-700 text-white border-lg">Main Dining</div>
        <div className="px-3 text-sm py-1 border-1 border-gray-400 border-lg">Terrace</div>
        <div className="px-3 text-sm py-1 border-1 border-gray-400 border-lg">Outdoor</div>
    </div>
   </div>

   <div className="flex gap-3 px-3 ">
{
    category.map((e)=>(
        <div className={`${e.bg} gap-2 flex items-center `}>
            <FaCircle  />
            <p className="text-black">{e.type}</p>
        </div>
    ))
}
   </div>
   </>
  )
}

export default Tablebar