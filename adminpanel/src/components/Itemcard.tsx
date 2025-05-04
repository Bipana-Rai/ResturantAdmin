

function Itemcard() {
  return (
   <>
   <div className="h-[220px] w-[200px] border-1 border-gray-200">
    <div className="h-28 w-full  bg-gray-100 items-center flex justify-center ">
        <img
        className="object-cover h-34 "
         src="https://static.vecteezy.com/system/resources/previews/047/921/063/non_2x/genereted-aitoothsome-chorba-frik-isolated-on-transparent-background-free-png.png" alt="" />
    </div>
    <div className="px-3 py-2">
        <p className="text-gray-500">Lunch</p>
        <p className="font-bold">Grilled Salmon Steak</p>
    </div>
    <div className="flex justify-between items-center px-3">
        <p className="font-bold">$15.00</p>
        <div className="flex gap-2 items-center">
            <button className="h-5 w-5 rounded-full bg-gray-400 items-center flex justify-center ">-</button>
            <p>0</p>
            <button className="h-5 w-5 rounded-full bg-green-400 items-center flex justify-center">+</button>
        </div>
    </div>

   </div>
   </>
  )
}

export default Itemcard