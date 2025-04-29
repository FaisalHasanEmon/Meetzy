import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCamera, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Sync state with user data
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setProfilePic(user.profilePic || null);
    }
  }, [user]);

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('Image size should be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleProfilePicClick = () => {
    if (editable) {
      fileInputRef.current.click();
    }
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setEditable(!editable);
    setError(null);
  };

  // Save profile changes
  const handleSave = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call to update profile
      // Replace with actual backend API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
      // Example: await updateProfile({ name, email, profilePic });
      alert('Profile updated successfully!');
      setEditable(false);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <div className="relative group">
            <div
              className={`w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-indigo-500 text-white text-3xl font-semibold cursor-pointer transition-all duration-300 ${
                editable ? 'hover:ring-4 hover:ring-indigo-300' : ''
              }`}
              onClick={handleProfilePicClick}
            >
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                user?.name?.charAt(0)
              )}
            </div>
            {editable && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FaCamera className="text-white text-xl" />
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-indigo-600 animate-fade-in">
              {user?.name}
            </h2>
            <p className="text-lg text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center animate-slide-in">
            <FaTimesCircle className="mr-2" />
            {error}
          </div>
        )}

        {/* User Information */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="text-xl font-semibold text-gray-700 mb-2 sm:mb-0">
              Full Name:
            </label>
            <div className="w-full sm:w-2/3">
              {editable ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200"
                  placeholder="Enter your name"
                />
              ) : (
                <p className="text-lg text-gray-600">{name}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="text-xl font-semibold text-gray-700 mb-2 sm:mb-0">
              Email:
            </label>
            <div className="w-full sm:w-2/3">
              {editable ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200"
                  placeholder="Enter your email"
                />
              ) : (
                <p className="text-lg text-gray-600">{email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="flex justify-end mt-8">
          {editable ? (
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-3 rounded-lg text-white font-medium flex items-center transition-all duration-200 ${
                isLoading
                  ? 'bg-green-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              ) : (
                <FaCheckCircle className="mr-2" />
              )}
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 font-medium transition-all duration-200"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MyProfile;