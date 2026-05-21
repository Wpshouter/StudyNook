'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaReadme } from "react-icons/fa";
import NavLink from "./NavLink";
import { SlLogout } from "react-icons/sl";
import Link from "next/link";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
    const { data: session, isPending } =  authClient.useSession();

     const links = <>
            <li>
                <NavLink href="/" className="text-left text-md p-1 pb-0">Home</NavLink>  
            </li>
            <li>
                <NavLink href="/Rooms" className="p-1  text-md  pb-0">Rooms</NavLink>
            </li>
            
            {
                 (session) ?     
                 <>
                   <li>
                <NavLink href="/AddRoom" className="text-left text-md p-1 pb-0">Add Room</NavLink>  
            </li>
            <li>
                <NavLink href="/MyListing" className="p-1  text-md  pb-0">My Listings</NavLink>
            </li>

               <li>
                <NavLink href="/MyBooking" className="p-1  text-md  pb-0">My Bookings</NavLink>
            </li>

                 <li className='md:hidden'>
                  <button onClick={async () => {  await authClient.signOut() }} className=''>
                        <SlLogout className='text-[20px]'/>
                            Logout
                        </button>
                </li> </> : ''
            }
          
            </>
  return (
    <div className="max-lg:collapse fixed top-0 left-0 z-50 shadow-sm w-full px-0 lg:px-10 bg-base-100 border-b pb-2 pt-1 border-gray-700">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link href="/"><Image src="/studyNook.png" width={200} height={100} /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
           <div className="navbar-end space-x-4">
                    { isPending ? <span className="loading loading-spinner text-success"></span> :
                        (session) ? 
                        <div className='flex gap-3 items-center'>   
                        <button onClick={async () => {  await authClient.signOut() }} className='btn bg-blue-500 text-white shadow-sm border-1 hidden md:flex'>
                        <SlLogout className='text-[20px]'/>
                            Logout
                        </button>
                        <Link href=""><p><Image className='rounded-full border-gray-800  border 1' width={50} height={50} alt="user image" src={session?.user.image} /></p></Link>
                    </div>
                    :
                    <>
                         <Link className='btn btn-primary  bg-orange-500  text-black hover:bg-orange-500' href="/Login">
                    <FiLogIn className='text-[20px]'/>
                        Login
                    </Link>

                    <Link className='btn bg-blue-500 text-white hidden md:flex' href="/Signup">
                     <SiGnuprivacyguard className='text-[20px]' ></SiGnuprivacyguard>
                        Sign Up
                    </Link>
                    </>
                    } 
                   
                     
                </div>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;
