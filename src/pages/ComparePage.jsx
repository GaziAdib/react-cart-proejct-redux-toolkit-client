import React, { useEffect, useState } from 'react'
import { useFetchProductsQuery } from '../features/products/productsApi'
import axios from 'axios';


const ComparePage = () => {

    // get the product id and Title for for lopp selections

    const { data: products, isLoading, isError } = useFetchProductsQuery() || {};


    // select the selected product 
    const [selectedProduct1, setSelectedProduct1] = useState('');
    const [selectedProduct2, setSelectedProduct2] = useState('');

    // set state for selected Product info from api 
    const [selectedProductInfo1, setSelectedProductInfo1] = useState({});
    const [selectedProductInfo2, setSelectedProductInfo2] = useState({});


    // useEffect to get the selected product info from api 

    useEffect(() => {

        if (selectedProduct1) {
            const fetchData1 = async (selectedProduct1) => {
                const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct1}`)
                const data1 = res?.data;
                setSelectedProductInfo1(data1)
            }

            fetchData1(selectedProduct1)

        }

        if (selectedProduct2) {
            const fetchData2 = async (selectedProduct2) => {
                const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct2}`)
                const data2 = res?.data;
                setSelectedProductInfo2(data2)
            }

            fetchData2(selectedProduct2)
        }


    }, [selectedProduct1, selectedProduct2]);


    console.log(selectedProductInfo1)


    return (
        <>

            <div class="overflow-x-auto mt-1">
                <div className='bg-green-100 mx-auto py-2 px-2 rounded-sm shadow-sm flex justify-between'>
                    <div class="relative">
                        <select value={selectedProduct1} onChange={(e) => setSelectedProduct1(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>--- Select a Product 1 ---</option>
                            {products?.length > 0 && products?.filter((item) => item?._id !== selectedProduct2).map((product) => {
                                return <option value={product?._id} key={product?.id}>{product?.title}</option>
                            })}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.7071 8.29289C15.0976 7.90237 15.0976 7.2692 14.7071 6.87868C14.3166 6.48815 13.6834 6.48815 13.2929 6.87868L10 10.1716L6.70711 6.87868C6.31658 6.48815 5.68342 6.48815 5.29289 6.87868C4.90237 7.2692 4.90237 7.90237 5.29289 8.29289L9.29289 12.2929Z" />
                            </svg>
                        </div>
                    </div>


                    <div className='mx-auto my-auto'>
                        <h2 className='text-xl lg:text-3xl md:text-2xl text-center'>Compare Products</h2>
                    </div>

                    <div class="relative">
                        <select value={selectedProduct2} onChange={(e) => setSelectedProduct2(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>--- Select a Product 2 ---</option>
                            {products?.length > 0 && products?.filter((item) => item?._id !== selectedProduct1).map((product) => {
                                return <option value={product?._id} key={product?.id}>{product?.title}</option>
                            })}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.7071 8.29289C15.0976 7.90237 15.0976 7.2692 14.7071 6.87868C14.3166 6.48815 13.6834 6.48815 13.2929 6.87868L10 10.1716L6.70711 6.87868C6.31658 6.48815 5.68342 6.48815 5.29289 6.87868C4.90237 7.2692 4.90237 7.90237 5.29289 8.29289L9.29289 12.2929Z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className='container mt-4 py-4 mx-auto flex justify-between'>

                    <div className='left-image mx-4 px-2 h-[350px]'>
                        <img src={selectedProductInfo1?.image ? selectedProductInfo1?.image : 'https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-96220.jpg?w=996&t=st=1677775557~exp=1677776157~hmac=af1c441a5e339ab8385fd5128a8b7c01671c6b1cf1d22563a059d1b9d2ac331c'} alt="" className='h-[350px]' />
                    </div>

                    <div className='px-2 py-2 mx-auto my-auto'>
                        <h2 className='text-5xl py-auto font-serif font-extrabold text-green-600'>VS</h2>
                    </div>

                    <div className='right-image mx-4 px-2 h-[350px]'>
                        <img src={selectedProductInfo2?.image ? selectedProductInfo2?.image : 'https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-96220.jpg?w=996&t=st=1677775557~exp=1677776157~hmac=af1c441a5e339ab8385fd5128a8b7c01671c6b1cf1d22563a059d1b9d2ac331c'} alt="" className='h-[350px]' />
                    </div>

                </div>



                <table class="w-full divide-y divide-gray-200 mt-6 mx-2 px-2 shadow-lg">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">Feature</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">{selectedProductInfo1?.title ? selectedProductInfo1?.title : 'Product 1'}</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">{selectedProductInfo2?.title ? selectedProductInfo2?.title : 'Product 2'}</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${selectedProductInfo1?.price ? selectedProductInfo1?.price : 'price 1'}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${selectedProductInfo2?.price ? selectedProductInfo2?.price : 'price 2'}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Category</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{selectedProductInfo1?.category ? selectedProductInfo1?.category : 'category'}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{selectedProductInfo2?.category ? selectedProductInfo2?.category : 'category'}</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color Options</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Red, Blue, Green</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Black, White, Gray</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weight</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.5 lbs</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.0 lbs</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimensions</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12" x 8" x 2"</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10" x 6" x 3"</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Material</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aluminum</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Plastic</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warranty</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 year</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 years</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )

}

export default ComparePage









