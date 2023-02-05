import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addCart } from '../features/carts/cartsSlice';
import { useFetchSingleProductQuery } from '../features/products/productsApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToWishList } from '../features/wishlists/wishlistSlice';

const ProductDetailPage = () => {

    const { id } = useParams();

    const { data: product, isLoading, isError, isSuccess } = useFetchSingleProductQuery(id);

    const { cartsItems, cartsTotalAmount } = useSelector((state) => state?.carts);

    if (cartsItems?.length > 0) {
        console.log(cartsItems)
    }

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addToCartHandler = (product) => {
        console.log(product);
        dispatch(addCart({ product, qty: Number(qty) }));
        navigate('/carts');
    }

    const addToWishlistHandler = (product) => {
        dispatch(addToWishList(product));
        navigate('/wishlists');
    }


    return (
        <>
            <section className="w-11/12 md:w-4/5 h-screen m-auto flex items-center">

                <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
                    <div className="relative">
                        <img id='image' className="w-full h-full" src={product?.image} alt="product image" />
                        <div className='arrows w-full absolute inset-y-1/2 flex justify-between px-3'>
                            <button id='prev'><i className="fa-solid fa-chevron-left"></i></button>
                            <button id='next'><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>

                    <div className='space-y-5 p-5'>
                        <h4 className='text-xl font-semibold'>{product?.title}</h4>
                        <h1 className='text-3xl font-bold'>{product?.category}</h1>
                        <h2 className='text-xl font-bold'>${product?.price}</h2>
                        <p className='text-sm'>Description</p>
                        <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>

                    <div className='space-y-5'>
                        <input className='w-24 h-8 px-3 border border-gray-600 outline-0' min={1} value={qty} onChange={(e) => setQty(e.target.value)} type="number" id="amount" />

                        <div>
                            <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
                            <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
                            <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
                            <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
                        </div>

                    </div>

                    <div className="space-x-5 flex items-center">
                        <button onClick={() => addToWishlistHandler(product)} className="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md hover:bg-rose-400 hover:text-white">
                            <FontAwesomeIcon className="text-rose-400" icon={faHeart} />
                            <span>Favorites</span>
                        </button>
                        <button className="whitespace-pre bg-rose-400 px-5 py-2 rounded-md text-white hover:bg-white hover:border hover:border-gray-600 hover:text-black">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span onClick={() => addToCartHandler(product)}>Add to Cart</span>
                        </button>
                    </div>

                </div>

            </section>

        </>
    )
}

export default ProductDetailPage