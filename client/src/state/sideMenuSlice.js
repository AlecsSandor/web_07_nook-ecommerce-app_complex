import { createSlice } from '@reduxjs/toolkit'

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState: {
    isSideMenuOpen: false,
    isCart: '',
    cartItems: []
  },
  reducers: {
    setIsSideMenuOpen: (state, action) => {
      state.isSideMenuOpen = !state.isSideMenuOpen
    },

    setIsCart: (state, action) => {
      state.isCart = action.payload.source
    },

    addCartItems: (state, action) => {
      const isItemInCart = state.cartItems.some(item => item.id === action.payload.id)
      !isItemInCart && (
        state.cartItems = [...state.cartItems ,action.payload] 
      )
    },

    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },

    increaseCount: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.count++
        }
      })
    },

    decreaseCount: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload && item.count > 1) {
          item.count--
        }
      })
    },

    clearCart: (state, action) => {
      state.cartItems.length = 0
    }
  },
})

export const { setIsSideMenuOpen, setIsCart, addCartItems, removeCartItems, increaseCount, decreaseCount, clearCart } = sideMenuSlice.actions

export default sideMenuSlice.reducer

