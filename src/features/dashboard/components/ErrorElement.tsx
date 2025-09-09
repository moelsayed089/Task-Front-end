import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <>
      <main className="flex justify-center items-center min-h-[calc(100vh-100px)] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-semibold tracking-tight dark:text-white  text-gray-800  ">
            This page does not exist or
            <span className="text-red-600"> an error occurred.</span>
          </h1>
          <p className="mt-6 text-lg font-medium dark:text-white text-pretty text-gray-500 sm:text-xl/2">
            Sorry, we fixed the problem. Please try again.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorElement;
