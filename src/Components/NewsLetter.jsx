import React from 'react'
import image from '../assets/image.png'

const NewsLetter = () => {
  return (
    <div className=' flex items-center justify-center py-10'> 
     <div className='mt-5 flex sm:flex-row flex-col gap-4  max-w-3xl px-5 py-5 bg-teal-700 rounded-tl-xl rounded-br-xl  text-white'>
      {/* right */}
      <div>
           <div className='flex gap-1'>
            <h1 className='text-teal-400 mt-5 font-bold'>START NOW</h1>
            <div className='h-0.5 w-10 bg-teal-400 mt-8'></div>
           </div>
           <h1 className='text-3xl mt-4 font-semibold'>Get Start For Free Now No <br /> Credit Card Required</h1>   

           <div className='flex gap-3 mt-5'>
              <div className='px-4 py-2 rounded-md shadow border border-gray-200'>
              <input type="text" className='outline-none' placeholder='Email address'/>
              </div>
              <button className='bg-teal-400 flex items-center justify-center font-bold rounded px-4 py-1 cursor-pointer'> Get Started </button>
           </div>
              <p className='text-gray-100 font-sans text-sm mt-8'> Want to contact our team and book a call? <span className='text-teal-300 font-sans text-sm'> Try it Now? </span></p>
      </div>
      {/* left */}
      <div> 
        <img src={image}  className='mt-6 w-90 h-70' alt="" />
      </div>
     </div>
    </div>
  )
}


export default NewsLetter