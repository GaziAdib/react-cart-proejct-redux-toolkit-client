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

            // let existsIndex = state.cartsItems.findIndex((item) => item._id === action.payload?._id);
            let eachCartproductIndex = state.cartsItems.findIndex((item) => item?.product?._id === action.payload?.product?._id);

            if (eachCartproductIndex >= 0) {
                state.cartsItems[eachCartproductIndex].qty += 1
            } else {
                // add to cart 
                // const assembledItem = { ...action.payload, qty: 1 }
                // state.cartsItems.push(assembledItem);

                // // localstorage add

                // localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

                // add to cart 
                let assembledItem;
                if (action.payload.qty > 1) {
                    assembledItem = { ...action.payload, qty: action.payload.qty }
                    console.log('action payload in detail', action.payload.qty)
                    state.cartsItems.push(assembledItem);
                }

                else if (action.payload.qty === 1) {
                    assembledItem = { ...action.payload, qty: 1 }
                    console.log('action payload', action.payload)
                    state.cartsItems.push(assembledItem);
                }
                // localstorage add

                localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }

        },

        removeCart: (state, action) => {
            console.log('delete action', action.payload)
            const updatedCartItems = state.cartsItems.filter((item) => item?.product?._id !== action.payload?.product?._id)

            state.cartsItems = updatedCartItems;

            // update localstorage ofcart after removing
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        },

        clearCart: (state, action) => {
            state.cartsItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));

        },

        calculateSubtotal: (state, action) => {

            const subTotal = state.cartsItems.reduce((acc, item) => acc + (item.product?.price * Number(item.qty)), 0);
            state.cartsTotalAmount = Number(subTotal);

            localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
        },

        increaseQty: (state, action) => {
            console.log('carts', JSON.stringify(state.cartsItems))
            let eachCartproductIndex = state.cartsItems.findIndex((item) => item?.product?._id === action.payload.cart?.product?._id);
            console.log('each index', eachCartproductIndex);

            //console.log('each Product Index', eachCartIndex);

            // console.log('item cartsItem', JSON.stringify(state.cartsItems[eachCartIndex].product))

            // const eachIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);
            if (eachCartproductIndex >= 0) {
                state.cartsItems[eachCartproductIndex].qty += 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }

            // console.log('inc state', action.payload)



        },
        decreaseQty: (state, action) => {
            let eachCartproductIndex = state.cartsItems.findIndex((item) => item?.product?._id === action.payload.cart?.product?._id);
            // const eachCartIndex = state.cartsItems.findIndex((item) => item?._id === action.payload?._id);

            if (eachCartproductIndex >= 0) {
                state.cartsItems[eachCartproductIndex].qty -= 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartsItems));
            }

            // if qty == 0 then cart remove for this item;

            if (state.cartsItems[eachCartproductIndex].qty === 0) {
                const filteredItems = state.cartsItems.filter((item) => item.product?._id !== state.cartsItems[eachCartproductIndex].product?._id);
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