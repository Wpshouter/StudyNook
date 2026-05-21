import React from 'react';

const HomeExtraSections = () => {

    return (

        <>

            {/* HOW IT WORKS SECTION */}
            <section className="py-24 bg-base-100 overflow-hidden">

                <div className="container mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">
                            How StudyNook Works
                        </h2>

                        <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                            StudyNook helps students and professionals
                            discover, book, and manage productive study
                            spaces with real-time booking protection and
                            modern collaboration features.
                        </p>

                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Step 1 */}
                        <div
                            className="
                                relative
                                bg-base-200
                                rounded-3xl
                                p-8
                                shadow-xl
                                hover:-translate-y-3
                                transition-all
                                duration-300
                                border border-blue-100
                            "
                        >

                            <div
                                className="
                                    w-20 h-20
                                    rounded-3xl
                                    bg-blue-600
                                    text-white
                                    flex items-center justify-center
                                    text-4xl
                                    mb-6
                                    shadow-lg
                                "
                            >
                                🔍
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Discover Rooms
                            </h3>

                            <p className="text-gray-500 leading-relaxed">
                                Browse modern study rooms and filter spaces
                                by amenities like Wi-Fi, projectors,
                                whiteboards, quiet zones, and more.
                            </p>

                            {/* Floating Circle */}
                            <div
                                className="
                                    absolute
                                    -top-5
                                    -right-5
                                    w-24
                                    h-24
                                    bg-blue-100
                                    rounded-full
                                    blur-2xl
                                    opacity-50
                                "
                            />

                        </div>

                        {/* Step 2 */}
                        <div
                            className="
                                relative
                                bg-base-200
                                rounded-3xl
                                p-8
                                shadow-xl
                                hover:-translate-y-3
                                transition-all
                                duration-300
                                border border-orange-100
                            "
                        >

                            <div
                                className="
                                    w-20 h-20
                                    rounded-3xl
                                    bg-orange-500
                                    text-white
                                    flex items-center justify-center
                                    text-4xl
                                    mb-6
                                    shadow-lg
                                "
                            >
                                📅
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Book Instantly
                            </h3>

                            <p className="text-gray-500 leading-relaxed">
                                Select your preferred date and time slot.
                                StudyNook automatically prevents
                                overlapping bookings using smart
                                conflict detection.
                            </p>

                            <div
                                className="
                                    absolute
                                    -bottom-5
                                    -left-5
                                    w-24
                                    h-24
                                    bg-orange-100
                                    rounded-full
                                    blur-2xl
                                    opacity-50
                                "
                            />

                        </div>

                        {/* Step 3 */}
                        <div
                            className="
                                relative
                                bg-base-200
                                rounded-3xl
                                p-8
                                shadow-xl
                                hover:-translate-y-3
                                transition-all
                                duration-300
                                border border-blue-100
                            "
                        >

                            <div
                                className="
                                    w-20 h-20
                                    rounded-3xl
                                    bg-blue-600
                                    text-white
                                    flex items-center justify-center
                                    text-4xl
                                    mb-6
                                    shadow-lg
                                "
                            >
                                🚀
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Manage & Study
                            </h3>

                            <p className="text-gray-500 leading-relaxed">
                                Room owners can manage listings while users
                                track and manage bookings easily from
                                their personalized dashboard.
                            </p>

                            <div
                                className="
                                    absolute
                                    top-10
                                    right-0
                                    w-20
                                    h-20
                                    bg-blue-100
                                    rounded-full
                                    blur-2xl
                                    opacity-40
                                "
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* STATS SECTION */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">

                {/* Background Blobs */}
                <div
                    className="
                        absolute
                        top-0
                        left-0
                        w-72
                        h-72
                        bg-white/10
                        rounded-full
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-72
                        h-72
                        bg-orange-400/20
                        rounded-full
                        blur-3xl
                    "
                />

                <div className="container mx-auto px-4 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Trusted by Productive Minds
                        </h2>

                        <p className="mt-4 text-blue-100 text-lg">
                            Helping students and professionals find the
                            perfect place to focus and collaborate.
                        </p>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Stat 1 */}
                        <div
                            className="
                                bg-white/10
                                backdrop-blur-md
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        >

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                150+
                            </h3>

                            <p className="text-xl text-blue-100 font-medium">
                                Rooms Booked
                            </p>

                        </div>

                        {/* Stat 2 */}
                        <div
                            className="
                                bg-white/10
                                backdrop-blur-md
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        >

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                200+
                            </h3>

                            <p className="text-xl text-blue-100 font-medium">
                                Study Rooms
                            </p>

                        </div>

                        {/* Stat 3 */}
                        <div
                            className="
                                bg-white/10
                                backdrop-blur-md
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        >

                            <h3 className="text-6xl font-extrabold text-white mb-4">
                                100+
                            </h3>

                            <p className="text-xl text-blue-100 font-medium">
                                Active Users
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );
};

export default HomeExtraSections;