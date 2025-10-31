import React from 'react'
import ProjetsCard from '../components/projects/ProjetsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {
  const imageprojet=[
    {
      image1:"https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
    },
     {
      image1:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996"
    },
     {
      image1:"https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2:"https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
    },
     {
      image1:"https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd",
      image2:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47"
    },
    {
      image1:"https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e"
    },
     {
      image1:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996"
    },
     {
      image1:"https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2:"https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479"
    },
     {
      image1:"https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd",
      image2:"https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47"
    },
  ]

  useGSAP(function(){
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".hero",{
      height:"0px",
      stagger:{
        amount:0.4
      },
      
      scrollTrigger:{
         trigger:".lol1",
        
        //  markers:true,
         scroller:'body',
         start:"top 100%",
         end:"top -150%",
         scrub:true,
         stagger:{
          amount:0.4
         }
        
      }

      

    })
  })







  return (
    <div className='p-2 '>
    <div className='lg:mt-[18vw] mt-[32vw] '>
      <h2 className='uppercase font-[font-font2] text-[19vw] lg:text-[10vw]'>Projets</h2>
    </div>
    <div className='lol '>
    {imageprojet.map(function(elem,indx){
 return <div className=' hero h-[420px] w-full flex lg:flex-row flex-col  gap-4'>
<ProjetsCard key={indx} image1={elem.image1} image2={elem.image2}/>
</div>

    })}
   
     </div>
    </div>
  
  )
}

export default Projects
