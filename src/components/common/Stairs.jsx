import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath=useLocation().pathname
    console.log(currentPath)
     const stairparentref=useRef(null)
     const pageref=useRef(null)
     const tl=gsap.timeline()
      useGSAP(()=>{
        tl.to(stairparentref.current,{
          display:'block'
        })
        tl.from(".stair",{
          height:0,
          stagger:{
            amount:-0.15
          }
        })
        tl.to(".stair",{
          y:"100%",
          stagger:{
            amount:-0.25
          }
        })
        tl.to(stairparentref.current,{
          display:'none'
        })
        tl.to(stairparentref.current,{
          y:"0%"
        })

        gsap.from(pageref.current,{
            opacity:0,
            scale:1.2,
            delay:1.3
        })
      },[currentPath])
  return (
    <div>
<div ref={stairparentref} className='h-screen w-full z-[10] fixed top-0 pointer-events-none'>
        <div className='h-full w-full flex'>
          <div className='stair bg-black h-full w-1/5'></div>
          <div className='stair bg-black h-full w-1/5'></div>
          <div className='stair bg-black h-full w-1/5'></div>
          <div className='stair bg-black h-full w-1/5'></div>
          <div className='stair bg-black h-full w-1/5'></div>
        </div>
      </div>
      <div ref={pageref}>
        {props.children}
      </div>
      </div>
  )
}

export default Stairs
