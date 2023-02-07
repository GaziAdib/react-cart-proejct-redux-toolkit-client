import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../features/products/productsApi';

const AddProduct = () => {


    const navigate = useNavigate();

    const [addProduct, { isLoading, isError, error }] = useAddProductMutation() || {};

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {

        e.preventDefault();

        addProduct({
            image,
            title,
            category,
            price
        })

        navigate('/')

    }



    return (
        <div className="bg-white w-full h-screen py-10 px-5 dark:bg-gray-800">

            <div className="text-3xl my-5 py-3 text-center dark:text-gray-200">
                Add Products To Your Liking ❤️
            </div>

            <form onSubmit={submitHandler}>
                <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

                    <div className="col-span-2 lg:col-span-3">
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border-solid border-slate-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg" required placeholder="Product Image URL" />
                    </div>

                    <div className="col-span-2 lg:col-span-3">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-solid border-slate-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg" required placeholder="Title" />
                    </div>

                    <div className="col-span-2 lg:col-span-3">
                        <input type="number" value={price} min={0} onChange={(e) => setPrice(e.target.value)} className="border-solid border-slate-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg" required placeholder="Price" />
                    </div>

                    <div className="col-span-2 lg:col-span-3">
                        <select value={category} required onChange={(e) => setCategory(e.target.value)} className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">
                            <option value="smartphones">Smartphone</option>
                            <option value="computer">Computer</option>
                            <option value="tv">Tv</option>
                            <option value="speakers">Speakers</option>
                        </select>
                    </div>

                    <div className="col-span-2 text-right">
                        <button className="rounded-lg py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                            Add Product
                        </button>
                    </div>

                </div>
            </form>
            <div className="flex items-center justify-between">
                {/* {!isLoading && error && <Error message={error} />} */}
            </div>
        </div>
    )
}

export default AddProduct

