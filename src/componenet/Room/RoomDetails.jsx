import React from 'react';
import BookingForm from '../Booking/BookingForm';
import OwnerActionRoowm from './OwnerActionRoowm';
import Link from 'next/link';

const RoomDetails = ({session, room, roomOwner}) => {
    return (
   
         

    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">

        {/* Left Content */}
        <div className="lg:col-span-2">
             {

                    //console.log(room.user_id , roomOwner, "wdasd")
                    (room.user_id === roomOwner) ? 
                           <div className="bg-base-100 rounded-md shadow-md overflow-hidden my-3 p-3">
                                <OwnerActionRoowm room={room} />
                            </div>
                    : ''
                }
            {/* Main Card */}
            <div className="bg-base-100 rounded-md shadow-md overflow-hidden">
               
                {/* Image */}
                <div className="relative h-[400px] overflow-hidden">
                    <img
                        src={room.image}
                        alt={room.room_name}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute top-6 right-6">
                        <span className="badge bg-orange-500 border-none text-white px-5 py-4 text-sm font-semibold">
                            ${room.hourly_rate}/hour
                        </span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8">

                    {/* Title */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                        <div>
                            <h1 className="text-xl font-bold text-blue-600">
                                {room.room_name}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Floor {room.floor}
                            </p>
                        </div>

                        <div className="badge badge-outline border-blue-600 text-blue-600 badge-lg py-4 px-5">
                            Capacity: {room.capacity} People
                        </div>

                    </div>

                    {/* Description */}
                    <div className="mt-4">

                        <h2 className="text-xl font-semibold mb-4">
                            About This Room
                        </h2>

                        <p className="text-gray-600 leading-8 text-lg">
                            {room.description}
                        </p>

                    </div>

                    {/* Amenities */}
                    <div className="mt-4">

                        <h2 className="text-xl font-semibold mb-5">
                            Amenities
                        </h2>

                        <div className="flex flex-wrap gap-2">

                            {room.amenities.map((item, index) => (
                                <span
                                    key={index}
                                    className="badge bg-blue-50 text-blue-700 border border-blue-200 px-4 py-4 text-sm"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>

        {/* Booking Sidebar */}
        <div>

            <div className="sticky top-6 bg-base-100 rounded-md shadow-md p-6 border border-base-300">

                <h2 className="text-xl font-bold text-blue-600">
                    Book This Room
                </h2>
                {
                    (session?.user) ?  <BookingForm room={room} />  :    <Link href="/Login"><button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 border-none text-white text-lg h-14 rounded-2xl my-3"
        >
          Login to Book
        </button></Link>
                }
                               
      

            </div>

        </div>

    </div>



    );
};

export default RoomDetails;