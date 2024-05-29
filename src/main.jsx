import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Destination from "./Pages/Destination.jsx";
import Planets from "./Components/Planets.jsx";
import Crew from "./Pages/Crew.jsx";
import Technology from "./Pages/Technology.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
        children: [
          {
            path: ":name",
            element: <Planets />,
          },
        ],
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
