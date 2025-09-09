import React from 'react'


const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>manishy8572@gmail.com</li>
            
            <li>manish-yadav4</li>
        </ul>
    </div>
  )
}

export default Footer