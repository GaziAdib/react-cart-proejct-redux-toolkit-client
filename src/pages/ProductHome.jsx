import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductHome = () => {

    const [products, setProducts] = useState([]);


    // useEffect work

    useEffect(() => {

        const fetchProducts = async () => {

            const res = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts?fbclid=IwAR29xEUFUgtKs7l67pr2KUa9Ra_nQjZJM455yziGAGqDej_gdbQxVAsYetA')

            const result = res.data

            setProducts(result);

        }

        fetchProducts()

    }, [])



    return (
        <div className='bg-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mx-4 py-5 px-3 my-2'>

            {products?.map((product) => {
                return <ProductCard key={product?.id} product={product} />
            })}


        </div>
    )
}

export default ProductHome