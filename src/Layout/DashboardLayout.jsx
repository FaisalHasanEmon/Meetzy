import { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    if (user?.email === "meetzy1@gmail.com") {
      setIsAdmin(true); // Mark as admin
    } else {
      setIsAdmin(false); // Regular user
    }
    
    // Automatically navigate to the default page when the dashboard is loaded
    if (user) {
      navigate(isAdmin ? '/dashboard/admin-overview' : '/dashboard/user-overview');
    }
  }, [user, isAdmin, navigate]);

  const handleLogout = () => {
    logOut(); // Call logOut function
    navigate('/welcomePage'); // Redirect to home page after logout
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="min-h-screen w-64 bg-blue-500 p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>

        <ul className="space-y-2">
          {/* Admin Links */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/onlinestatus" className="text-white hover:bg-orange-600 p-2 rounded block">
                  User activity
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/admin-overview" className="text-white hover:bg-orange-600 p-2 rounded block">
                  Admin Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user-management" className="text-white hover:bg-orange-600 p-2 rounded block">
                  Manage User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user-callHistory" className="text-white hover:bg-orange-600 p-2 rounded block">
                  User Call data
                </NavLink>
              </li>
            </>
          )}

          {/* User Links */}
          {!isAdmin && user?.email && (
            <>
              <li>
                <NavLink to="/dashboard/profile" className="text-white hover:bg-orange-600 p-2 rounded block">
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user-overview" className="text-white hover:bg-orange-600 p-2 rounded block">
                  User Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/call-history" className="text-white hover:bg-orange-600 p-2 rounded block">
                  Call History
                </NavLink>
              </li>
            </>
          )}
          
          {/* Logout */}
          <li>
            <button onClick={handleLogout} className="text-white hover:bg-orange-600 p-2 rounded block w-full">
              Log Out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">{isAdmin ? 'Admin Dashboard' : 'User Dashboard'}</h2>
        <Outlet /> {/* Render nested route content */}
      </div>
    </div>
  );
};

export default DashboardLayout;
