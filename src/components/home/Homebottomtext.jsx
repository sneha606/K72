import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
    <div className='flex text-center justify-center gap-2'>
      <Link to='/projects' className=' mb-6 border-4 border-white text-[6vw] text-white rounded-full leading-[3vw] p-[2vw] uppercase font-[font-font2] hover:border-amber-400 hover:text-amber-400' >Projects</Link>
      <Link to='/agencies' className='mb-6 border-4 border-white text-[6vw] text-white rounded-full leading-[3vw] p-[2vw] uppercase font-[font-font2] hover:border-amber-400 hover:text-amber-400'>Agence</Link>
    </div>
  )
}

export default Homebottomtext
