import React from 'react'
import Link from 'next/link'
function SideNav() {
  return (

    <div className='flex flex-col p-4 px-6 max-w-72 fixed  left-0'>
        <h1 className='text-lg font-bold pb-2'>Filter</h1>
        <div className='space-y-2 flex flex-col '>
            <Link className='font-medium' href="/">Running</Link>
            <Link className='font-medium' href="/">Gym & Training</Link>
            <Link className='font-medium' href="/">Walking</Link>
            <Link className='font-medium' href="/">Football</Link>
            <Link className='font-medium' href="/">Tennis</Link>
            <Link className='font-medium' href="/">Boots</Link>
            <Link className='font-medium' href="/">ACG</Link>
        </div>
    </div>
  )
}

export default SideNav