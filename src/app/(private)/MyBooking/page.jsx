import MyBookingPage from '@/componenet/MyBooking/MyBookingPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
export const metadata = {
  title: 'StudyNook – My Bookings',
}
const page = async() => {
     const session = await auth.api.getSession({
            headers: await headers()
        });
    const {token} = await auth.api.getToken({
           headers: await headers()
 
     });
       // console.log(session);
     console.log(token);
        const userId = session?.user?.id;
         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/bookings/${userId}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
         });
        const data_result = await res.json();
        //console.log(data_result, "data_result");
    return (
        <div className='min-h-screen bg-base-200 py-10 px-4'>
            {
                
                (data_result.length === 0) ? <h3 className='p-4 my-3 text-xl'>You have no bookings yet.</h3> :     <MyBookingPage bookings={data_result} />
            }
        
        </div>
    );
};

export default page;