import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface OrderLinePrpos {
  title: string;
}
function Selector({ title }: OrderLinePrpos) {
  return (
    <Select>
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
