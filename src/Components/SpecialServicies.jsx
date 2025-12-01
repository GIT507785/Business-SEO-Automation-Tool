import { GraduationCap, Menu, SaveOff } from 'lucide-react';
import React from 'react'

const SpecialServicies = () => {

    const data = [
    {title:'Expert Guidance', icon:<GraduationCap className='bg-teal-400 rounded-full px-4 py-2 w-15 h-15 text-teal-800'/>, description:'Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.'},
    {title:'Rist Management', icon:<SaveOff className='bg-red-300 text-red-700 px-4 py-2 rounded-full w-15 h-15'/>, description:'Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.'},
    {title:'Customized Solutions', icon:<Menu className='bg-green-400 text-green-900 px-4 py-2 rounded-full w-15 h-15'/>, description:'Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.'},
    

  ];

  return (
    <div className='sm:px-16 px-5 my-10'>
        <h1 className='font-bold text-3xl max-w-170'>Our Team provides Valuable Services at  Any Time in Any Situation </h1>
        <div className='grid  sm:grid-cols-3 mt-10  grid-cols-1' >
            {data.map((data , index)=>{
                return(
                    <div key={index} className=' max-w-60 px-5 py-3
                    '>
                        <div> {data.icon} </div>
                        <div>
                            <h1 className='font-serif  text-xl mt-5'>{data.title}</h1>
                            <p className='text-gray-600 font-sans text-sm  mt-5'>{data.description}</p>
                        </div>
                        <button className='text-teal-800 text-md font-sans cursor-pointer hover:text-teal-600 mt-5'> Read more </button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SpecialServicies