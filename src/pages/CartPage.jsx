import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart'
import { calculateSubtotal, clearCart } from '../features/carts/cartsSlice';

const CartPage = () => {

    const { cartsItems, cartsTotalAmount } = useSelector((state) => state?.carts);

    if (cartsItems?.length > 0) {
        console.log(cartsItems)
    }

    // dark root page

    // const element = document.getElementById('root');

    // useEffect(() => {
    //     element.classList.add('dark');
    // }, [element])

    console.log('cartTotalAmount', cartsTotalAmount)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateSubtotal())
    }, [cartsItems])

    // clear cart handler

    const clearCartHandler = () => {
        dispatch(clearCart());
    }


    return (

        <div className="container mx-auto mt-10 dark:bg-gray-900">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10 dark:bg-gray-900">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl dark:text-white">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl dark:text-white">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5 px-3 py-3">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 dark:text-white">Product Details</h3>
                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Quantity</h3>
                        <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Price</h3>
                        {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Total</h3> */}
                    </div>


                    {
                        cartsItems?.map((cart) => {
                            return <Cart key={cart._id} cart={cart} />
                        })
                    }


                    <button onClick={clearCartHandler} className="mx-2 my-2 px-2 py-2 bg-rose-600 text-white rounded-full shadow-sm hover:bg-red-800">{cartsItems?.length === 0 ? 'No Items Left' : 'Clear Cart'}</button>


                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </a>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8 dark:text-white">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase dark:text-white">Items 3</span>
                        <span className="font-semibold text-sm dark:text-white">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase dark:text-white">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm dark:text-white">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase dark:text-white">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase dark:text-white">
                            <span>Total cost</span>
                            <span>${Number(cartsTotalAmount)}</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default CartPage