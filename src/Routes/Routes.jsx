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
import WhyMeetzy from "../Pages/WhyMeetzy/WhyMeetzy";
import DashboardLayout from "../Layout/DashboardLayout";
import OnlineStatus from "../Pages/Dashboard/OnlineStatus";
import AdminOverview from "../Pages/Dashboard/AdminOverview";
import UserOverview from "../Pages/Dashboard/UserOverview";
import UserManagement from "../Pages/Dashboard/UserManagement";
import CallHistory from "../Pages/Dashboard/CallHistoryData";
import CallHistoryPage from "../Pages/Dashboard/CallHistory";
import MyProfile from "../Pages/Dashboard/MyProfile";

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
        path: "/whyMeetzy",
        element: <WhyMeetzy />,
      },
      {
        path: "/features",
        element: (
          <PrivateRoute>
            <FeaturePage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/welcomePage",
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "onlinestatus", // Add a unique path for the dashboard home.
        element: <OnlineStatus />,
      },
     
      {
        path: "admin-overview",
        element: <AdminOverview />,
      },
      {
        path: "user-overview",
        element: <UserOverview />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "user-callHistory",
        element: <CallHistory />,
      },
      {
        path: "call-history",
        element: <CallHistoryPage />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
    ],
  },
]);

