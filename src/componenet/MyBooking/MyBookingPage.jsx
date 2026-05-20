import React from 'react';
import BookingCancelModal from './BookingCancelModal';
import CancelButton from './CancelButton';

const MyBookingPage = async({bookings}) => {

        const today = new Date().toISOString().split("T")[0];

    return (

   

            <div className="container mx-auto">

                {/* Header */}
                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-blue-600">
                        My Bookings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your room reservations and upcoming schedules.
                    </p>

                </div>

                {/* Desktop Table */}
                <div className="overflow-x-auto bg-base-100 rounded-sm shadow-xl border border-base-300">

                    <table className="table">

                        {/* Head */}
                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="rounded-tl-sm">
                                    Room
                                </th>

                                <th>
                                    Booking Date
                                </th>

                                <th className='hide_in_mobile'>
                                    Time
                                </th>

                                <th className='hide_in_mobile'>
                                    Total Cost
                                </th>

                                <th className='hide_in_mobile'>
                                    Status
                                </th>

                                <th className='hide_in_mobile'>
                                    Note
                                </th>

                                <th className="rounded-tr-sm text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {bookings.map(async(booking) => {

                                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/room/${booking.room_id}`);

                            const room_fetched = await res.json();
                            console.log(room_fetched, "room_fetched");
                            console.log(room_fetched.room_name);

                                const canCancel =
                                    booking.booking_date >= today;

                                return (

                                    <tr
                                        key={booking._id}
                                        className="hover:bg-base-200 transition-all"
                                    >

                                        {/* Room */}
                                        <td>

                                            <div className="flex items-center gap-4">

                                                <div className="avatar">

                                                    <div className="w-20 h-20 rounded-2xl">
                                                        <img
                                                            src={room_fetched?.image}
                                                            alt={room_fetched?.room_name}
                                                        />
                                                    </div>

                                                </div>

                                                <div>

                                                    <h2 className="font-bold text-sm lg:text-lg text-blue-600">
                                                        {room_fetched?.room_name}
                                                    </h2>

                                                    <p className="text-gray-500 text-sm">
                                                        Room Booking
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Date */}
                                        <td>

                                            <p className="font-normal lg:font-semibold">
                                                {booking.booking_date}    <p className='lg:hidden block'>{booking.start_time}    to {booking.end_time}</p>
                                            </p>

                                        </td>

                                        {/* Time */}
                                        <td className='hide_in_mobile'>

                                            <div>

                                                <p className="font-semibold">
                                                    {booking.start_time}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    to {booking.end_time}
                                                </p>

                                            </div>

                                        </td>

                                        {/* Cost */}
                                        <td className='hide_in_mobile'>

                                            <span className="text-xl font-bold text-orange-500">
                                                ${booking.total_cost}
                                            </span>

                                        </td>

                                      
                                        <td className='hide_in_mobile'>
                                              {
                                            (!booking?.status)?
                                                 <span className="badge badge-soft badge-primary px-4 py-4">
                                                Confirmed
                                            </span>

                                            :

                                             (booking?.status === 'Confirmed' ) ?
                                             <span className="badge badge-soft badge-primary px-4 py-4">
                                                Confirmed
                                            </span>
                                            :
                                            <span className="badge bad-soft badge-error px-4 py-4 text-base-100">
                                                Cancelled
                                            </span>
                                             
                                        }

                                            

                                        </td>

                                        {/* Note */}
                                        <td className='hide_in_mobile'>

                                            <p className="max-w-[220px] line-clamp-2 text-gray-600">
                                                {booking.special_note || "No note"}
                                            </p>

                                        </td>

                                        {/* Action */}
                                        <td className="text-left">

                                            {canCancel ? (

                                                    <BookingCancelModal booking={booking} />

                                            ) : (

                                                <button
                                                    disabled
                                                    className="btn btn-disabled rounded-xl"
                                                >
                                                    Expired
                                                </button>

                                            )}

                                        </td>

                                    </tr>

                                );

                            })}

                        </tbody>

                    </table>

                </div>

               

            </div>

    
    );
};

export default MyBookingPage;