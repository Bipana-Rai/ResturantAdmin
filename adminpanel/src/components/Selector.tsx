import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { orderData } from "@/features/items/itemSlice";
interface OrderLinePrpos {
  title: string;
 setFilterData: (filterData: orderData[]) => void;
 orderDetail:orderData[]
}
function Selector({ title,setFilterData,orderDetail}: OrderLinePrpos) {
  const handleOnChange=(data:string)=>{
  const filterData=orderDetail.filter((e)=>e.foodStatus===data)
  setFilterData(filterData)

  }
  return (
    <Select onValueChange={handleOnChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>status</SelectLabel>
          <SelectItem value="waiting">Waiting</SelectItem>
          <SelectItem value="in kitchen">In kitchen</SelectItem>
          <SelectItem value="served">Served</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default Selector;
