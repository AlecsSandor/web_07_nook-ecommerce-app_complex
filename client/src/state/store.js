import { configureStore } from '@reduxjs/toolkit'
import sideMenuReducer from './sideMenuSlice'
import shopItemsReducer from './shopItemsSlice'

const persistedState = sessionStorage.getItem('reduxState');
const preloadedState = persistedState ? JSON.parse(persistedState) : {};

const store = configureStore({
  reducer: 
    { 
      sideMenu: sideMenuReducer,
      shopItems: shopItemsReducer
    },
    preloadedState

})

store.subscribe(() => {
  const state = store.getState()
  sessionStorage.setItem('reduxState', JSON.stringify(state))
})

export default store
