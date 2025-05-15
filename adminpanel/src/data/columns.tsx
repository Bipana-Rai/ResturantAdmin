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
import Alert from "@/utils/Alert";
type ActionState = {
  type: "edit" | "delete" | null;
  id: string | undefined;
};

const columns = (
  setShowEditBookingForm: (showEditBookingForm: boolean) => void,
  action: ActionState,
  setAction:(action: ActionState)=>void
): ColumnDef<BookedData>[] => [
  {
    accessorKey: "tableNumber",
    header: "Table Number",
  },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "members", header: "Total members" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phNo", header: "Phone Number" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue<string>("status");

      const getStatusColor = (status: string) => {
        switch (status) {
          case "booked":
            return "bg-cyan-200 text-cyan-800 ";
          case "cancelled":
            return "bg-red-200 text-red-600";
          case "completed":
            return "bg-green-200 text-green-800";
          default:
            return "bg-gray-200 text-gray-800";
        }
      };

      return (
        <span
          className={`${
            status === "booked" ? "px-6" : "px-4"
          }  py-1 rounded-md font-medium ${getStatusColor(status)}`}
        >
          {status}
        </span>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original._id;
      const handleEdit = () => {
        setAction({ type: "edit", id });
          setShowEditBookingForm(true);
      };
      const handleDelete = () => {
        setAction({ type: "delete", id });
      };

      return (
        <>
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
              <DropdownMenuItem onClick={() => alert("hello")}>
                View customer
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleEdit}>
                Edit Booking
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>
                Delete Booking
              </DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           {action.type === "delete" && action.id === id && (
            <Alert id={id} onClose={() => setAction({ type: null, id: undefined })} />
          )}
        </>
      );
    },
  },
];
export default columns;
