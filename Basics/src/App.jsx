import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const App = () => {
  return (
    <div
        className='[perspective::1000px] [transform-style::preserve-3d] flex items-center justify-center h-screen bg-[#121212]'
        style={{
          backgroundImage: `radial-gradient(	rgba(31, 41, 55, 1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
    >
      <motion.button
        initial={{
          opacity: 0,
          top: '5%',
        }}
        animate={{
          opacity: 1,
          top: '0%',
          transition:{duration: 0.5, ease: easeInOut}
        }}
        whileHover={{
          rotateX: 20,
          rotateY: 20, 
          boxShadow: '0px 20px 40px rgba(8, 112, 184, 0.3)',
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut
        }}
      className='group text-2xl font-medium text-[#a8a8a8] py-5 px-16 rounded-xl bg-[#191b1c] hover:cursor-pointer relative'>
        <span className='group-hover:text-cyan-500 transition-colors duration-300'>Hello World</span>
        <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[5px] w-full mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}

export default App
