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
import Navbar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();

  // Show Navbar on these pages, but hide Footer
  const onlyNavbarPages = ["/login", "/signup", "/welcomePage", "/call"].includes(
    location.pathname
  );

  return (
    <div>
      <Navbar /> {/* Always show Navbar */}
      <div className="min-h-[calc(100vh-550px)]">
        <Outlet />
      </div>
      
      {onlyNavbarPages || <Footer />}{" "}
      {/* Show Footer only if it's NOT a login, signup, or welcome page */}
    </div>
  );
};

export default Main;
