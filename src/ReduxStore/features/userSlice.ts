import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserState {
  currentUser: null | object | string;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", action.payload);
    },
    removeUser: (state) => {
      localStorage.clear();
      state.currentUser = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
