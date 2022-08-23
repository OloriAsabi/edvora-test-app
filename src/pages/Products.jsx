import React from 'react'
import { Loader } from '../components'
import { Link } from 'react-router-dom'

const Products = ({products, isLoading, setExpanded, expanded}) => {
  return (
    <div className='bg-white text-black dark:bg-black  dark:text-white'>
        <div className='pb-20'>
           <h1 className='text-center pt-20 pb-10 uppercase font-extrabold p-5 text-3xl'>Get Your Favorite Drinks here</h1>
       {isLoading
       ? 
       (
        <Loader/>
       )
       :
       (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10 container mx-auto gap-8 justify-center items-center shadow-black'>
          {products.map((product) => (
            <div className="border-solid border-2 p-5 hover:dark:bg-gray-900 hover:bg-gray-200 cursor-pointer rounded-2xl w-full h-full border-gray-500" key={product.product_id}>
                <Link to={`/orders`}>
                <h2 className='text-2xl text-justify text-black dark:text-white font-bold  p-3 mb-5'>{product.name}</h2>
                <div className='flex justify-between'>
                <p className=' text-black dark:text-white text-xl font-normal m-3'>Price:<span className='w-20 dark:bg-white bg-black text-white rounded text-center text-xl p-1 font-extrabold m-3d dark:text-black'>${product.selling_price}</span> </p>
                <p className='text-black dark:text-white text-xl font-normal m-3'>Stock: <span className='text-black dark:text-white text-xl font-extrabold m-3'>{product.stock}</span></p>
                </div>
                </Link>
            </div>
          ))}
        </div>
       )
       }
         <div className='bg-black text-white text-2xl dark:text-black w-48 ml-auto mr-auto flex justify-center items-center dark:bg-white rounded text-center p-2 cursor-pointer hover:scale-x-105 font-normal'>
            <button type="button"  onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show Less' : 'Show More'} 
            </button>
         </div>
         </div>
    </div>
  )
}

export default Products