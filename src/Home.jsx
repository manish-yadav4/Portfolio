import React from 'react'
import Image from './assets/a.jpg'
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10 '>
        <h1 className='text-3xl md:text-6xl font-bold mb-1  '>Hello, I am <span className='text-purple-500 '>Manish</span></h1>
        <p className='text-sm md:text-2xl tracking-tight'>Enthusiastic Full Stack Developer with knowledge of front-end and back-end technologies. Skilled in building 
user-friendly web applications using HTML, CSS, JavaScript, React,  Node.js , Express.js and Mongodb</p>
             <button className='mt-5 md:md-10 text-white bg-gray-700 border-2 border-purple-500   py-2 px-3 text-sm md:text-large md:py-2 md:px-4  
            transition-all hover:text-base hover:text-white hover:font-bold duration-300 hover:scale-110 hover:border-none font-semibold rounded-3xl  hover:bg-purple-700'>Contact Me</button>
        </div>
        <div><img className='w-[80%] peer-autofill: m-auto rounded-2xl sm:w-1/3' src={Image} alt="" /></div>
        </div>
  )
}

export default Home