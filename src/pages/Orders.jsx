import React from 'react'
import { Loader } from '../components'

const Orders = ({isLoading, orders,setExpanded, expanded}) => {
  return (
    <div className='bg-white text-black dark:bg-black  dark:text-white'>
        <div className='pb-20 container mx-auto'>
        <h1 className='text-center pt-20 pb-10 uppercase font-extrabold p-5 text-3xl'>Your Orders</h1>
       {isLoading
       ? 
       (
        <Loader/>
       )
       :
       (
            <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Order Date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Quantity
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    User ID
                                </th>
                            </tr>
                        </thead>                     
                     {orders.map((order) => (
                        <tbody key={order.order_id}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {order.order_date}
                                </th>
                                <td className="py-4 px-6">
                                    {order.product_id}
                                </td>
                                <td className="py-4 px-6">
                                   {order.quantity}
                                </td>
                                <td className="py-4 px-6">
                                   {order.user_id}
                                </td>
                            </tr>
                        </tbody> 
                        ))}
                    </table>
                    <div className='bg-black text-white text-2xl dark:text-black mt-10 w-48 ml-auto mr-auto flex justify-center items-center dark:bg-white rounded text-center p-2 cursor-pointer hover:scale-x-105 font-normal'>
                            <button type="button"  onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'Show Less' : 'Show More'} 
                            </button>
                    </div>
                </div>
       )}
       </div>
    </div>
  )
}

export default Orders