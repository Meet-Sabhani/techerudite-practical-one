import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  count: 1,
};

// Create the slice
export const counterPersistSlice = createSlice({
  name: "persistCounter",
  initialState,
  reducers: {
    incrementPersist: (state) => {
      state.count += 1;
    },
    decrementPersist: (state) => {
      state.count -= 1;
    },
    resetPersist: (state) => {
      state.count = 1;
    },
    incrementByAmountPersist: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// Export actions
export const {
  incrementPersist,
  decrementPersist,
  resetPersist,
  incrementByAmountPersist,
} = counterPersistSlice.actions;

// Export reducer
export const counterPersistReducer = counterPersistSlice.reducer;
