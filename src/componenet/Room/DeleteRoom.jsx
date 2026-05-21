"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const DeleteRoom = ({ room }) => {
    const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  console.log(session?.user);
  const user_id = session?.user?.id;

  const handleDeleteRoom = async (room) => {

          const {data:tokendata} = await authClient.token();
     
    const response = await fetch(`http://localhost:5000/rooms/${room._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization : `Bearer ${tokendata?.token}`
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const data = await response.json();

    if (data.success) {
         toast.success('🦄 Room deleted successfully', {
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
          router.push('/MyListing');
    }
                });
    }
  };
  return (
    <div>
      <button
        className="btn btn-error text-base-100"
        onClick={() =>
          document.getElementById(`cancel_modal_${room._id}`).showModal()
        }
      >
        <MdDeleteOutline/>  Delete
      </button>

      <dialog id={`cancel_modal_${room._id}`} className="modal">
        <div className="modal-box rounded-3xl">
          {/* Header */}
          <h3 className="text-2xl font-bold text-blue-600">Delete Room?</h3>

          <p className="py-4 text-gray-600">
            Are you sure you want to delete this room? This action cannot be
            undone.
          </p>

          {/* Actions */}
          <div className="modal-action">
            {/* Close */}
            <form method="dialog">
              <button className="btn rounded-xl">Keep Room</button>
            </form>

            {/* Confirm Delete */}
            <button
              onClick={() => handleDeleteRoom(room)}
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl"
            >
              Yes, Delete
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

export default DeleteRoom;
