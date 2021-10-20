import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFatching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFatching = true
      state.error = false
    },
    loginSuccess: (state, action) => {
      state.isFatching = false
      state.error = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFatching = false
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
    },
  }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions
export default userSlice.reducer