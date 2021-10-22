import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const index = state.products.findIndex(prod => prod._id === action.payload._id);
      if (index >= 0) {
        state.products[index].quantity += 1
      } else {
        state.products.push(action.payload)
        state.quantity += 1
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteAllCart: () => initialState
  }
})

export const { addProductToCart, deleteAllCart } = cartSlice.actions
export default cartSlice.reducer