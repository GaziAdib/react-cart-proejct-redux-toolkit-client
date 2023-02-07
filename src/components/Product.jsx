import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCart } from '../features/carts/cartsSlice';
import { addToWishList } from '../features/wishlists/wishlistSlice';
import stringSlicer from '../utils/stringSlicer';

import StarIcon from '../assets/images/star.svg';
import HeartIcon from '../assets/images/love.svg';
import EyeIcon from '../assets/images/eye.svg';

const Product = ({ product }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { _id, image, title, price, category } = product || {};

    const addToCart = (product) => {
        dispatch(addCart({ product, qty: Number(1) }))
        navigate('/carts');
    }

    const addToWishHandler = (product) => {
        dispatch(addToWishList(product))
        navigate('/wishlists');
    }

    return (

        // <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-2">
        //     <a href="#">
        //         <img className="rounded-t-lg" src={image} alt="" />
        //     </a>
        //     <div className="p-5">
        //         <a href="#">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stringSlicer(title, 30)}</h5>
        //         </a>
        //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{price}</h5>
        //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white"><b>{category}</b></h5>
        //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //         <button onClick={() => addToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //             Add To Cart
        //             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button>

        //         <button onClick={() => addToWishHandler(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-400 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none">
        //             Add To Wish
        //             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button>

        //         <Link to={`/product/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //             Details
        //             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </Link>
        //     </div>
        // </div>

        <div className="text-gray-700 dark:bg-gray-900 items-center w-full md:w-4/5 lg:w-4/5 min-h-[10rem] shadow-lg rounded-md overflow-hidden">

            <img className="w-full h-full object-cover" src={image} alt={title} />

            <div className="p-5 flex flex-col gap-3">

                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-200 dark:bg-purple-200">Stock Ready</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-green-200 dark:bg-purple-200">{category}</span>
                </div>


                {/* Product Title */}

                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-gray-200">
                    {title}
                </h2>


                {/* Product Price section */}
                <div>
                    <span className='text-xl font-bold dark:text-gray-200'>
                        $ {price}
                    </span>

                    <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm line-through opacity-50 dark:text-gray-200'>
                            $ {price}
                        </span>

                        <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
                            save 20%
                        </span>
                    </div>

                </div>


                {/* product Rating */}

                <span className='flex items-center mt-1'>

                    <img src={StarIcon} alt="staricon" />
                    <img src={StarIcon} alt="staricon" />
                    <img src={StarIcon} alt="staricon" />
                    <img src={StarIcon} alt="staricon" />
                    <img src={StarIcon} alt="staricon" />

                    <span className='text-xs ml-2 text-gray-500 dark:text-gray-200'>
                        20k Views
                    </span>

                </span>


                {/* Product Action Button like Cart Wishlist View */}


                <div className='mt-5 flex gap-2'>

                    <button onClick={() => addToCart(product)} className='bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition dark:bg-rose-600'>
                        Add To Cart
                    </button>

                    <button onClick={() => addToWishHandler(product)} className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md dark:bg-rose-300'>
                        <img
                            className='opacity-50'
                            src={HeartIcon}
                            alt="add to wishlist" />
                    </button>

                    <Link to={`/product/${_id}`} className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md dark:bg-gray-200'>
                        <img
                            className='opacity-50'
                            src={EyeIcon}
                            alt="add to wishlist" />
                    </Link>

                </div>




            </div>

        </div>

    )
}

export default Product