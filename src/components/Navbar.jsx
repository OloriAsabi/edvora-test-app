import React from 'react';
import ThemeSettings from './ThemeSettings';

const Navbar = () => {
  return (
    <div className='w-full bg-white dark:shadow-white dark:text-white dark:bg-black '>
    <nav className=" sticky h-20 shadow  mx-auto flex justify-between items-center p-4">
    <div className="flex-start justify-center items-center">
    <a href="/">
    <h1 className=" text-start font-bold text-2xl object-cover dark:text-white text-black rounded-none cursor-pointer">Edvora</h1>
    </a>
  </div>
  <ul className="text-black nav-list flex font-bold list-none dark:text-white flex-row justify-evenly items-center">
  <li className='mx-4 active:text-[#ededed] cursor-pointer  my-2 text-lg'>
          <a  href='/' >
          Products
         </a>
          </li>   
          <li className='mx-4 active:text-[#ededed] cursor-pointer  dark:text-white my-2 text-lg'>
          <a  href='/orders' >
             Orders
         </a>
          </li> 
          <ThemeSettings /> 
          </ul>
    </nav>
</div>
  )
}

export default Navbar