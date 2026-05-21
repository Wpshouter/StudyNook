
import RoomDetails from '@/componenet/Room/RoomDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
export const metadata = {
  title: 'StudyNook – Room',
}
const page = async ({params} ) => {
    //const params = useParams();
    const { id } = await params;
    const session = await auth.api.getSession({
                headers: await headers()
            });
        
            console.log(session);
        
            const userId = session?.user?.id;
    //console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/room/${id}`);

    const room = await res.json();

    //console.log(data);
    return(
            <div className='bg-base-200 p-5 md:p-0'>
            <RoomDetails session={session} roomOwner={userId} room={room} />
         </div>
    );
};

export default page;