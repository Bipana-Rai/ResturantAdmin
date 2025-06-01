import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type AppAxiosError = AxiosError<{ message: string }>;
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
        console.log(updatedStatus);
        const response = await axios.put(
          `http://localhost:5000/api/updateStatus/${id}`,
          { ...(updatedStatus && { tableStatus: updatedStatus }) }
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
export const getDineIn = createAsyncThunk(
  "getDineIn",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getDineIn");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getTakeAway = createAsyncThunk(
  "getTakeAway",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getTakeAway");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const updateDineInStatus = createAsyncThunk(
  "updateDineInStatus ",
  async (
    { id, status }: { id?: string; status?: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/updateDineInStatus/${id}`,
        {
          foodStatus: status,
        }
      );

      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const updateTakeAwayStatus = createAsyncThunk(
  "updateTakeAwayStatus ",
  async (
    { id, status }: { id?: string; status?: string },

    { rejectWithValue }
  ) => {
    console.log("ii", id, status);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/updateTakeAwayStatus/${id}`,
        {
          foodStatus: status,
        }
      );

      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const authorizeUser = createAsyncThunk(
  "authorizeUser",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/verify",
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const deleteDineInReceit = createAsyncThunk(
  "deleteDineReceit",
  async ({ id }: { id?: string }, { rejectWithValue }) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteDineReceit/${id}`
      );
      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const deleteTakeawayReceit = createAsyncThunk(
  "deleteTakeawayReceit",
  async ({ id }: { id?: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteTakeawayReceit/${id}`
      );
      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const signupDetail = createAsyncThunk(
  "signupDetail",
  async (data: { data: signupData }, { rejectWithValue }) => {
    const finaldata = data.data;
    console.log("slice", finaldata);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/signupData`,
        finaldata
      );

      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const loginData = createAsyncThunk(
  "loginData",
  async ({ data }: { data: formdata }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/loginData",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("token", res.data);
      return res.data;
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
export interface signupData {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  role: string;
}
export interface formdata {
  email: string;
  password: string;
}
interface Dishes {
  dishName: string;
  dishPrice: number;
  dishImage?: string;
  dishCategory: string;
  dishDiscription: string;
}
export interface cartItems {
  _id: string;
  dishName: string;
  dishCategory: string;
  dishPrice: number;
  dishImage?: string;
  added: boolean;
  quantity: number;
}
export interface orderData {
  _id?: string;
  tableNumber: string;
  cartItems: cartItems[];
  totalAmount: number;
  status: string;
  foodStatus?: string;
  user?: string;
  createdAt: string;
  orderId: string;
  takeAwayStatus: string;
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
interface userInfo {
  _id: string;
  email: string;
  fullName: string;
  phone: string;
  role: string;
}
interface CategoryState {
  loading: boolean;
  categoryDetail: Category[];
  dishesDetail: Dishes[];
  tableDetail: TableData[];
  orderDetail: orderData[];
  error: string | null;
  bookingDetail: BookedData[];
  user: userInfo | null;
  takeawayOrder: orderData[];

}

const initialState: CategoryState = {
  loading: false,
  categoryDetail: [],
  dishesDetail: [],
  tableDetail: [],
  bookingDetail: [],
  orderDetail: [],
  takeawayOrder: [],
  user: null,
  error: null,
};
const itemSlice = createSlice({
  name: "item",
  initialState,

  reducers: {
    logoutUser: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
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
      })
      .addCase(getDineIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDineIn.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetail = action.payload as orderData[];
      })
      .addCase(getDineIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getTakeAway.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTakeAway.fulfilled, (state, action) => {
        state.loading = false;
        state.takeawayOrder = action.payload as orderData[];
      })
      .addCase(getTakeAway.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateDineInStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { id, data } = action.payload;
        const index = state.orderDetail.findIndex((order) => order._id === id);
        if (index !== -1) {
          state.orderDetail[index].foodStatus = data.foodStatus;
        }
      })
      .addCase(updateTakeAwayStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { id, data } = action.payload;
        const index = state.orderDetail.findIndex((order) => order._id === id);
        if (index !== -1) {
          state.takeawayOrder[index].foodStatus = data.foodStatus;
        }
      })
      .addCase(deleteDineInReceit.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.orderDetail = state.orderDetail.filter((e) => e._id !== id);
      })
         .addCase(deleteTakeawayReceit.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.takeawayOrder = state.takeawayOrder.filter((e) => e._id !== id);
      });
  },
});
export const { logoutUser } = itemSlice.actions;
export default itemSlice.reducer;
