import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

 gsap.registerPlugin(ScrollTrigger)
const Agencies = () => {
   const imageref=useRef(null)
   const imgarrref=useRef(null)

   const imagearray=[
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"
    
   ]
  
   useGSAP(()=>{
    gsap.to(imageref.current,{
      scrollTrigger:{
        trigger:imageref.current,
        pin:true,
        pinSpacing:true,
        pinReparent:true,

        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,


        
        start:'top 12%',
        end: '+=700',
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
          imageIndex= Math.floor(elem.progress * imagearray.length)}
          else{
            imageIndex=imagearray.length-1
          }
          imgarrref.current.src=imagearray[imageIndex]
        }
     

      }
    })
   })
  return (
    <div>
    <div className='section1 py-1'>
     <div ref={imageref} className='h-[50vw] w-[25vw] lg:h-[25vw] overflow-hidden lg:w-[14vw] absolute lg:top-20 top-12 left-20  lg:left-100 translate-y-[-30px] '>
      <img ref={imgarrref} className='rounded-4xl  object-cover' src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'/>
     </div>

      <div className='relative mt-[48%] lg:mt-[23%]'>
   <div className='font-[font-font1] '>
    <h1  className='text-[17vw] leading-[15vw]  uppercase text-center '>Soixan7e <br />
Douze</h1>
   </div>
   <div>
    <p className=' text-[6vw] lg:text-[3vw] font-[font-font1] pl-0 lg:pl-[40%] pt-4 leading-7 p-1 text-center lg:leading-[4vw] pt-12 lg:pt-0'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laboriosam consectetur nulla placeat nobis dolore reiciendis, mollitia in facere repellat quaerat blanditiis quod dolorum officiis earum iusto at quisquam, accusantium, dolores sunt maiores dicta quidem nemo? Excepturi, enim veritatis expedita optio voluptatum ducimus culpa quibusdam quo molestiae commodi soluta debitis?</p>
   </div>
</div>
    </div>
    <div  className='h-screen w-screen'></div>
    </div>
  )
}

export default Agencies
