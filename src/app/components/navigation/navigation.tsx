import React from 'react'
import { Oswald } from 'next/font/google'
import Link from 'next/link'
import { BiSolidShoppingBag } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import Image from 'next/image';
const oswald = Oswald({
    
    subsets: ['latin'],
    variable: '--font-oswald',
    
})



function Navigation() {
  return (
   
    <nav className='flex  justify-between p-4 border-b  '>
        
        <Link className={` ${oswald.variable} font-bold  text-lg`} href={"/"}>INENGS MARIKINA</Link>
 

        <div className='flex space-x-6 font-medium'>       
            <Link className={"hover:text-pink-600"} href={"/"}>Home</Link>
            <Link className={"hover:text-pink-600"} href={"/shop/men"}>Men</Link>
            <Link className={"hover:text-pink-600"} href={"/shop/women"}>Women</Link>
            <Link className={"hover:text-pink-600"} href={"/shop/unisex"}>Unisex</Link>
            <Link className={"hover:text-pink-600"} href={"/shop/kids"}>Kids</Link>          
        </div>
      

        <div className='flex space-x-3 text-xl'>
            <BiSearch  className={"hover:text-pink-600"}/>
            <BiSolidShoppingBag className={"hover:text-pink-600"} />
            <BiUser className={"hover:text-pink-600"}/>
        </div>
    
    </nav>
  )
}

export default Navigation