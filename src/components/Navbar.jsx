import React from 'react'

import { Link } from 'react-router-dom';


const Navbar = () => {

    const expand = (e) => {
        const menu = document.getElementById('menuId');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('mx-auto')


    }
    return (
        <nav className="items-center shadow-lg flex justify-between px-4 py-4 mx-auto bg-slate-100 shadow-md">
            <div>
                <Link to='/'>
                    <img
                        className="h-10"
                        src="https://pbs.twimg.com/profile_images/1512718687043792904/m2hhBYOs_400x400.jpg"
                        alt="Gazi Adib"
                    />
                </Link>
            </div>

            <div className='items-center text-center mx-auto my-2 text-3xl text-slate-600 font-semibold'>
                Cart Redux Project
            </div>

            <div id='menuId' className="hidden items-center mx-5 my-1 text-black space-x-8 lg:flex">
                <Link to={'/'}>Home</Link>
                <Link to={'/addProduct'}>AddProducts</Link>
                <Link to={'/carts'}>Cart</Link>
                <Link to={'/wishlists'}>WishList</Link>
            </div>
            <div className="flex lg:hidden">
                <svg
                    onClick={expand}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </nav >
    )
}

export default Navbar