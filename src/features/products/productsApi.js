import { rootApi } from "../api/rootApi";

export const productsApi = rootApi.injectEndpoints({

    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () => '/allProducts'
        }),

        // create Video
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/addProduct',
                method: 'POST',
                body: data
            }),

            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data: createdProduct } = await queryFulfilled;

                    dispatch(
                        rootApi.util.updateQueryData('fetchProducts', undefined, (draft) => {
                            draft?.push(createdProduct);
                        })
                    )

                } catch (error) {
                    console.log(error);
                }
            }
        }),

        fetchSingleProduct: builder.query({
            query: (id) => `/product/${id}`,
        }),
    })

})

export const { useFetchProductsQuery, useAddProductMutation, useFetchSingleProductQuery } = productsApi