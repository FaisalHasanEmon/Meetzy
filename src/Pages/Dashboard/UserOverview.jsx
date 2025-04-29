import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { AuthContext } from '../../Provider/AuthProvider';

const dummyCallHistory = [
  { date: '2025-04-26', calls: 2 },
  { date: '2025-04-27', calls: 5 },
  { date: '2025-04-28', calls: 1 },
];

const UserOverview = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const isAdmin = user?.email === "meetzy1@gmail.com";

  useEffect(() => {
    // Fetch the list of users (this could be adjusted for a real API call)
    axios.get('https://meetzy-server.onrender.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  const totalUsers = users.length;

  const isSmallUserBase = totalUsers < 10; 

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Your Call History 📞</h2>

      {/* Call History Display */}
      {isSmallUserBase ? (
        <>
          {/* Pie Chart for Call Distribution */}
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dummyCallHistory}
                  dataKey="calls"
                  nameKey="date"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {dummyCallHistory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Call History Bar Chart */}
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyCallHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calls" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        // Display a message when there are 10 or more users
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Call History Unavailable</h3>
          <p className="text-gray-700">Call history is not available for more than 10 users.</p>
        </div>
      )}
    </div>
  );
};

export default UserOverview;
