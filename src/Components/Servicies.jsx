import { 
  ArrowRight,
  ComputerIcon,
  LocationEditIcon,
  Settings,
  Share2Icon,
  WorkflowIcon 
} from 'lucide-react';
import React from 'react';



const Servicies = () => {

  const data = [
    {title:'COMPETITOR SEARCH', icon:<LocationEditIcon/>, description:'Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals.'},
    {title:'WORKFLOW ANALYSIS', icon:<WorkflowIcon/>, description:'Optimize your business performance with expert-driven workflow strategies designed for efficiency and growth.'},
    {title:'TECH CONSULTATION', icon:<ComputerIcon/>, description:'Get personalized insights and modern tech solutions to enhance your digital presence and productivity.'},
    {title:'SOCIAL MEDIA BOOST', icon:<Share2Icon/>, description:'Enhance your brand engagement with high-impact social media strategies curated for your audience.'},
    {title:'SYSTEM SETTINGS', icon:<Settings/>, description:'Configure and streamline your business systems with the help of technical experts.'},
    {title:'ADVANCED SETTINGS', icon:<Settings/>, description:'Unlock new customization options with expert-level configuration and fine-tuning.'},
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 sm:px-4 px-14">
      <div className="max-w-6xl text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold font-sans mt-5">
          Full Services to Grow Your Business
        </h1>

        <div className="flex gap-1 items-center justify-center py-5">
          <div className="w-14 h-1.5 rounded-full bg-blue-500"></div>
          <div className="w-8 h-1.5 rounded-full bg-blue-500"></div>
          <div className="w-3 h-1.5 rounded-full bg-blue-500"></div>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, blanditiis ipsam consequuntur similique. <br /> 
          Lorem ipsum dolor sit amet, blanditiis ipsam consequuntur similique.
        </p>

        <div className="grid grid-cols-1  sm:grid-cols-2  gap-6 mt-14">
          {data.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg border w-60 border-gray-200 shadow-xl hover:bg-teal-900 
                         transition-all duration-300 group cursor-pointer p-6"
            >
              <div className="w-16 h-16 bg-white rounded-full border flex items-center justify-center text-black group-hover:text-teal-900 transition">
                {item.icon}
              </div>

              <h1 className="font-sans mt-5 font-bold text-lg group-hover:text-white transition">
                {item.title}
              </h1>

              <p className="text-gray-500 text-sm mt-3 group-hover:text-white transition leading-relaxed">
                {item.description}
              </p>

              <button className="flex items-center gap-2 text-purple-600 mt-4 font-medium group-hover:text-white transition">
                View more 
                <ArrowRight className="text-purple-600 group-hover:text-white transition" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Servicies;
