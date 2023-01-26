import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartsTotalAmount: 0,
    cartTotalQuantity: 0
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {

        addCart: (state, action) => {

            // if exists increase qty

            let existsIndex = state.cartsItems.findIndex((item) => item._id === action.payload._id);

            if (existsIndex >= 0) {
                state.cartsItems[existsIndex].qty += 1
            } else {
                // add to cart 
                const assembledItem = { ...action.payload, qty: 1 }
                state.cartsItems.push(assembledItem);

                // localstorage add

                localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }

        },

        removeCart: (state, action) => {
            const updatedCartItems = state.cartsItems.filter((item) => item._id !== action.payload._id)

            state.cartsItems = updatedCartItems;

            // update localstorage ofcart after removing
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        },

        clearCart: (state, action) => {
            state.cartsItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        },

        calculateSubtotal: (state, action) => {
            const subTotal = state.cartsItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
            state.cartsTotalAmount = subTotal;

            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        },

        increaseQty: (state, action) => {
            const eachCartIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);

            state.cartsItems[eachCartIndex].qty += 1

            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        },
        decreaseQty: (state, action) => {
            const eachCartIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);

            state.cartsItems[eachCartIndex].qty -= 1

            // if qty == 0 then cart remove for this item;

            if (state.cartsItems[eachCartIndex].qty === 0) {
                const filteredItems = state.cartsItems.filter((item) => item._id !== state.cartsItems[eachCartIndex]._id);
                state.cartsItems = filteredItems;
            }


            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        }

    },
})

// Action creators are generated for each case reducer function
// export const { } = cartsSlice.actions

export const { addCart, increaseQty, decreaseQty, removeCart, clearCart, calculateSubtotal } = cartsSlice.actions

export default cartsSlice.reducer