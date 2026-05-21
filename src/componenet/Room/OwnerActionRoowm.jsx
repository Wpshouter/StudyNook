import Link from 'next/link';
import React from 'react';
import DeleteRoom from './DeleteRoom';
import { CiEdit } from 'react-icons/ci';

const OwnerActionRoowm = ({room}) => {
    return (
        <div>
            <h3 className='text-md font-semibold'>You are the owner of this room</h3>
            <div className='flex items-center justify-start gap-5 my-3'>
                                         <Link href={`/Room/Edit/${room._id}`}><button className='btn btn-primary bg-blue-600'> <CiEdit className='text-white text-md'/> Edit</button></Link>
                 <DeleteRoom room={room} />
            </div>
        </div>
    );
};

export default OwnerActionRoowm;