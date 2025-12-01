import { UserCheckIcon } from 'lucide-react'
import React from 'react'
import image1 from '../assets/test1.jpg'
import image2 from '../assets/test2.jpg'
import image3 from '../assets/test3.jpg'

const Testimonials = () => {
    const data = [
        { title: 'COMPETITOR SEARCH', image: image1, description: 'Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.' },
        { title: 'WORKFLOW ANALYSIS', image: image2, description: 'Optimize your business performance with expert-driven workflow strategies designed for efficiency and growth.' },
        { title: 'TECH CONSULTATION', image: image3, description: 'Get personalized insights responsive and modern tech solutions to enhance your digital presence and productivity.' },
    ];

    return (
        <div className='sm:px-20 px-5  py-10'>
            <div className='flex gap-3'>
                <h1 className='bg-green-200 text-teal-800 px-3 py-1 font-sans font-bold'>Testimonials</h1>
                <div className='bg-green-800 h-0.5 w-15 mt-3'></div>
            </div>
            <h1 className='text-4xl font-semibold mt-5'>
                What Our Custumoers Say
            </h1>
            <p className='mt-5 text-gray-600 text-sm'> Lorem i Expedita, cupiditate quo deserunt laudantium impedit laborum  <br />
                consequuntur in odio. Et sunt nihil molestias, nesciunt distinctio eaque sequi.</p>
            <div className='grid sm:grid-cols-3 gap-5 grid-cols-1 mt-10'>
                {data.map((data, index) => {
                    return (
                        <div key={index} className='border group  hover:bg-green-800 cursor-pointer  w-60 border-gray-300 px-6 py-3 rounded-tl-3xl rounded-br-3xl '>
                            <div className='gap-3 flex'>
                                {/* left pannel */}
                                <div>
                                    <div className='rounded-full  
                                     h-20 border bg-gray-100  
                                       w-20 border-gray-300 flex items-ce]nter justify-center '>
                                        <img src={data.image} alt="" className='w-18 h-18 rounded-full' />
                                    </div>
                                </div>
                                {/* right pannel */}
                                <div>
                                <h1 className='font-bold group-hover:text-green-50'>{data.title}</h1>
                                </div>
                            </div>

                            <p className='text-gray-500  group-hover:text-white mt-5'  > {data.description} </p>
                             <p className='text-green-800   text-4xl ml-45  group-hover:text-green-600'>,,</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials