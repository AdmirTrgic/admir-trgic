import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-[#02060c] text-white'>
      <div className='grid sm:grid-cols-2 gap-2 container mx-auto content-div py-10'>
        <div className=' flex flex-col justify-center ml-6'>
          <h1 className='py-4 text-xl font-bold'>ADMIR TRGIC</h1>
          <p className='py-2'>
            I am a Junior Full-Stack Web Developer with a passion for
            programming as well as a creative eye and a pragmatic mind. I love
            learning about new things and implementing them into my work.
          </p>
        </div>
        <div className='flex flex-col justify-center sm:justify-end items-center'>
          <h1 className='my-7 text-xl font-bold'>LINKS</h1>
          <ul className='flex'>
            <li className='mr-3 p-3 bg-[#434242] rounded-full '>
              <a
                className='items-center bg-[#434242] hover:text-[#ae4444]'
                href='https://www.linkedin.com/in/admir-trgic-96851790/'
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className='mr-3 p-3 bg-[#434242] rounded-full'>
              <a
                className='items-center justify-center text-gray-300 hover:text-[#ae4444]'
                href='https://github.com/AdmirTrgic'
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className='mr-3 p-3 bg-[#434242] rounded-full'>
              <a
                className='items-center text-gray-300 hover:text-[#ae4444]'
                href='/'
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='mr-3 p-3 bg-[#434242] rounded-full'>
              <a
                className=' items-center text-gray-300 hover:text-[#ae4444]'
                href='https://drive.google.com/file/d/1WcmeIjnaDurAaOcCbvq6PF3YlW33OItR/view?usp=sharing'
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto border-t-2 border-white py-6 px-6 text-sm'>
        <p>2022 &copy; ADMIR TRGIC </p>
      </div>
    </div>
  );
};

export default Footer;
