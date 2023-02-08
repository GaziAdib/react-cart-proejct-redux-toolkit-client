import React from 'react'
import { useSelector } from 'react-redux';
import Wish from '../components/Wish'

const WishlistPage = () => {


    const { wishlistsItems } = useSelector((state) => state?.wishlists);

    console.log(wishlistsItems)


    return (
        <>
            <h1 className='text-4xl text-center py-5 dark:bg-gray-800 dark:text-gray-200'>My Wishlists ❤️❤️❤️</h1>

            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center dark:bg-gray-800'>
                {
                    wishlistsItems?.map((wishlist) => {
                        return <Wish key={wishlist?._id} wishlist={wishlist} />
                    })
                }
            </div>

        </>
    )
}

export default WishlistPage