import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

type AppAxiosError = AxiosError<{ message: string }>;
export const addCategory = createAsyncThunk(
  "addCategory",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addCategory",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    }
  }
);
export const getCategory = createAsyncThunk(
  "getcategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/getCategory");

      return response.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const addDishes = createAsyncThunk(
  "addDishes",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addDish",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getDishes = createAsyncThunk(
  "getDishes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/getDish");
      return response.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const addTable = createAsyncThunk(
  "addTable",
  async (data: TableData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/addTable", data);
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getTable = createAsyncThunk(
  "getTable",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/getTable");
      return response.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const editTableData = createAsyncThunk(
  "editTableData",
  async (
    {
      id,
      data,
      updatedStatus,
    }: { id?: string; data?: TableData; updatedStatus?: string },
    { rejectWithValue }
  ) => {
   
    try {
      if (updatedStatus) {
        console.log(updatedStatus)
        const response = await axios.put(
          `http://localhost:5000/api/updateStatus/${id}`,
          {  ...(updatedStatus && { tableStatus: updatedStatus })}
        );
        return { id, tableStatus: updatedStatus, data: response.data };
      }

      const response = await axios.put(
        `http://localhost:5000/api/editTable/${id}`,
        data
      );
      console.log(response.data);
      return { id, data: response.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const deleteTableData = createAsyncThunk(
  "deleteTTableData",
  async (id: string, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/deleteTable/${id}`
      );

      return { id, data: response.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getBookingDetail = createAsyncThunk(
  "getBookingDetail",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getBookingDetail");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const editBookingDetail = createAsyncThunk(
  "editBookingDetail",
  async (
    { id, data, status }: { id?: string; data: BookedData; status: string },
    { rejectWithValue }
  ) => {
    console.log(id, data, status);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/editBookingDetail/${id}`,
        {
          ...data,
          status: status,
        }
      );

      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const deleteBooking = createAsyncThunk(
  "deleteBooking",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteBooking/${id}`
      );
      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
interface Category {
  category: string;
  image?: string;
}
interface Dishes {
  dishName: string;
  dishPrice: number;
  dishImage?: string;
  dishCategory: string;
  dishDiscription: string;
}
export interface TableData {
  _id: string;
  tableNum: string;
  tableCapacity: number;
  tableLocation?: string;
  tableStatus: string;
}
export interface BookedData {
  _id: string;
  bookingDate: string;
  bookingTime: string;
  email: string;
  fullName: string;
  location: string;
  members: number;
  phNo: string;
  tableNumber: string;
  createdAt: string;
  status: string;
}
interface CategoryState {
  loading: boolean;
  categoryDetail: Category[];
  dishesDetail: Dishes[];
  tableDetail: TableData[];
  error: string | null;
  bookingDetail: BookedData[];
}

const initialState: CategoryState = {
  loading: false,
  categoryDetail: [],
  dishesDetail: [],
  tableDetail: [],
  bookingDetail: [],
  error: null,
};
const itemSlice = createSlice({
  name: "item",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail = action.payload as Category[];
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.dishesDetail = action.payload.data as Dishes[];
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tableDetail.push(action.payload);
      })
      .addCase(addTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tableDetail = action.payload as TableData[];
      })
      .addCase(getTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editTableData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTableData.fulfilled, (state, action) => {
        state.loading = false;
        const { id, tableStatus, data } = action.payload;
        const table = state.tableDetail.find((e) => e._id === id);
        if (table) {
          if (tableStatus) {
            table.tableStatus = tableStatus;
          } else if (data) {
            Object.assign(table, data); // Directly update with full data
          }
        }
      })
      .addCase(editTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteTableData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTableData.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.tableDetail = state.tableDetail.filter((e) => e._id !== id);
        }
      })
      .addCase(deleteTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getBookingDetail.pending, (state) => {
        state.loading = false;
      })
      .addCase(getBookingDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingDetail = action.payload as BookedData[];
      })
      .addCase(getBookingDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.bookingDetail = state.bookingDetail.filter((e) => e._id !== id);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default itemSlice.reducer;
