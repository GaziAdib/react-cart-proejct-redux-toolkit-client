import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistsItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
}

export const wishlistsSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            let eachWishproductIndex = state.wishlistsItems.findIndex((item) => item?._id === action.payload?._id);

            if (eachWishproductIndex >= 0) {
                alert('You cannot add this to wishlists anymore it is married!');
            } else {
                let assembledItem;
                assembledItem = { ...action.payload }
                state.wishlistsItems.push(assembledItem);
                localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems));
            }
        }
    },
})

// Action creators are generated for each case reducer function
// export const { } = cartsSlice.actions

export const { addToWishList } = wishlistsSlice.actions

export default wishlistsSlice.reducer