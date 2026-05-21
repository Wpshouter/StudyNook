import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Error Code */}
        <p className="text-base font-semibold text-blue-600">404</p>
        
        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </h1>
        
        {/* Description */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        {/* Action Button */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-mdbtn btn-primary  bg-[#FDAB03] border-[#FDAB03] text-black hover:bg-orange-500 px-4 py-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}