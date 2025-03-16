import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import CallInterface from "../Pages/CallInterface/CallInterface";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
      },
      {
        path: "/call",
        element: <PrivateRoute><CallInterface /></PrivateRoute>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
      },
      /*added private routes for the welcome page*/ 
      {
        path: "/welcomePage",
        element: <WelcomePage />,
      },
    ],
  },
]);
