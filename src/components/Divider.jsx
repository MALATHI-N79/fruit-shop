import React from 'react'

const Divider = () => {
  return (
    <div className=' relative'>
        <div className='absolute inset-0 flex items-center'> 
          <div className='border border-slate-300 w-9/12 mx-auto' ></div>
        </div>
        <div className=' flex justify-center relative'>
          <div className='text-slate-400 text-4xl uppercase bg-white px-4'>Find Us On</div>
        </div>
      </div>
  )
}

export default Divider
