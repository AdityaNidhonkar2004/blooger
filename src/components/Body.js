import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./HeroSection";
import SyllabusTenth from "./SyllabusTenth";
import SyllabusNinth from "./SyllabusNinth";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection />,
    },
    {
      path: "/10thsyllabus",
      element: <SyllabusTenth />,
    },
    {
      path: "/9thsyllabus",
      element: <SyllabusNinth />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
