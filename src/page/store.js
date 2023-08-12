import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../featchers/fetchData';
import cartReducer from '../featchers/cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

export default store;