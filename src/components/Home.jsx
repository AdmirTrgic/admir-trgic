import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <span className="text-2xl mt-10 text-[#b0a243]"> &lt;body&gt;</span>
        </div>
        <h1 className="text-4xl sm:text-5xl ml-12 text-[#ae4444] font-bold">
          <span> &lt;h1&gt;</span> HEY, I’M ADMIR! <span> &lt;/h1&gt;</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl ml-12 text-[#8892b8]">
          <span> &lt;h2&gt;</span> FULL STACK DEVELOPER.
          <span> &lt;/h2&gt;</span>
        </h2>
        <p className="text-white ml-12 py-4 mx-w-[700px]">
          <span className="text-xl  text-[#b0a243]">&lt;p&gt; </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae,
          qui sit corrupti, voluptatem eos similique reprehenderit illo deleniti
          eveniet cupiditate itaque ipsum sed quia, nobis asperiores. Atque,
          quia minima.
          <span className="text-xl text-[#b0a243]"> &lt;/p&gt;</span>
        </p>
        <div>
          <button className="text-white ml-12 group border-2 px-5 py-2 my-6 flex items-center rounded-md hover:bg-[#8892b8] hover:border-[#8892b8]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>

            <span className="group-hover:rotate-180 ml-3 duration-300 group-hover:text-[#ae4444]">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
        <div>
          <span className="text-2xl mt-10 text-[#b0a243]"> &lt;/body&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
