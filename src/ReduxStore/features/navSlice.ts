import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserState {
  toggleSidebar: Boolean;
  currentTab: number;
  currentInnerNav: number;
}

const initialState: UserState = {
  toggleSidebar: false,
  currentTab: 1,
  currentInnerNav: 1,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    SidebarToggle: (state, action) => {
      state.toggleSidebar = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setCurrentInnerNav: (state, action) => {
      state.currentInnerNav = action.payload;
    },
  },
});

export const { SidebarToggle, setCurrentTab, setCurrentInnerNav } =
  navSlice.actions;

// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNav = (state: RootState) => state.nav;

export default navSlice.reducer;
