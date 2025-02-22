import React from 'react'

const Fruitscard = ({fruit}) => {
  const imagePath = new URL(`../assets/${fruit.image}.jpeg`, import.meta.url).href;
  return (
    <div className=' rounded-2xl overflow-hidden shadow-xl group transform hover:scale-110 duration-100 relative bg-amber-400'>
        <img src={imagePath} alt={`${fruit.image}`} className='w-full h-52 object-cover'
            />
        <div className='flex flex-col items-center my-1 py-1 space-y-1 '>
            <span className='text-slate-500'>{fruit.name}</span>
            <span className='text-slate-500'>₹{fruit.price}</span>
            <span className=' uppercase text-black-400 text-sm invisible group-hover:visible  '>Add to cart</span>
        </div>
        <span className='absolute top-3 right-3 rounded-tr-lg bg-amber-300 p-1' >1% off</span>
    </div>
  )
}

export default Fruitscard
