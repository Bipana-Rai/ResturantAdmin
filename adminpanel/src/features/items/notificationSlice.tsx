import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DineInNotification = {
  _id: string;
  table: string;
  cartItems: string;
  totalAmount: number;
  user: string;
  status: string;
};
type NotificationState = {
  notification: DineInNotification[];
  unreadCount: number;
};
const initialState: NotificationState = {
  notification: [],
  unreadCount: 0,
};
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<DineInNotification>) => {
      state.notification.unshift(action.payload);
      state.unreadCount += 1;
    },
    clearUnreadCount: (state) => {
      state.unreadCount = 0;
    },
  },
});
export const { addNotification, clearUnreadCount } = notificationSlice.actions;
export default notificationSlice.reducer;
