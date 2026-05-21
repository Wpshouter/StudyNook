// import RoomCard from '@/componenet/shared/RoomCard';
// import React from 'react';
// export const metadata = {
//   
// }
// const page = async() => {
//      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms`);
//     const data_result = await res.json();
//     console.log(data_result, "data_result");
//     return (
//         <div className="container mx-auto bg-base-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {data_result.map(data => 
//                 <RoomCard key={data._id} room={data} />
//             )}
//         </div>
//     );
// };

// export default page;

import RoomCard from '@/componenet/shared/RoomCard';
import React from 'react';

export const metadata = {
  title: 'StudyNook – All Rooms',
}

const page = async ({ searchParams }) => {
    const searchParam = await searchParams;
    console.log(searchParam);
    const search =  searchParam?.search;
   const amenities = searchParam?.amenities || [];
    console.log(amenities);
    const query = new URLSearchParams();

    if (search) {
        query.append("search", search);
    }

    if (amenities) {
        query.append("amenities", amenities);
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms?${query.toString()}`
    );

    const data_result = await res.json();

    const amenitiesOptions = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    // const selectedAmenities = amenities
    //     ? amenities.split(",")
    //     : [];

    return (

        <div className="bg-base-200 min-h-screen py-8">

            <div className="container mx-auto px-4">

                {/* Filter Section */}
                <div className="bg-base-100 rounded-2xl shadow-md p-5 mb-8">

                    <h2 className="text-2xl font-bold text-blue-600 mb-5">
                        Search & Filter Rooms
                    </h2>

                    <form>

                        {/* Search */}
                        <div className="mb-5">

                            <input
                                type="text"
                                name="search"
                                defaultValue={search}
                                placeholder="Search room by name..."
                                className="input input-bordered w-full focus:outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* Amenities */}
                        <div className="mb-5">

                            <h3 className="font-semibold mb-3">
                                Amenities
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

                                {amenitiesOptions.map((option) => (

                                    <label
                                        key={option}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >

                                        <input
                                            type="checkbox"
                                            name="amenities"
                                            value={option}
                                            defaultChecked={
                                                amenities.includes(option)
                                            }
                                            className="checkbox checkbox-primary"
                                        />

                                        <span className="text-sm">
                                            {option}
                                        </span>

                                    </label>

                                ))}

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-3">

                            <button
                                type="submit"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white border-none"
                            >
                                Apply Filters
                            </button>

                            <a
                                href="/rooms"
                                className="btn bg-orange-500 hover:bg-orange-600 text-white border-none"
                            >
                                Clear Filters
                            </a>

                        </div>

                    </form>

                </div>

                {/* Room Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {
                        data_result.length === 0 && (
                            <div className="col-span-full text-center py-16">

                                <h2 className="text-3xl font-bold text-gray-500">
                                    No Rooms Found
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    Try adjusting your filters.
                                </p>

                            </div>
                        )
                    }

                    {data_result.map((data) => (

                        <RoomCard
                            key={data._id}
                            room={data}
                        />

                    ))}

                </div>

            </div>

        </div>

    );
};

export default page;

