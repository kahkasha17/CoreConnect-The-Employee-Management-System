import React from 'react'




export const SearchBar = () => {
  return (
    <>
    <div className="flex flex-col justify-center">
  <div className="relative sm:mx-auto">
    <div className="overflow-hidden z-0 rounded-full relative p-2 mb-4">
      <form role="form" className="relative flex z-50 rounded-full ">
        <input type="search" placeholder="enter your text here" className="rounded-full flex-1  text-gray-700 focus:outline-none"/>
        
      </form>
      <div className="glow glow-1 z-10  bg-yellow-400 absolute"></div>
      <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
      <div className="glow glow-3 z-30 bg-pink-400 absolute"></div>
      <div className="glow glow-4 z-40 bg-blue-300 absolute"></div>
    </div>
  </div>
</div>
    
    </>
  )
}

