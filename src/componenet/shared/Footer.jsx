import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';
import DarkLightToggle from './DarkLightToggle';

const Footer = () => {
    return (
       <footer className="footer gap-2 footer-horizontal footer-center bg-orange-500/10 rounded p-10  pt-10">

            <nav className="grid grid-flow-col gap-2 underline my-3">
    <Link className="link link-hover" href="/">Home</Link>
    <Link className="link link-hover" href="/Rooms">Rooms</Link>
    <a href="#" className="link link-hover">About</a>
  </nav>
  <div className='flex item-center justify-center gap-4 flex-col md:flex-row'>
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
    <p className=''>smjaber24@hotmail.com</p>
        </div>
 


  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by StudyNook</p>
  </aside>
</footer>
    );
};

export default Footer;