import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import navReducer from "../features/navSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    nav: navReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
