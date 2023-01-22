import { configureStore } from '@reduxjs/toolkit';

import cartsSlice from '../features/carts/cartsSlice';
import productsSlice from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        carts: cartsSlice
    }
})