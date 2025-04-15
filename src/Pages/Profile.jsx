import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white text-center relative">
                    <img
                        className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl"
                        src={user?.photoURL || "https://i.pravatar.cc/300?u=default"}
                        alt="User Profile"
                    />
                    <h2 className="text-3xl font-bold mt-4">{user?.displayName || "Guest User"}</h2>
                  
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <div>
                            <p><span className="font-semibold">Email:</span> {user?.email || "Not Available"}</p>
                            <p><span className="font-semibold">Location:</span> Dhaka, Bangladesh</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Role:</span> Visitor</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-around text-center mt-6">
                        <div>
                            <p className="text-xl font-bold text-purple-600">56</p>
                            <p className="text-sm text-gray-500">Calls Made</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-purple-600">18</p>
                            <p className="text-sm text-gray-500">Friends</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-purple-600">4.9⭐</p>
                            <p className="text-sm text-gray-500">Rating</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
                            Start Call
                        </button>
                        <button className="px-6 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-100 transition duration-300">
                            Invite Friend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
