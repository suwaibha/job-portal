import React, { useContext,useRef } from 'react'
import { assets } from '../assets/assets'
import AppContext  from '../Context/AppContext'

const Hero = () => {

  const {setSearchFilter,setIsSearched}= useContext(AppContext)

  const titleref = useRef(null)
  const locationeref = useRef(null)

  const onSearch=()=>{
    setSearchFilter({
      title:titleref.current.value,
      location:locationeref.current.value
    })
    setIsSearched(true)
    

  }



  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-blue-50 to-yellow-50 text-black py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 font-medium mb-4'>Over 1000 jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your next carrier moves start here - Explore PrepVio jobs</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-950 max-w-xl sm:mx-auto shadow-2xl px-4 '>
            <div className='flex items-center'>
                <img className='h-4 sm:5' src={assets.search_icon} alt="" />
                <input type="text"
                 placeholder='Search For Jobs'
                 className='max-sm:text-xs p-2 rounded outline-none w-full'
                 ref={titleref}
                />
            </div>
            <div className='flex items-center'>
                <img className='h-4 sm:5' src={assets.location_icon} alt="" />
                <input type="text"
                 placeholder='Location'
                 className='max-sm:text-xs p-2 rounded outline-none w-full'
                 ref={locationeref}
                />
            </div>
            <button onClick={onSearch} className='bg-black px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>Trusted By</p>
            <img className='h-6' src={assets.microsoft_logo} alt="" />
            <img className='h-6'src={assets.walmart_logo} alt="" />
            <img className='h-6'src={assets.accenture_logo} alt="" />
            <img className='h-6'src={assets.samsung_logo} alt="" />
            <img className='h-6'src={assets.amazon_logo} alt="" />
            <img className='h-6'src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
