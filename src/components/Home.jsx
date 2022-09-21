import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <span className="text-2xl mt-10 text-[#436bb0]"> &lt;body&gt;</span>
        </div>
        <h1 className="text-4xl sm:text-5xl ml-12 text-[#ae4444] font-bold">
          <span> &lt;h1&gt;</span> HEY, I’M ADMIR! <span> &lt;/h1&gt;</span>
        </h1>
        <h2 className="text-xl sm:text-3xl ml-12 text-[#8892b8]">
          <span> &lt;h2&gt;</span> JUNIOR FULL-STACK DEVELOPER.
          <span> &lt;/h2&gt;</span>
        </h2>
        <p className="text-white text-xl ml-12 py-2 mx-w-[700px]">
          <span className="text-xl  text-[#b0a243]">&lt;p&gt; </span>I am a
          Junior Full-Stack Web Developer with a passion for programming as well
          as a creative eye and a pragmatic mind. I love learning about new
          things and implementing them into my work.
          <span className="text-xl text-[#b0a243]"> &lt;/p&gt;</span>
        </p>
        <div>
          <div>
            <span className="text-2xl mt-10 text-[#436bb0]">&lt;/body&gt;</span>
          </div>
          <button className="text-white text-xl ml-12 group border-2 px-5 py-2 my-6 flex items-center rounded-md hover:bg-[#8892b8] hover:border-[#8892b8]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>

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
