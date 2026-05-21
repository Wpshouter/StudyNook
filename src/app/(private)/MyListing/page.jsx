import RoomCard from "@/componenet/shared/RoomCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export const metadata = {
  title: 'StudyNook – My Details',
}

const page = async() => {
     const session = await auth.api.getSession({
        headers: await headers()
    });
      const {token} = await auth.api.getToken({
               headers: await headers()
     
         });
    console.log(session);

    const userId = session?.user?.id;
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms/${userId}`, {
                 headers: {
                     authorization: `Bearer ${token}`
                 }
              });
    const data_result = await res.json();
    console.log(data_result, "data_result");
    return (
        <div className=" bg-base-200">
            <div className="mb-1 mt-6 container mx-auto p-5">
        <h1 className="text-4xl font-bold text-blue-600">My Listings</h1>

        <p className="text-gray-500 mt-2">
          Manage your listings.
        </p>
      </div>

        <div className="container mx-auto p-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data_result.length === 0 && (
                    <h3 className='p-4 my-3 text-xl'>
                        You have no listings yet.
                    </h3>
                )
                
            }

            {data_result.map(data => 
                <RoomCard key={data._id} room={data} />
            )}
        </div>
        </div>
    );
};

export default page;