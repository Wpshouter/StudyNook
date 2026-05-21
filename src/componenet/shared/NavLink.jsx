'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'node:path';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathName = usePathname();
    console.log(pathName, "pathname");
    const isActive = href === pathName;
    let clasessss = ' ';
    if(pathName === '/'){
           clasessss += ' '; 
    }
    return (
        <Link className={`${isActive ? " text-blue-500 border-b pb-1/50" : `${clasessss}`} ${className} rounded-0 font-bold text-md ` } href={href}>
            {children}
        </Link>
    );
};

export default NavLink;