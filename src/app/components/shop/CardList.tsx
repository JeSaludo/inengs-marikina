import React from 'react'
import Image from 'next/image'
function CardList() {
  return (<>

  <div className="space-x-2 flex row">

  <div className=' p-2 m-4 w-[280px]  rounded-md hover:cursor-pointer'>
        <div ><Image   src={"/shop/Af1-Black.jpg"} width={500} height={500} alt=''/></div>        
        <div className='mt-2 p-2 '>
            <h1 className='font-semibold' >Nike Air Force 1 '07 EasyOn</h1>
            <p>₱ 6,999</p>
        </div>       
    </div>

    <div className=' p-2 m-4 w-[280px]  rounded-md hover:cursor-pointer'>
        <div ><Image   src={"/shop/Af1-Black.jpg"} width={500} height={500} alt=''/></div>        
        <div className='mt-2 p-2 '>
            <h1 className='font-semibold' >Nike Air Force 1 '07 EasyOn</h1>
            <p>₱ 6,999</p>
        </div>       
    </div>

    <div className=' p-2 m-4 w-[280px]  rounded-md hover:cursor-pointer'>
        <div ><Image   src={"/shop/Af1-Black.jpg"} width={500} height={500} alt=''/></div>        
        <div className='mt-2 p-2 '>
            <h1 className='font-semibold' >Nike Air Force 1 '07 EasyOn</h1>
            <p>₱ 6,999</p>
        </div>       
    </div>

    <div className=' p-2 m-4 w-[280px]  rounded-md hover:cursor-pointer'>
        <div ><Image   src={"/shop/Af1-Black.jpg"} width={500} height={500} alt=''/></div>        
        <div className='mt-2 p-2 '>
            <h1 className='font-semibold' >Nike Air Force 1 '07 EasyOn</h1>
            <p>₱ 6,999</p>
        </div>       
    </div>
  </div>
   

    </>
  )
}

export default CardList