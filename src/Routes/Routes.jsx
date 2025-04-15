import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import CallInterface from "../Pages/CallInterface/CallInterface";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FeaturePage from "../Pages/FeaturePage/FeaturePage";
import VideoCall from "../Pages/VideoCall/VideoCall";
import WhyMeetzy from "../Pages/WhyMeetzy/WhyMeetzy";
import Profile from "../Pages/Profile";

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
        path: "/call/:meetingCode",
        element: (
          <PrivateRoute>
            <CallInterface />
          </PrivateRoute>
        ),
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
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      /*added private routes for the welcome page*/
      {
        path: "/welcomePage",
        element: <WelcomePage />,
      },
    ],
  },
]);
