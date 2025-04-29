import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaClock, FaPhoneSlash } from 'react-icons/fa';

const CallHistory = () => {
  const [users, setUsers] = useState([]);
  const [callHistory, setCallHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://meetzy-server.onrender.com/users')
      .then(res => {
        setUsers(res.data);
        generateCallHistory(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const generateCallHistory = (users) => {
    const calls = [];
    const statuses = ['completed', 'missed'];

    for (let i = 0; i < 20; i++) { 
      const caller = users[Math.floor(Math.random() * users.length)];
      let receiver = users[Math.floor(Math.random() * users.length)];

     
      while (receiver?.email === caller?.email) {
        receiver = users[Math.floor(Math.random() * users.length)];
      }

      if (caller && receiver) {
        calls.push({
          caller: caller.email,
          receiver: receiver.email,
          duration: Math.floor(Math.random() * 600), 
          timestamp: new Date(Date.now() - Math.random() * 100000000).toISOString(), 
          status: statuses[Math.floor(Math.random() * statuses.length)]
        });
      }
    }

    setCallHistory(calls);
  };

  const totalCalls = callHistory.length;
  const totalDuration = callHistory.reduce((sum, call) => sum + (call.duration || 0), 0);
  const missedCalls = callHistory.filter(call => call.status === 'missed').length;

  const formatDuration = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}m ${sec}s`;
  };

  const formatTime = (timeString) => {
    const options = { 
      year: 'numeric', month: 'short', day: 'numeric', 
      hour: '2-digit', minute: '2-digit'
    };
    return new Date(timeString).toLocaleString(undefined, options);
  };

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading Call History...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">📞 Call History Analytics</h2>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-100 text-green-700 p-6 rounded-lg shadow flex items-center gap-4">
          <FaPhoneAlt className="text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Calls</h4>
            <p className="text-2xl">{totalCalls}</p>
          </div>
        </div>
        <div className="bg-blue-100 text-blue-700 p-6 rounded-lg shadow flex items-center gap-4">
          <FaClock className="text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Total Duration</h4>
            <p className="text-2xl">{formatDuration(totalDuration)}</p>
          </div>
        </div>
        <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow flex items-center gap-4">
          <FaPhoneSlash className="text-3xl" />
          <div>
            <h4 className="text-lg font-semibold">Missed Calls</h4>
            <p className="text-2xl">{missedCalls}</p>
          </div>
        </div>
      </div>

      {/* Call History Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Caller</th>
              <th className="py-3 px-6 text-left">Receiver</th>
              <th className="py-3 px-6 text-left">Duration</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {callHistory.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">No call history found.</td>
              </tr>
            ) : (
              callHistory.map((call, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{call.caller}</td>
                  <td className="py-4 px-6">{call.receiver}</td>
                  <td className="py-4 px-6">{formatDuration(call.duration)}</td>
                  <td className="py-4 px-6">{formatTime(call.timestamp)}</td>
                  <td className={`py-4 px-6 font-bold ${call.status === 'missed' ? 'text-red-500' : 'text-green-500'}`}>
                    {call.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallHistory;
