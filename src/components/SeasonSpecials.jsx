import React, { useState } from 'react'
import Fruitscard from './Fruitscard'


const SeasonSpecials = () => {
  const [fruits, setFruits] = useState([
      {
        id: 7,
        image: "7",
        name: "Orange",
        price: 100,
      },
      {
        id: 1,
        image: "1",
        name: "Green Grapes",
        price: 100,
      },
      {
        id: 6,
        image: "6",
        name: "lemon",
        price: 150,
      },
    ]);
  return (
    
    <section className='w-5/6 mx-auto  my-10'>
      <div className=' relative'>
        <div className='absolute inset-0 flex items-center'> 
          <div className='border border-slate-300 w-9/12 mx-auto' ></div>
        </div>
        <div className=' flex justify-center relative'>
          <div className='text-slate-400 text-4xl uppercase bg-white px-4'>Season Specials</div>
        </div>
      </div>

      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
            fruits.map((fruit) => {
                return <Fruitscard key={fruit.id} fruit={fruit} />

            })
        }
    </div>
    </section>
  )
}

export default SeasonSpecials
