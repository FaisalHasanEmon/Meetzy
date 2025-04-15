import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../Pages/Shared/NavBar/NavBar"; // Navbar for logged-in users
import AuthNavbar from "../Pages/Shared/AuthNavbar/AuthNavbar"; // Navbar for auth pages
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in

  // Define pages where `AuthNavbar` should be displayed instead of `MainNavbar`
  const authPages = [].includes(location.pathname);
  console.log(location.pathname);
  return (
    <div>
      {/* Show `AuthNavbar` for login/signup/welcome pages, otherwise show `MainNavbar` */}

      {authPages ? <AuthNavbar /> : <MainNavbar />}

      {/* Render the page content */}
      <Outlet />
      {location?.pathname !== "/call" ? <Footer></Footer> : ""}
    </div>
  );
};

export default Main;
