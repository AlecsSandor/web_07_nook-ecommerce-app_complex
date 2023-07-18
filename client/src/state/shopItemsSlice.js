import { createSlice } from '@reduxjs/toolkit'

export const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState: {
    items: [],
    currency: '£'
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
      
    },
    setCurrency: (state, action) => {
      state.currency = action.payload
      
    },
  },
})

export const { setItems, setCurrency } = shopItemsSlice.actions

export default shopItemsSlice.reducer
