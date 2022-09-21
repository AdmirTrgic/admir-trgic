import React from 'react';

const Work = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div
      name="work"
      className="w-full pt-16 pb-10 md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ae4444]">
            Work
          </p>
          <p className="py-6 text-xl">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            // style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div"
          >
            {/* Hover Effects */}
            <div className="">
              <h5 className="text-xl text-center font-bold text-white tracking-wider">
                Marketplace Realestate
              </h5>
              <div className="pt-8 text-center">
                <a href="/https://github.com/AdmirTrgic/marketplace-realestate">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/marketplace-realestate'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div">
            {/* Hover Effects */}
            <div className="">
              <h5 className=" text-xl text-center font-bold text-white tracking-wider">
                Ticket Support
              </h5>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/ticket-support-app'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div">
            {/* Hover Effects */}
            <div className="">
              <h5 className=" text-xl text-center font-bold text-white tracking-wider">
                Feedback
              </h5>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/react-feedback-app-UI'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div">
            {/* Hover Effects */}
            <div className="">
              <h5 className="text-xl text-center font-bold text-white tracking-wider">
                Booking
              </h5>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/Booking-Nodejs-App'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div">
            {/* Hover Effects */}
            <div className="">
              <h5 className="text-xl text-center font-bold text-white tracking-wider">
                Geocode App
              </h5>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/Forecast-Geocode---Nodejs-'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto py-8 content-div">
            {/* Hover Effects */}
            <div className="">
              <h5 className="text-xl text-center font-bold text-white tracking-wider">
                Chat
              </h5>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      openInNewTab(
                        'https://github.com/AdmirTrgic/node-chat-app'
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
