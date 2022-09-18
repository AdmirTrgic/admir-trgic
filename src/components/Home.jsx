import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-5xl sm:text-5xl text-[#ae4444] font-bold">
          HEY, I’M ADMIR!
        </h1>
        <h2 className="text-3xl sm:text-3xl text-[#8892b8]">
          FULL STACK DEVELOPER.
        </h2>
        <p className="text-white py-4 mx-w-[700px]">
          I'm a software engineer with experience translating business
          requirements and objectives into fully-realized solutions.
        </p>
        <div>
          <button className="text-white group border-2 px-5 py-2 my-2 flex items-center rounded-md hover:bg-[#8892b8] hover:border-[#8892b8]">
            View Work
            <span className="group-hover:rotate-180 ml-3 duration-300 group-hover:text-[#ae4444]">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
