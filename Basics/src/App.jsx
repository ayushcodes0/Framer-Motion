import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div
        className='flex items-center justify-center h-screen bg-[#121212]'
        style={{
          backgroundImage: `radial-gradient(	rgba(31, 41, 55, 1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
    >
      <motion.button
      initial = {{
        rotate: 0,
      }}
      animate = {{
        rotate: 20,
      }}
      className='group text-2xl font-medium text-[#a8a8a8] py-5 px-16 rounded-xl bg-[#191b1c] relative'>
        Hello World
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[5px] w-full mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}

export default App
