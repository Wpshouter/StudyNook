import React from 'react';
import RoomCard from '../shared/RoomCard';

const DynamicFeaturedRoom = async() => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/featured-rooms`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/featured-rooms`, {
    next: { revalidate: 60 } 
  });
    const feturedRoom = await res.json();
    console.log(feturedRoom, "_______________________");

    return (
        <div className='px-5 md:px-0'>
             <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center my-10">
                            Available Study Rooms
                        </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto'>
     
              {feturedRoom.map((data) => (

                        <RoomCard
                            key={data._id}
                            room={data}
                        />

                    ))}

        </div>
        </div>
        
    );
};

export default DynamicFeaturedRoom;