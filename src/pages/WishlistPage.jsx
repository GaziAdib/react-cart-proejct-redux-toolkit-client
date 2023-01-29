import React from 'react'
import { useSelector } from 'react-redux';
import Wish from '../components/Wish'

const WishlistPage = () => {


    const { wishlistsItems } = useSelector((state) => state?.wishlists);

    console.log(wishlistsItems)


    return (
        <>
            <h1 className='text-4xl text-center my-4 py-5'>My Wishlists ❤️❤️❤️</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mx-4 py-5 px-3 my-2'>
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