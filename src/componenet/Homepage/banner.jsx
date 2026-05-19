import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
 <section
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/banner-bg.svg')" }}
    >
      {/* Overlay for readability */}
      <div className="hero-overlay bg-opacity-40"></div>

      <div className="hero-content flex-col lg:flex-row-reverse w-full px-8">
        {/* Right side image */}
        {/* <img
          src="/banner-2.jpg"
          alt="Study room preview"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}

        <Image src="/banner-2.jpg" fill className='object-cover' ></Image>

        {/* Left side text */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold text-white">
            Find Your Perfect Study Room
          </h1>
          <p className="py-6 text-gray-100">
            Browse, book, and manage study spaces with ease. StudyNook prevents
            double bookings and keeps your schedule organized.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>

    );
};

export default Banner;