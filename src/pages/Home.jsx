import React from 'react';
import Typewriter from 'typewriter-effect'; // Make sure to install this package

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  


  return (
    <section className="px-10 pt-16" id="section1">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-3">
        <div className="order-1 lg:order-2 shadow-2xl">
          <img
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] shadow-[0_2px_10px_4px_rgba(6,81,237,0.3)] opacity-30 hover:opacity-100"
            src="IMG.jpg"
            alt=""
          />
        </div>
        <div className="order-2 lg:order-1 md:ml-16 ml-1 flex flex-col justify-center gap-2 lg:items-start sm:items-center text-center sm:text-left ">
          <p className="mt-2 text-2xl md:text-lg sm:text-sm text-green-500">Hi There</p>
          <p className="text-2xl font-bold md:text-5xl">
            I'm <span className="text-green-600">Farhan MaYo.</span>
          </p>
          <p className="text-xl md:text-2xl lg:text-4xl w-full  sm:text-center lg:text-start ">
            I am a{' '}
            <span>
              <Typewriter
                options={{
                  strings: ['Digital Marketer', 'Graphic Designer', 'Social Media Manager', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </p>
          <p className="mt-2 lg:text-xl md:text-lg sm:text-sm ">
            As a dedicated digital marketer, i use best marketing strategies that
            drive engagement and conversion. I am passionate about staying
            ahead of industry trends and continuously improving my skill set.
          </p>
          <div className="flex items-center justify-center">
            <button
              className="text-lg md:text-xl text-[#00df9a] py-2 m-2 px-5 mt-10 hover:bg-gray-800    rounded-full shadow-[0_2px_10px_-1px_rgba(6,81,237,0.3)]"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Home;
