import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../../Provider/AuthProvider';

const COLORS = ['#00C49F', '#FF8042'];

const OnlineStatus = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  const isAdmin = user?.email === "meetzy1@gmail.com";

  useEffect(() => {
    if (isAdmin) {
      axios.get('http://localhost:5000/users')
        .then(res => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [isAdmin]);

  useEffect(() => {
    if (isAdmin && users.length > 0) {
      const interval = setInterval(() => {
        const randomOnline = Math.floor(Math.random() * users.length);
        setOnlineUsers(randomOnline);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [users, isAdmin]);

  const onlineOfflineData = [
    { name: 'Online', value: onlineUsers },
    { name: 'Offline', value: users.length - onlineUsers }
  ];

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">👀 Live Online Users</h2>

      <div className="flex flex-col items-center">
        <div className="text-5xl font-extrabold text-green-500 animate-pulse mb-4">
          {onlineUsers}
        </div>
        <p className="text-gray-600 mb-6">{onlineUsers} users online now</p>

        {/* Donut Chart */}
        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={onlineOfflineData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {onlineOfflineData.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OnlineStatus;
