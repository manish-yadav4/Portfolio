
import React from 'react'

const Projects = () => {
  return (
    <div 
      id='Projects' 
      className="relative p-10 md:p-24 text-white bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <h1 className="relative text-4xl md:text-6xl font-extrabold text-center drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400">
        Projects
      </h1>

      <div className="relative mt-16 flex flex-col items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg px-10 py-12 rounded-2xl shadow-xl border border-white/20 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 animate-pulse">
            🚧 Under Development 🚧
          </h2>
          <p className="mt-6 text-gray-200 leading-relaxed">
            I’m currently working on some exciting projects.  
            This section will be updated soon, stay tuned!
          </p>
          <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform cursor-not-allowed opacity-70">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
