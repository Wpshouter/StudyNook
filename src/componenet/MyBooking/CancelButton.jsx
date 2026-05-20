'use client'
import React from 'react';


const CancelButton = ({booking}) => {
    return (
                                                              <button
    className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl"
    onClick={() =>
        document.getElementById(`cancel_modal_${booking._id}`).showModal()
    }
>
    Cancel
</button>
    );
};

export default CancelButton;