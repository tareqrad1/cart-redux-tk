import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.cart.find((product) => product.id === action.payload.id) // هل جوا الكارت موجود الاشي الي ضغطنا عليه ام لا
            console.log(findProduct);
            if(findProduct) {
                findProduct.quantity += 1; // لو لقاه من قبل ضيف عليه واحد وبس 
            }else { //بحاله الاندفيند بجي هان
                const productClone = {...action.payload, quantity: 1}; // لو مش موجود حطلي الفاليو كامله وخزن واحد 
                state.cart.push(productClone); // ضفنا على الكارت الاري الاوبجكت بداخله الكونتتي
            }
        },
        removeFromCart: (state, action) => {
            state.cart.shift(action.payload)
            // return state.cart.filter((product) => product.id !== action.payload)
            // return x
        },
        clearAllCart: (state) => {
            state.cart = [];
        },
        decrement: (state, action) => {
            const findProduct = state.cart.find((product) => product.id === action.payload.id)
            if(findProduct) {
                if(findProduct.quantity > 1 ) {
                    findProduct.quantity -= 1
                }
            }else {
                const productClone = {...action.payload}
                state.cart.push(productClone)
            }
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearAllCart, decrement } = cartSlice.actions;