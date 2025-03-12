import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import CallInterface from "../Pages/CallInterface/CallInterface";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/call",
        element: <CallInterface />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
