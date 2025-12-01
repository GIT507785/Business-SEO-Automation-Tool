import { Banknote, DollarSign, Home, PiggyBank } from 'lucide-react'
import React from 'react'
import img from '../assets/img2.jpg'

const GrowBuisness = () => {
  return (
    <div className='flex sm:flex-row flex-col px-10 py-10 gap-6 mt-10 justify-between '>
        {/* right  */}
        <div>
            <img src={img}  className='w-100 h-100' alt="" />
        </div>
        {/* left */}
        <div>
            
            <div className='flex gap-2'> 
             <h1  className='bg-green-200 text-green-700  px-4 py-1'> OUR SERVICES </h1>
             <div className='w-20 h-0.5 bg-green-900 mt-2'></div>
            </div>
            <h1 className='font-semibold text-3xl '>Our Growing Services Can <br /> Help You Grow Your Buisness</h1>

            <p className='mt-10 text-gray-600 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vero perferend <br /> possimus sequi eaque animi culpa quaerat sed quod adipisci in.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
             <div className='flex gap-6'>
             <div className='px-1 mt-3 py-0.5 bg-green-300 rounded flex items-center justify-center text-green-600   '>  <DollarSign/> </div>
             <h1 className='mt-3'>Keyword Research</h1>    
             </div>
             <div className='flex gap-6'>
                 <div className='px-1 mt-4 py-0.5 bg-red-300 rounded flex items-center justify-center text-red-600   '>  <DollarSign/>     </div> 
             <h1 className='mt-4'>Citation Suggestions</h1>    
             </div>
             <div className='flex gap-6'>
                 <div className='px-1 mt-4 py-0.5 bg-cyan-300 rounded flex items-center justify-center text-cyan-600   '>  <Home/> </div>
                <h1 className='mt-4'>Website Audit</h1>
             </div>
             <div className='flex gap-6'>
                 <div className='px-1 py-0.5 bg-yellow-300 rounded flex items-center justify-center text-yellow-600   mt-4'>  <PiggyBank/> </div>
                <h1 className='mt-4'>Web Analytics</h1>
             </div>
            </div>
            <button className='shadow-black   shadow-lg  mt-10 px-4 border-2 border-gray-500 py-1'> Explore Services</button>
        </div>

    </div>
  )
}

export default GrowBuisness