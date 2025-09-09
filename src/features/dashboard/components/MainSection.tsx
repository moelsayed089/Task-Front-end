import { Link } from "react-router-dom";
import WorkSummary from "./WorkSummary";

const MainSection = () => {
  return (
    <>
      <h1 className="text-4xl">Welcome to mini Dashboard System 👋</h1>
      <p className="mt-4 text-2xl text-gray-500">
        I'm working on a dashboard system. Check it out!
      </p>
      <WorkSummary />

      <div className="mt-5 flex items-center justify-center">
        <Link
          to="posts"
          className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          Check out the Posts Dashboard &rarr;
        </Link>
      </div>
    </>
  );
};

export default MainSection;
