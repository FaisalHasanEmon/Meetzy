import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { AuthContext } from '../../Provider/AuthProvider';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminOverview = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
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

  const pieData = users.map(user => ({
    name: user.name || user.email,
    value: 1
  }));

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Admin Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Pie Chart Section */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              labelLine={false}
              label={({ name }) => name}
              dataKey="value"
              nameKey="name"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Registered Users List */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Registered Users ({users.length})</h3>
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user._id} className="text-lg text-gray-700">
                {user.name || user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
