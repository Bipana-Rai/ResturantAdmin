import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/items/itemSlice";
import notificationReducer from "../features/items/notificationSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
const persistConfig = {
  key: "root",
  storage,
};


const rootReducer = combineReducers({
    item: itemReducer,
    notification:notificationReducer,
  
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
