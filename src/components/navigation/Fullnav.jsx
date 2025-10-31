import { useGSAP } from '@gsap/react'
import { useContext, useRef } from 'react'
import React from 'react'
import gsap from 'gsap'
import { NavbarContext } from '../../context/Navcontext'
import { useEffect } from 'react'

const Fullnav = () => {
  
  
    const  fullnavlinkref=useRef(null)
    const fullscreenref=useRef(null)
    const [navOpen, setNavopen] = useContext(NavbarContext)
      useEffect(() => {
  if (navOpen) {
    gsap.set("#fullscreennav", { display: "block" });
    gsap.to("#fullscreennav", { opacity: 1, duration: 0.3 });
  } else {
    gsap.to("#fullscreennav", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => gsap.set("#fullscreennav", { display: "none" }),
    });
  }
}, [navOpen]);

  console.log(navOpen)
//  useGSAP(() => {
//   const tl = gsap.timeline({ paused: true })

//   tl.from("#fullscreennav", { opacity: 0, duration: 0.3 })
//   tl.from(".stairing", {
//     height: 0,
//     stagger: { amount: -0.2 },
//     duration: 0.4,
//   })
//     .from(fullnavlinkref.current, { opacity: 0, duration: 0.3 })
//     .from(".movelink", {
//       rotateX: 90,
//       opacity: 0,
//       stagger: { amount: 0.2 },
//       duration: 0.5,
//     })

//   if (navOpen) {
//     gsap.set("#fullscreennav", { display: "block" })
//     tl.play()
//   } else {
//     tl.reverse().eventCallback("onReverseComplete", () => {
//       gsap.set("#fullscreennav", { display: "none" })
//     })
//   }
// }, [navOpen])
// useGSAP(() => {
//   const tl = gsap.timeline({ paused: true });

//   tl.set("#fullscreennav", { display: "block", opacity: 0 })
//     .to("#fullscreennav", { opacity: 1, duration: 0.3 })
//     .from(".stairing", {
//       height: 0,
//       stagger: { amount: -0.2 },
//       duration: 0.4,
//     })
//     // .from(fullnavlinkref.current, { opacity: 0, duration: 0.3 })
//     .from(".movelink", {
//       rotateX: 90,
//       opacity: 0,
//       stagger: { amount: 0.2 },
//       duration: 0.5,
//     });

//   if (navOpen) {
//     tl.play();
//   } else {
//     tl.reverse().eventCallback("onReverseComplete", () => {
//       gsap.set("#fullscreennav", { display: "none" });
//     });
//   }
// }, [navOpen]);
useGSAP(() => {
  const tl = gsap.timeline({ paused: true });

  tl.set("#fullscreennav", { display: "block", opacity: 0 })
    .to("#fullscreennav", { opacity: 1, duration: 0.3 })
    .from(".stairing", {
      height: 0,
      stagger: { amount: -0.2 },
      duration: 0.4,
    })
    .from(".movelink", {
      rotateX: 90,
      opacity: 0,
      stagger: { amount: 0.2 },
      duration: 0.5,
    });

  // 💡 Instead of dependency array, use effect inside GSAP
  if (navOpen) {
    gsap.set("#fullscreennav", { display: "block" });
    tl.play();
  } else {
    tl.reverse().eventCallback("onReverseComplete", () => {
      gsap.set("#fullscreennav", { display: "none" });
    });
  }
});

  return (
 <div

  ref={fullscreenref}
  id="fullscreennav"
   className="fixed top-0 left-0 w-full h-screen bg-black text-white z-[9999] overflow-x-hidden"
 style={{ display: "none" }}
>



       <div className='h-screen w-screen absolute top-0 left-0 z-0 pointer-events-none'>

               <div className='h-full w-full flex'>
          <div className='stairing bg-transparent h-full  w-1/5'></div>
          <div className='stairing bg-transparent h-full w-1/5'></div>
          <div className='stairing bg-transparent h-full w-1/5'></div>
          <div className='stairing bg-transparent h-full w-1/5'></div>
          <div className='stairing bg-transparent h-full w-1/5'></div>
        </div>
        </div>
        <div ref={fullnavlinkref} className='relative z-10 overflow-y-auto h-full'>
        <div className='flex justify-between'>
            <div className='w-29 pt-5 pl-2 top-0 '>
        <svg className='w-full text-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
                      <path fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                    
      </div>
      <div onClick={()=>setNavopen(false)} className='h-28 w-28 pt-4 pr-6 relative cursor-pointer'>
        <div className='h-40 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
        <div className='h-40 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
      
      </div>
        </div>
       
     
      
      <div className='mainsubdiv z-1000  '>
          <div className=' movelink mt-[22vw] lg:mt-[4vw] istmainsubdiv  border-white border-y  leading-[1]  relative h-[12vw] lg:h-[8vw] '>
            <h1 className='text-[12vw] lg:text-[8vw] font-[font-font2] uppercase text-center'>Projets</h1>
            <div className=' moveX istmaininnersubdiv   flex items-center bg-[#d3fd50] text-black absolute top-0'>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort savior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
           
           
            </div>
            
          
        </div>
         
        
         
      </div>
       <div className='mainsubdiv'>
        <div className=' movelink istmainsubdiv  border-white border-y leading-[1]  relative h-[12vw] lg:h-[8vw] '>
            <h1 className='text-[12vw] lg:text-[8vw] font-[font-font2] uppercase text-center'>Agence</h1>
            <div className=' moveX istmaininnersubdiv   flex items-center bg-[#d3fd50] text-black absolute top-0'>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort savior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
           
           
            </div>
            
          
        </div>
         
        
         
      </div>
       <div className='mainsubdiv'>
        <div className=' movelink istmainsubdiv  border-white border-y leading-[1]  relative h-[12vw] lg:h-[8vw]'>
            <h1 className=' text-[12vw] lg:text-[8vw] font-[font-font2] uppercase text-center'>Contact</h1>
            <div className=' moveX istmaininnersubdiv   flex items-center bg-[#d3fd50] text-black absolute top-0'>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
           
           
            </div>
            
          
        </div>
         
        
         
      </div>
       <div className='mainsubdiv'>
        <div className=' movelink istmainsubdiv  border-white border-y leading-[1]  relative h-[12vw] lg:h-[8vw] '>
            <h1 className='text-[12vw] lg:text-[8vw] font-[font-font2] uppercase text-center'>Blogue</h1>
            <div className=' moveX istmaininnersubdiv   flex items-center bg-[#d3fd50] text-black absolute top-0'>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'/>
           <h2 className=' whitespace-nowrap text-[8vw] font-[font-font2] uppercase text-center'>Pour tort vior</h2>
           <img className='h-10 lg:h-20 w-36 rounded-full shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
           
           
            </div>
            
          
        </div>
         
        
         
      </div>
      </div>
    </div>
  )
}

export default Fullnav
