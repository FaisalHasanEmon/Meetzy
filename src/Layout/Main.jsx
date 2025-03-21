// import { Outlet } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";
// import Navbar from "../Pages/Shared/NavBar/NavBar";

// const Main = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Main;
import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../Pages/Shared/NavBar/NavBar"; // Navbar for logged-in users
import AuthNavbar from "../Pages/Shared/AuthNavbar/AuthNavbar"; // Navbar for auth pages
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in

  // Define pages where `AuthNavbar` should be displayed instead of `MainNavbar`
  const authPages = ["/login", "/signUp", "/welcomePage", "/aboutUs"].includes(
    location.pathname
  );

  return (
    <div>
      {/* Show `AuthNavbar` for login/signup/welcome pages, otherwise show `MainNavbar` */}
      {authPages ? <AuthNavbar /> : <MainNavbar />}

      {/* Render the page content */}
      <Outlet />

      {/* Show Footer only if NOT on login, signup, or welcome pages */}
      {!authPages && <Footer />}
    </div>
  );
};

export default Main;
