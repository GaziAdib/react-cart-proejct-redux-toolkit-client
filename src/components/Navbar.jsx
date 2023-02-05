import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


const Navbar = () => {

    // working with theme switcher in navbar
    // we need useEffect, useState, theme state,

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : ''
    );

    const element = document.documentElement;

    // useEffect to switch dark and light in page reload

    useEffect(() => {

        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;

            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.removeItem('theme');
                break;
        }

    }, [theme])

    const switchTheme = (theme) => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log('theme', theme);
    }




    const expand = (e) => {
        const menu = document.getElementById('menuId');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex-col');
        menu.classList.toggle('mx-auto')


    }
    return (
        <nav className="items-center shadow-lg flex justify-between px-4 py-4 mx-auto bg-slate-100 dark:bg-gray-900">
            <div>
                <Link to='/'>
                    <img
                        className="h-10"
                        src="https://pbs.twimg.com/profile_images/1512718687043792904/m2hhBYOs_400x400.jpg"
                        alt="Gazi Adib"
                    />
                </Link>
            </div>

            <div className='items-center text-center mx-auto my-2 text-3xl text-slate-600 font-semibold dark:text-gray-100'>
                Cart Redux Project
            </div>

            <button type='button' onClick={() => switchTheme(theme)} className='bg-rose-400 rounded-full px-2 py-2 mx-2 my-2 hover:bg-rose-700 text-white'>ToggleTheme</button>

            <div id='menuId' className="hidden items-center mx-5 my-1 text-black space-x-8 lg:flex dark:text-white">
                <Link to={'/'}>Home</Link>
                <Link to={'/addProduct'}>AddProducts</Link>
                <Link to={'/carts'}>Cart</Link>
                <Link to={'/wishlists'}>WishList</Link>
            </div>
            <div className="flex lg:hidden dark:text-white">
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