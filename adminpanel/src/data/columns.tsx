import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookedData } from "@/features/items/itemSlice";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<BookedData>[] = [
  {
    accessorKey: "tableNumber",
    header: "Table Number",
  },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "members", header: "Total members" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phNo", header: "Phone Number" },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>alert("hello")}>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export default columns;
