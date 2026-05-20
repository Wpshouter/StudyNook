import RoomCard from "@/componenet/shared/RoomCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const page = async() => {
     const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log(session);

    const userId = session?.user?.id;
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms/${userId}`);
    const data_result = await res.json();
    console.log(data_result, "data_result");
    return (
        <div className="container mx-auto bg-base-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data_result.map(data => 
                <RoomCard key={data._id} room={data} />
            )}
        </div>
    );
};

export default page;