import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AuthNavbar from '../Pages/Shared/AuthNavbar/AuthNavbar';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
  const location = useLocation();
  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Main Navigation (Fixed Top) */}
      <div className='hidden md:block sm:pt-0'> {location.pathname !== "/call" && <NavBar />}
      </div>
      
      {/* Content Area */}
      <div className="flex flex-1 flex-col md:flex-row pt-16"> {/* pt-16 for fixed navbar */}
        
        {/* AuthNavbar - Visible on all devices but changes layout */}
        <div className="w-full md:w-56 lg:w-64 bg-blue-700 text-white shadow-md">
          <AuthNavbar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;