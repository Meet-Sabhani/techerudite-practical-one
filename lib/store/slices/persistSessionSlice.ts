import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  count: 1,
};

// Create the slice
export const persistSessionSlice = createSlice({
  name: "persistSession",
  initialState,
  reducers: {
    incrementSession: (state) => {
      state.count += 1;
    },
    decrementSession: (state) => {
      state.count -= 1;
    },
    resetSession: (state) => {
      state.count = 1;
    },
    incrementByAmountSession: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// Export actions
export const {
  incrementSession,
  decrementSession,
  resetSession,
  incrementByAmountSession,
} = persistSessionSlice.actions;

// Export reducer
export const persistSessionReducer = persistSessionSlice.reducer;
