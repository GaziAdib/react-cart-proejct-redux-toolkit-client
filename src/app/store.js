import { configureStore } from '@reduxjs/toolkit';

import cartsSlice from '../features/carts/cartsSlice';
import { productsApi } from '../features/products/productsApi';
import productsSlice from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products: productsSlice,
        carts: cartsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})