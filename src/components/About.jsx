import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-[#0a192f] text-gray-300 px-4'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <h1 className='text-4xl font-bold inline border-b-4 border-[#ae4444]'>
              About
            </h1>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <h3>Hi. I'm Admir, nice to meet you. Please take a look around.</h3>
          </div>
          <div>
            <p className='text-xl'>
              <span className=' text-[#b0a243]'>&lt;p&gt; </span>
              Junior full stack developer with a passion for learning new
              technologies and working with teams to create user-friendly web
              applications. Over two years of experience in web development,
              including front-end and back-end technologies. Eager to develop
              skills in a fast-paced environment and contribute to the success
              of a company. I'm considering myself happy because I can fulfill
              my passion with three things that I very like: Coding, Business
              and People.
              <span className='text-xl text-[#b0a243]'> &lt;/p&gt;</span> <br />
              <br />
              <span className=' text-[#b0a243]'>&lt;p&gt; </span>
              Currenlly, I’m living in Augsburg Germany and working as a junior
              web developer for Südblick. Always eager to expand knowledge and
              to share it with others.
              <span className='text-xl text-[#b0a243]'> &lt;/p&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
