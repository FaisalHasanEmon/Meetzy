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

    
    const noHeaderFooter = ["/login", "/signup", "/welcomePage"].includes(location.pathname);
    ;
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet>
              {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
