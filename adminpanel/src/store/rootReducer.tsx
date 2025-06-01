import { combineReducers } from "@reduxjs/toolkit";
import itemReducer from "../features/items/itemSlice";
import notificationReducer from "../features/items/notificationSlice";
const rootReducer = combineReducers({
  item: itemReducer,
  notification: notificationReducer,
  
});

export default rootReducer;
