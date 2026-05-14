import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import Browse from "../pages/Browse";
import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/browse",
              element: <Browse />,
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
