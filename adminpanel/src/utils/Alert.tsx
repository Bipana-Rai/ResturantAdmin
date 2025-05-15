import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteBooking, editTableData } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface AlertProps {
  onClose: () => void;
  id: string;
}

function Alert({ onClose, id }: AlertProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { tableDetail, bookingDetail } = useSelector(
    (state: RootState) => state.item
  );
  const data = bookingDetail?.find((e) => e._id === id);
  const filterData = tableDetail?.find((e) => e.tableNum === data?.tableNumber);

  const handleClick = () => {
    dispatch(
      editTableData({ id: filterData?._id, updatedStatus: "available" })
    );
    dispatch(deleteBooking(id));
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            booking and remove it from your records.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default Alert;
