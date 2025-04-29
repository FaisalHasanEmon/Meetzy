import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const CallHistoryPage = () => {
  const { user } = useContext(AuthContext); 
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]); 
  const [callHistory, setCallHistory] = useState([]); 

  useEffect(() => {
    setLoading(true); 

    
    axios.get('https://meetzy-server.onrender.com/users')
      .then(res => {
        setUsers(res.data); 
      })
      .catch(err => {
        console.error('Error fetching users:', err);
      });

    
    const demoHistory = users.map(user => {
      return {
        userName: user.name,
        userEmail: user.email,
        callRecords: [
          { date: '2025-04-21', calls: Math.floor(Math.random() * 5) + 1 },  
          { date: '2025-04-22', calls: Math.floor(Math.random() * 5) + 1 },
          { date: '2025-04-23', calls: Math.floor(Math.random() * 5) + 1 }
        ]
      };
    });

    setCallHistory(demoHistory); 
    setLoading(false); 
  }, [users]); 
  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">User Call History 📞</h2>

     
      {user && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-indigo-600">Welcome, {user.name}!</h3>
          <p className="text-lg text-gray-700">Here is your call history:</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {callHistory.length > 0 ? (
          callHistory.map((userHistory, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">With {userHistory.userName}</h3>
              <p className="text-gray-700">{`Email: ${userHistory.userEmail}`}</p>
              
              <div className="mt-4">
                {userHistory.callRecords.map((record, idx) => (
                  <div key={idx} className="mb-3">
                    <p className="text-lg text-gray-700">{`Date: ${record.date}`}</p>
                    <p className="text-md text-gray-500">{`Calls: ${record.calls}`}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">No call history available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallHistoryPage;
