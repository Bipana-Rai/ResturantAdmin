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
      console.log(response.data)
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
interface Category {
  category: string;
  image?: string;
}
interface Dishes {
  dishName: string;
  dishPrice: number;
  dishImage?: string;
  dishCategory:string;
  dishDiscription:string
}
interface CategoryState {
  loading: boolean;
  categoryDetail: Category[];
  dishesDetail: Dishes[];
  error: string | null;
}
const initialState: CategoryState = {
  loading: false,
  categoryDetail: [],
  dishesDetail: [],
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
        state.dishesDetail=(action.payload.data) as Dishes[];
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});
export default itemSlice.reducer;
