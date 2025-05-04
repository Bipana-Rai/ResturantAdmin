function OrderInfoCard() {
  return (
    <>
      <div className="h-[95px] w-[250px] py-1 px-3 bg-[#89e7ff] rounded-xl  ">
        <div className="flex justify-between  ">
            <p>Order#F27 </p>
            <p>Table 03</p>
        </div>
        <p>Item :8X</p>
        <div className="flex justify-between items-center   ">
            <p className="text-sm ">2 mins ago</p>
            <div className="px-3  bg-[#066146] flex  text-gray-100 rounded-2xl text-sm py-1 "><p>in Kitchen</p></div>
        </div>
      </div>

    </>
  );
}

export default OrderInfoCard;
