import React from "react";
import ReactDOM from "react-dom/client";
import {Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"; // Updated imports
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

/**
 * Basic food ordering app project wireframe in React
 */

const AppLayout = () => {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Hear Outlet to render child routes of AppLayout according to the path */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};
const routerConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/",
          element: <Body />,
        },

        {
          path: "/restaurant/:restaurant_id",
          element: <RestaurantMenu />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
    },
  },
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
