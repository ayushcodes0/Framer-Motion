import React from 'react'
import { motion } from 'motion/react'

const Card = () => {
  return (
    <div className="relative w-72 min-h-[26rem] h-[26rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col">
      <h1 className='text-center'>Card</h1>
      <div className='border border-gray-200 h-[400px] bg-gray-200 rounded-xl overflow-hidden'>
        <motion.div
            initial={{ opacity: 0, scale: 0.95, backgroundColor: 'white' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02, backgroundColor: '', opacity: 1 }}
            whileTap={{ scale: 0.98 }}
        className='group border border-gray-200 h-[100%] bg-gray-50 rounded-xl'></motion.div>
      </div>
    </div>
  )
}

export default Card
