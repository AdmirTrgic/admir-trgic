import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#ae4444]">
              About
            </h1>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <h3>Hi. I'm Admir, nice to meet you. Please take a look around.</h3>
          </div>
          <div>
            <p>
              <span className="text-xl text-[#b0a243]">&lt;p&gt; </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              fuga pariatur corporis nulla qui incidunt cupiditate sit
              blanditiis reprehenderit dolores earum ratione, dicta quidem harum
              voluptas ad expedita nihil molestias! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Totam, soluta.
              <span className="text-xl text-[#b0a243]"> &lt;/p&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
