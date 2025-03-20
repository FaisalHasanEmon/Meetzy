import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import CallInterface from "../Pages/CallInterface/CallInterface";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import AboutUs from "../Pages/AboutUs/aboutUs";
import FeaturePage from "../Pages/FeaturePage/FeaturePage";
import VideoCall from "../Pages/VideoCall/VideoCall";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/call",
        element: (
          <PrivateRoute>
            <CallInterface />
          </PrivateRoute>
        ),
      },
      {
        path: "/call/:meetingCode",
        element: <VideoCall></VideoCall>,
      },
      {
        path: "/features",
        element: (
          <privateRoute>
            <FeaturePage></FeaturePage>
          </privateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      /*added private routes for the welcome page*/
      {
        path: "/welcomePage",
        element: <WelcomePage />,
      },
    ],
  },
]);
