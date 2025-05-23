


import { useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import AuthNavbar from "../Pages/Shared/AuthNavbar/AuthNavbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const location = useLocation();

 
  const hiddenRoutes = ["/login", "/signup", "/welcomePage"];
  const shouldHideLayout = hiddenRoutes.includes(location.pathname);

  if (shouldHideLayout) {
    return (
      <div className="min-h-screen">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
    
      <div className="hidden md:block sm:pt-0">
        <NavBar />
      </div>

    
      <div className="flex flex-1 flex-col md:flex-row pt-16">
       
        <div className="w-full md:w-56 lg:w-64 bg-blue-700 text-white shadow-md">
          <AuthNavbar />
        </div>

        
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
