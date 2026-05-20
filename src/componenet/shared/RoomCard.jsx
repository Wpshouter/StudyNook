import Link from 'next/link';
import React from 'react';

const RoomCard = ({room}) => {
    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden hover:shadow-2xl transition-all duration-300">

    {/* Image */}
    <figure className="relative h-60 overflow-hidden">
        <img
            src={room.image}
            alt={room.room_name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4">
            <span className="badge bg-orange-500 border-none text-white px-4 py-3 font-semibold">
                ${room.hourly_rate}/hr
            </span>
        </div>
    </figure>

    {/* Body */}
    <div className="card-body">

        {/* Title + Floor */}
        <div className="flex items-start justify-between gap-4">
            <div>
                <h2 className="card-title text-2xl font-bold text-blue-600">
                    {room.room_name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Floor {room.floor}
                </p>
            </div>

            <div className="badge badge-outline badge-lg border-blue-600 text-blue-600">
                {room.capacity} People
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mt-2 line-clamp-3">
            {room.description}
        </p>

        {/* Amenities */}
        <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-3">
                Amenities
            </h3>

            <div className="flex flex-wrap gap-2">
                {room.amenities.map((item, index) => (
                    <span
                        key={index}
                        className="badge bg-blue-50 text-blue-700 border border-blue-200 px-3 py-3"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-6">

            <div>
                <p className="text-sm text-gray-500">
                    Starting From
                </p>

                <h3 className="text-3xl font-bold text-orange-500">
                    ${room.hourly_rate}
                    <span className="text-base text-gray-500 font-medium">
                        /hour
                    </span>
                </h3>
            </div>

            <Link href={`/Room/${room._id}`}><button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-6">
                View Details
            </button></Link> 

        </div>

    </div>
</div>
    );
};

export default RoomCard;