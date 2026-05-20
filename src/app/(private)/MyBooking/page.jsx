import MyBookingPage from '@/componenet/MyBooking/MyBookingPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
            headers: await headers()
        });
    
        console.log(session);
    
        const userId = session?.user?.id;
         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/bookings/${userId}`);
        const data_result = await res.json();
        console.log(data_result, "data_result");
    return (
        <div className='min-h-screen bg-base-200 py-10 px-4'>
            <MyBookingPage bookings={data_result} />
        </div>
    );
};

export default page;