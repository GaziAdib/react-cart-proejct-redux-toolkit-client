import React from 'react'

import { useSelector } from 'react-redux'
import Product from '../components/Product';

const HomePage = () => {

    const { products } = useSelector((state) => state.products);

    console.log(products);


    return (
        <>
            <h1 className='text-4xl text-center my-4 py-5'>All Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mx-4 py-5 px-3 my-2'>
                {
                    products?.map((product) => {
                        return <Product key={product?.id} product={product} />
                    })
                }
            </div>

            <br />




        </>
    )
}

export default HomePage