import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.cart.find((product) => product.id === action.payload.id)
            console.log(findProduct);
            if(!findProduct) { //if not found 
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart.shift(action.payload)
            // return state.cart.filter((product) => product.id !== action.payload)
        },
        clearAllCart: (state) => {
            state.cart = [];
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearAllCart } = cartSlice.actions;