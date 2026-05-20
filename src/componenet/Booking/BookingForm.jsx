"use client";

import { authClient } from "@/lib/auth-client";
import { useMemo, useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function BookingForm({ room }) {
       const { data: session, isPending } =  authClient.useSession();
        console.log(session?.user);
        const user_id = session?.user?.id;

  const hourlyRate = Number(room.hourly_rate);

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [note, setNote] = useState("");

  // End time options after selected start time
  const endTimeOptions = useMemo(() => {
    if (!startTime) return [];

    const startIndex = timeSlots.indexOf(startTime);

    return timeSlots.slice(startIndex + 1);
  }, [startTime]);

  // Calculate total cost
  const totalCost = useMemo(() => {
    if (!startTime || !endTime) return 0;

    const startHour = parseInt(startTime.split(":")[0]);

    const endHour = parseInt(endTime.split(":")[0]);

    return (endHour - startHour) * hourlyRate;
  }, [startTime, endTime, hourlyRate]);

  // Today's date minimum
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async(e) => {
    e.preventDefault();

    const bookingData = {
      room_id: room._id,
      booking_date: date,
      start_time: startTime,
      end_time: endTime,
      total_cost: totalCost,
      special_note: note,
      user_id,
      status: 'Confirmed'
    };

    console.log(bookingData);
       const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/bookings`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(bookingData)
    })
    const data_result = await res.json();
    console.log(data_result, "data");
        if(data_result.insertedId){
                 toast.success('🦄 Booking Successfull!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => {
                        //redirect('/MyListing');
                        // e.g. redirect, trigger API, update state
                    },
                });

        }
        else{
             toast.error(`${data_result?.message}`, {
                                position: "top-center",
                                autoClose: 2500,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
        }

  };

  return (
    <div className="">
      {/* Header */}
      <div className="mt-4">
        {/* Hourly Price */}
        <div className="flex my-3 gap-2 items-center">
          <p className="text-gray-500 text-sm">Hourly Rate</p>

          <h3 className="text-xl font-bold text-orange-500">
            ${room.hourly_rate}<span className="text-sm text-gray-500 font-normal">/per hour</span>
          </h3>
        </div>

        <div className="gap-10 flex items-cente justify-start mb-5">
          <div className="flex items-center justify-between badge badge-primary text-base-100">
            <span className="text-base-100">Floor: </span>

            <span className="font-semibold">{room.floor}</span>
          </div>

          <div className="flex items-center justify-between badge badge-accent text-base-100">
            <span className="text-base-100">Capacity: </span>

            <span className="font-semibold">{room.capacity} People</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">
            <span className="label-text font-semibold text-base">
              Booking Date
            </span>
          </label>

          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input input-bordered w-full focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold text-base">
                Start Time
              </span>
            </label>

            <select
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
                setEndTime("");
              }}
              className="justify-center select select-bordered w-full focus:outline-none focus:border-blue-600"
              required
            >
              <option value="">Select Start Time</option>

              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* End Time */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-base">
                End Time
              </span>
            </label>

            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="justify-center select select-bordered w-full focus:outline-none focus:border-blue-600"
              required
              disabled={!startTime}
            >
              <option value="">Select End Time</option>

              {endTimeOptions.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Special Note */}
        <div>
          <label className="label">
            <span className="label-text font-semibold text-base">
              Special Note
            </span>
          </label>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="textarea textarea-bordered w-full h-32 focus:outline-none focus:border-blue-600"
            placeholder="Optional notes for the booking..."
          />
        </div>

        {/* Cost Summary */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Booking Cost</p>

              <h3 className="text-4xl font-bold text-blue-600 mt-1">
                ${totalCost}
              </h3>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Hourly Rate</p>

              <p className="text-2xl font-semibold text-orange-500">
                ${hourlyRate}/hr
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="btn w-full bg-blue-600 hover:bg-blue-700 border-none text-white text-lg h-14 rounded-2xl"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
