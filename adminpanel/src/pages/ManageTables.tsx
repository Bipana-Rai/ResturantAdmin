import Tablebar from "../components/Tablebar";
import TableCategory from "../components/TableCategory";


function ManageTables() {
  return (
    <>
      <div className="grid grid-cols-7 ">
      <div className="col-span-2 pt-1 h-[83vh] bg-gray-100sticky top-14  ">
          <TableCategory />
        </div>
        <div className="col-span-5 w-full">
            <Tablebar/>
        </div>
      
      </div>
    </>
  );
}

export default ManageTables;
