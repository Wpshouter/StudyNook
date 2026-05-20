import EditRoomForm from '@/componenet/EditRoom/EditRoomForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async({params}) => {
      //const params = useParams();
            const { id } = await params;
              const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/room/${id}`);

    const room = await res.json();
        //console.log(room, '___________________________________');
        const session = await auth.api.getSession({
                    headers: await headers()
                });
            
                //console.log(session);
            
                const userId = session?.user?.id;
    return (
        <div>
            <EditRoomForm room={room} />
        </div>
    );
};

export default page;