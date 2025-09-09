import LayoutDashboardPage from "@/features/dashboard/pages/LayoutDashboardPage";
import MainPage from "@/features/dashboard/pages/MainPage";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const DisplayPostsPage = lazy(
  () => import("@/features/entriesdashboards/pages/DisplayPostsPage")
);
const NotFound = lazy(() => import("@/features/dashboard/components/NotFound"));
const ErrorElement = lazy(
  () => import("@/features/dashboard/components/ErrorElement")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboardPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "posts",
        element: <DisplayPostsPage />,
        errorElement: <ErrorElement />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
