import React, { useEffect, useState } from 'react'
import { useFetchProductsQuery } from '../features/products/productsApi'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ComparePage = () => {

    // get the product id and Title for for lopp selections

    const { data: products, isLoading, isError } = useFetchProductsQuery() || {};


    const [selectedProduct1, setSelectedProduct1] = useState('');
    const [selectedProduct2, setSelectedProduct2] = useState('');

    const [selectedProductInfo1, setSelectedProductInfo1] = useState({});
    const [selectedProductInfo2, setSelectedProductInfo2] = useState({});



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





    // if (selectedProduct1) {
    //     console.log('selected', selectedProduct1)

    //     // get the selected product data

    //     const fetchData = async () => {
    //         const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct1}`)
    //         const data = res?.data;
    //         setSelectedProductInfo1(data)
    //     }

    //     fetchData();



    // }



    // if (selectedProduct2) {
    //     console.log('selected', selectedProduct2)

    //     const fetchData = async () => {
    //         const res = await axios.get(`http://localhost:5000/api/products/product/${selectedProduct2}`)
    //         const data = res?.data;
    //         setSelectedProductInfo2(data)
    //     }

    //     fetchData()

    //     console.log('info2', selectedProductInfo2)

    // }


    // useEffect(() => {
    //     fetchData()
    // },[])



    return (
        <>

            <h2>Product Comparison Table V2</h2>
            <div class="zui-wrapper">
                <div class="instruction">
                    <em><i class="fas fa-arrows-alt-h"></i> Swipe for more products</em>
                </div>
                <div id="container" class="zui-scroller">
                    <div className='bg-blue-400 mx-auto px-4 py-4 rounded-md shadow-md'>
                        <h2>Compare Products</h2>

                        <div className='flex justify-between'>
                            <div className="">
                                <select onChange={(e) => setSelectedProduct1(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">
                                    {
                                        products?.length > 0 && products?.map((product) => {
                                            return <option key={product?._id} value={product?._id}>{product?.title}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="">
                                <select onChange={(e) => setSelectedProduct2(e.target.value)} required className="border-solid border-green-400 dark:border-purple-600 border-2 px-3 py-3 md:text-xl lg:text-2xl w-full rounded-lg">

                                    {
                                        products?.length > 0 && products?.map((product) => {
                                            return <option key={product?._id} value={product?._id}>{product?.title}</option>
                                        })
                                    }


                                </select>
                            </div>
                        </div>

                    </div>
                    <table class="zui-table">
                        <thead>
                            <tr>
                                <th class="zui-sticky-col">&nbsp;</th>
                                <th id="product-col" class="table-col">
                                    <img class="product-img mx-auto py-3" src={selectedProductInfo1?.image ? selectedProductInfo1?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
                                    <h5>
                                        <Link to={`/product/${selectedProductInfo1?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC
                                            <span>&#187;</span>
                                        </Link>
                                    </h5>
                                </th>
                                <th class="table-col">
                                    <img class="product-img mx-auto py-3" src={selectedProductInfo2?.image ? selectedProductInfo2?.image : 'https://media.istockphoto.com/photos/cartoon-character-hand-holds-smart-phone-picture-id1321139457?b=1&k=20&m=1321139457&s=612x612&w=0&h=piJ1YnUgCJ_uiTCDBvFaOgLShnXK0balrUkfDcq5uA0='} height='100px' width='100px' />
                                    <h5>
                                        <Link to={`/product/${selectedProductInfo2?._id}`} class="product-link">Maxwell<sup>&reg;</sup> RSC 48
                                            <span>&#187;</span>
                                        </Link>
                                    </h5>
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="zui-sticky-col">Product Title</td>
                                <td><strong>Title :{selectedProductInfo1?.title}</strong></td>
                                <td><strong>Title : {selectedProductInfo2?.title}</strong></td>
                            </tr>
                            <tr>
                                <td class="zui-sticky-col zui-stripe-row">Product Price</td>
                                <td>price: {selectedProductInfo1?.price}</td>
                                <td>price: {selectedProductInfo2?.price}</td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}

export default ComparePage