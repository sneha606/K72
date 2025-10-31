import React from 'react'
import Video from '../components/home/Video'
import Hometoptext from '../components/home/Hometoptext'
import Homebottomtext from '../components/home/Homebottomtext'

const Home = () => {
  return (
    <div >
        <div className='h-screen w-screen fixed z-0'>
            <Video/>
        </div>

        <div className='h-screen w-screen relative flex flex-col justify-between'>
<Hometoptext/>
<Homebottomtext/>
        </div>
   
    </div>
  )
}

export default Home
