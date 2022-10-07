import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center px-6'
    >
      <form
        method='POST'
        action='https://getform.io/f/fbb09916-1cf9-4833-96cc-2d10ab929d76'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ae4444] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-6 text-xl'>
            If you want to contact me, feel free to fill in the form below and I
            will get back to you as soon as possible.
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-[#ae4444] hover:border-[#ae44440] px-4 py-3 my-8 mx-auto flex items-center'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
