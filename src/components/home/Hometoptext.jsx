import React from 'react'
import Video from './Video'

const Hometoptext = () => {
  return (
   
      <div className='font-[font-1] text-white pt-[75vw] lg:pt-3 text-center'>
        <div className='uppercase text-[13vw] lg:text-[9vw] leading-[12vw] lg:leading-[8vw] flex items-center justify-center' >L'étincelle</div>
        <div className='uppercase text-[13vw] lg:text-[9vw] leading-[12vw] lg:leading-[8vw] flex items-center justify-center'>qui
            <div className=' h-[11vw] w-[22vw] lg:h-[7vw] lg:w-[12vw] rounded-full overflow-hidden'><Video/></div>
            génère</div>
        <div className='uppercase text-[13vw] lg:text-[9vw] leading-[12vw] lg:leading-[8vw] flex items-center justify-center'>la créativité</div>
      </div>
   
  )
}

export default Hometoptext
