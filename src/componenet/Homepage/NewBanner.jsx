import Image from 'next/image';
import React from 'react';

const NewBanner = () => {
    return (
 <section
      className="hero bg-cover bg-center"
      style={{ backgroundImage: "url('/banner-bg.svg')" }}
    >
      {/* Overlay for readability */}
      <div className="hero-overlay bg-opacity-40"></div>

      <div className="hero-content py-20 flex-col lg:flex-row-reverse w-full px-8">
        {/* Right side image */}
        <img
          src="/banner-2.jpg"
          alt="Study room preview"
          className="max-w-md rounded-lg shadow-2xl"
        />
 {/* <div className="max-w-[6/12] rounded-lg shadow-2xl">  <Image src="/banner-2.jpg" fill className='' ></Image></div> */}
      

        {/* Left side text */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold">
            <p className='text-white'>Find Your </p>  <p className=' text-orange-500'>Perfect Study Room</p>
          </h1>
          <p className="py-6 text-gray-100">
           Browse and book quiet, private study rooms in your library. List your own room and earn.
          </p>
          <button className="our_custom_button"> <span>Explore Rooms</span></button>
        </div>
      </div>
    </section>

    );
};

export default NewBanner;