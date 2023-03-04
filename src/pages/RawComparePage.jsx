import React from 'react'

const RawComparePage = () => {
    return (
        <>

            <div class="overflow-x-auto mt-10">
                <div className='bg-green-100 mx-auto py-2 px-2 rounded-sm shadow-sm flex justify-between'>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.7071 8.29289C15.0976 7.90237 15.0976 7.2692 14.7071 6.87868C14.3166 6.48815 13.6834 6.48815 13.2929 6.87868L10 10.1716L6.70711 6.87868C6.31658 6.48815 5.68342 6.48815 5.29289 6.87868C4.90237 7.2692 4.90237 7.90237 5.29289 8.29289L9.29289 12.2929Z" />
                            </svg>
                        </div>
                    </div>


                    <div className='mx-auto my-auto'>
                        Compare Our Products
                    </div>

                    <div class="relative">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.7071 8.29289C15.0976 7.90237 15.0976 7.2692 14.7071 6.87868C14.3166 6.48815 13.6834 6.48815 13.2929 6.87868L10 10.1716L6.70711 6.87868C6.31658 6.48815 5.68342 6.48815 5.29289 6.87868C4.90237 7.2692 4.90237 7.90237 5.29289 8.29289L9.29289 12.2929Z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className='container mt-4 py-4 mx-auto flex justify-between'>

                    <div className='left-image mx-4 px-2'>
                        <img src="https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-96220.jpg?w=996&t=st=1677775557~exp=1677776157~hmac=af1c441a5e339ab8385fd5128a8b7c01671c6b1cf1d22563a059d1b9d2ac331c" alt="" height='200px' width="300px" />
                    </div>

                    <div className='mx-auto my-auto px-2 py-2'>
                        <h2 className='font-bold text-4xl py-5'>VS</h2>
                    </div>

                    <div className='right-image mx-4 px-2'>
                        <img src="https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-96220.jpg?w=996&t=st=1677775557~exp=1677776157~hmac=af1c441a5e339ab8385fd5128a8b7c01671c6b1cf1d22563a059d1b9d2ac331c" alt="" height='200px' width="300px" />
                    </div>

                </div>



                <table class="w-full divide-y divide-gray-200 mt-10">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product A</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product B</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$49.99</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$59.99</td>
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

export default RawComparePage




// import React, { useEffect, useState } from 'react'
// import { useFetchProductsQuery } from '../features/products/productsApi'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ComparePage = () => {

//     // get the product id and Title for for lopp selections

//     const { data: products, isLoading, isError } = useFetchProductsQuery() || {};


//     const [selectedProduct1, setSelectedProduct1] = useState('');
//     const [selectedProduct2, setSelectedProduct2] = useState('');

//     const [selectedProductInfo1, setSelectedProductInfo1] = useState({});
//     const [selectedProductInfo2, setSelectedProductInfo2] = useState({});



//     useEffect(() => {

//         if (selectedProduct1) {
//             const fetchData1 = async (selectedProduct1) => {
//                 const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct1}`)
//                 const data1 = res?.data;
//                 setSelectedProductInfo1(data1)
//             }

//             fetchData1(selectedProduct1)

//         }

//         if (selectedProduct2) {
//             const fetchData2 = async (selectedProduct2) => {
//                 const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct2}`)
//                 const data2 = res?.data;
//                 setSelectedProductInfo2(data2)
//             }

//             fetchData2(selectedProduct2)
//         }


//     }, [selectedProduct1, selectedProduct2]);


//     console.log(selectedProductInfo1)


//     return (
//         <>

//             <h2>Product Comparison Table V2</h2>
//             <div class="zui-wrapper">
//                 <div class="instruction">
//                     <em><i class="fas fa-arrows-alt-h"></i> Swipe for more products</em>
//                 </div>
//                 <div id="container" class="zui-scroller">
//                     <div className='bg-blue-400 mx-auto px-4 py-4 rounded-md shadow-md'>
//                         <h2>Compare Products</h2>

//                         <div className='flex justify-between'>
//                             <div className="">
//                                 <select onChange={(e) => setSelectedProduct1(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">
//                                     {
//                                         products?.length > 0 && products?.filter((item) => item?._id !== selectedProduct2).map((product) => {
//                                             return <option key={product?._id} value={product?._id}>{product?.title}</option>
//                                         })
//                                     }
//                                 </select>
//                             </div>

//                             <div className="">
//                                 <select onChange={(e) => setSelectedProduct2(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">

//                                     {
//                                         products?.length > 0 && products?.filter((item) => item?._id !== selectedProduct1).map((product) => {
//                                             return <option key={product?._id} value={product?._id}>{product?.title}</option>
//                                         })
//                                     }


//                                 </select>
//                             </div>
//                         </div>

//                     </div>
//                     <table class="zui-table">
//                         <thead>
//                             <tr>
//                                 <th class="zui-sticky-col">&nbsp;</th>
//                                 <th id="product-col" class="table-col">
//                                     <img class="product-img mx-auto py-3" src={selectedProductInfo1?.image ? selectedProductInfo1?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
//                                     <h5>
//                                         <Link to={`/product/${selectedProductInfo1?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC
//                                             <span>&#187;</span>
//                                         </Link>
//                                     </h5>
//                                 </th>
//                                 <th class="table-col">
//                                     <img class="product-img mx-auto py-3" src={selectedProductInfo2?.image ? selectedProductInfo2?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
//                                     <h5>
//                                         <Link to={`/product/${selectedProductInfo2?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC 48
//                                             <span>&#187;</span>
//                                         </Link>
//                                     </h5>
//                                 </th>


//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td class="zui-sticky-col">Product Title</td>
//                                 <td><strong>Title :{selectedProductInfo1?.title}</strong></td>
//                                 <td><strong>Title : {selectedProductInfo2?.title}</strong></td>
//                             </tr>
//                             <tr>
//                                 <td class="zui-sticky-col zui-stripe-row">Product Price</td>
//                                 <td>price: {selectedProductInfo1?.price}</td>
//                                 <td>price: {selectedProductInfo2?.price}</td>
//                             </tr>



//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </>
//     )

// }

// export default ComparePage












// import React, { useEffect, useState } from 'react'
// import { useFetchProductsQuery } from '../features/products/productsApi'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ComparePage = () => {

//     // get the product id and Title for for lopp selections

//     const { data: products, isLoading, isError } = useFetchProductsQuery() || {};


//     const [selectedProduct1, setSelectedProduct1] = useState('');
//     const [selectedProduct2, setSelectedProduct2] = useState('');

//     const [selectedProductInfo1, setSelectedProductInfo1] = useState({});
//     const [selectedProductInfo2, setSelectedProductInfo2] = useState({});



//     useEffect(() => {

//         if (selectedProduct1) {
//             const fetchData1 = async (selectedProduct1) => {
//                 const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct1}`)
//                 const data1 = res?.data;
//                 setSelectedProductInfo1(data1)
//             }

//             fetchData1(selectedProduct1)

//         }

//         if (selectedProduct2) {
//             const fetchData2 = async (selectedProduct2) => {
//                 const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct2}`)
//                 const data2 = res?.data;
//                 setSelectedProductInfo2(data2)
//             }

//             fetchData2(selectedProduct2)
//         }


//     }, [selectedProduct1, selectedProduct2]);


//     console.log(selectedProductInfo1)





//     // if (selectedProduct1) {
//     //     console.log('selected', selectedProduct1)

//     //     // get the selected product data

//     //     const fetchData = async () => {
//     //         const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct1}`)
//     //         const data = res?.data;
//     //         setSelectedProductInfo1(data)
//     //     }

//     //     fetchData();



//     // }



//     // if (selectedProduct2) {
//     //     console.log('selected', selectedProduct2)

//     //     const fetchData = async () => {
//     //         const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct2}`)
//     //         const data = res?.data;
//     //         setSelectedProductInfo2(data)
//     //     }

//     //     fetchData()

//     //     console.log('info2', selectedProductInfo2)

//     // }


//     // useEffect(() => {
//     //     fetchData()
//     // },[])



//     return (
//         <>

//             <h2>Product Comparison Table V2</h2>
//             <div class="zui-wrapper">
//                 <div class="instruction">
//                     <em><i class="fas fa-arrows-alt-h"></i> Swipe for more products</em>
//                 </div>
//                 <div id="container" class="zui-scroller">
//                     <div className='bg-blue-400 mx-auto px-4 py-4 rounded-md shadow-md'>
//                         <h2>Compare Products</h2>

//                         <div className='flex justify-between'>
//                             <div className="">
//                                 <select onChange={(e) => setSelectedProduct1(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">
//                                     {
//                                         products?.length > 0 && products?.map((product) => {
//                                             return <option key={product?._id} value={product?._id}>{product?.title}</option>
//                                         })
//                                     }
//                                 </select>
//                             </div>

//                             <div className="">
//                                 <select onChange={(e) => setSelectedProduct2(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">

//                                     {
//                                         products?.length > 0 && products?.map((product) => {
//                                             return <option key={product?._id} value={product?._id}>{product?.title}</option>
//                                         })
//                                     }


//                                 </select>
//                             </div>
//                         </div>

//                     </div>
//                     <table class="zui-table">
//                         <thead>
//                             <tr>
//                                 <th class="zui-sticky-col">&nbsp;</th>
//                                 <th id="product-col" class="table-col">
//                                     <img class="product-img mx-auto py-3" src={selectedProductInfo1?.image ? selectedProductInfo1?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
//                                     <h5>
//                                         <Link to={`/product/${selectedProductInfo1?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC
//                                             <span>&#187;</span>
//                                         </Link>
//                                     </h5>
//                                 </th>
//                                 <th class="table-col">
//                                     <img class="product-img mx-auto py-3" src={selectedProductInfo2?.image ? selectedProductInfo2?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
//                                     <h5>
//                                         <Link to={`/product/${selectedProductInfo2?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC 48
//                                             <span>&#187;</span>
//                                         </Link>
//                                     </h5>
//                                 </th>


//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td class="zui-sticky-col">Product Title</td>
//                                 <td><strong>Title :{selectedProductInfo1?.title}</strong></td>
//                                 <td><strong>Title : {selectedProductInfo2?.title}</strong></td>
//                             </tr>
//                             <tr>
//                                 <td class="zui-sticky-col zui-stripe-row">Product Price</td>
//                                 <td>price: {selectedProductInfo1?.price}</td>
//                                 <td>price: {selectedProductInfo2?.price}</td>
//                             </tr>



//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </>
//     )

// }

// export default ComparePage