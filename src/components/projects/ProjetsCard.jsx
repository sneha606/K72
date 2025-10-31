import React from 'react'

const ProjetsCard = (props) => {
  return (
    <>
    <div className=" lol1 relative w-full lg:w-1/2 h-full overflow-hidden group rounded-none transition-all duration-500">
      
      {/* Image */}
      <img
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
        src={props.image1}
        alt=""
      />

      {/* Black overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 rounded-none group-hover:rounded-4xl"></div>

      {/* Text appears on hover */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h2 className="uppercase font-[font-font2] text-[3vw] text-white tracking-wider">
          voir le projet
        </h2>
      </div>
    </div>
        <div className="relative w-full lg:w-1/2 h-full overflow-hidden group rounded-none transition-all duration-500">
      
      {/* Image */}
      <img
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
        src={props.image2}
        alt=""
      />

      {/* Black overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 rounded-none group-hover:rounded-4xl"></div>

      {/* Text appears on hover */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h2 className="uppercase font-[font-font2] text-[3vw] text-white tracking-wider">
          voir le projet
        </h2>
      </div>
    </div>
    </>
  )
}

export default ProjetsCard

