import { createSlice } from '@reduxjs/toolkit';

const initializeSlice = createSlice({
  name: 'init',
  initialState: {
    initialized: false,
    errorInitialized: false,
  },
  reducers: {
    initialized: (state) => {
      state.initialized = true
      state.error = false
    },
    initializedFailure: (state) => {
      state.initialized = false
      state.errorInitialized = true
    },
  }
})

export const { initialized, initializedFailure } = initializeSlice.actions
export default initializeSlice.reducer