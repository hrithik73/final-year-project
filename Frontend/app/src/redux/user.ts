import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  loggedIn: boolean;
}

const initialState: CounterState = {
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
