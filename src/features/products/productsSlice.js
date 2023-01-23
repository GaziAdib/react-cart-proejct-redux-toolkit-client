import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // products: [
    //     { id: 1, image: "https://adminapi.applegadgetsbd.com/storage/media/large/3678-98878.jpg", title: 'Iphone 13 Pro', price: 999, category: 'electronics' },
    //     { id: 2, image: "https://static.gadgetandgear.com/tmp/product/20220423_1650687083_966562.png", title: 'Samsung S22 Ultra', price: 1200, category: 'electronics' },
    //     { id: 3, image: "https://www.mobiledokan.co/wp-content/uploads/2022/03/OnePlus-11-Green.jpg", title: 'One Plus 11', price: 799, category: 'electronics' }
    // ]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
// export const { } = productsSlice.actions

export default productsSlice.reducer