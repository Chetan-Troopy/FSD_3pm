import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "../components/Navbar";
import ExampleCompo from "../example/ExampleCompo";
import FundamentalsRoutes from "../pages/fundamentals/FundamentalsRoute";
import HooksRoute from "../pages/hooks/HooksRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/> <div>Home</div></> ,
  },
  {
    path: "/about",
    element: <><Navbar/> <div>About</div></> ,
  },
  {
    path: "/example",
    element: <><Navbar/> <ExampleCompo/></> ,
    children: [
        {
            path: "fundamentals/*",
            element: <FundamentalsRoutes/>
        },
        {
            path: "hooks/*",
            element: <HooksRoute/>
        },
    ]
  },
]);

export default router;
