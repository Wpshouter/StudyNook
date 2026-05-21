import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
       <footer className="footer gap-2 footer-horizontal footer-center bg-orange-500/10 rounded p-10 border-1 border-gray-100 pt-10">
        <div className='w-full flex flex-col justify-center gap-0'>
            <nav className="grid grid-flow-col gap-2 underline my-3">
    <Link className="link link-hover" href="/">Home</Link>
    <Link className="link link-hover" href="/Rooms">Rooms</Link>
    <a href="#" className="link link-hover">About</a>
  </nav>
  <nav className='my-3'>
    <div className="grid grid-flow-col gap-2">
      <a className='text-2xl'>
        <FaFacebookF />
      </a>
        <a className='text-2xl'>
       <FaXTwitter/>
      </a>
       <a className='text-2xl'>
        <IoLogoLinkedin/>
      </a>
        <a className='text-2xl'>
        <FaInstagram/>
      </a>
    </div>
  </nav>
        </div>

  <p className=''>smjaber24@hotmail.com</p>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by StudyNook</p>
  </aside>
</footer>
    );
};

export default Footer;