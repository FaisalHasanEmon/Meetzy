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
  const onlyNavbarPages = ["/login", "/signup", "/welcomePage"].includes(
    location.pathname
  );

  return (
    <div>
      <Navbar /> {/* Always show Navbar */}
      <Outlet />
      {onlyNavbarPages || <Footer />}{" "}
      {/* Show Footer only if it's NOT a login, signup, or welcome page */}
    </div>
  );
};

export default Main;
