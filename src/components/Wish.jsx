import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCart } from '../features/carts/cartsSlice';
import { removeWishlist } from '../features/wishlists/wishlistSlice';
import stringSlicer from '../utils/stringSlicer';

const Wish = ({ wishlist }) => {

    const { _id, image, title, price, category } = wishlist;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // remove wish item
    const removeWishlishHandler = (wishlist) => {
        dispatch(removeWishlist(wishlist));
    }

    // add to cart in wish page
    const addToCartHandler = (product) => {
        dispatch(addCart({ product, qty: Number(1) }));
        navigate('/carts');
    }

    return (

        <Link to={`/product/${_id}`} class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-gray-900 ">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {price}</h4>
                <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">{category}</p>
                <div className='flex flex-row  items-center py-1'>
                    <span className='text-white bg-rose-600 hover:bg-rose-800 rounded-lg mx-2 px-2 md:whitespace-pre'>Add To Cart</span>
                    <span className='dark:text-rose-600'>X</span>
                </div>
            </div>

        </Link>

    )
}

export default Wish

{/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */}



// <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-2">
//             <a href="#">
//                 <img className="rounded-t-lg" src={image} alt="" />
//             </a>
//             <div className="p-5">
//                 <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{stringSlicer(title, 30)}</h5>
//                 </a>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{price}</h5>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white"><b>{category}</b></h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

//                 <button onClick={() => addToCartHandler(wishlist)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Add To Cart
//                     <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </button>

//                 <button onClick={() => removeWishlishHandler(wishlist)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Remove
//                     <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </button>

//                 <Link to={`/product/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     View
//                     <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </Link>
//             </div>
//         </div>