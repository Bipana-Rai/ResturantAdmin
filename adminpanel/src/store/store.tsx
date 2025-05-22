import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/items/itemSlice";
import notificationReducer from "../features/items/notificationSlice"

export const store = configureStore({
  reducer: {
    item: itemReducer,
    notification:notificationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
