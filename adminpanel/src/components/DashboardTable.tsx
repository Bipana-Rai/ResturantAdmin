import { getDineIn } from "@/features/items/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DashboardTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { orderDetail } = useSelector((state: RootState) => state.item);
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
useEffect(() => {
  const searchData = orderDetail.filter(
    (e) =>
      e.tableNumber.includes(inputValue) ||
      e.cartItems.some((items) =>
        items.dishName.toLowerCase().includes(inputValue.toLowerCase())
      )
  );
  setFilterData(searchData);
}, [inputValue, orderDetail]);

  useEffect(()=>{
    setFilterData(orderDetail)
  },[orderDetail])
  useEffect(() => {
    dispatch(getDineIn());
  }, [dispatch]);
  return (
    <>
      <form
        className="top-14 py-3 flex  px-10 w-[730px]  fixed bg-white "
        
      >
        <input
          type="text"
          placeholder="search by table number or items.."
          className=" w-full border-1  py-2 border-gray-500 rounded-l-sm px-3"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-30 py-2 rounded-e-md rounded-s-0 bg-black text-gray-50 text-sm "
          type="submit"
        >
          search
        </button>
      </form>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, marginTop: 8 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ whiteSpace: "nowrap" }}>
                Table Number
              </StyledTableCell>
              <StyledTableCell align="left">Items</StyledTableCell>
              <StyledTableCell sx={{ whiteSpace: "nowrap" }} align="left">
                Total Items
              </StyledTableCell>
              <StyledTableCell sx={{ whiteSpace: "nowrap" }} align="left">
                Total Amount
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.tableNumber}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.cartItems.map((e) => e.dishName).join(", ")}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.cartItems.length}
                </StyledTableCell>
                <StyledTableCell align="left">
                  ${row.totalAmount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
