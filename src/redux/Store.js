import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/CartSlice'
// here all slices are listed
// ley of slice is its name and its value will be the slice
export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
});