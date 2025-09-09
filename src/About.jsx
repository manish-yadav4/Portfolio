import React from 'react'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-violet-700
    shadow-xl md:mx-70 bg-opacity-30 rounded-lg p-12 mb-5'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'> Skilled in building 
user-friendly web applications using HTML, CSS, JavaScript, React,  Node.js , Express.js and Mongodb. Eager to learn</p>
                        </span>
                    </div>
                               <div className='flex gap-3 py-4'>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'> Skilled in building 
user-friendly web applications using HTML, CSS, JavaScript, React,  Node.js , Express.js and Mongodb. Eager to learn</p>
                        </span>
                    </div>
                                  <div className='flex gap-3 py-4'>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Databases</h1>
                            <p className='text-sm md:text-md leading-tight'> Skilled in building 
user-friendly web applications using HTML, CSS, JavaScript, React,  Node.js , Express.js and Mongodb. Eager to learn</p>
                        </span>
                    </div>   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About