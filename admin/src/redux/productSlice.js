import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFatching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFatching = true
      state.error = false
    },
    getProductSuccess: (state, action) => {
      state.isFatching = false
      state.error = false
      state.products = action.payload
    },
    getProductFailure: (state) => {
      state.isFatching = false
      state.error = true
    },
    //DELETE PRODUCT
    deleteProductStart: (state) => {
      state.isFatching = true
      state.error = false
    },
    deleteProductSuccess: (state, action) => {
      state.isFatching = false
      state.error = false
      state.products.splice(
        state.products.indexOf(item => item._id === action.payload.id), 1
      )
    },
    deleteProductFailure: (state) => {
      state.isFatching = false
      state.error = true
    },
    //UPDATE PRODUCT
    updateProductStart: (state) => {
      state.isFatching = true
      state.error = false
    },
    updateProductSuccess: (state, action) => {
      state.isFatching = false
      state.error = false
      state.products[
        state.products.indexOf(item => item._id === action.payload.id)] = action.payload.product
    },
    updateProductFailure: (state) => {
      state.isFatching = false
      state.error = true
    },
    //ADD PRODUCT
    addProductStart: (state) => {
      state.isFatching = true
      state.error = false
    },
    addProductSuccess: (state, action) => {
      state.isFatching = false
      state.error = false
      state.products.push(action.payload)
    },
    addProductFailure: (state) => {
      state.isFatching = false
      state.error = true
    },
  }
})

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } = productSlice.actions
export default productSlice.reducer