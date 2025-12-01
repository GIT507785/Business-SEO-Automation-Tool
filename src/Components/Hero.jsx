import React from "react";
import { MailCheck } from "lucide-react";
import img from "../assets/img.jpg";

const Hero = () => {
  return (
    <div className="px-6 md:px-16 lg:px-20 py-10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">

        {/* LEFT */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-sans mt-1 sm:-mt-50 font-semibold leading-tight">
            Navigating the Business SEO Automation Tool
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base font-serif max-w-md">
            Unleash the power of precision. Elevate your SEO game with BSAT.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-20">
            <div className="border border-gray-200 px-4 py-2 flex items-center gap-2 shadow-md bg-white w-full sm:w-auto">
              <MailCheck className="text-gray-600 size-4" />
              <input
                type="text"
                className="outline-none text-sm w-full sm:w-52"
                placeholder="Your email address"
              />
            </div>

            <button className="bg-green-700 font-sans px-6 py-2 text-white rounded-md hover:bg-green-600 transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2  mt-1 sm:-mt-5  flex justify-center">
          <img
            src={img}
            className="w-full max-w-sm md:max-w-md rounded-lg object-cover"
            alt="Hero"
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;
