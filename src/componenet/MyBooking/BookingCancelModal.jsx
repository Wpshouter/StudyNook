"use client";
import { authClient } from "@/lib/auth-client";

import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookingCancelModal = ({ booking }) => {
        const router = useRouter();

     const { data: session, isPending } = authClient.useSession();
    console.log(session?.user);
    const user_id = session?.user?.id;
  const handleCancelBooking = async (bookingId) => {
   
    console.log(bookingId, "bookingid");
           const {data:tokendata} = await authClient.token();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/bookings/${bookingId._id}/cancel`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
                authorization : `Bearer ${tokendata?.token}`
        },
        body: JSON.stringify({
          user_id,
        }),
      },
    );

    const data = await response.json();

    if (data.success) {
        document.querySelectorAll("dialog").forEach((modal) => {
    modal.close();
});
        router.refresh();

      toast.success(data.message);
    } else {
          router.refresh();

document.querySelectorAll("dialog").forEach((modal) => {
    modal.close();
});
      toast.error(data.message);
    }
  };

  return (
    <div>
      <button
        className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl"
        onClick={() =>
          document.getElementById(`cancel_modal_${booking._id}`).showModal()
        }
      >
        Cancel
      </button>

      {/* Modal */}
      <dialog id={`cancel_modal_${booking._id}`} className="modal">
        <div className="modal-box rounded-3xl">
          {/* Header */}
          <h3 className="text-2xl font-bold text-blue-600">Cancel Booking?</h3>

          <p className="py-4 text-gray-600">
            Are you sure you want to cancel this booking? This action cannot be
            undone.
          </p>

          {/* Booking Info */}
          <div className="bg-base-200 rounded-2xl p-4 mb-6">
            <h4 className="font-bold text-lg">{booking.room?.room_name}</h4>

            <p className="text-sm text-gray-500 mt-1">{booking.booking_date}</p>

            <p className="text-sm text-gray-500">
              {booking.start_time} - {booking.end_time}
            </p>
          </div>

          {/* Actions */}
          <div className="modal-action">
            {/* Close */}
            <form method="dialog">
              <button className="btn rounded-xl">Keep Booking</button>
            </form>

            {/* Confirm Delete */}
            <button
              onClick={() => handleCancelBooking(booking)}
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl"
            >
              Yes, Cancel
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookingCancelModal;
