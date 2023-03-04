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