import { Suspense } from "react";
import DisplayPostsForm from "../components/DisplayPostsForm";

const DisplayPostsPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayPostsForm />
      </Suspense>
    </>
  );
};

export default DisplayPostsPage;
